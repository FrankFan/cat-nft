import { ethers } from 'ethers';

export const truncateAddress = (address: string | undefined) => {
  if (!address) return 'No Account';
  const match = address.match(
    /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export const getProvider = () => {
  const ethereum = window.ethereum;
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    return provider;
  }
};
