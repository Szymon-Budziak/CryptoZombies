const ZombieFactory = artifacts.require("ZombieFactory");
const zombieNames = ["Zombie 1", "Zombie 2"];
contract("ZombieFactory", (accounts) => {
    let [alice, bob] = accounts;

    it("should be able to create a new zombie", async () => {
        const contractInstance = await ZombieFactory.new();
        const result = await contractInstance.createRandomZombie(zombieNames[0], {from: alice});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[0].args.name,zombieNames[0]);
    })
})