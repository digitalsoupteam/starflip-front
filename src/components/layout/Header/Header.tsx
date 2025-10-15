import type { FC } from 'react';

import { Wrapper } from '../index.ts';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Logo, Socials, TokenSelector } from '../../ui';

const Header: FC = () => {
  return (
    <header className={'bg-grey-darkest'}>
      <Wrapper>
        <div className={'flex items-center gap-2 justify-between'}>
          <Logo />
          <Socials className={'max-md:hidden'} />
          <div className={'flex items-center gap-7'}>
            <TokenSelector />
            <ConnectButton
              label={'Login'}
              accountStatus={{
                smallScreen: 'avatar',
                largeScreen: 'full',
              }}
              showBalance={false}
            />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
