import { motion } from 'framer-motion';

import { Wrapper } from '../../layout';

import RoadMapPathSVG from '../../../assets/roadmap-path.svg?react';
import RoadMapPathDSVG from '../../../assets/roadmap-path-d.svg?react';

const Roadmap = () => {
  return (
    <section
      className={
        'relative overflow-hidden bg-[url(/roadmap-bg.png)] bg-cover bg-center lg:bg-[url(/roadmap-bg-d.png)]' +
        ' before:z-0 before:absolute before:top-0 before:left-0 before:right-0 before:bg-gradient-to-b before:from-black before:to-transparent before:h-40 before:w-full lg:before-h-72.5' +
        ' after:z-0 after:absolute after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-t after:from-black after:to-transparent after:h-40 after:w-full lg:after:h-72.5'
      }
    >
      <Wrapper>
        <div className={'z-1 relative py-15 h-[706px] md:h-[817px]'}>
          <h2 className={'text-white text-base font-bold mb-10 md:text-2xl md:mb-6'}>Roadmap</h2>

          <div className={'relative mx-auto max-lg:max-w-[375px]'}>
            <motion.div
              className={'absolute w-fit top-0 left-0 lg:top-[114px] lg:left-[49px]'}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 1, delay: 0.5, ease: 'easeOut' },
                y: {
                  duration: 2,
                  delay: 0.5,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'loop',
                },
              }}
            >
              <img className={'size-25 md:size-37.5'} src={'/roadmap-1.png'} alt={'roadmap 1'} />
              <div
                className={
                  'absolute top-[47px] left-[79px] grid grid-cols-[min-content_1fr] gap-x-4 gap-y-2 w-max lg:top-[37px] lg:left-[115px]'
                }
              >
                <div
                  className={
                    'flex items-center justify-center size-6 text-emerald text-sm border-emerald border-1 row-span-2'
                  }
                >
                  1
                </div>
                <div className={'text-emerald text-sm'}>Early Q4 2025</div>
                <div className={'text-white text-xl'}>Testnet</div>
              </div>
            </motion.div>

            <motion.div
              className={'absolute w-fit top-[138px] left-[184px] lg:top-[399px] lg:left-[243pz]'}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 1, delay: 1, ease: 'easeOut' },
                y: {
                  duration: 2,
                  delay: 1,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'loop',
                },
              }}
            >
              <img className={'size-25 md:size-37.5'} src={'/roadmap-2.png'} alt={'roadmap 1'} />
              <div
                className={
                  'absolute top-[89px] left-[23px] grid grid-cols-[min-content_1fr] gap-x-4 gap-y-2 w-max lg:top-[39px] lg:left-[129px]'
                }
              >
                <div
                  className={
                    'flex items-center justify-center size-6 text-emerald text-sm border-emerald border-1 row-span-2'
                  }
                >
                  2
                </div>
                <div className={'text-emerald text-sm'}>Late Q4 2025</div>
                <div className={'text-white text-xl'}>Mainnet</div>
              </div>
            </motion.div>

            <motion.div
              className={'absolute w-fit top-[240px] left-[36px] lg:top-[155px] lg:left-[556px]'}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 1, delay: 1.5, ease: 'easeOut' },
                y: {
                  duration: 2,
                  delay: 1.5,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'loop',
                },
              }}
            >
              <img className={'size-25 md:size-37.5'} src={'/roadmap-3.png'} alt={'roadmap 1'} />
              <div
                className={
                  'absolute top-[78px] left-[43px] grid grid-cols-[min-content_1fr] gap-x-4 gap-y-2 w-max lg:top-[49px] lg:left-[128px]'
                }
              >
                <div
                  className={
                    'flex items-center justify-center size-6 text-emerald text-sm border-emerald border-1 row-span-2'
                  }
                >
                  3
                </div>
                <div className={'text-emerald text-sm'}>Mid Q1 2026</div>
                <div className={'text-white text-xl'}>TGE + Telegram App</div>
              </div>
            </motion.div>

            <motion.div
              className={'absolute w-fit top-[440px] left-[86px] lg:top-0 lg:left-[934px]'}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 1, delay: 2, ease: 'easeOut' },
                y: {
                  duration: 2,
                  delay: 2,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'loop',
                },
              }}
            >
              <img className={'size-25 md:size-37.5'} src={'/roadmap-4.png'} alt={'roadmap 1'} />
              <div
                className={
                  'absolute top-[73px] left-[61px] grid grid-cols-[min-content_1fr] gap-x-4 gap-y-2 w-max lg:top-[22px] lg:left-[124px]'
                }
              >
                <div
                  className={
                    'flex items-center justify-center size-6 text-emerald text-sm border-emerald border-1 row-span-2'
                  }
                >
                  3
                </div>
                <div className={'text-emerald text-sm'}>Late Q1 2026</div>
                <div className={'text-white text-xl'}>2 new games</div>
              </div>
            </motion.div>

            <div>
              <motion.div
                className={'overflow-hidden -z-1 absolute top-16 left-0 w-[193px] h-[432px] lg:hidden'}
                initial={{ height: 0 }}
                whileInView={{ height: '432px' }}
                transition={{ duration: 3, delay: 1, ease: 'linear' }}
              >
                <RoadMapPathSVG />
              </motion.div>
              <motion.div
                className={'overflow-hidden -z-1 absolute top-16 left-0 w-[1040px] h-[455px] max-lg:hidden'}
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 3, delay: 0.5, ease: 'linear' }}
              >
                <RoadMapPathDSVG />
              </motion.div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Roadmap;
