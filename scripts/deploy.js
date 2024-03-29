const { task } = require('hardhat/config')
const { getAccount, getNetwork } = require('./helpers')

task('check-balance', 'Prints out the balance of your account').setAction(async function (taskArguments, hre) {
  const account = getAccount()
  const balanceWei = await account.getBalance()
  const balanceETH = balanceWei / 10 ** 18
  const network = getNetwork()
  console.log(`Account balance for ${account.address}: ${balanceETH} in ${network}`)
})

task('deploy', 'Deploys the CatNFT.sol contract').setAction(async function (taskArguments, hre) {
  const nftContractFactory = await hre.ethers.getContractFactory('CatNFT', getAccount())
  const nft = await nftContractFactory.deploy()
  console.log(`✨ Contract deployed to address: ${nft.address}`)
})
