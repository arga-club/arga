// SPDX-License-Identifier: UNLICENSED

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

pragma solidity ^0.8.22;

contract Arga is Ownable {
    address public feeReceiver;

    constructor(address initialOwner, address initialFeeReceiver) Ownable(initialOwner) {
        feeReceiver = initialFeeReceiver;
    }
}
