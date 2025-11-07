import { useEffect, useRef, useState, type FC } from 'react';
import clsx from 'clsx';
// @ts-ignore
import DiceBox from '@3d-dice/dice-box-threejs';
import { MascotMessage } from '../index.ts';

interface DiceFieldProps {
  value: number;
  mascotTemperature: 'ugly' | 'neutral' | 'happy';
  isRollInProgress: boolean;
  onRollComplete?: () => void;
}

const DiceField: FC<DiceFieldProps> = ({ value, mascotTemperature, isRollInProgress, onRollComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const diceBoxRef = useRef<any>(null);
  const [isRollComplete, setIsRollComplete] = useState(false);

  const COLORS = ['#7500FF', '#00FFB3', '#DD00FE'];
  const getParsedValue = (value: number) => {
    const mod10 = value % 10;
    const reminder = value - mod10;

    return `${mod10},${reminder}`;
  };

  useEffect(() => {
    if (!containerRef.current || diceBoxRef.current) return;

    const box = new DiceBox(`#${containerRef.current.id}`, {
      assetPath: '/dice-box/',
      theme_customColorset: {
        background: COLORS[Math.floor(Math.random() * COLORS.length)],
        foreground: '#ffffff',
        texture: 'stars',
        material: 'glass',
      },
      sounds: true,
      volume: 100,
      theme_surface: 'green-felt',
      light_intensity: 1,
      gravity_multiplier: 200,
      baseScale: 80,
      strength: 2.5,
      onRollComplete: () => {
        setIsRollComplete(true);
        onRollComplete && onRollComplete();
      },
    });

    diceBoxRef.current = box;

    box.initialize().then(() => {
      diceBoxRef.current.roll(`1d10+1d100@${getParsedValue(value)}`);
    });
  }, []);

  useEffect(() => {
    if (value === 0) return;
    if (!diceBoxRef.current) return;

    setIsRollComplete(false);

    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];

    diceBoxRef.current.updateConfig({
      theme_customColorset: {
        texture: 'stars',
        material: 'glass',
        background: randomColor,
        foreground: '#ffffff',
      },
      strength: 2.5,
      gravity_multiplier: 200,
    });

    diceBoxRef.current.roll(`1d10+1d100@${getParsedValue(value)}`);
  }, [value]);

  return (
    <div>
      <MascotMessage temperature={mascotTemperature} />
      <div className='relative overflow-hidden h-[213px] md:h-[275px]'>
        <div
          className={
            'z-1 relative bg-grey-darkest/50 border-14 border-grey-darkest rounded-md w-full h-full bg-[url(/dice-canvas-bg.png)] bg-cover'
          }
          id={'dice-box'}
          ref={containerRef}
        >
          <div
            className={clsx(
              'absolute bottom-0 -right-23 flex flex-col items-center justify-center bg-grey-darkest text-center w-[90px] h-[70px] rounded-tl-[5px] tr-d-all',
              'before:size-[5px] before:absolute before:-left-[5px] before:bottom-[14px] before:bg-[radial-gradient(circle_at_0_0,transparent_5px,#191F23_5px)]',
              'after:size-[5px] after:absolute after:right-[14px] after:bottom-full after:bg-[radial-gradient(circle_at_0_0,transparent_5px,#191F23_5px)]',
              isRollComplete && !isRollInProgress && 'right-0'
            )}
          >
            <div className={'text-xs text-grey-lightest'}>Roll result</div>
            <div className={'font-righteous text-3xl text-white text-shadow-[0_0_17px_#00ffb3] text-stroke-emerald'}>
              {value}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiceField;
