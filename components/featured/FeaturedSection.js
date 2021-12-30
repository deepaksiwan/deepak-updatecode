import React, { useEffect } from 'react'
import Featured from './Featured'
import { useDispatch, useSelector } from 'react-redux'
import { listFeature } from '../../redux/actions/featureActions'
import { listWebsiteContent } from '../../redux/actions/websiteContentActions'

// import Swiper core and required modules
import SwiperCore, { A11y, Autoplay } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'

// install Swiper modules
SwiperCore.use([A11y, Autoplay])

const FeaturedSection = () => {
  const dispatch = useDispatch()
  const featureList = useSelector((state) => state.featureList)
  const websiteContentList = useSelector((state) => state.websiteContentList)

  const { feature } = featureList
  const { websiteContent } = websiteContentList

  useEffect(() => {
    dispatch(listFeature())
    dispatch(listWebsiteContent())
  }, [dispatch])

  return (
    <div className="partners my-md-5 my-0 mb-5 pt-4">
      <div className="container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3">
        <h1>{websiteContent[0]?.data[21]?.field_data}</h1>
        <div className="partners-images pt-3">
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
            {feature[0]?.data?.map((x, index) => {
              return (
                <SwiperSlide key={index}>
                  <Featured url={x.news_img} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default FeaturedSection
