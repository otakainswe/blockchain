var Takacoin = artifacts.require("./Takacoin.sol");

contract('Takacoin',function(accounts){
    
    it("should put 1000 Takacoin in the first account", function(){
        return Takacoin.deployed().then(function(instance){
            return instance.balanceOf.call(accounts[0]);
            
        }).then(function(balance){
            assert.equal(balance.valueOf(),1000,"1000 was not in the first account");
        });
    });
});