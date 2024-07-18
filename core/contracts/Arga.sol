// SPDX-License-Identifier: UNLICENSED

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol';
import '@openzeppelin/contracts/utils/math/Math.sol';
import 'hardhat/console.sol';

pragma solidity ^0.8.22;

contract Arga is Initializable, UUPSUpgradeable, OwnableUpgradeable {
	string public constant name = 'Arga';
	string public version;
	address public treasurer;
	uint256 public treasurerRedemptionPercentage;
	uint256 witnessRedemptionPercentage;
	uint public winMultiplier;
	uint randomNonce;

	mapping(address => uint[]) private  _actorDeclarations;
	mapping(address => uint[]) private _witnessDeclarations;
	mapping(address => Collateral[]) public _redemptions;
	mapping(bytes4 => string) private sigNames;

	struct Collateral {
		uint value;
		address erc20Address;
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
		// bool hasWon;
	}

	enum DeclarationStatus {
		Active,
		ProofSubmitted,
		Approved,
		Rejected
	}

	// all declarations go here
	Declaration[] private _declarations;
	Collateral[] private _pool;

	// events
	event DeclarationMade(Declaration declaration);
	event DeclarationProofSubmitted(Declaration declaration);
	event DeclarationConcludedWithApproval(Declaration declaration);
	event DeclarationConcludedWithRejection(Declaration declaration);
	event TreasurerChanged(address treasurer);
	event PoolWon(Declaration declaration);
	event WinMultiplierChanged(uint newMultiplier);

	error InvalidWitness(address sender);
	error InvalidActor(address sender);

	// --- Modifiers
	modifier validAddress(address _addr) {
		require(_addr != address(0), 'Invalid address');
		_;
	}

	modifier onlyWitness(uint id) {
		address witness = _declarations[id].witness;
		if (msg.sender != witness) {
			revert InvalidWitness(msg.sender);
		}
		_;
	}

	modifier onlyActor(uint id) {
		address actor = _declarations[id].actor;
		if (msg.sender != actor) {
			revert InvalidActor(msg.sender);
		}
		_;
	}

	// -- Contract Initializer --- //

	/// @custom:oz-upgrades-unsafe-allow constructor
	constructor() {
		_disableInitializers();
	}

	function initialize(address initialOwner) public initializer {

		version = '0.3.0';
		treasurerRedemptionPercentage = 2;
		witnessRedemptionPercentage = 2;
		winMultiplier = 1;
		randomNonce = 0;
		treasurer = initialOwner;

		sigNames[bytes4(0x313ce567)] = 'decimals';
		sigNames[bytes4(0x95d89b41)] = 'symbol';
		sigNames[bytes4(0x06fdde03)] = 'name';
		sigNames[bytes4(0x18160ddd)] = 'totalSupply';
		sigNames[bytes4(0x01ffc9a7)] = 'supportsInterface';

		__Ownable_init(initialOwner);
		__UUPSUpgradeable_init();

		emit TreasurerChanged(initialOwner);
	}
	
	// --- Setters --- //
	function changeTreasurer(address newTreasurer) public onlyOwner validAddress(newTreasurer) {
		treasurer = newTreasurer;
		emit TreasurerChanged(newTreasurer);
	}

	function changeWinMultiplier(uint newMultiplier) public onlyOwner {
		winMultiplier = newMultiplier;
		emit WinMultiplierChanged(newMultiplier);
	}

	/// --- Role-based functions --- ///

	function submitDeclarationProof(uint id, string memory proof) public onlyActor(id) {
		Declaration storage _declaration = _declarations[id];
		// add proof
		_declaration.proof = proof;
		// change status
		_declaration.status = DeclarationStatus.ProofSubmitted;
		emit DeclarationProofSubmitted(_declaration);
	}

	function concludeDeclarationWithApproval(uint id) public onlyWitness(id) {
		Declaration storage _declaration = _declarations[id];
		// change status
		_declaration.status = DeclarationStatus.Approved;
		// distribute collateral to relevant parties
		uint treasurerValue = (_declaration.collateral.value * treasurerRedemptionPercentage) / 100;
		uint witnessValue = (_declaration.collateral.value * witnessRedemptionPercentage) / 100;
		uint actorValue = _declaration.collateral.value - treasurerValue - witnessValue;
		maybeWinPool(_declaration);
		_addToCollaterals(_redemptions[treasurer], Collateral(treasurerValue, _declaration.collateral.erc20Address));
		_addToCollaterals(
			_redemptions[_declaration.witness],
			Collateral(treasurerValue, _declaration.collateral.erc20Address)
		);
		_addToCollaterals(_redemptions[_declaration.actor], Collateral(actorValue, _declaration.collateral.erc20Address));
		emit DeclarationConcludedWithApproval(_declaration);
	}

	function concludeDeclarationWithRejection(uint id) public onlyWitness(id) {
		Declaration storage _declaration = _declarations[id];
		// change status
		_declaration.status = DeclarationStatus.Rejected;
		// distribute collateral to relevant parties
		uint treasurerValue = (_declaration.collateral.value * treasurerRedemptionPercentage) / 100;
		uint witnessValue = (_declaration.collateral.value * witnessRedemptionPercentage) / 100;
		uint poolValue = _declaration.collateral.value - treasurerValue - witnessValue;
		maybeWinPool(_declaration);
		_addToCollaterals(_redemptions[treasurer], Collateral(treasurerValue, _declaration.collateral.erc20Address));
		_addToCollaterals(
			_redemptions[_declaration.witness],
			Collateral(treasurerValue, _declaration.collateral.erc20Address)
		);
		_addToCollaterals(_pool, Collateral(poolValue, _declaration.collateral.erc20Address));
		emit DeclarationConcludedWithRejection(_declaration);
	}

	// --- View functions --- //
	function declaration(uint index) public view returns (Declaration memory) {
		return _declarations[index];
	}

	// we store indices of declarations per actor address
	function actorDeclarations(address actor) public view returns (Declaration[] memory) {
		uint[] storage indices = _actorDeclarations[actor];
		Declaration[] memory result = new Declaration[](indices.length);
		for (uint index; index < indices.length; index++) {
			result[index] = _declarations[indices[index]];
		}
		return result;
	}
	// TODO: lastActorDeclaration

	// we store indices of declarations per witness address
	function witnessDeclarations(address witness) public view returns (Declaration[] memory) {
		uint[] storage indices = _witnessDeclarations[witness];
		Declaration[] memory result = new Declaration[](indices.length);
		for (uint index; index < indices.length; index++) {
			result[index] = _declarations[indices[index]];
		}
		return result;
	}
	// TODO: lastWitnessDeclaration

	function communityDeclarations(address actor, uint amount) public view returns (Declaration[] memory) {
		uint[] storage indices = _actorDeclarations[actor];
		uint resultLength = Math.max(Math.min(amount, _declarations.length - indices.length), 0);
		Declaration[] memory result = new Declaration[](resultLength);
		uint resultIndex = 0;
		uint declarationIndex = _declarations.length - 1;
		while (resultIndex < resultLength) {
			Declaration memory foundDeclaration = _declarations[declarationIndex];
			if (foundDeclaration.actor == actor || foundDeclaration.actor == address(0)) {
				if (declarationIndex == 0) {
					break;
				}
				declarationIndex--;
				resultIndex++;
				continue;
			}
			result[resultIndex] = foundDeclaration;
			if (declarationIndex == 0) {
				break;
			}
			declarationIndex--;
			resultIndex++;
		}
		return result;
	}

	function redemptionsForParty(address party) public view returns (Collateral[] memory) {
		return _redemptions[party];
	}
	function pool() public view returns (Collateral[] memory) {
		return _pool;
	}

	// --- Public Functions --- //

	function declareWithEther(
		string memory summary,
		string memory description,
		address actor,
		address witness,
		uint startDate,
		uint endDate,
		uint witnessByDate
	) public payable returns (Declaration memory) {
		uint declarationIndex = _declarations.length;
		require(endDate > startDate, 'endDate must be before startDate');
		require(witnessByDate > endDate, 'witnessByDate must be before endDate');
		Declaration memory _declaration = Declaration(
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
		emit DeclarationMade(_declaration);
		_declarations.push(_declaration);
		_actorDeclarations[actor].push(declarationIndex);
		_witnessDeclarations[witness].push(declarationIndex);
		return _declaration;
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

	function maybeWinPool(Declaration storage _declaration) private {
		if (_pool.length == 0) return;
		uint random = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, randomNonce))) % 100;
		randomNonce++;
		uint feesTotalPercent = treasurerRedemptionPercentage + witnessRedemptionPercentage;
		uint chanceToWin = (_declaration.collateral.value / _pool[0].value) * feesTotalPercent * winMultiplier;
		if (random > chanceToWin) return;
		while (_pool.length > 0) {
			_addToCollaterals(_redemptions[_declaration.actor], _pool[_pool.length - 1]);
			_pool.pop();
		}
		emit PoolWon(_declaration);
	}

	function redeem(address payable destination, address[] calldata erc20Addresses) public {
		address party = msg.sender;
		Collateral[] storage collaterals = _redemptions[party];
		for (uint i = 0; i < erc20Addresses.length; i++) {
			address erc20Address = erc20Addresses[i];
			bool success;
			for (uint ii = 0; ii < collaterals.length; ii++) {
				Collateral storage collateral = collaterals[ii];
				if (collateral.erc20Address != erc20Address) continue;
				if (erc20Address == address(0)) {
					// ether
					require(collateral.value > 0, 'No ETH available to redeem');
					(bool sent, ) = destination.call{value: collateral.value, gas: 5000}('');
					require(sent, 'Failed to send Ether');
					success = true;
					delete collaterals[ii];
				} else {
					// token
				}
			}
			require(success, 'No redemption found for address');
		}
	}

	/// --- Internal functions --- ///
	function _addToCollaterals(Collateral[] storage collaterals, Collateral memory collateral) internal {
		// try to add to existing collateral if exists
		for (uint i = 0; i < collaterals.length; i++) {
			Collateral storage existingCollateral = collaterals[i];
			if (existingCollateral.erc20Address != collateral.erc20Address) continue;
			existingCollateral.value = existingCollateral.value + collateral.value;
			return;
		}
		// otherwise add new collateral
		collaterals.push(collateral);
	}

	function _authorizeUpgrade(address) internal override onlyOwner {}

	// --- Fallbacks --- //

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
		console.log('----- receive');
		logFallback();
	}
}