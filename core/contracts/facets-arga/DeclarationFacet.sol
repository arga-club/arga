// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/utils/math/Math.sol';

import {ArgaLibrary} from '../libraries/ArgaLibrary.sol';
import {RedemptionLibrary} from './RedemptionFacet.sol';
import {PoolLibrary} from './PoolFacet.sol';
import {TreasuryLibrary} from './TreasuryFacet.sol';

library DeclarationLibrary {
	bytes32 constant DIAMOND_STORAGE_POSITION = keccak256('diamond.standard.declaration.storage');

	struct State {
		ArgaLibrary.Declaration[] declarations;
		mapping(address => uint[]) actorDeclarations;
		mapping(address => uint[]) witnessDeclarations;
	}

	function diamondStorage() internal pure returns (State storage ds) {
		bytes32 position = DIAMOND_STORAGE_POSITION;
		assembly {
			ds.slot := position
		}
	}
}

contract DeclarationFacet {
	function getDeclaration(uint index) external view returns (ArgaLibrary.Declaration memory) {
		DeclarationLibrary.State storage ds = DeclarationLibrary.diamondStorage();
		return ds.declarations[index];
	}

	function allDeclarations(uint page, uint size) external view returns (ArgaLibrary.Declaration[] memory) {
		DeclarationLibrary.State storage ds = DeclarationLibrary.diamondStorage();
		uint min = page * size;
		uint max = (page + 1) * size;
		ArgaLibrary.Declaration[] memory result = new ArgaLibrary.Declaration[](size);
		for (uint index = min; index < max; index++) {
			if (ds.declarations[index].actor == address(0)) {
				continue;
			}
			result[index] = ds.declarations[index];
		}
		return result;
	}

	// we store indices of declarations per actor address
	function actorDeclarations(address actor) external view returns (ArgaLibrary.Declaration[] memory) {
		DeclarationLibrary.State storage ds = DeclarationLibrary.diamondStorage();
		uint[] storage indices = ds.actorDeclarations[actor];
		ArgaLibrary.Declaration[] memory result = new ArgaLibrary.Declaration[](indices.length);
		for (uint index; index < indices.length; index++) {
			result[index] = ds.declarations[indices[index]];
		}
		return result;
	}
	// TODO: lastActorDeclaration

	// we store indices of declarations per witness address
	function witnessDeclarations(address witness) external view returns (ArgaLibrary.Declaration[] memory) {
		DeclarationLibrary.State storage ds = DeclarationLibrary.diamondStorage();
		uint[] storage indices = ds.witnessDeclarations[witness];
		ArgaLibrary.Declaration[] memory result = new ArgaLibrary.Declaration[](indices.length);
		for (uint index; index < indices.length; index++) {
			result[index] = ds.declarations[indices[index]];
		}
		return result;
	}

	function communityDeclarations(address actor, uint amount) external view returns (ArgaLibrary.Declaration[] memory) {
		DeclarationLibrary.State storage ds = DeclarationLibrary.diamondStorage();
		uint[] storage indices = ds.actorDeclarations[actor];
		uint resultLength = Math.max(Math.min(amount, ds.declarations.length - indices.length), 0);
		ArgaLibrary.Declaration[] memory result = new ArgaLibrary.Declaration[](resultLength);
		uint resultIndex = 0;
		uint declarationIndex = ds.declarations.length - 1;
		while (resultIndex < resultLength) {
			ArgaLibrary.Declaration memory foundDeclaration = ds.declarations[declarationIndex];
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

	function declareWithEther(
		string memory summary,
		string memory description,
		address actor,
		address witness,
		uint startDate,
		uint endDate,
		uint witnessByDate
	) external payable returns (ArgaLibrary.Declaration memory) {
		if (witness == address(0)) {
			revert ArgaLibrary.InvalidWitness(witness);
		}
		if (actor == address(0)) {
			revert ArgaLibrary.InvalidActor(actor);
		}
		require(actor != address(0), "can't use zero address for actor");
		require(endDate >= startDate, 'endDate must be after startDate');
		require(witnessByDate >= endDate, 'witnessByDate must be after endDate');

		DeclarationLibrary.State storage ds = DeclarationLibrary.diamondStorage();
		uint declarationIndex = ds.declarations.length;
		ArgaLibrary.Declaration memory declaration = ArgaLibrary.Declaration(
			declarationIndex,
			ArgaLibrary.DeclarationStatus.Active,
			summary,
			description,
			actor,
			witness,
			startDate,
			endDate,
			witnessByDate,
			ArgaLibrary.Collateral(msg.value, address(0)),
			'',
			uint64(0)
		);
		emit ArgaLibrary.DeclarationMade(declaration);
		ds.declarations.push(declaration);
		ds.actorDeclarations[actor].push(declarationIndex);
		ds.witnessDeclarations[witness].push(declarationIndex);
		return declaration;
	}

	function submitDeclarationProof(uint id, string memory proof) external returns (ArgaLibrary.Declaration memory) {
		DeclarationLibrary.State storage ds = DeclarationLibrary.diamondStorage();
		ArgaLibrary.Declaration storage declaration = ds.declarations[id];
		require(msg.sender == declaration.actor, 'only actor can submit proof');
		declaration.proof = proof;
		declaration.status = ArgaLibrary.DeclarationStatus.ProofSubmitted;
		emit ArgaLibrary.DeclarationStatusChange(declaration);
		return declaration;
	}

	function concludeDeclarationWithApproval(uint id, bytes32 randomNumber) external {
		DeclarationLibrary.State storage ds = DeclarationLibrary.diamondStorage();
		RedemptionLibrary.State storage rds = RedemptionLibrary.diamondStorage();
		TreasuryLibrary.State storage tds = TreasuryLibrary.diamondStorage();
		ArgaLibrary.Declaration storage declaration = ds.declarations[id];
		if (msg.sender != declaration.witness) {
			revert ArgaLibrary.InvalidWitness(msg.sender);
		}
		require(declaration.status == ArgaLibrary.DeclarationStatus.ProofSubmitted, 'proof not submitted yet');
		require(declaration.witnessByDate > block.timestamp, 'witness by date has passed');

		declaration.status = ArgaLibrary.DeclarationStatus.Approved;
		emit ArgaLibrary.DeclarationStatusChange(declaration);

		// distribute collateral to relevant parties
		uint treasurerValue = (declaration.collateral.value * tds.treasurerRedemptionPercentage) / 100;
		uint witnessValue = (declaration.collateral.value * tds.witnessRedemptionPercentage) / 100;
		uint actorValue = declaration.collateral.value - treasurerValue - witnessValue;
		ArgaLibrary.addToCollateralsSingle(
			rds.redemptions[tds.treasurer],
			ArgaLibrary.Collateral(treasurerValue, declaration.collateral.erc20Address)
		);
		ArgaLibrary.addToCollateralsSingle(
			rds.redemptions[declaration.witness],
			ArgaLibrary.Collateral(treasurerValue, declaration.collateral.erc20Address)
		);
		ArgaLibrary.addToCollateralsSingle(
			rds.redemptions[declaration.actor],
			ArgaLibrary.Collateral(actorValue, declaration.collateral.erc20Address)
		);

		// draw and keep drawId
		uint64 drawId = PoolLibrary.maybeWinPool(declaration, tds.treasurerRedemptionPercentage, randomNumber);
		declaration.drawId = drawId;
	}

	function concludeDeclarationWithRejection(uint id, bytes32 randomNumber) external {
		DeclarationLibrary.State storage ds = DeclarationLibrary.diamondStorage();
		RedemptionLibrary.State storage rds = RedemptionLibrary.diamondStorage();
		TreasuryLibrary.State storage tds = TreasuryLibrary.diamondStorage();
		PoolLibrary.State storage pds = PoolLibrary.diamondStorage();
		ArgaLibrary.Declaration storage declaration = ds.declarations[id];
		if (msg.sender != declaration.witness) {
			revert ArgaLibrary.InvalidWitness(msg.sender);
		}

		declaration.status = ArgaLibrary.DeclarationStatus.Rejected;
		emit ArgaLibrary.DeclarationStatusChange(declaration);

		// draw and keep drawId
		uint64 drawId = PoolLibrary.maybeWinPool(declaration, tds.treasurerRedemptionPercentage, randomNumber);
		declaration.drawId = drawId;

		// distribute collateral to relevant parties
		uint treasurerValue = (declaration.collateral.value * tds.treasurerRedemptionPercentage) / 100;
		uint witnessValue = (declaration.collateral.value * tds.witnessRedemptionPercentage) / 100;
		uint poolValue = declaration.collateral.value - treasurerValue - witnessValue;
		ArgaLibrary.addToCollateralsSingle(
			pds.pool,
			ArgaLibrary.Collateral(poolValue, declaration.collateral.erc20Address)
		);
		ArgaLibrary.addToCollateralsSingle(
			rds.redemptions[tds.treasurer],
			ArgaLibrary.Collateral(treasurerValue, declaration.collateral.erc20Address)
		);
		ArgaLibrary.addToCollateralsSingle(
			rds.redemptions[declaration.witness],
			ArgaLibrary.Collateral(treasurerValue, declaration.collateral.erc20Address)
		);
	}
}
