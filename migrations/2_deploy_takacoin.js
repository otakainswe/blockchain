var Takacoin = artifacts.require("./Takacoin.sol");

module.exports = function(deployer){
    var initialSupply = 1000;
    deployer.deploy(Takacoin,initialSupply);
}

// # hoge
//  hoge 2