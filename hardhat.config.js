require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.10",
  networks: {
		mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/wOVlgfXoTftJ43KFY6FuZKoe2E7kyd6X",
      accounts: ["7edc033d79b02ec13b70b246ae963f369b7168e4d0c678013d088b215ba8f969"],
		}
  }
};