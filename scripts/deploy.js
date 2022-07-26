const { task } = require("hardhat/config");
const { getAccount } = require("./helpers");

task("check-balance", "Prints out the balance of your account").setAction(async function (taskArguments, hre) {
    const account = getAccount();
    const balanceWei = await account.getBalance();
    const balanceETH = balanceWei / 10 ** 18
    console.log(`Account balance for ${account.address}: ${balanceETH}`);
});

task("deploy", "Deploys the NFT.sol contract").setAction(async function (taskArguments, hre) {
    const nftContractFactory = await hre.ethers.getContractFactory("FrankNFT", getAccount());
    const nft = await nftContractFactory.deploy();
    console.log(`Contract deployed to address: ${nft.address}`);
});