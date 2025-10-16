import { motion } from 'framer-motion';

import { Wrapper } from '../../layout';
import { Button } from '../../ui';

import Percents50SVG from '../../../assets/50Percents.svg?react';
import RakebackSVG from '../../../assets/rakeback.svg?react';
import OneSVG from '../../../assets/1.svg?react';
import TwoSVG from '../../../assets/2.svg?react';
import ThreeSVG from '../../../assets/3.svg?react';

const Hero = () => {
  return (
    <section
      className={
        'z-0 relative overflow-hidden bg-[url(/hero-m.png)] bg-cover bg-center lg:bg-[url(/hero-d.png)]' +
        ' after:absolute after:bottom-0 after:left-0 after:mt-auto after:w-full after:h-[249px] after:bg-gradient-to-t' +
        ' after:from-black after:to-transparent max-lg:after:via-black max-lg:after:via-[103px]'
      }
    >
      <motion.div
        className={'z-0 absolute -top-[124px] -left-[164px] -lg:top-[204px] -lg:lef-[163px]'}
        initial={{ opacity: 0, x: 100, y: -100 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        <img className={'w-full h-auto'} src={'/hero-bg-l.png'} width={'354'} height={'469'} alt={''} />
      </motion.div>
      <motion.div
        className={'z-0 absolute -top-[168px] -right-[117px] max-lg:hidden'}
        initial={{ opacity: 0, x: -100, y: -100 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        <img className={'w-full h-auto'} src={'/hero-bg-r.png'} width={'354'} height={'469'} alt={''} />
      </motion.div>

      <Wrapper>
        <div className={'z-1 relative flex flex-col justify-end min-h-[652px] lg:min-h-[469px] '}>
          <motion.div
            className={'z-0 absolute top-0 right-0 left-0 mx-auto w-[375px] md:w-[364px] lg:left-[222px] lg:mx-0'}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            <img className={'w-full h-auto'} src={'/hero-mascot.png'} width={'354'} height={'469'} alt={''} />
          </motion.div>
          <motion.div
            className={'z-1 relative flex flex-col items-center w-fit mx-auto mb-8 md:mb-12.5 lg:ml-auto lg:mr-64'}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            <div className={'flex flex-col items-center'}>
              <Percents50SVG className={'neon-blink-purple w-[165px] h-[107px] md:w-[230px] md:h-[149px] md:ml-6.5'} />
              <RakebackSVG
                className={'neon-blink-emerald w-[290px] h-[91px] -mt-15 -ml-1 md:w-[404px] md:h-[127px] md:-mt-[85px]'}
              />
            </div>
            <div className={'text-white text-base mb-5 md:mb-6'}>Get half of your fees back!</div>
            <Button visualType={'primary'} href={'#games'} size={'lg'}>
              Play now
            </Button>
          </motion.div>
          <motion.div
            className={'absolute bottom-[138px] -left-[49px] lg:top-[182px] lg:right-[25px] lg:left-auto'}
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
              rotate: [0, 30, 0],
            }}
            transition={{
              opacity: { duration: 1, delay: 2, ease: 'easeInOut' },
              y: {
                duration: 2,
                delay: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
              },
              rotate: { duration: 3, delay: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' },
            }}
          >
            <img className={'w-full h-auto'} src={'/dice1.png'} width={'147'} height={'162'} alt={'dice1'} />
          </motion.div>
          <motion.div
            className={'absolute top-[35px] -right-[80px] lg:top-auto lg:-bottom-10 lg:-left-[20px] lg:right-auto'}
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
              rotate: [0, -30, 0],
            }}
            transition={{
              opacity: { duration: 1, delay: 2, ease: 'easeInOut' },
              y: {
                duration: 2,
                delay: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
              },
              rotate: { duration: 3, delay: 2.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' },
            }}
          >
            <img className={'w-full h-auto'} src={'/dice2.png'} width={'147'} height={'162'} alt={'dice1'} />
          </motion.div>
          <motion.div
            className={'absolute -top-[14px] -left-[80px] w-[170px] lg:top-10 lg:-left-10'}
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
              rotate: [0, 20, 0],
            }}
            transition={{
              opacity: { duration: 1, delay: 2, ease: 'easeInOut' },
              y: {
                duration: 2,
                delay: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
              },
              rotate: { duration: 3, delay: 2.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' },
            }}
          >
            <img className={'w-full h-auto'} src={'/coin1.png'} width={'147'} height={'162'} alt={'dice1'} />
          </motion.div>
          <motion.div
            className={'absolute top-[140px] -left-2 w-[50px] lg:w-[80px] lg:top-[233px] lg:left-[119px]'}
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 1, delay: 2, ease: 'easeInOut' },
              y: {
                duration: 2,
                delay: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
              },
              rotate: { duration: 2.5, delay: 2.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' },
            }}
          >
            <img className={'w-full h-auto'} src={'/coin2.png'} width={'147'} height={'162'} alt={'dice1'} />
          </motion.div>
          <motion.div
            className={'absolute top-[35px] right-[73px] w-[50px] lg:w-[80px] lg:top-[13px] lg:left-[475px]'}
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 1, delay: 2, ease: 'easeInOut' },
              y: {
                duration: 2,
                delay: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
              },
              rotate: { duration: 2.5, delay: 2.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' },
            }}
          >
            <img className={'w-full h-auto'} src={'/coin3.png'} width={'147'} height={'162'} alt={'dice1'} />
          </motion.div>
          <motion.div
            className={'absolute bottom-[244px] right-5 w-[100px] lg:w-[80px] lg:bottom-[94px] lg:left-[515px]'}
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 1, delay: 2, ease: 'easeInOut' },
              y: {
                duration: 2,
                delay: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
              },
              rotate: { duration: 2.5, delay: 2.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' },
            }}
          >
            <img className={'w-full h-auto'} src={'/coin4.png'} width={'147'} height={'162'} alt={'dice1'} />
          </motion.div>
          <div className={'z-1 relative grid justify-between grid-cols-3 gap-2 max-w-[739px] w-full mx-auto'}>
            <motion.div
              className={'flex items-center gap-1 md:gap-1.5'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              <OneSVG className={'neon-blink-purple w-[17px] h-10 md:w-[28px] md:h-[60px]'} />
              <div className={'text-white text-xs md:text-xl'}>
                Connect <br />
                your wallet
              </div>
            </motion.div>
            <motion.div
              className={'flex items-center gap-1 md:gap-1.5'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              <TwoSVG className={'neon-blink-purple w-[26px] h-12.5 md:w-[42px] md:h-[93px]'} />
              <div className={'text-white text-xs md:text-xl'}>
                Play crypto <br />
                games
              </div>
            </motion.div>
            <motion.div
              className={'flex items-center gap-1 md:gap-1.5'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              <ThreeSVG className={'neon-blink-purple w-[22px] h-12.5 md:w-[45px] md:h-[93px]'} />
              <div className={'text-white text-xs md:text-xl'}>
                Receive 50% <br />
                rakeback
              </div>
            </motion.div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
