// SPDX-License-Identifier: UNLICENSED

import {Ownable} from '@openzeppelin/contracts/access/Ownable.sol';

pragma solidity ^0.8.22;

contract Arga is Ownable {
	address public treasurer;

	event TreasurerChanged(address treasurer);

	modifier validAddress(address _addr) {
		require(_addr != address(0), 'Invalid address');
		_;
	}

	function changeTreasurer(address newTreasurer) public onlyOwner validAddress(newTreasurer) {
		treasurer = newTreasurer;
		emit TreasurerChanged(newTreasurer);
	}

	constructor() Ownable(msg.sender) {
		changeTreasurer(msg.sender);
	}

	struct Collateral {
		uint value;
		address erc20Address;
	}
	struct Declaration {
		uint id;
		string summary;
		string description;
		address actor;
		address witness;
		uint startDate;
		uint endDate;
		uint witnessByDate;
		Collateral collateral;
	}

	// all declarations go here
	Declaration[] public declarations;

	// events
	event DeclarationMade(Declaration declaration);
	event DeclarationConcludedWithApproval(Declaration declaration);
	event DeclarationConcludedWithRejection(Declaration declaration);

	// we store indices of declarations per actor address
	mapping(address => uint[]) _actorDeclarations;
	function actorDeclarations(address actor) public view returns (Declaration[] memory) {
		uint[] storage indices = _actorDeclarations[actor];
		Declaration[] memory result = new Declaration[](indices.length);
		for (uint index; index < indices.length; index++) {
			result[index] = declarations[index];
		}
		return result;
	}

	// we store indices of declarations per witness address
	mapping(address => uint[]) _witnessDeclarations;
	function witnessDeclarations(address witness) public view returns (Declaration[] memory) {
		uint[] storage indices = _witnessDeclarations[witness];
		Declaration[] memory result = new Declaration[](indices.length);
		for (uint index; index < indices.length; index++) {
			result[index] = declarations[index];
		}
		return result;
	}

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
			summary,
			description,
			actor,
			witness,
			startDate,
			endDate,
			witnessByDate,
			Collateral(msg.value, address(0))
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
		Declaration memory declaration = Declaration(
			summary,
			description,
			actor,
			witness,
			startDate,
			endDate,
			witnessByDate,
			collateralValue,
			collateralErc20Address
		);
		emit DeclarationMade(declaration);
		// not implemented yet
	}

	mapping(address => Collateral[]) redemptions;
	function redemptionsForParty(address party) public view returns (Collateral[] memory) {
		return redemptions[party];
	}

	error InvalidWitness(address sender);
	modifier onlyWitness(uint id) {
		address witness = declarations[id].witness;
		if (msg.sender != witness) {
			revert InvalidWitness(msg.sender);
		}
		_;
	}

	function concludeDeclarationWithApproval(uint id) public onlyWitness(id) {
		Declaration storage declaration = declarations[id];
		redemptions[declaration.actor].push(declaration.collateral);
		redemptions[declaration.witness].push(declaration.collateral);
		emit DeclarationConcludedWithApproval(declaration);
	}
}
