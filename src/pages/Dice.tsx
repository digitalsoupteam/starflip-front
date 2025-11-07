import { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import { Range, getTrackBackground } from 'react-range';
import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWatchContractEvent,
  useWriteContract,
} from 'wagmi';

import { Wrapper } from '../components/layout';
import { Breadcrumbs } from '../components/common';
import { DiceField, GamesHistory, WinModal } from '../components/games';
import { DeployedContracts } from '../contracts';
import { formatEther, formatUnits, parseEther } from 'viem/utils';
import { Button } from '../components/ui';
import { zeroAddress } from 'viem';

const Dice = () => {
  const [rollStarted, setRollStarted] = useState(false);
  const [betAmount, setBetAmount] = useState('');
  const [targetValue, setTargetValue] = useState([50]);
  const [rollType, setRollType] = useState(0);
  const [settledBet, setSettledBet] = useState(null);
  const STEP = 1;

  const { address } = useAccount();
  const diceContractConfig = {
    address: DeployedContracts.games.Dice.addresses.baseSepolia,
    abi: DeployedContracts.games.Dice.abi,
  };

  const { data: hash, writeContract } = useWriteContract({});
  console.log(hash);
  useWatchContractEvent({
    ...diceContractConfig,
    eventName: 'BetSettled',
    onLogs(logs) {
      const playerLogs = logs.reverse().filter(log => log.args.player === address);
      // transactionHash
      console.log(playerLogs[0]);
      setSettledBet(playerLogs[0]);
    },
  });
  // const { data: result } = useWaitForTransactionReceipt({
  //   hash: hash,
  // });
  //
  // // Декодируем события по ABI
  // const parsedLogs =
  //   result &&
  //   parseEventLogs({
  //     abi: DeployedContracts.games.Dice.abi,
  //     logs: result.logs,
  //   });
  //

  const { data: minBetValue } = useReadContract({
    ...diceContractConfig,
    functionName: 'minBetValue',
  });
  const { data: maxBetValue } = useReadContract({
    ...diceContractConfig,
    functionName: 'maxBetValue',
  });
  const { data: minBetAmount } = useReadContract({
    ...diceContractConfig,
    functionName: 'minBetAmount',
  }) as { data?: bigint };
  const { data: maxBetAmount } = useReadContract({
    ...diceContractConfig,
    functionName: 'maxBetAmount',
  }) as { data?: bigint };
  const { data: calculatedPayout } = useReadContract({
    ...diceContractConfig,
    functionName: 'calculatePayout',
    args: [parseEther(betAmount), targetValue, rollType],
  }) as { data?: bigint };

  const { data: isRollInProgress } = useReadContract({
    ...diceContractConfig,
    functionName: 'isRollInProgress',
    account: address,
    query: {
      refetchInterval: rollStarted ? 1000 : 0,
    },
  }) as { data?: boolean };
  const { data: latestRollResult } = useReadContract({
    ...diceContractConfig,
    functionName: 'getLatestRollResult',
    account: address,
    query: {
      refetchInterval: rollStarted ? 1000 : 0,
    },
  }) as { data?: bigint };
  const { data: currentBet } = useReadContract({
    ...diceContractConfig,
    functionName: 'getCurrentBet',
    account: address,
    query: {
      refetchInterval: rollStarted ? 1000 : 0,
    },
  });

  const roll = () => {
    writeContract({
      ...diceContractConfig,
      functionName: 'roll',
      value: parseEther(betAmount),
      args: [targetValue, rollType, zeroAddress, parseEther(betAmount)],
    });

    setRollStarted(true);
  };
  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (!minBetAmount || !maxBetAmount) return;
    const parsedValue = parseEther(evt.target.value);
    if (parsedValue < minBetAmount || parsedValue > maxBetAmount) return;
    setBetAmount(evt.target.value);
  };
  const divideBetValue = () => {
    if (!minBetAmount || !betAmount) return;

    const betBigInt = parseEther(betAmount);
    const half = betBigInt / 2n;

    if (half > minBetAmount) {
      setBetAmount(formatEther(half));
    } else {
      setBetAmount(formatEther(minBetAmount));
    }
  };
  const multiplyValue = () => {
    if (!maxBetAmount || !betAmount) return;

    const betBigInt = parseEther(betAmount);
    const double = betBigInt * 2n;

    if (double < maxBetAmount) {
      setBetAmount(formatEther(double));
    } else {
      setBetAmount(formatEther(maxBetAmount));
    }
  };
  const setMinBet = () => {
    if (!minBetAmount) return;
    setBetAmount(formatEther(minBetAmount));
  };
  const setMaxBet = () => {
    if (!maxBetAmount) return;
    setBetAmount(formatEther(maxBetAmount));
  };

  const getTemperature = () => {
    if (rollStarted) return 'neutral';
    if (isRollInProgress) return 'neutral';

    if (currentBet && currentBet[4]) return 'happy';
    if (currentBet && !currentBet[4]) return 'ugly';

    return 'neutral';
  };

  useEffect(() => {
    if (!minBetAmount) return;

    setBetAmount(formatEther(minBetAmount));
  }, [minBetAmount]);
  useEffect(() => {
    if (!Boolean(latestRollResult)) return;
    setRollStarted(false);
  }, [latestRollResult]);

  return (
    <div className={'bg-[url(/dice-bg.png)] bg-cover'}>
      <section className={'pb-7.5'}>
        <Wrapper>
          <Breadcrumbs items={['games', 'dice']} />
          <div className={'grid gap-4 mt-7.5 max-w-[716px] mx-auto md:gap-7.5 lg:grid-cols-2'}>
            <DiceField
              value={Number(latestRollResult)}
              mascotTemperature={getTemperature()}
              isRollInProgress={rollStarted}
            />
            <div className={'flex flex-col gap-2.5'}>
              <div
                className={'flex flex-wrap gap-2.5 justify-between bg-grey-darkest/90 px-5 py-4 rounded-[5px] md:py-5'}
              >
                <div className={'grow-1 w-full flex flex-col items-center gap-2'}>
                  <div className={'text-grey-lightest text-xs'}>Profit on win</div>
                  <div className={'font-bold text-center text-emerald text-xl neon-blink-emerald'}>
                    {calculatedPayout &&
                      (Number(formatEther(calculatedPayout)) - Number(betAmount)).toString().slice(0, 15)}{' '}
                    <span className={'text-sm'}>ETH</span>
                  </div>
                </div>
                <div className={'flex items-center gap-2'}>
                  <div className={'text-grey-lightest text-xs'}>Multiplier</div>
                  {calculatedPayout && (
                    <div className={'font-bold text-white text-xl'}>
                      x{(Number(formatEther(calculatedPayout)) / Number(betAmount)).toFixed(2)}
                    </div>
                  )}
                </div>
                <div className={'flex items-center gap-2'}>
                  <div className={'text-grey-lightest text-xs'}>Win chance</div>
                  <div className={'font-bold text-white text-xl'}>
                    {rollType === 0 && 100 - Number(targetValue)}
                    {rollType === 1 && Number(targetValue) - 1}%
                  </div>
                </div>
              </div>
              <div className={'bg-grey-darkest/90 px-5 py-4 rounded-[5px] md:py-5'}>
                <div className={'mb-10 '}>
                  <Range
                    label='Select target value'
                    step={STEP}
                    min={Number(minBetValue)}
                    max={Number(maxBetValue)}
                    values={targetValue}
                    onChange={values => setTargetValue(values)}
                    renderTrack={({ props, children }) => (
                      <div
                        className={'h-2.5 rounded-[10px]'}
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                      >
                        <div
                          ref={props.ref}
                          className={'h-2.5 w-full rounded-[10px]'}
                          style={{
                            background: getTrackBackground({
                              values: targetValue,
                              colors: rollType === 1 ? ['#7c00ff', '#262D32'] : ['#262D32', '#4EF5C3'],
                              min: Number(minBetValue),
                              max: Number(maxBetValue),
                            }),
                            alignSelf: 'center',
                          }}
                        >
                          {children}
                        </div>
                      </div>
                    )}
                    renderThumb={({ props }) => (
                      <div
                        className={clsx(
                          'flex items-center justify-center rounded-[10px] w-14 h-11 text-white text-xl text-shadow-[0_0_10px_#fff] font-bold',
                          'transition-shadow duration-300 ease-in-out',
                          rollType === 1
                            ? 'hover:shadow-[0_0_20px_#9d00ff] focus-visible:shadow-[0_0_20px_#9d00ff]'
                            : 'hover:shadow-[0_0_20px_#00ffb3] focus-visible:shadow-[0_0_20px_#00ffb3]',
                          rollType === 1 ? 'bg-purple-purple' : 'bg-emerald-emerald'
                        )}
                        {...props}
                        key={props.key}
                      >
                        {targetValue}
                      </div>
                    )}
                  />
                </div>

                <div className={'flex gap-2.5 justify-between '}>
                  <label
                    className={
                      'cursor-pointer flex gap-3 items-center font-bold text-white text-xl hover:[&_.indicator]:after:shadow-[0_0_20px_#9d00ff]'
                    }
                  >
                    <input
                      className={
                        'visually-hidden [&:checked+span]:after:bg-purple [&:checked+span]:after:shadow-[0_0_20px_#9d00ff]'
                      }
                      type={'radio'}
                      name={'betType'}
                      value={'rollUnder'}
                      onChange={() => setRollType(1)}
                      defaultChecked={rollType === 1}
                    />
                    <span
                      className={
                        'indicator shrink-0 inline-flex items-center justify-center size-6 bg-[#262D32] rounded-full' +
                        ' after:ease-in-out after:duration-300 after:transition-all after:rounded-full after:size-4 after:bg-[#262D32]'
                      }
                    />
                    <span>Roll Under</span>
                  </label>
                  <label
                    className={
                      'cursor-pointer flex gap-3 items-center font-bold text-white text-xl hover:[&_.indicator]:after:shadow-[0_0_20px_#00ffb3]'
                    }
                  >
                    <input
                      className={
                        'visually-hidden [&:checked+span]:after:bg-emerald [&:checked+span]:after:shadow-[0_0_20px_#00ffb3]'
                      }
                      type={'radio'}
                      name={'betType'}
                      value={'rollOver'}
                      onChange={() => setRollType(0)}
                      defaultChecked={rollType === 0}
                    />
                    <span
                      className={
                        'indicator shrink-0 inline-flex items-center justify-center size-6 bg-[#262D32] rounded-full' +
                        ' after:ease-in-out after:duration-300 after:transition-all after:rounded-full after:size-4 after:bg-[#262D32]'
                      }
                    />
                    <span>Roll Over</span>
                  </label>
                </div>
              </div>

              <div className={'flex gap-2.5 bg-grey-darkest px-5 py-4 rounded-[5px] md:py-5'}>
                <div className={'shrink-0 h-fit my-auto'}>
                  <div className={'text-xs text-grey-lightest'}>Bet Amount</div>
                  <div>
                    <input
                      className='font-righteous text-white text-xl outline-0'
                      type='number'
                      step='0.00001'
                      min={minBetAmount ? parseFloat(formatUnits(minBetAmount, 18)) : undefined}
                      max={maxBetAmount ? parseFloat(formatUnits(maxBetAmount, 18)) : undefined}
                      value={betAmount ?? (minBetAmount ? formatUnits(minBetAmount, 18) : '')}
                      placeholder='0.0001'
                      onChange={onChangeHandler}
                    />
                    <span className={'font-righteous text-[#262D32] text-xl'}>ETH</span>
                  </div>
                </div>
                <div className={'shrink-0 grid grid-cols-2 gap-0.5'}>
                  <button
                    className={
                      'cursor-pointer bg-grey-dark rounded-[5px] p-2 text-white text-xs tr-d-all' +
                      ' hover:bg-grey-medium focus-visible:bg-grey-medium active:opacity-60'
                    }
                    onClick={setMinBet}
                  >
                    min
                  </button>
                  <button
                    className={
                      'cursor-pointer bg-grey-dark rounded-[5px] p-2 text-white text-xs tr-d-all' +
                      ' hover:bg-grey-medium focus-visible:bg-grey-medium active:opacity-60'
                    }
                    onClick={setMaxBet}
                  >
                    max
                  </button>
                  <button
                    className={
                      'cursor-pointer bg-grey-dark rounded-[5px] p-2 text-white text-xs tr-d-all' +
                      ' hover:bg-grey-medium focus-visible:bg-grey-medium active:opacity-60'
                    }
                    onClick={divideBetValue}
                  >
                    /2
                  </button>
                  <button
                    className={
                      'cursor-pointer bg-grey-dark rounded-[5px] p-2 text-white text-xs tr-d-all' +
                      ' hover:bg-grey-medium focus-visible:bg-grey-medium active:opacity-60'
                    }
                    onClick={multiplyValue}
                  >
                    x2
                  </button>
                </div>
                <Button
                  className={'p-4 w-full !h-auto'}
                  visualType={'secondary'}
                  size={'md'}
                  onClick={roll}
                  disabled={rollStarted}
                >
                  Bet
                </Button>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
      <GamesHistory game={'Dice'} />
      <WinModal payout={settledBet?.args?.payout || 0n} />
    </div>
  );
};

export default Dice;
