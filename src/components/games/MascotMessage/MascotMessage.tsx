import { type FC, type HTMLAttributes, useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface MascotMessageProps extends HTMLAttributes<HTMLDivElement> {
  temperature: 'ugly' | 'neutral' | 'happy';
}

const MascotMessage: FC<MascotMessageProps> = ({ className, temperature }) => {
  const [displayedText, setDisplayedText] = useState('');

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
    setDisplayedText('');
    let index = 0;

    setDisplayedText(randomMessage[0]);
    index = 0;

    const interval = setInterval(() => {
      if (index < randomMessage.length - 1) {
        setDisplayedText(prev => prev + randomMessage[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [randomMessage]);

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
            {displayedText.length + 1 < randomMessage.length && (
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
