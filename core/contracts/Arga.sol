// SPDX-License-Identifier: UNLICENSED

import {Ownable} from '@openzeppelin/contracts/access/Ownable.sol';

pragma solidity ^0.8.22;

contract Arga is Ownable {
	address public treasurer;

	event TreasurerChanged(address treasurer);

	modifier validAddress(address _addr) {
		require(_addr != address(0), 'Invalid address');
		_;
	}

	constructor(address initialOwner, address initialTreasurer) Ownable(initialOwner) validAddress(initialTreasurer) {
		treasurer = initialTreasurer;
		emit TreasurerChanged(initialTreasurer);
	}

	function changeTreasurer(address newTreasurer) public onlyOwner validAddress(newTreasurer) {
		treasurer = newTreasurer;
		emit TreasurerChanged(newTreasurer);
	}

	struct Declaration {
		uint id;
		string summary;
		string description;
		address actor;
		address witness;
		uint startDate;
		uint endDate;
		uint witnessByDate;
		uint collateralValue;
		address collateralErc20Address;
	}

	// all declarations go here
	Declaration[] public declarations;

	// events
	event DeclarationMade(Declaration declaration);
	event DeclarationConcluded(Declaration declaration);

	// we store indices of declarations per actor address
	mapping(address => uint[]) _actorDeclarations;
	function actorDeclarations(address actor) public view returns (Declaration[] memory) {
		uint[] memory indices = _actorDeclarations[actor];
		Declaration[] memory result = new Declaration[](indices.length);
		for (uint index; index < indices.length; index++) {
			result[index] = declarations[index];
		}
		return result;
	}

	// we store indices of declarations per witness address
	mapping(address => uint[]) _witnessDeclarations;
	function witnessDeclarations(address witness) public view returns (Declaration[] memory) {
		uint[] memory indices = _witnessDeclarations[witness];
		Declaration[] memory result = new Declaration[](indices.length);
		for (uint index; index < indices.length; index++) {
			result[index] = declarations[index];
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
	) public payable {
		uint declarationIndex = declarations.length;
		Declaration memory declaration = Declaration(
			declarationIndex,
			summary,
			description,
			actor,
			witness,
			startDate,
			endDate,
			witnessByDate,
			msg.value,
			address(0)
		);
		emit DeclarationMade(declaration);
		declarations.push(declaration);
		_actorDeclarations[actor].push(declarationIndex);
		_witnessDeclarations[witness].push(declarationIndex);
	}
	function declareWithToken(
		string memory summary,
		string memory description,
		address actor,
		address witness,
		uint startDate,
		uint endDate,
		uint witnessByDate,
		uint collateralValue,
		address collateralErc20Address
	) public {
		Declaration memory declaration = Declaration(
			summary,
			description,
			actor,
			witness,
			startDate,
			endDate,
			witnessByDate,
			collateralValue,
			collateralErc20Address
		);
		emit DeclarationMade(declaration);
		// not implemented yet
	}
}
