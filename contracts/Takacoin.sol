pragma solidity ^0.5.0;
import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract Takacoin is StandardToken{
    string public name = "Takacoin";
    string public symbol = "TKC"; // TaKaCoin
    uint public decimals = 18;
    
    constructor(uint initialSupply) public{
        totalSupply_ = initialSupply;
        balances[msg.sender] = initialSupply;
    }
}