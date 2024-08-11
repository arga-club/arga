// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {LibDiamond} from '../libraries/LibDiamond.sol';
import {ArgaLibrary} from '../libraries/ArgaLibrary.sol';
import {RedemptionLibrary} from './RedemptionFacet.sol';
import {DeclarationLibrary} from './DeclarationFacet.sol';
import {TreasuryLibrary} from './TreasuryFacet.sol';

import {IEntropyConsumer} from '@pythnetwork/entropy-sdk-solidity/IEntropyConsumer.sol';
import {IEntropy} from '@pythnetwork/entropy-sdk-solidity/IEntropy.sol';

library PoolLibrary {
	bytes32 constant DIAMOND_STORAGE_POSITION = keccak256('diamond.standard.pool.storage');
	bytes32 constant POOL_STORAGE_POSITION = keccak256('diamond.standard.pool.storage.pool');

	struct State {
		ArgaLibrary.Collateral[] pool;
		uint winMultiplier;
		address entropyProvider;
		address entropyContractAddress;
		IEntropy entropy;
		mapping(uint64 => ArgaLibrary.Draw) draws;
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

	// rename to draw
	function maybeWinPool(
		ArgaLibrary.Declaration memory declaration,
		uint feesTotalPercent,
		bytes32 randomNumber
	) internal returns (uint64) {
		State storage ds = diamondStorage();
		if (ds.pool.length == 0) return uint64(0);

		// take entropy fee from treasury
		uint fee = ds.entropy.getFee(ds.entropyProvider);
		RedemptionLibrary.State storage rds = RedemptionLibrary.diamondStorage();
		TreasuryLibrary.State storage tds = TreasuryLibrary.diamondStorage();
		ArgaLibrary.Collateral memory feeCollateral = ArgaLibrary.Collateral(fee, address(0));
		ArgaLibrary.removeFromCollateralsSingle(rds.redemptions[tds.treasurer], feeCollateral);

		uint64 drawId = ds.entropy.requestWithCallback{value: fee}(ds.entropyProvider, randomNumber);
		uint chanceToWin = (declaration.collateral.value / ds.pool[0].value) * feesTotalPercent * ds.winMultiplier;
		ArgaLibrary.Draw storage draw = ds.draws[drawId];
		draw.declarationId = declaration.id;
		draw.chanceToWin = chanceToWin;
		draw.pool = ds.pool;
		emit ArgaLibrary.PoolDrawn(drawId);
		return drawId;
	}

	function addToPool(ArgaLibrary.Collateral memory collateral) internal {
		State storage ds = diamondStorage();
		ArgaLibrary.addToCollateralsSingle(ds.pool, collateral);
	}
}

contract PoolFacet is IEntropyConsumer {
	function pool() external view returns (ArgaLibrary.Collateral[] memory) {
		PoolLibrary.State storage ds = PoolLibrary.diamondStorage();
		return ds.pool;
	}

	function draw(uint64 drawId) external view returns (ArgaLibrary.Draw memory) {
		PoolLibrary.State storage ds = PoolLibrary.diamondStorage();
		return ds.draws[drawId];
	}

	function changeWinMultiplier(uint winMultiplier) external {
		LibDiamond.enforceIsContractOwner();
		PoolLibrary.State storage ds = PoolLibrary.diamondStorage();
		ds.winMultiplier = winMultiplier;
	}

	function getEntropy() internal view override returns (address) {
		PoolLibrary.State storage ds = PoolLibrary.diamondStorage();
		return address(ds.entropy);
	}

	function entropyCallback(uint64 drawId, address, bytes32 randomNumber) internal override {
		PoolLibrary.State storage ds = PoolLibrary.diamondStorage();
		if (msg.sender != getEntropy()) {
			revert ArgaLibrary.InvalidEntropyContract(msg.sender);
		}
		DeclarationLibrary.State storage dds = DeclarationLibrary.diamondStorage();
		ArgaLibrary.Draw storage _draw = ds.draws[drawId];
		ArgaLibrary.Declaration storage declaration = dds.declarations[_draw.declarationId];
		_draw.value = uint256(randomNumber) % 100;
		if (_draw.value > _draw.chanceToWin) {
			// lost
			_draw.status = ArgaLibrary.DrawStatus.Lost;
			return;
		}
		// won
		// transfer from pool to redemptions
		RedemptionLibrary.State storage rds = RedemptionLibrary.diamondStorage();
		ArgaLibrary.addToCollateralsMultiple(rds.redemptions[declaration.actor], _draw.pool);
		// remove from pool
		ArgaLibrary.removeFromCollateralsMultiple(ds.pool, _draw.pool);
		_draw.status = ArgaLibrary.DrawStatus.Won;
	}
}
