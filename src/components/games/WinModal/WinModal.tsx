import { type FC, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import CrossIcon from '../../../assets/icons/cross.svg?react';

import { Button } from '../../ui';
import { formatEther } from 'viem/utils';
import { Wrapper } from '../../layout';

interface WinModalProps {
  payout: bigint;
}

const WinModal: FC<WinModalProps> = ({ payout }) => {
  const [isOpened, setIsOpened] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (payout > 0n) setTimeout(() => setIsOpened(true), 1000);
  }, [payout]);

  return (
    <section
      className={clsx(
        'z-2 fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/80',
        !isOpened && 'hidden'
      )}
      onClick={evt => {
        if (evt.target !== modalRef.current) return;
        console.log('close');
        setIsOpened(false);
      }}
      ref={modalRef}
    >
      <Wrapper>
        <div className={'relative w-fit h-fit bg-grey-darkest rounded-[20px] pt-[70px] pr-[210px] pb-[65px] pl-11'}>
          <button className={'cursor-pointer absolute -top-2 -right-15 size-12.5'} onClick={() => setIsOpened(false)}>
            <CrossIcon />
          </button>
          <div className={'z-1 relative'}>
            <div className={'text-2xl text-emerald mb-2'}>You won: {formatEther(payout)} ETH</div>
            <div className={'text-5xl mb-7.5'}>
              Do you want <br />a rematch?
            </div>
            <div className={'w-fit'}>
              <Button className={'mb-2.5'} visualType={'primary'} size={'md'} onClick={() => setIsOpened(false)}>
                Play again
              </Button>
              <div className={'text-purple text-center text-xs'}>
                <a href={'#'}>Сomplain</a>
              </div>
            </div>
          </div>
          <img
            className={'absolute bottom-0 right-0 w-[270px] pointer-events-none'}
            src={'/win.png'}
            width={'500'}
            height={'500'}
            alt={''}
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default WinModal;
