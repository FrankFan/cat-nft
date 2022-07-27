require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
require("./scripts/deploy.js");
require("./scripts/mint.js");
require("@nomiclabs/hardhat-etherscan");

const { ALCHEMY_API_URL, ACCOUNT_PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.8",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: ALCHEMY_API_URL,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    },
    // rinkeby: {
    //   chainId: 4,
    //   url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_KEY}`,
    //   accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    // },
    // mumbai: {
    //   url: POLYGON_TESTNET_URL,
    //   accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    // }
    // ethereum: {
    //   chainId: 1,
    //   url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
    //   accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    // }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};
