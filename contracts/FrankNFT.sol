// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// from https://docs.opensea.io/docs/setting-up-your-smart-contract-project
contract FrankNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private currentTokenId;

    // name and symbol
    constructor() ERC721("NFTTutorial", "FrankNFT") {}

    function mintTo(address recipient) public returns (uint256) {
        currentTokenId.increment();
        uint256 newItemId = currentTokenId.current();
        _safeMint(recipient, newItemId);
        return newItemId;
    }
}
