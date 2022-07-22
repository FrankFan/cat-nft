# NFT Tutorial


## hardhat 命令

```bash
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
npx hardhat clean

npx hardhat compile

npx hardhat mint


# 执行步骤

# 编译合约
➜  nft-tutorial git:(master) ✗ npx hardhat compile
Downloading compiler 0.8.8
Compiled 11 Solidity files successfully


# 部署合约
➜  nft-tutorial git:(master) ✗ npx hardhat deploy --network rinkeby
Contract deployed to address: 0xb5aAD468ee150BB88bdB5c7E4C605b98fA0Ba2dE


# mint NFT
➜  nft-tutorial git:(master) ✗ npx hardhat mint --address 0xa9Aa4613FAdA2287935CE5d6D375c28d248b5b50
Transaction Hash: 0x9d7f410b26149420100452f63b5f48492d7903d28d94be91fff8da118927ee87
```


