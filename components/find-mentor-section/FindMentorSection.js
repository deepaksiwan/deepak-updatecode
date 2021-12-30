import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MentorCard from './MentorCard';
import { useDispatch, useSelector } from 'react-redux';
import { listMentor } from '../../redux/actions/mentorActions';
import { listWebsiteContent } from '../../redux/actions/websiteContentActions';

// import Swiper core and required modules
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Pagination, A11y, Autoplay]);

const FindMentorSection = () => {
  const mentorList = useSelector((state) => state.mentorList);
  const websiteContentList = useSelector((state) => state.websiteContentList);

  const { mentor, loading } = mentorList;
  const { websiteContent } = websiteContentList;

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(listMentor());
    dispatch(listWebsiteContent());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <div className="find-mentor mt-sm-0 mt-5">
          <div className="container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3">
            <div className="row">
              <div className="col-md-4 left mb-md-0 mb-lg-5 mb-3 ">
                <span className="ms-1">
                  {websiteContent[0]?.data[7]?.field_data}
                </span>
                <h1>{websiteContent[0]?.data[6]?.field_data}</h1>
                <p className="">{websiteContent[0]?.data[8]?.field_data}</p>
                <p className="sec">{websiteContent[0]?.data[9]?.field_data}</p>

                <Link to="/all-mentors" className="btn px-5 btn-ani">
                  Explore
                </Link>
              </div>
              <div className="col-md-8 mentor-card-section">
                <img
                  className="find-mentor-bg"
                  src="/images/dots-1.png"
                  alt=""
                />
                <div className='mentor-cards row px-xl-5 pt-xxl-5 pt-xl-4 pt-lg-5 pt-md-5'>
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ autoplay: true, delay: 10000 }}
                    breakpoints={{
                      // when window width is >= 0px
                      0: {
                        slidesPerView: 1,
                      },
                      // when window width is >= 1000px
                      1300: {
                        slidesPerView: 1.2,
                        spaceBetween: 0,
                      },
                    }}
                  >
                    {mentor.slice(0, 10).map((mentor, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div>
                            <MentorCard
                              id={mentor.id}
                              img={mentor.profile_image}
                              name={mentor.first_name + ' ' + mentor.last_name}
                              categories={mentor.user_categories}
                              charges={mentor.mentor_cost}
                              position={mentor.current_position}
                              designation={mentor.designation}
                              about={mentor.about}
                            />
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FindMentorSection;
