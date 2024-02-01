// SPDX-License-Identifier: UNLICENSED

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

pragma solidity ^0.8.22;

contract Arga is Ownable {
    address public feeReceiver;

    constructor(address initialOwner, address initialFeeReceiver) Ownable(initialOwner) {
        feeReceiver = initialFeeReceiver;
    }

    struct Declaration {
        bytes32 summary;
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
    mapping(address=>uint[]) public actorDeclarationsActive;
    mapping(address=>uint[]) public actorDeclarations;
    mapping(address=>uint[]) public witnessDeclarations;
    mapping(address=>uint[]) public witnessDeclarationsActive;

    event DeclarationMade(Declaration declaration);
    event DeclarationConcluded(Declaration declaration);

    function declareWithEther(
        bytes32 summary,
        string memory description,
        address witness,
        uint startDate,
        uint endDate,
        uint witnessByDate
    ) public payable {
        Declaration memory declaration = Declaration(
            summary,
            description,
            msg.sender, // actor
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
        bytes32 summary,
        string memory description,
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
            msg.sender, // actor
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
