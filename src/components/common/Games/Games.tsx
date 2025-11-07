import { Wrapper } from '../../layout';

import MoreGamesSVG from '../../../assets/more-games.svg?react';
import SoonSVG from '../../../assets/soon.svg?react';

const Games = () => {
  return (
    <section id={'games'}>
      <Wrapper>
        <div className={'mb-7.5 md:mb-15'}>
          <h2 className={'text-white text-2xl font-bold mb-3 md:mb-4'}>Games</h2>
          <div className={'grid grid-cols-3 gap-3 md:gap-5 lg:grid-cols-5'}>
            <a
              className={
                'relative overflow-hidden shadow-emerald rounded-[10px] aspect-[0.92] md:rounded-[20px] border-1 border-emerald bg-[url(/grid-preview-1.png)] bg-size-[100%] tr-d-all hover:bg-size-[120%]'
              }
              href={'/grid/'}
            >
              <img
                className={'hover:scale-110 tr-d-all'}
                src={'/grid-preview-2.png'}
                width={'256'}
                height={'256'}
                alt={'treasury'}
              />
              <div
                className={'absolute bottom-2 left-3.5 text-white text-xs font-bold md:text-xl md:bottom-4 md:left-7.5'}
              >
                Grid Treasure
              </div>
            </a>
            <a
              className={
                'relative overflow-hidden shadow-emerald rounded-[10px] aspect-[0.92] md:rounded-[20px] border-1 border-emerald bg-[url(/dice-preview-1.png)] bg-size-[100%] tr-d-all hover:bg-size-[120%]'
              }
              href={'/dice/'}
            >
              <img
                className={'hover:scale-110 tr-d-all'}
                src={'/dice-preview-2.png'}
                width={'256'}
                height={'256'}
                alt={'dice'}
              />
              <div
                className={'absolute bottom-2 left-3.5 text-white text-xs font-bold md:text-xl md:bottom-4 md:left-7.5'}
              >
                Dice
              </div>
            </a>

            <div
              className={
                'flex flex-col items-center justify-center relative overflow-hidden rounded-[10px] aspect-[0.92] md:rounded-[20px] border-1 border-grey-dark bg-[url(/more-games-preview.png)] bg-size-[100%] bg-center tr-d-all hover:bg-size-[120%]'
              }
            >
              <MoreGamesSVG className={'neon-blink-purple'} />
              <SoonSVG className={'neon-blink-emerald -mt-2'} />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Games;
