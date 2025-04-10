// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Reputation {
    mapping(address => uint256) public reputation;

    event ReputationIncreased(address indexed user, uint256 amount);

    function increaseReputation(address user, uint256 amount) public {
        reputation[user] += amount;
        emit ReputationIncreased(user, amount);
    }

    function getReputation(address user) public view returns (uint256) {
        return reputation[user];
    }
}
