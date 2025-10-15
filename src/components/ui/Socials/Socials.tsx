import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';

import DiscordIcon from '../../../assets/icons/discord.svg?react';
import XIcon from '../../../assets/icons/x.svg?react';
import TelegramIcon from '../../../assets/icons/telegram.svg?react';

const Socials: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <div className={clsx(className, 'flex gap-5')}>
      <a
        className={'size-9.5 text-grey-light hover:text-grey-lightest tr-d-all'}
        href={'https://discord.gg/'}
        target={'_blank'}
        rel={'noreferrer nofollow'}
      >
        <DiscordIcon />
      </a>
      <a
        className={'size-9.5 text-grey-light hover:text-grey-lightest tr-d-all'}
        href={'https://x.com/'}
        target={'_blank'}
        rel={'noreferrer nofollow'}
      >
        <XIcon />
      </a>
      <a
        className={'size-9.5 text-grey-light hover:text-grey-lightest tr-d-all'}
        href={'https://t.me/StarFlipNews'}
        target={'_blank'}
        rel={'noreferrer nofollow'}
      >
        <TelegramIcon />
      </a>
    </div>
  );
};

export default Socials;
