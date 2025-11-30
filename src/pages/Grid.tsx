import { useEffect, useState } from 'react';
import { useAccount, useReadContract, useWatchContractEvent, useWriteContract } from 'wagmi';
import { zeroAddress } from 'viem';

import { Wrapper } from '../components/layout';
import { Breadcrumbs } from '../components/common';
import { GamesHistory, GridField, MascotMessage, WinModal } from '../components/games';
import { DeployedContracts } from '../contracts';
import { formatEther, formatUnits, parseEther } from 'viem/utils';
import { Button } from '../components/ui';
import { useConnectModal } from '@rainbow-me/rainbowkit';

const Dice = () => {
  const [rollStarted, setRollStarted] = useState<boolean | null>(null);
  const [betAmount, setBetAmount] = useState<string>('');
  const [settledBet, setSettledBet] = useState<any>(null);
  const [targetCells, setTargetCells] = useState<number[] | null>(null);
  const [matches, setMatches] = useState<number>(0);
  const [payout, setPayout] = useState<bigint>(0n);

  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();

  const gridContractConfig = {
    address: DeployedContracts.games.Grid.addresses.baseSepolia,
    abi: DeployedContracts.games.Grid.abi,
  };

  const { writeContract } = useWriteContract({});

  useWatchContractEvent({
    ...gridContractConfig,
    eventName: 'BetSettled',
    args: {
      player: address,
    },
    onLogs(logs) {
      const latestPlayerLog = logs[0];

      if (!latestPlayerLog) return;

      const cellMask = decodeWinningCells(latestPlayerLog.args.cellMask as number);
      const result = decodeWinningCells(latestPlayerLog.args.result as number);
      const matches = result.filter(x => new Set(cellMask).has(x)).length;
      setSettledBet(latestPlayerLog);

      setTimeout(() => {
        setRollStarted(false);
        setMatches(matches);
        setPayout(latestPlayerLog.args.payout as bigint);
      }, 6000);
    },
  });

  const { data: minBetAmount } = useReadContract({
    ...gridContractConfig,
    functionName: 'minBetAmount',
  }) as { data?: bigint };
  const { data: maxBetAmount } = useReadContract({
    ...gridContractConfig,
    functionName: 'maxBetAmount',
  }) as { data?: bigint };
  const { data: isRollInProgress } = useReadContract({
    ...gridContractConfig,
    functionName: 'isRollInProgress',
    account: address,
    query: {
      refetchInterval: rollStarted ? 1000 : 0,
    },
  }) as { data?: boolean };
  const { data: currentBet } = useReadContract({
    ...gridContractConfig,
    functionName: 'getCurrentBet',
    account: address,
    query: {
      refetchInterval: rollStarted ? 1000 : 0,
    },
  });
  const { data: potAmount } = useReadContract({
    ...gridContractConfig,
    functionName: 'calculatePot',
    account: address,
    args: [parseEther(betAmount)],
  });

  const roll = () => {
    if (!targetCells || targetCells.length < 5) return;

    let mask = 0;
    for (const cell of targetCells) {
      mask |= 1 << cell;
    }

    if (!mask) return;
    console.log(targetCells, mask);

    writeContract({
      ...gridContractConfig,
      functionName: 'roll',
      value: parseEther(betAmount),
      args: [mask, zeroAddress, parseEther(betAmount)],
    });

    setRollStarted(true);
  };

  function decodeWinningCells(mask: number) {
    // Ensure the input is treated as a number
    const numMask = Number(mask);

    // Array to store the winning cell indices
    const winningCells = [];

    // Check each bit position from 0 to 24 (for a 5x5 grid)
    for (let position = 0; position < 25; position++) {
      // Check if the bit at this position is set to 1
      // (1 << position) creates a number with only the bit at 'position' set to 1
      // Then we use bitwise AND (&) to check if that bit is set in our mask
      if (numMask & (1 << position)) {
        winningCells.push(position);
      }
    }

    return winningCells;
  }

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

  const onCellClick = (cell: number) => {
    if (rollStarted) return;

    setTargetCells(prev => {
      if (!prev) return [cell];
      if (prev.includes(cell)) return prev.filter(c => c !== cell);
      if (prev.length >= 5) return prev;

      return [...prev, cell];
    });
  };

  const resetGame = () => {
    setRollStarted(null);
    setSettledBet(null);
    setTargetCells(null);
    setMatches(0);
    setPayout(0n);
  };

  useEffect(() => {
    if (!minBetAmount) return;

    setBetAmount(formatEther(minBetAmount));
  }, [minBetAmount]);

  return (
    <div className={'bg-[url(/grid-bg.png)] bg-cover'}>
      <section className={'pb-7.5'}>
        <Wrapper>
          <Breadcrumbs items={['games', 'dice']} />
          <div className={'grid gap-4 mt-7.5 max-w-[760px] mx-auto md:gap-7.5 lg:grid-cols-2'}>
            <div className={'lg:col-span-2'}>
              <MascotMessage temperature={getTemperature()} />
            </div>
            <GridField
              targetCells={targetCells}
              payout={settledBet && settledBet.args.payout}
              winCells={
                typeof rollStarted === 'boolean' && settledBet
                  ? decodeWinningCells(Number(settledBet.args.result))
                  : null
              }
              onCellClick={onCellClick}
            />
            <div className={'flex flex-col justify-between gap-2.5'}>
              <div
                className={
                  'relative flex flex-wrap gap-2.5 justify-between bg-grey-darkest/90 px-5 py-4 rounded-[5px] md:p-6'
                }
              >
                <div className={'grow-1 w-full flex flex-col gap-2.5'}>
                  <div className={'text-grey-lightest text-xs'}>Pot</div>
                  <div className={'font-bold text-emerald text-xl neon-blink-emerald'}>
                    <span>{potAmount ? formatEther(potAmount) : 'Loading..'}</span>
                    <span> ETH</span>
                  </div>
                </div>
                <img
                  className={'absolute -bottom-1/2 w-[150px] right-0 lg:w-[250px] lg:bottom-2 lg:-right-[64px]'}
                  src={'/grid-chest.png'}
                  width={'250'}
                  height={'255'}
                  alt={' '}
                />
              </div>

              <div className={'flex gap-3 bg-grey-darkest/90 px-5 py-4 rounded-[5px] md:p-6 md:gap-11'}>
                <div className={'flex flex-col gap-2.5 font-righteou'}>
                  <div className={'text-grey-lightest text-xs'}>Moves</div>
                  <div className={'text-white text-xl font-bold'}>{targetCells ? targetCells.length : 0}/5</div>
                </div>
                <div className={'flex flex-col gap-2.5 font-righteou'}>
                  <div className={'text-grey-lightest text-xs'}>Wininigs</div>
                  <div className={'font-righteous text-white text-xl'}>
                    {formatEther(payout)}
                    <span className={'text-sm'}> ETH</span>
                  </div>
                </div>
                <div className={'flex flex-col gap-2.5 font-righteou'}>
                  <div className={'text-grey-lightest text-xs'}>Matches</div>
                  <div className={'text-white text-xl font-bold'}>{matches}</div>
                </div>
              </div>

              <div className={'flex gap-2.5 bg-grey-darkest px-5 py-4 rounded-[5px] md:p-6'}>
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
                  onClick={() => {
                    if (!address && openConnectModal) openConnectModal();
                    if (payout) resetGame();
                    roll();
                  }}
                  disabled={Boolean(rollStarted)}
                >
                  {payout ? 'Again' : 'Open'}
                </Button>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
      <GamesHistory game={'Grid'} />
      <WinModal payout={payout} onPlayCallback={resetGame} />
    </div>
  );
};

export default Dice;
