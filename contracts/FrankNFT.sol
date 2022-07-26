// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/PullPayment.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// from https://docs.opensea.io/docs/setting-up-your-smart-contract-project
contract FrankNFT is ERC721, PullPayment, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private currentTokenId;

    // Constants
    uint256 public constant TOTAL_SUPPLY = 666;
    uint256 public constant MINT_PRICE = 0 ether;

    /// @dev Base token URI used as a prefix by tokenURI().
    string public baseTokenURI;

    // name and symbol
    constructor() ERC721("NFTTutorial", "FrankNFT") {}

    function mintTo(address recipient) public payable returns (uint256) {
        uint256 tokenId = currentTokenId.current();
        require(tokenId < TOTAL_SUPPLY, "Max supply reached");

        currentTokenId.increment();
        uint256 newItemId = currentTokenId.current();
        _safeMint(recipient, newItemId);
        return newItemId;
    }

    /// @dev Returns an URI for a given token ID
    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    /// @dev Sets the base token URI prefix.
    function setBaseTokenURI(string memory _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }

    /// @dev Overridden in order to make it an onlyOwner function
    function withdrawPayments(address payable payee)
        public
        virtual
        override
        onlyOwner
    {
        super.withdrawPayments(payee);
    }
}
