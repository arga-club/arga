// SPDX-License-Identifier: UNLICENSED

import {Ownable} from '@openzeppelin/contracts/access/Ownable.sol';
import 'hardhat/console.sol';
// https://hardhat.org/hardhat-network/docs/reference#console.log

pragma solidity ^0.8.22;

contract Arga is Ownable {
	string public name = 'Arga';

	address public treasurer;
	uint256 public treasurerRedemptionPercentage = 2;

	event TreasurerChanged(address treasurer);

	modifier validAddress(address _addr) {
		require(_addr != address(0), 'Invalid address');
		_;
	}

	function changeTreasurer(address newTreasurer) public onlyOwner validAddress(newTreasurer) {
		treasurer = newTreasurer;
		emit TreasurerChanged(newTreasurer);
	}

	mapping(bytes4 => string) private sigNames;

	constructor() Ownable(msg.sender) {
		changeTreasurer(msg.sender);
		sigNames[bytes4(0x313ce567)] = 'decimals';
		sigNames[bytes4(0x95d89b41)] = 'symbol';
		sigNames[bytes4(0x06fdde03)] = 'name';
		sigNames[bytes4(0x18160ddd)] = 'totalSupply';
		sigNames[bytes4(0x01ffc9a7)] = 'supportsInterface';
	}

	function logFallback() internal view {
		console.log('msg.value: ', msg.value);
		console.log('not implemented selector: ', sigNames[msg.sig]);
		console.logBytes4(msg.sig);
	}

	fallback() external payable {
		console.log('----- fallback');
		logFallback();
	}

	receive() external payable {
		console.log('----- fallback');
		logFallback();
	}

	uint256 witnessRedemptionPercentage = 2;
	struct Collateral {
		uint value;
		address erc20Address;
	}
	enum DeclarationStatus {
		Active,
		ProofSubmitted,
		Approved,
		Rejected
	}
	struct Declaration {
		uint id;
		DeclarationStatus status;
		string summary;
		string description;
		// address sender;
		// uint group id;
		address actor;
		address witness;
		// uint witnessRedemptionValue;
		uint startDate;
		uint endDate;
		uint witnessByDate;
		Collateral collateral;
		string proof;
	}

	// all declarations go here
	Declaration[] public declarations;

	// events
	event DeclarationMade(Declaration declaration);
	event DeclarationProofSubmitted(Declaration declaration);
	event DeclarationConcludedWithApproval(Declaration declaration);
	event DeclarationConcludedWithRejection(Declaration declaration);

	// we store indices of declarations per actor address
	mapping(address => uint[]) _actorDeclarations;
	function actorDeclarations(address actor) public view returns (Declaration[] memory) {
		uint[] storage indices = _actorDeclarations[actor];
		Declaration[] memory result = new Declaration[](indices.length);
		for (uint index; index < indices.length; index++) {
			result[index] = declarations[indices[index]];
		}
		return result;
	}
	// TODO: lastActorDeclaration

	// we store indices of declarations per witness address
	mapping(address => uint[]) _witnessDeclarations;
	function witnessDeclarations(address witness) public view returns (Declaration[] memory) {
		uint[] storage indices = _witnessDeclarations[witness];
		Declaration[] memory result = new Declaration[](indices.length);
		for (uint index; index < indices.length; index++) {
			result[index] = declarations[indices[index]];
		}
		return result;
	}
	// TODO: lastWitnessDeclaration

	function declareWithEther(
		string memory summary,
		string memory description,
		address actor,
		address witness,
		uint startDate,
		uint endDate,
		uint witnessByDate
	) public payable returns (Declaration memory) {
		uint declarationIndex = declarations.length;
		Declaration memory declaration = Declaration(
			declarationIndex,
			DeclarationStatus.Active,
			summary,
			description,
			actor,
			witness,
			startDate,
			endDate,
			witnessByDate,
			Collateral(msg.value, address(0)),
			''
		);
		emit DeclarationMade(declaration);
		declarations.push(declaration);
		_actorDeclarations[actor].push(declarationIndex);
		_witnessDeclarations[witness].push(declarationIndex);
		return declaration;
	}
	function declareWithToken(
		string memory summary,
		string memory description,
		address actor,
		address witness,
		uint startDate,
		uint endDate,
		uint witnessByDate,
		uint collateralValue,
		address collateralErc20Address
	) public {
		// Declaration memory declaration = Declaration(
		// 	summary,
		// 	description,
		// 	actor,
		// 	witness,
		// 	startDate,
		// 	endDate,
		// 	witnessByDate,
		// 	collateralValue,
		// 	collateralErc20Address
		// );
		// emit DeclarationMade(declaration);
		// not implemented yet
	}

	mapping(address => Collateral[]) redemptions;
	function redemptionsForParty(address party) public view returns (Collateral[] memory) {
		return redemptions[party];
	}

	Collateral[] pool;
	function poolCollateral() public view returns (Collateral[] memory) {
		return pool;
	}

	error InvalidWitness(address sender);
	modifier onlyWitness(uint id) {
		address witness = declarations[id].witness;
		if (msg.sender != witness) {
			revert InvalidWitness(msg.sender);
		}
		_;
	}

	error InvalidActor(address sender);
	modifier onlyActor(uint id) {
		address actor = declarations[id].actor;
		if (msg.sender != actor) {
			revert InvalidActor(msg.sender);
		}
		_;
	}

	function submitDeclarationProof(uint id, string memory proof) public onlyActor(id) {
		Declaration storage declaration = declarations[id];
		// add proof
		declaration.proof = proof;
		// change status
		declaration.status = DeclarationStatus.ProofSubmitted;
		emit DeclarationProofSubmitted(declaration);
	}

	function concludeDeclarationWithApproval(uint id) public onlyWitness(id) {
		Declaration storage declaration = declarations[id];
		// change status
		declaration.status = DeclarationStatus.Approved;
		// distribute collateral to relevant parties
		uint treasurerValue = (declaration.collateral.value * treasurerRedemptionPercentage) / 100;
		uint witnessValue = (declaration.collateral.value * witnessRedemptionPercentage) / 100;
		redemptions[treasurer].push(Collateral(treasurerValue, declaration.collateral.erc20Address));
		redemptions[declaration.witness].push(Collateral(witnessValue, declaration.collateral.erc20Address));
		// remaining original collateral goes back to actor
		redemptions[declaration.actor].push(
			Collateral(declaration.collateral.value - treasurerValue - witnessValue, declaration.collateral.erc20Address)
		);
		emit DeclarationConcludedWithApproval(declaration);
	}

	function concludeDeclarationWithRejection(uint id) public onlyWitness(id) {
		Declaration storage declaration = declarations[id];
		// change status
		declaration.status = DeclarationStatus.Rejected;
		// distribute collateral to relevant parties
		uint treasurerValue = (declaration.collateral.value * treasurerRedemptionPercentage) / 100;
		uint witnessValue = (declaration.collateral.value * witnessRedemptionPercentage) / 100;
		redemptions[treasurer].push(Collateral(treasurerValue, declaration.collateral.erc20Address));
		redemptions[declaration.witness].push(Collateral(witnessValue, declaration.collateral.erc20Address));
		// remaining original collateral goes to pool
		pool.push(
			Collateral(declaration.collateral.value - treasurerValue - witnessValue, declaration.collateral.erc20Address)
		);
		emit DeclarationConcludedWithRejection(declaration);
	}
}
