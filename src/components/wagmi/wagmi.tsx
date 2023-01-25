import { WagmiConfig, createClient } from 'wagmi';
import { getDefaultProvider } from 'ethers';
import { Profile } from './profile';
import { Mint } from '../Mint';

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

export function Wagmi() {
  return (
    <WagmiConfig client={client}>
      <h1 className='title'>Cat NFT Collection</h1>
      <Profile />
      <Mint />
    </WagmiConfig>
  );
}
