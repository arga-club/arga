// SPDX-License-Identifier: UNLICENSED

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol';
import '@openzeppelin/contracts/utils/math/Math.sol';
import 'hardhat/console.sol';
import './ArgaLibrary.sol';
import './ArgaDeclaration.sol';
import './ArgaPool.sol';

pragma solidity ^0.8.22;

contract Arga is Initializable, UUPSUpgradeable, OwnableUpgradeable, ArgaDefinitions {
	// variables

	string public constant name = 'Arga';
	string public version;
	mapping(bytes4 => string) private sigNames;

	// upgradeability boilerplate

	function initialize(
		address initialOwner,
		ArgaDeclaration _declarationContract,
		ArgaPool _poolContract
	) public initializer {
		__Ownable_init(initialOwner);
		__UUPSUpgradeable_init();
		version = '0.3.0';

		declarationContract = _declarationContract;
		poolContract = _poolContract;

		treasurerRedemptionPercentage = 2;
		witnessRedemptionPercentage = 2;
		treasurer = initialOwner;
		emit TreasurerChanged(initialOwner);

		sigNames[bytes4(0x313ce567)] = 'decimals';
		sigNames[bytes4(0x95d89b41)] = 'symbol';
		sigNames[bytes4(0x06fdde03)] = 'name';
		sigNames[bytes4(0x18160ddd)] = 'totalSupply';
		sigNames[bytes4(0x01ffc9a7)] = 'supportsInterface';
	}
	/// @custom:oz-upgrades-unsafe-allow constructor
	constructor() {
		_disableInitializers();
	}
	function _authorizeUpgrade(address) internal override onlyOwner {}

	// logging fallbacks

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

	// implementation

	ArgaDeclaration declarationContract;
	ArgaPool poolContract;
	address public treasurer;
	uint256 public treasurerRedemptionPercentage;
	uint256 witnessRedemptionPercentage;

	// ArgaDeclaration proxy methods

	function declareWithEther(
		string memory summary,
		string memory description,
		address actor,
		address witness,
		uint startDate,
		uint endDate,
		uint witnessByDate
	) public payable validAddress(actor) validAddress(witness) {
		declarationContract.declareWithEther(
			summary,
			description,
			actor,
			witness,
			startDate,
			endDate,
			witnessByDate,
			msg.value
		);
	}

	// treasury

	modifier validAddress(address _addr) {
		require(_addr != address(0), 'Invalid address');
		_;
	}
	function changeTreasurer(address newTreasurer) public onlyOwner validAddress(newTreasurer) {
		treasurer = newTreasurer;
		emit TreasurerChanged(newTreasurer);
	}

	mapping(address => Collateral[]) public _redemptions;

	function redemptionsForParty(address party) public view returns (Collateral[] memory) {
		return _redemptions[party];
	}

	modifier onlyWitness(uint id) {
		address witness = declarationContract.getDeclaration(id).witness;
		if (msg.sender != witness) {
			revert InvalidWitness(msg.sender);
		}
		_;
	}

	modifier onlyActor(uint id) {
		address actor = declarationContract.getDeclaration(id).actor;
		if (msg.sender != actor) {
			revert InvalidActor(msg.sender);
		}
		_;
	}

	function submitDeclarationProof(uint id, string memory proof) public onlyActor(id) {
		declarationContract.submitDeclarationProof(id, proof);
	}

	function concludeDeclarationWithApproval(uint id) public onlyWitness(id) {
		Declaration memory declaration = declarationContract.setStatus(id, DeclarationStatus.Approved);
		// distribute collateral to relevant parties
		uint treasurerValue = (declaration.collateral.value * treasurerRedemptionPercentage) / 100;
		uint witnessValue = (declaration.collateral.value * witnessRedemptionPercentage) / 100;
		uint actorValue = declaration.collateral.value - treasurerValue - witnessValue;
		ArgaLibrary.addToCollateralsMultiple(
			_redemptions[declaration.actor],
			poolContract.maybeWinPool(declaration, treasurerRedemptionPercentage)
		);
		ArgaLibrary.addToCollateralsSingle(
			_redemptions[treasurer],
			Collateral(treasurerValue, declaration.collateral.erc20Address)
		);
		ArgaLibrary.addToCollateralsSingle(
			_redemptions[declaration.witness],
			Collateral(treasurerValue, declaration.collateral.erc20Address)
		);
		ArgaLibrary.addToCollateralsSingle(
			_redemptions[declaration.actor],
			Collateral(actorValue, declaration.collateral.erc20Address)
		);
	}

	function concludeDeclarationWithRejection(uint id) public onlyWitness(id) {
		Declaration memory declaration = declarationContract.setStatus(id, DeclarationStatus.Rejected);
		// distribute collateral to relevant parties
		uint treasurerValue = (declaration.collateral.value * treasurerRedemptionPercentage) / 100;
		uint witnessValue = (declaration.collateral.value * witnessRedemptionPercentage) / 100;
		uint poolValue = declaration.collateral.value - treasurerValue - witnessValue;
		poolContract.addToPool(Collateral(poolValue, declaration.collateral.erc20Address));
		ArgaLibrary.addToCollateralsMultiple(
			_redemptions[declaration.actor],
			poolContract.maybeWinPool(declaration, treasurerRedemptionPercentage)
		);
		ArgaLibrary.addToCollateralsSingle(
			_redemptions[treasurer],
			Collateral(treasurerValue, declaration.collateral.erc20Address)
		);
		ArgaLibrary.addToCollateralsSingle(
			_redemptions[declaration.witness],
			Collateral(treasurerValue, declaration.collateral.erc20Address)
		);
	}

	function changeWinMultiplier(uint newMultiplier) public onlyOwner {
		poolContract.changeWinMultiplier(newMultiplier);
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
}
