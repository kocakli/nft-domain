const main = async () => {
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy("nft");
    await domainContract.deployed();
  
    console.log("Contract deployed to:", domainContract.address);
  
    // CHANGE THIS DOMAIN TO SOMETHING ELSE! I don't want to see OpenSea full of bananas lol
      let txn = await domainContract.register("0xOgi",  {value: hre.ethers.utils.parseEther('0.1')});
      await txn.wait();
    console.log("Minted domain OxOgi.nft");
  
    txn = await domainContract.setRecord("0xOgi", "Am I a OxOgi or a NFT??");
    await txn.wait();
    console.log("Set record for OxOgi.nft");
  
    const address = await domainContract.getAddress("0xOgi");
    console.log("Owner of domain 0xOgi:", address);
  
    const balance = await hre.ethers.provider.getBalance(domainContract.address);
    console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
  }
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();