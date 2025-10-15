import type { FC } from 'react';

import { Wrapper } from '../index.ts';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header: FC = () => {
  return (
    <header>
      <Wrapper>
        <ConnectButton
          label={'Login'}
          accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'full',
          }}
          showBalance={false}
        />
      </Wrapper>
    </header>
  );
};

export default Header;
