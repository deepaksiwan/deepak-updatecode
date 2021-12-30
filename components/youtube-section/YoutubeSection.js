import React, { useEffect } from 'react';
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';
import { useDispatch, useSelector } from 'react-redux';
import { listYoutube } from '../../redux/actions/youtubeActions';
import { listWebsiteContent } from '../../redux/actions/websiteContentActions';

// import Swiper core and required modules
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Pagination, A11y, Autoplay]);

const YoutubeSection = () => {
  const dispatch = useDispatch();
  const youtubeList = useSelector((state) => state.youtubeList);
  const websiteContentList = useSelector((state) => state.websiteContentList);

  const { youtube } = youtubeList;
  const { websiteContent } = websiteContentList;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(listYoutube());
    dispatch(listWebsiteContent());
  }, [dispatch]);

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      origin: [],
    },
  };
  return (
    <div className='youtube-section py-5 mb-lg-5'>
      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
        <div className='row text-center'>
          <span>{websiteContent[1]?.data[26]?.field_data}</span>
          <h1>{websiteContent[1]?.data[27]?.field_data}</h1>
         </div>
        <div className='mt-3 align-items-center text-center'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
           autoplay={{ autoplay: true, delay: 5000 }}
            breakpoints={{
              // when window width is >= 0px
              0: {
                slidesPerView: 1,
              },
              // when window width is >= 1000px
              900: {
                slidesPerView: 2,
              },
            }}
          >
            {youtube[0] &&
              youtube[0].youtube &&
              youtube[0].youtube.slice(0, 7).map((video,index ) => {
                return (
                  <SwiperSlide key={index}>
                    <div className='youtube-video'>
                      <YouTube videoId={getYouTubeID(video.url)} />
                    </div>
                </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default YoutubeSection;
