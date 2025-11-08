import { type FC } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { formatEther } from 'viem/utils';

interface GridFieldProps {
  targetCells: number[] | null;
  winCells: number[] | null;
  onCellClick: (cell: number) => void;
  payout: bigint;
}

const GridField: FC<GridFieldProps> = ({ targetCells, winCells, onCellClick, payout }) => {
  const matches = targetCells && winCells && winCells.filter(x => new Set(targetCells).has(x)).length;
  console.log('field matches - ', matches);

  return (
    <div className={'grid grid-cols-5 grid-rows-5 gap-1 aspect-square p-[7px] rounded-[5px] bg-grey-darkest'}>
      {Array.from({ length: 25 }).map((_, index) => (
        <div className={'relative'} key={'grid-btn' + index}>
          <label
            className={clsx(
              'bg-grey-medium cursor-pointer relative flex items-center justify-center rounded-lg aspect-square overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-emerald hover:border-emerald/50 hover:border-1',
              targetCells && targetCells.includes(index) && 'neon-blink-cell'
            )}
          >
            <input className={'hidden'} type={'checkbox'} name={'grid-cell'} onChange={() => onCellClick(index)} />
            {winCells && !winCells.includes(index) && (
              <motion.div
                className={'flex items-center justify-center w-full h-full bg-grey-darkest'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
              >
                <img src={'/cross.svg'} width={'48'} height={'48'} alt={''} />
              </motion.div>
            )}
            {winCells && winCells.includes(index) && (
              <>
                <motion.video
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  className={'size-full scale-120'}
                  src={'/coin-rotate-full.mp4'}
                  width={'96'}
                  height={'96'}
                  autoPlay={true}
                  muted={true}
                  playsInline={true}
                  loop={true}
                />
              </>
            )}
          </label>
          {targetCells?.includes(index) && winCells?.includes(index) && (
            <motion.span
              className={'z-1 absolute font-righteous font-bold text-2xl text-emerald'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
              transition={{
                duration: 2,
                delay: index * 0.2 + 0.2,
                times: [0, 0.2, 0.8, 1],
              }}
            >
              {matches && '+' + formatEther(payout / BigInt(matches))}
            </motion.span>
          )}
        </div>
      ))}
    </div>
  );
};

export default GridField;
