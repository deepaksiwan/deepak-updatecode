import React, { useEffect } from 'react';
import TestimonialCardContent from './TestimonialCardContent';
import { useDispatch, useSelector } from 'react-redux';
import { listTestimonial } from '../../redux/actions/testimonialsActions';

// import Swiper core and required modules
import SwiperCore, { A11y, Autoplay, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';

// install Swiper modules
SwiperCore.use([A11y, Autoplay, Navigation]);

const TestimonialCard = () => {
  const dispatch = useDispatch();
  const testimonialList = useSelector((state) => state.testimonialList);
  const { testimonial } = testimonialList;

  useEffect(() => {
    dispatch(listTestimonial());
  }, [dispatch]);

  return (
    <div className='testimonial-card p-5'>
      <img className='colons' src='/images/colons.png' alt='' />
      <img className='poly-1' src='/images/poly-1.png' alt='' />
      <img className='blue-dot' src='/images/blue-dot.png' alt='' />
      <img className='circle' src='/images/circle.png' alt='' />
      <div className='sec-bg-div'></div>
      <Swiper
        navigation={true}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ autoplay: true, delay: 10000 }}
        breakpoints={{
          // when window width is >= 0px
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {testimonial[0]?.data?.map((testimonial, index) => {
          return (
            <SwiperSlide key={index}>
              <TestimonialCardContent data={testimonial} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimonialCard;
