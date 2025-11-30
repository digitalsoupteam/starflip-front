import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import { Wrapper } from '../../layout';
import { Button } from '../../ui';

const Banners = () => {
  return (
    <section>
      <Wrapper>
        <div className={'pt-7.5 mb-5 md:pt-15'}>
          <Swiper
            className={''}
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: true }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <div
                className={
                  'flex flex-col justify-end' +
                  ' overflow-hidden aspect-[2.08] p-5 border-grey-dark border-1 rounded-[20px] bg-[url(/banner-1.png)] bg-[120%_auto] bg-center tr-d-all hover:bg-position-[20%]' +
                  ' after:w-full after:h-[85px] after:absolute after:bottom-[1px] after:left-[1px] after:right-[1px] after:rounded-[20px] after:bg-gradient-to-t after:from-black from-30% after:to-transparent lg:after:h-[115px]'
                }
              >
                <div className={'z-1 relative grid items-end grid-cols-[1fr_max-content] gap-x-2.5'}>
                  <div className={'text-white text-sm font-bold md:text-2xl'}>
                    Invite a friend — you both get 65% rakeback boost for 7 days
                  </div>
                  <Button visualType={'primary'} size={'sm'} href={'/'}>
                    Invite
                  </Button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={
                  'flex flex-col justify-end' +
                  ' overflow-hidden aspect-[2.08] p-5 border-grey-dark border-1 rounded-[20px] bg-[url(/banner-2.png)] bg-[120%_auto] bg-center tr-d-all hover:bg-position-[20%]' +
                  ' after:w-full after:h-[85px] after:absolute after:bottom-[1px] after:left-[1px] after:right-[1px] after:rounded-[20px] after:bg-gradient-to-t after:from-black from-30% after:to-transparent lg:after:h-[115px]'
                }
              >
                <div className={'z-1 relative grid items-end grid-cols-[1fr_max-content] gap-x-2.5'}>
                  <div className={'text-white text-sm font-bold md:text-2xl'}>
                    Invite a friend — you both get 65% rakeback boost for 7 days
                  </div>
                  <Button visualType={'primary'} size={'sm'} href={'/'}>
                    Invite
                  </Button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={
                  'flex flex-col justify-end' +
                  ' overflow-hidden aspect-[2.08] p-5 border-grey-dark border-1 rounded-[20px] bg-[url(banner-1.png)] bg-[120%_auto] bg-center tr-d-all hover:bg-position-[20%]' +
                  ' after:w-full after:h-[85px] after:absolute after:bottom-[1px] after:left-[1px] after:right-[1px] after:rounded-[20px] after:bg-gradient-to-t after:from-black from-30% after:to-transparent lg:after:h-[115px]'
                }
              >
                <div className={'z-1 relative grid items-end grid-cols-[1fr_max-content] gap-x-2.5'}>
                  <div className={'text-white text-sm font-bold md:text-2xl'}>
                    Invite a friend — you both get 65% rakeback boost for 7 days
                  </div>
                  <Button visualType={'primary'} size={'sm'} href={'/'}>
                    Invite
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Wrapper>
    </section>
  );
};

export default Banners;
