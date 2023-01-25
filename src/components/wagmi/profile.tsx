import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { truncateAddress } from '../../utils';
import { Button } from 'antd-mobile';
import { UserOutline } from 'antd-mobile-icons';
import './index.scss';

export function Profile() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div className='profile'>
        <span className='address'>
          <UserOutline /> {truncateAddress(address)}
        </span>
        <Button
          className='disconnect'
          color='primary'
          size='mini'
          onClick={() => disconnect()}
        >
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <div className='profile'>
      <Button color='primary' size='mini' onClick={() => connect()}>
        Connect Wallet
      </Button>
    </div>
  );
}
