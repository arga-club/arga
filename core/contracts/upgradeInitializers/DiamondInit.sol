// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/******************************************************************************\
* Author: Nick Mudge <nick@perfectabstractions.com> (https://twitter.com/mudgen)
* EIP-2535 Diamonds: https://eips.ethereum.org/EIPS/eip-2535
*
* Implementation of a diamond.
/******************************************************************************/

import {LibDiamond} from '../libraries/LibDiamond.sol';
import {IDiamondLoupe} from '../interfaces/IDiamondLoupe.sol';
import {IDiamondCut} from '../interfaces/IDiamondCut.sol';
import {IERC173} from '../interfaces/IERC173.sol';
import {IERC165} from '../interfaces/IERC165.sol';

import {TreasuryLibrary} from '../facets-arga/TreasuryFacet.sol';
import {PoolLibrary} from '../facets-arga/PoolFacet.sol';

contract DiamondInit {
	function init(address treasurer) external {
		// adding ERC165 data
		LibDiamond.DiamondStorage storage lds = LibDiamond.diamondStorage();
		lds.supportedInterfaces[type(IERC165).interfaceId] = true;
		lds.supportedInterfaces[type(IDiamondCut).interfaceId] = true;
		lds.supportedInterfaces[type(IDiamondLoupe).interfaceId] = true;
		lds.supportedInterfaces[type(IERC173).interfaceId] = true;

		TreasuryLibrary.State storage tds = TreasuryLibrary.diamondStorage();
		tds.treasurer = treasurer;
		tds.treasurerRedemptionPercentage = 2;
		tds.witnessRedemptionPercentage = 2;

		PoolLibrary.State storage pds = PoolLibrary.diamondStorage();
		pds.winMultiplier = 1;
		pds.randomNonce = 0;
	}
}
