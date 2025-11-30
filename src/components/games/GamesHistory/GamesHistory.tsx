import { type FC, useState } from 'react';
import { useBlockNumber, useWatchContractEvent } from 'wagmi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { Wrapper } from '../../layout';
import { DeployedContracts } from '../../../contracts';
import { formatEther } from 'viem/utils';

interface GamesHistoryProps {
  game: 'Dice' | 'Grid';
}

const GamesHistory: FC<GamesHistoryProps> = ({ game }) => {
  const [logs, setLogs] = useState<any>(null);
  const { data: latestBlockNumber } = useBlockNumber();

  useWatchContractEvent({
    address: DeployedContracts.games[game].addresses.baseSepolia,
    abi: DeployedContracts.games[game].abi,
    eventName: 'BetSettled',
    fromBlock: latestBlockNumber && latestBlockNumber - 99000n,
    onLogs(logs) {
      setLogs(logs.reverse());
    },
  });

  if (!logs) return null;

  return (
    <section className={'pb-5 pointer-events-none'}>
      <Wrapper>
        <div className={'text-white text-sm mb-2.5'}>Players results</div>
      </Wrapper>
      <Swiper modules={[Autoplay]} autoplay={{ delay: 3500 }} loop={true} spaceBetween={20} slidesPerView={'auto'}>
        {logs &&
          // @ts-ignore
          logs.slice(0, 15).map(logItem => (
            <SwiperSlide
              className={'bg-grey-darkest rounded-[5px] shadow-emerald border-[#009999] border-1 text-xs p-2.5 !w-fit'}
              key={logItem.logIndex}
            >
              {game === 'Dice' && (
                <div>
                  {new Date(Number(BigInt(logs[0].blockTimestamp)) * 1000).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                  {' | '}
                  {logItem.args.comparisonType === 0 ? '>' : '<'}
                  {logItem.args.targetNumber}
                  {' | '}
                  {formatEther(logItem.args.amount)}
                  {' → '}
                  <span className={logItem.args.payout > 0 ? 'text-emerald' : 'text-red'}>
                    {formatEther(logItem.args.payout).toString().slice(0, 6)} ETH
                  </span>
                </div>
              )}

              {game === 'Grid' && (
                <div>
                  {new Date(Number(BigInt(logs[0].blockTimestamp)) * 1000).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                  {' | '}
                  {formatEther(logItem.args.amount)}
                  {' → '}
                  <span className={logItem.args.payout > 0 ? 'text-emerald' : 'text-red'}>
                    {formatEther(logItem.args.payout).toString().slice(0, 8)} ETH
                  </span>
                </div>
              )}

              <div>
                {logItem.args.player.slice(0, 4)}..{logItem.args.player.slice(-4)}
              </div>
              {/*<div>result - {logItem.args.result}</div>*/}
              {/*<div>targetNumber - {logItem.args.targetNumber}</div>*/}
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default GamesHistory;
