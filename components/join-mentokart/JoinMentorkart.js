import React, { useState, useEffect } from 'react'
import JoinCard from './JoinCard'
import SignUpModal from './SignUpModal'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { listAdvertisements } from '../../redux/actions/advertisementsActions'
import { listWebsiteContent } from '../../redux/actions/websiteContentActions'
// import Swiper core and required modules
import SwiperCore, { A11y, Autoplay } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'

// install Swiper modules
SwiperCore.use([A11y, Autoplay])

Modal.setAppElement('#root')

const JoinMentorkart = () => {
  const [showModal, setShowModal] = useState(false)
  const advertisementsList = useSelector((state) => state.advertisementsList)
  // console.log(advertisements)
  const websiteContentList = useSelector((state) => state.websiteContentList)

  const { advertisements } = advertisementsList
  // console.log('advertisements',advertisements)

  const { websiteContent } = websiteContentList

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listAdvertisements())
    dispatch(listWebsiteContent())
  }, [dispatch])

  const showModalBtn = (bool) => {
    setShowModal(bool)
  }

  // console.log(advertisements);

  return (
    <div className="join-mentorkart">
      <div className="container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3">
        <div className="row">
          <div className="col-md-4 left">
            <span className="ms-1">
              {websiteContent[0]?.data[10]?.field_data}
            </span>
            <h1>{websiteContent[0]?.data[11]?.field_data}</h1>
            <p className="">{websiteContent[0]?.data[12]?.field_data}</p>
            <div className="d-flex py-3 align-items-center">
              <div className="icon-container text-white d-flex justify-content-center align-items-center px-2">
                <i className="fas fa-graduation-cap fa-2x"></i>
              </div>
              <p className="sec ms-3 mb-0">
                {websiteContent[0]?.data[13]?.field_data}
              </p>
            </div>
          </div>
          <div className="col-md-7 offset-md-1 mt-md-0 mt-5">
            <div className="join-cards">
              <div className="row">
                <div className="col-6 one">
                  <JoinCard
                    as=""
                    title="Individual"
                    url="/images/circle.png"
                    showModalBtn={showModalBtn}
                  />
                </div>
                <div className="col-6 two">
                  <JoinCard
                    as="/as-a-organisation"
                    title="Organization"
                    url="/images/poly-1.png"
                    showModalBtn={showModalBtn}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-6 offset-3 three">
                  <JoinCard
                    as="/as-a-campus"
                    title="Campus"
                    url="/images/dots-1.png"
                    showModalBtn={showModalBtn}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {advertisements.length && (
          <div className="ad-cards pb-5 pt-4 align-items-center text-center">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ autoplay: true, delay: 10000 }}
              breakpoints={{
                // when window width is >= 0px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 1000px
                600: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 3,
                },
              }}
            >
              {advertisements[0]?.data?.map((ad, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="ad-card">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={'https://' + ad.ad_url}
                      >
                        <img
                          src={
                            `${process.env.WEBSITE_URL_PINS}/uploaded-images/` +
                            ad.ad_image
                          }
                          alt=""
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        )}
      </div>

      <Modal
        id="signup-modal"
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={{
          overlay: {
            zIndex: '5000',
          },
          content: {
            maxWidth: '1100px',
            margin: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '15px',
          },
        }}
      >
        <SignUpModal showModalBtn={showModalBtn} />
      </Modal>
    </div>
  )
}

export default JoinMentorkart
