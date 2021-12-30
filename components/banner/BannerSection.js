import React, { useEffect } from 'react';
import Banners from './Banners';
import { useDispatch, useSelector } from 'react-redux';
import { listBanner } from '../../redux/actions/bannerActions';

// import Swiper core and required modules
import SwiperCore, { A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([A11y, Autoplay]);

const BannerSection = () => {
  const dispatch = useDispatch();
  const bannerList = useSelector((state) => state.bannerList);
  const { banner, loading } = bannerList;

  useEffect(() => {
    dispatch(listBanner());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        banner[0]?.data.length !== 0 && (
          <div className='banners-section mt-md-0 mt-4'>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ autoplay: true, delay: 10000 }}
              breakpoints={{
                // when window width is >= 0px
                0: {
                  slidesPerView: 1,
                },
              }}
            >
              {banner[0]?.data?.map((banner, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Banners banner={banner} myclass='overlay' />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )
      )}
    </>
  );
};
export default BannerSection;
