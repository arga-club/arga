// SPDX-License-Identifier: UNLICENSED

import 'hardhat/console.sol';

pragma solidity ^0.8.22;

library ArgaLibrary {
	event ParentContractChanged(address parentContract);

	event DeclarationMade(Declaration declaration);
	event DeclarationStatusChange(Declaration declaration);

	event PoolWon(Declaration declaration);
	event TreasurerChanged(address treasurer);

	error ZeroAddress();
	error InvalidWitness(address witness);
	error InvalidActor(address actor);

	struct Collateral {
		uint value;
		address erc20Address;
	}
	enum DeclarationStatus {
		Active,
		ProofSubmitted,
		Approved,
		Rejected
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

	function addToCollateralsSingle(Collateral[] storage collaterals, Collateral memory collateral) internal {
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
	function addToCollateralsMultiple(Collateral[] storage collaterals, Collateral[] memory newCollaterals) internal {
		// try to add to existing collateral if exists
		for (uint i = 0; i < newCollaterals.length; i++) {
			for (uint ii = 0; ii < collaterals.length; ii++) {
				Collateral storage existingCollateral = collaterals[ii];
				if (existingCollateral.erc20Address != newCollaterals[i].erc20Address) continue;
				existingCollateral.value = existingCollateral.value + newCollaterals[i].value;
				return;
			}
			// otherwise add new collateral
			collaterals.push(newCollaterals[i]);
		}
	}
}
