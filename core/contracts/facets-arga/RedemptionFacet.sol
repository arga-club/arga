// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {ArgaLibrary} from '../libraries/ArgaLibrary.sol';

library RedemptionLibrary {
	bytes32 constant DIAMOND_STORAGE_POSITION = keccak256('diamond.standard.redemption.storage');

	struct State {
		mapping(address => ArgaLibrary.Collateral[]) redemptions;
	}

	function diamondStorage() internal pure returns (State storage ds) {
		bytes32 position = DIAMOND_STORAGE_POSITION;
		assembly {
			ds.slot := position
		}
	}
}

contract RedemptionFacet {
	function redemptionsForParty(address party) external view returns (ArgaLibrary.Collateral[] memory) {
		RedemptionLibrary.State storage ds = RedemptionLibrary.diamondStorage();
		return ds.redemptions[party];
	}

	function redeem(address payable destination, address[] calldata erc20Addresses) external {
		RedemptionLibrary.State storage ds = RedemptionLibrary.diamondStorage();
		address party = msg.sender;
		ArgaLibrary.Collateral[] storage collaterals = ds.redemptions[party];
		for (uint i = 0; i < erc20Addresses.length; i++) {
			address erc20Address = erc20Addresses[i];
			bool success;
			for (uint ii = 0; ii < collaterals.length; ii++) {
				ArgaLibrary.Collateral storage collateral = collaterals[ii];
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
