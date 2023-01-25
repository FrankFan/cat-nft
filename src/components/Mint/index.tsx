import { Button, Card, Image } from 'antd-mobile';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useAccount } from 'wagmi';
import { getProvider } from '../../utils';
import { CatNFTCollectionAbi } from '../../utils/abi';

// 合约地址

const contractAddress = '0x69c579011C85D5E3c946F3ed4140FfA322FA6711';

// provider
const provider = getProvider();
// signer
const signer = provider?.getSigner();
// contract
const contract = new ethers.Contract(
  contractAddress,
  CatNFTCollectionAbi,
  signer
);

function getUrl(number: number) {
  const demoSrc =
    'https://bafybeicni76jef2lutviohhtv3m3tladnf3dpdduhkh3upsl7cgaoz5hmu.ipfs.nftstorage.link/cats/cat-{{number}}.jpg';
  return demoSrc.replace('{{number}}', String(number));
}

export const Mint = () => {
  const { address } = useAccount();
  const [total, setTotal] = useState<number>(0);
  const [max, setMax] = useState<number>(0);

  useEffect(() => {
    getTotalAndMax();
  }, [address]);

  const mintNFT = async () => {
    if (contract && address) {
      try {
        const res = await contract.mintTo(address);
        console.log('mint result = ', res);
        Swal.fire('Success', 'mint申请已提交', 'success');

        // contract.on('mintEvent', (from, to, tokenId) => {
        //   console.log('触发mint事件', from, to, tokenId);
        // });
      } catch (error: any) {
        console.log('error:', error);
      }
    }
  };

  const getTotalAndMax = async () => {
    try {
      if (contract && address) {
        const total = await contract.totalSupply();
        setTotal(Number(total));
        const max = await contract.maxSupply();
        setMax(Number(max));
      }
    } catch (error) {
      console.log('getTotalAndMax 失败: ', error);
    }
  };

  return (
    <div className='mint'>
      <Card title='Mint - Goerli Network '>
        <div className='count'>
          {total === 0 ? '-' : total} minted / total {max}
        </div>
        <Button color='success' onClick={mintNFT}>
          Mint吧
        </Button>
      </Card>
      <Card title='Mint Record' className='mint-record'>
        {total > 0 ? (
          Array(total)
            .fill('x')
            .map((item, index) => (
              <div className='img-wrap' key={index}>
                <Image
                  src={getUrl(total - index)}
                  width={100}
                  height={100}
                  fit='cover'
                  style={{ borderRadius: 8 }}
                />
                <div className='text'>#{total - index}</div>
              </div>
            ))
        ) : (
          <div className='tips'>请将钱包切换到 Goerli 测试网络进行 mint</div>
        )}
      </Card>
    </div>
  );
};
