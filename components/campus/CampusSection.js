import React, { useEffect } from 'react';
import Campus from './Campus';
import { useDispatch, useSelector } from 'react-redux';
import { listpartner } from '../../redux/actions/partnerActions';
import { listWebsiteContent } from '../../redux/actions/websiteContentActions';

// import Swiper core and required modules
import SwiperCore, { A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([A11y, Autoplay]);

const CampusSection = () => {
  const dispatch = useDispatch();
  const partnerList = useSelector((state) => state.partnerList);
  const websiteContentList = useSelector((state) => state.websiteContentList);

  const { partner } = partnerList;
  const { websiteContent } = websiteContentList;

  useEffect(() => {
    dispatch(listpartner());
    dispatch(listWebsiteContent());
  }, [dispatch]);

  return (
    <div className='partners mt-2 mb-4 pt-3'>
      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
        <h1>{websiteContent[0]?.data[22]?.field_data}</h1>
        <div className='partners-images pt-3'>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ autoplay: true, delay: 10000 }}
            breakpoints={{
              // when window width is >= 0px
              0: {
                slidesPerView: 3,
              },
              // when window width is >= 1000px
              600: {
                slidesPerView: 5,
              },
              900: {
                slidesPerView: 7,
              },
            }}
          >
            {partner[0]?.data?.map((x, index) => {
              return (
                <SwiperSlide key={index}>
                  <Campus url={x.partners_img} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CampusSection;
