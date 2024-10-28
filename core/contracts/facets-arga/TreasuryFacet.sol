// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {LibDiamond} from '../libraries/LibDiamond.sol';
import {ArgaLibrary} from '../libraries/ArgaLibrary.sol';
import {DeclarationLibrary} from './DeclarationFacet.sol';
import {RedemptionLibrary} from './RedemptionFacet.sol';
import {PoolLibrary} from './PoolFacet.sol';

library TreasuryLibrary {
	bytes32 constant DIAMOND_STORAGE_POSITION = keccak256('diamond.standard.treasury.storage');

	struct State {
		address treasurer;
		uint256 treasurerRedemptionPercentage;
		uint256 witnessRedemptionPercentage;
	}

	function diamondStorage() internal pure returns (State storage ds) {
		bytes32 position = DIAMOND_STORAGE_POSITION;
		assembly {
			ds.slot := position
		}
	}
}

contract TreasuryFacet {
	function treasurer() external view returns (address _treasurer) {
		TreasuryLibrary.State storage ds = TreasuryLibrary.diamondStorage();
		return ds.treasurer;
	}

	function changeTreasurer(address newTreasurer) external {
		if (newTreasurer == address(0)) {
			revert ArgaLibrary.ZeroAddress();
		}
		LibDiamond.enforceIsContractOwner();
		TreasuryLibrary.State storage ds = TreasuryLibrary.diamondStorage();
		ds.treasurer = newTreasurer;
		emit ArgaLibrary.TreasurerChanged(newTreasurer);
	}
}
