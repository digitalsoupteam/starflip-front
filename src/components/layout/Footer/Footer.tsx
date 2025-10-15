import type { FC } from 'react';
import { Wrapper } from '../index.ts';
import { Socials } from '../../ui';

const Footer: FC = () => {
  return (
    <footer>
      <Wrapper>
        <div className={'py-12.5 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-5'}>
          <div
            className={
              'flex items-center justify-center text-emerald text-base size-8 rounded-full border-emerald border-1 max-lg:col-span-2'
            }
          >
            18+
          </div>

          <div>
            <div className={'text-grey-light text-xl font-bold uppercase mb-2'}>Games</div>
            <ul>
              <li className={'mb-2'}>
                <a className={'text-emerald text-sm'}>Dice</a>
              </li>
              <li className={'mb-2'}>
                <a className={'text-emerald text-sm'}>Grid Treasure</a>
              </li>
            </ul>
          </div>
          <div>
            <div className={'text-grey-light text-xl font-bold uppercase mb-2'}>Help</div>
            <ul>
              <li className={'mb-2'}>
                <a className={'text-emerald text-sm'}>Support</a>
              </li>
              <li className={'mb-2'}>
                <a className={'text-emerald text-sm'}>Affiliate</a>
              </li>
            </ul>
          </div>

          <div>
            <div className={'text-grey-light text-xl font-bold uppercase mb-2'}>Contacts</div>
            <ul>
              <li className={'mb-2'}>
                <a className={'text-emerald text-sm'} href={'mailto:support@starflip.com'}>
                  support@starflip.com
                </a>
                <div className={'text-grey-light text-xs'}>for users</div>
              </li>
              <li className={'mb-2'}>
                <a className={'text-emerald text-sm'} href={'mailto:pr@starflip.com'}>
                  pr@starflip.com
                </a>
                <div className={'text-grey-light text-xs'}>for users</div>
              </li>
            </ul>
          </div>

          <div>
            <div className={'text-grey-light text-xl font-bold uppercase mb-2'}>Join the Crew</div>
            <Socials />
          </div>

          <div className={'pt-10 border-t-1 border-t-grey-light col-span-full'}>
            <div className={'text-grey-light text-xs'}>©2025. StarFlip. All rights reserved.</div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
