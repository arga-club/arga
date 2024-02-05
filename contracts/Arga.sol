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

	Declaration[] public declarations;
	mapping(address => uint[]) public actorDeclarationsActive;
	mapping(address => uint[]) public actorDeclarations;
	mapping(address => uint[]) public witnessDeclarations;
	mapping(address => uint[]) public witnessDeclarationsActive;

	event DeclarationMade(Declaration declaration);
	event DeclarationConcluded(Declaration declaration);

	function declareWithEther(
		string memory summary,
		string memory description,
		address actor,
		address witness,
		uint startDate,
		uint endDate,
		uint witnessByDate
	) public payable {
		Declaration memory declaration = Declaration(
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
	}
}
