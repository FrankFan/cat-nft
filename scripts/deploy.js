const { task } = require("hardhat/config");
const { getAccount } = require("./helpers");

console.log('in deploy.js');

task("check-balance", "Prints out the balance of your account").setAction(async function (taskArguments, hre) {
    const account = getAccount();
    console.log(`Account balance for ${account.address}: ${await account.getBalance()}`);
});

task("deploy", "Deploys the NFT.sol contract").setAction(async function (taskArguments, hre) {
    console.log('--- ready to deploy ----');
    const nftContractFactory = await hre.ethers.getContractFactory("FrankNFT", getAccount());
    const nft = await nftContractFactory.deploy();
    console.log(`Contract deployed to address: ${nft.address}`);
});