// SPDX-License-Identifier: UNLICENSED

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol';
import '@openzeppelin/contracts/utils/math/Math.sol';
import 'hardhat/console.sol';

pragma solidity ^0.8.22;

contract ArgaPool is Initializable, UUPSUpgradeable, OwnableUpgradeable {
	// variables

	mapping(bytes4 => string) private sigNames;
	address parentContract;

	// upgradeability boilerplate

	function initialize(address initialOwner) public initializer {
		__Ownable_init(initialOwner);
		__UUPSUpgradeable_init();

		winMultiplier = 1;
		randomNonce = 0;

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

	// access control

	modifier onlyParent() {
		require(msg.sender == parentContract, 'must be called from parent contract');
		_;
	}
	function setParentContract(address _parentContract) public onlyOwner {
		parentContract = _parentContract;
		emit ParentContractChanged(_parentContract);
	}

	// implementation

	Collateral[] private _pool;
	uint public winMultiplier;
	uint randomNonce;

	function pool() public view returns (Collateral[] memory) {
		return _pool;
	}

	function changeWinMultiplier(uint newMultiplier) public onlyParent {
		winMultiplier = newMultiplier;
	}

	function addToCollaterals(Collateral[] storage collaterals, Collateral memory collateral) private {
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

	function addToPool(Collateral memory collateral) public onlyParent {
		addToCollaterals(_pool, collateral);
	}

	function maybeWinPool(
		Declaration memory _declaration,
		uint feesTotalPercent
	) public onlyParent returns (Collateral[] memory) {
		Collateral[] memory noWinnings;
		if (_pool.length == 0) return noWinnings;
		uint random = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, randomNonce))) % 100;
		randomNonce++;
		uint chanceToWin = (_declaration.collateral.value / _pool[0].value) * feesTotalPercent * winMultiplier;
		if (random > chanceToWin) return noWinnings;
		// won
		Collateral[] memory winnings = new Collateral[](_pool.length);
		while (_pool.length > 0) {
			winnings[_pool.length - 1] = _pool[_pool.length - 1];
			_pool.pop();
		}
		emit PoolWon(_declaration);
		return winnings;
	}
}

event PoolWon(Declaration declaration);
