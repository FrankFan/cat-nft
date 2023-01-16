# NFT Tutorial

> [demo site](https://frankfan.github.io/cat-nft/)

> [opensea testnets](https://testnets.opensea.io/zh-CN/collection/cute-cat-nft-collectioin-v2)

## development

```bash
# install deps
yarn

# install hh - short-hand for npx hardhat xxx
npm install --global hardhat-shorthand

# 安装自动完成提示功能
hardhat-completion install
```

## PART1：合约

### hardhat 命令

```bash
hh --help

Hardhat version 2.10.1

Usage: hardhat [GLOBAL OPTIONS] <TASK> [TASK OPTIONS]

GLOBAL OPTIONS:

  --config              A Hardhat config file. 
  --emoji               Use emoji in messages. 
  --help                Shows this message, or a task\'s help if its name is provided 
  --max-memory          The maximum amount of memory that Hardhat can use. 
  --network             The network to connect to. 
  --show-stack-traces   Show stack traces. 
  --tsconfig            A TypeScript config file. 
  --verbose             Enables Hardhat verbose logging 
  --version             Shows hardhat\'s version. 


AVAILABLE TASKS:

  check         Check whatever you need
  check-balance Prints out the balance of your account  <--- 自己增加的 task
  clean         Clears the cache and deletes all artifacts
  compile       Compiles the entire project, building all artifacts
  console       Opens a hardhat console
  deploy        Deploys the NFT.sol contract  <--- 自己增加的 task
  flatten       Flattens and prints contracts and their dependencies
  help          Prints this message
  mint          Mints from the NFT contract   <--- 自己增加的 task
  node          Starts a JSON-RPC server on top of Hardhat Network # 
  run           Runs a user-defined script after compiling the project
  test          Runs mocha tests

To get help for a specific task run: npx hardhat help [task]

# ---------------------------------------------- #

# 常用命令
hh clean

hh compile

hh mint

# 自定义命令
hh check-balance
```

## run the example 执行步骤

```bash
# 1. clean
hh clean

# 2. compile
hh compile
Compiled 14 Solidity files successfully

# 3. deploy
hh deploy
Contract deployed to address: 0x69c579011C85D5E3c946F3ed4140FfA322FA6711
# 这里记得要更新 .env 中的 contract address

# 4. verify
hh verify 0x69c579011C85D5E3c946F3ed4140FfA322FA6711
Nothing to compile
Successfully submitted source code for contract
contracts/CatNFT.sol:CatNFT at 0x69c579011C85D5E3c946F3ed4140FfA322FA6711
for verification on the block explorer. Waiting for verification result...

Successfully verified contract CatNFT on Etherscan.
https://rinkeby.etherscan.io/address/0x69c579011C85D5E3c946F3ed4140FfA322FA6711#code

# 5. interact with contracts，由于设置了 onlyOwner，最好使用 reade/writeContract 进行交互
#npx hardhat mint --address 0xa9Aa4613FAdA2287935CE5d6D375c28d248b5b50

# 不需要了
#npx hardhat set-base-token-uri --base-url https://bafybeigtcguu2ulkq7wqtqacw42qnbuulktq2gatsggxsuezc2y7zc7r2y.ipfs.nftstorage.link/metadata/


# 6. 设置token-id， 不需要了
#npx hardhat token-uri --token-id 1
#npx hardhat token-uri --token-id 2

# 7. generate metadata，只需要生成一次即可
npx ipfs-car --pack metadata --output metadata.car

npx ipfs-car --pack images --output images.car

# 生成随机图片 https://randomwordgenerator.com/picture.php

# 生成 metadata
node generate_arts/index.js

# 上传到 nft.storage
https://bafybeicni76jef2lutviohhtv3m3tladnf3dpdduhkh3upsl7cgaoz5hmu.ipfs.nftstorage.link/metadata/

# 手动执行一次合约的更新 setBaseTokenUri 方法

# 最后，就可以在web界面上让用户mint了

# 以上两步可以通过 Etherscan 进行
```

## 遇到的问题

1. 执行`npx hardhat verify <address>`时，提示 `Connect Timeout Error`

<https://github.com/NomicFoundation/hardhat/issues/2468>
<https://segmentfault.com/a/1190000018157587>

最终确定是网络问题，即使Terminal翻墙也不行。最后使用了 SecureLink 才网络通畅了。

2. 执行`npx hardhat verify <address>`时，提示 `Invalid Api Key`

原因：是etherscan本身的问题，有bug不稳定，换成polygon的测试网就好了。

## docs

<https://docs.opensea.io/docs/4-setting-a-price-and-supply-limit-for-your-contract>
<https://docs.opensea.io/docs/setting-up-your-smart-contract-project>

## PART2：metadata

`https://bafybeicni76jef2lutviohhtv3m3tladnf3dpdduhkh3upsl7cgaoz5hmu.ipfs.nftstorage.link/metadata/`
