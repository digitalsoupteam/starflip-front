import { type FC, type HTMLAttributes, useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface MascotMessageProps extends HTMLAttributes<HTMLDivElement> {
  temperature: 'ugly' | 'neutral' | 'happy';
}

const MascotMessage: FC<MascotMessageProps> = ({ className, temperature }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const PICTURES = {
    ugly: ['/astra/ugly.png'],
    neutral: ['/astra/neutral-1.png', '/astra/neutral-2.png'],
    happy: ['/astra/happy.png'],
  };

  const MESSAGES = {
    ugly: [
      'C’mon, lucky number…',
      'Oof… not your best roll!',
      'Maybe try again? The dice don’t like you yet.',
      'That one hurt…',
      'Luck’s taking a coffee break',
    ],
    neutral: ['Let’s see what fate has for us!'],
    happy: [
      'Now that’s what I’m talking about!',
      'Woohoo! Lucky roll!',
      'The dice are smiling on you today',
      'Jackpot vibes!',
      'Unstoppable! Keep it rolling!',
    ],
  };

  const randomMessage = useMemo(() => {
    const messages = MESSAGES[temperature];
    return messages[Math.floor(Math.random() * messages.length)];
  }, [temperature]);

  const randomPicture = useMemo(() => {
    const pictures = PICTURES[temperature];
    return pictures[Math.floor(Math.random() * pictures.length)];
  }, [temperature]);

  useEffect(() => {
    let isMounted = true;
    let timeoutIds: NodeJS.Timeout[] = [];

    const typeText = async (text: string) => {
      if (!isMounted) return;

      setDisplayedText('');
      setIsTypingComplete(false);

      for (let i = 0; i <= text.length; i++) {
        if (!isMounted) return;

        setDisplayedText(text.substring(0, i));

        await new Promise<void>(resolve => {
          const timeoutId = setTimeout(() => {
            resolve();
          }, 40);
          timeoutIds.push(timeoutId);
        });

        if (i === text.length) {
          setIsTypingComplete(true);
        }
      }
    };

    typeText(randomMessage);

    return () => {
      isMounted = false;
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, [randomMessage]);

  const showCursor = !isTypingComplete && displayedText.length > 0;

  return (
    <div className={clsx('bg-grey-darkest rounded-[5px]', className)}>
      <div className={'relative -top-3.5 -mb-3.5 flex gap-x-3'}>
        <img className={'size-20 rounded-full mt-2'} src={randomPicture} width={'150'} height={'150'} alt={'Astra'} />
        <div>
          <div className={'font-righteous text-stroke-pink text-white text-2xl text-shadow-[0_0_20px_#9d00ff] mb-1'}>
            Astra
          </div>
          <div className='text-pink text-base min-h-[1.5em]'>
            {displayedText}
            {showCursor && (
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }}>
                |
              </motion.span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MascotMessage;
