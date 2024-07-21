// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {LibDiamond} from '../libraries/LibDiamond.sol';
import {ArgaLibrary} from '../libraries/ArgaLibrary.sol';

library PoolLibrary {
	bytes32 constant DIAMOND_STORAGE_POSITION = keccak256('diamond.standard.pool.storage');
	bytes32 constant POOL_STORAGE_POSITION = keccak256('diamond.standard.pool.storage.pool');

	struct State {
		ArgaLibrary.Collateral[] pool;
		uint winMultiplier;
		uint randomNonce;
	}

	function diamondStorage() internal pure returns (State storage ds) {
		bytes32 position = DIAMOND_STORAGE_POSITION;
		assembly {
			ds.slot := position
		}
	}

	function poolStorage() internal pure returns (ArgaLibrary.Collateral[] storage pool) {
		bytes32 position = POOL_STORAGE_POSITION;
		assembly {
			pool.slot := position
		}
	}

	function maybeWinPool(
		ArgaLibrary.Declaration memory declaration,
		uint feesTotalPercent
	) internal returns (ArgaLibrary.Collateral[] memory) {
		State storage ds = diamondStorage();
		ArgaLibrary.Collateral[] memory noWinnings;
		if (ds.pool.length == 0) return noWinnings;
		uint random = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, ds.randomNonce))) % 100;
		ds.randomNonce++;
		uint chanceToWin = (declaration.collateral.value / ds.pool[0].value) * feesTotalPercent * ds.winMultiplier;
		if (random > chanceToWin) return noWinnings;
		// won
		ArgaLibrary.Collateral[] memory winnings = new ArgaLibrary.Collateral[](ds.pool.length);
		while (ds.pool.length > 0) {
			winnings[ds.pool.length - 1] = ds.pool[ds.pool.length - 1];
			ds.pool.pop();
		}
		emit ArgaLibrary.PoolWon(declaration);
		return winnings;
	}

	function addToPool(ArgaLibrary.Collateral memory collateral) internal {
		State storage ds = diamondStorage();
		ArgaLibrary.addToCollateralsSingle(ds.pool, collateral);
	}
}

contract PoolFacet {
	function pool() external view returns (ArgaLibrary.Collateral[] memory) {
		PoolLibrary.State storage ds = PoolLibrary.diamondStorage();
		return ds.pool;
	}

	function changeWinMultiplier(uint winMultiplier) external {
		LibDiamond.enforceIsContractOwner();
		PoolLibrary.State storage ds = PoolLibrary.diamondStorage();
		ds.winMultiplier = winMultiplier;
	}
}
