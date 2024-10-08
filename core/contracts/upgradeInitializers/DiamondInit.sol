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
import {IEntropy} from '@pythnetwork/entropy-sdk-solidity/IEntropy.sol';

contract DiamondInit {
	error WrongEntropyContractAddress(address entropyContractAddress);

	function isContract(address _addr) public view returns (bool) {
		uint32 size;
		assembly {
			size := extcodesize(_addr)
		}
		return (size > 0);
	}

	function init(address treasurer, address entropyContractAddress) external {
		// adding ERC165 data
		LibDiamond.DiamondStorage storage lds = LibDiamond.diamondStorage();
		lds.supportedInterfaces[type(IERC165).interfaceId] = true;
		lds.supportedInterfaces[type(IDiamondCut).interfaceId] = true;
		lds.supportedInterfaces[type(IDiamondLoupe).interfaceId] = true;
		lds.supportedInterfaces[type(IERC173).interfaceId] = true;

		TreasuryLibrary.State storage tds = TreasuryLibrary.diamondStorage();
		// TODO: check if already initialized or not
		tds.treasurer = treasurer;
		tds.treasurerRedemptionPercentage = 2;
		tds.witnessRedemptionPercentage = 2;

		PoolLibrary.State storage pds = PoolLibrary.diamondStorage();
		pds.winMultiplier = 1;
		pds.entropyContractAddress = entropyContractAddress;
		if (!isContract(entropyContractAddress)) {
			revert WrongEntropyContractAddress(entropyContractAddress);
		}
		pds.entropy = IEntropy(pds.entropyContractAddress);
		pds.entropyProvider = pds.entropy.getDefaultProvider();
	}
}
