import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import SignUpModal from '../join-mentokart/SignUpModal'
import ReactHtmlParser from 'react-html-parser'
import { useDispatch, useSelector } from 'react-redux'
import {
  listStudentSub,
  listProfessionalSub,
  listEntrepreneurSub,
} from '../../redux/actions/subscribeActions'
import { listWebsiteContent } from '../../redux/actions/websiteContentActions'
// import Swiper core and required modules
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'

// install Swiper modules
SwiperCore.use([Pagination, A11y, Autoplay])

const SubscriptionSection = () => {
  const [showModal, setShowModal] = useState(false)
  const [isChecked1, setIsChecked1] = useState(false)
  const [isChecked2, setIsChecked2] = useState(false)
  const [isChecked3, setIsChecked3] = useState(false)
  const [active1, setActive1] = useState('quaterly')
  const [active2, setActive2] = useState('quaterly')
  const [active3, setActive3] = useState('quaterly')
  const dispatch = useDispatch()

  const stdsubscribeList = useSelector((state) => state.subscribeStudent)
  const profsubscribeList = useSelector((state) => state.subscribeProfessional)
  const entsubscribeList = useSelector((state) => state.subscribeEntrepreneur)
  const websiteContentList = useSelector((state) => state.websiteContentList)

  const { Studentsubscribe } = stdsubscribeList
  const { Professionalsubscribe } = profsubscribeList
  const { Entrepreneursubscribe } = entsubscribeList
  const { websiteContent } = websiteContentList

  useEffect(() => {
    dispatch(listStudentSub())
    dispatch(listProfessionalSub())
    dispatch(listEntrepreneurSub())
    dispatch(listWebsiteContent())
  }, [dispatch])

  const showModalBtn = (bool) => {
    setShowModal(bool)
  }
  return (
    <div className="subscription-section my-md-5 my-3">
      <div className="container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3">
        <div className="row text-center">
          <span>{websiteContent[0]?.data[18]?.field_data}</span>
          <h1>{websiteContent[0]?.data[19]?.field_data}</h1>
        </div>
        <div className="mt-3 align-items-center ">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ autoplay: true, delay: 20000 }}
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
            <SwiperSlide>
              <div>
                <div className="card align-items-center">
                  <span className="category">
                    {Studentsubscribe && Studentsubscribe[0]?.category}
                  </span>
                  <div className="mt-5 pt-3">
                    {active1 === 'quaterly' ? (
                      <h2 className="price">
                        ₹ {Studentsubscribe && Studentsubscribe[0]?.price}/
                        {Studentsubscribe && Studentsubscribe[0]?.interval}
                      </h2>
                    ) : (
                      <h2 className="price">
                        ₹ {Studentsubscribe && Studentsubscribe[1]?.price}/
                        {Studentsubscribe && Studentsubscribe[1]?.interval}
                      </h2>
                    )}
                  </div>
                  <div className="toggle-option-button">
                    <label
                      class={
                        active1 === 'quaterly'
                          ? 'toggler toggler-is-active'
                          : 'toggler'
                      }
                    >
                      Quaterly
                    </label>
                    <div class="toggle">
                      <input
                        type="checkbox"
                        id="switcher"
                        class="check"
                        checked={isChecked1}
                        onChange={() => {
                          setIsChecked1(!isChecked1)
                          if (active1 === 'quaterly') {
                            setActive1('yearly')
                          } else if (active1 === 'yearly') {
                            setActive1('quaterly')
                          }
                        }}
                      />
                      <b class="b switch"></b>
                    </div>
                    <label
                      class={
                        active1 === 'yearly'
                          ? 'toggler toggler-is-active'
                          : 'toggler'
                      }
                    >
                      Yearly
                    </label>
                  </div>
                  <p className="description">
                    {active1 === 'quaterly' ? (
                      <>
                        {Studentsubscribe &&
                          ReactHtmlParser(Studentsubscribe[0]?.description)}
                      </>
                    ) : (
                      <>
                        {Studentsubscribe &&
                          ReactHtmlParser(Studentsubscribe[1]?.description)}
                      </>
                    )}
                  </p>
                  <div className="bottom-subs">
                    <hr />
                    <div className="row ">
                      <button
                        onClick={() => showModalBtn(true)}
                        className="btn btn-sm btn-ani"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <div className="card align-items-center">
                  <span className="category">
                    {Professionalsubscribe &&
                      Professionalsubscribe[0]?.category}
                  </span>
                  <div className="mt-5 pt-3">
                    {active2 === 'quaterly' ? (
                      <h2 className="price">
                        ₹{' '}
                        {Professionalsubscribe &&
                          Professionalsubscribe[0]?.price}
                        /
                        {Professionalsubscribe &&
                          Professionalsubscribe[0]?.interval}
                      </h2>
                    ) : (
                      <h2 className="price">
                        ₹{' '}
                        {Professionalsubscribe &&
                          Professionalsubscribe[1]?.price}
                        /
                        {Professionalsubscribe &&
                          Professionalsubscribe[1]?.interval}
                      </h2>
                    )}
                  </div>
                  <div className="toggle-option-button">
                    <label
                      class={
                        active2 === 'quaterly'
                          ? 'toggler toggler-is-active'
                          : 'toggler'
                      }
                    >
                      Quaterly
                    </label>
                    <div class="toggle">
                      <input
                        type="checkbox"
                        id="switcher"
                        class="check"
                        checked={isChecked2}
                        onChange={() => {
                          setIsChecked2(!isChecked2)
                          if (active2 === 'quaterly') {
                            setActive2('yearly')
                          } else if (active2 === 'yearly') {
                            setActive2('quaterly')
                          }
                        }}
                      />
                      <b class="b switch"></b>
                    </div>
                    <label
                      class={
                        active2 === 'yearly'
                          ? 'toggler toggler-is-active'
                          : 'toggler'
                      }
                    >
                      Yearly
                    </label>
                  </div>
                  <p className="description">
                    {active2 === 'quaterly' ? (
                      <>
                        {Professionalsubscribe &&
                          ReactHtmlParser(
                            Professionalsubscribe[0]?.description
                          )}
                      </>
                    ) : (
                      <>
                        {Professionalsubscribe &&
                          ReactHtmlParser(
                            Professionalsubscribe[1]?.description
                          )}
                      </>
                    )}
                  </p>
                  <div className="bottom-subs">
                    <hr />
                    <div className="row ">
                      <button
                        onClick={() => showModalBtn(true)}
                        className="btn btn-sm btn-ani"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <div className="card align-items-center">
                  <span className="category">
                    {Entrepreneursubscribe &&
                      Entrepreneursubscribe[0]?.category}
                  </span>
                  <div className="mt-5 pt-3">
                    {active3 === 'quaterly' ? (
                      <h2 className="price">
                        ₹{' '}
                        {Entrepreneursubscribe &&
                          Entrepreneursubscribe[0]?.price}
                        /
                        {Entrepreneursubscribe &&
                          Entrepreneursubscribe[0]?.interval}
                      </h2>
                    ) : (
                      <h2 className="price">
                        ₹{' '}
                        {Entrepreneursubscribe &&
                          Entrepreneursubscribe[1]?.price}
                        /
                        {Entrepreneursubscribe &&
                          Entrepreneursubscribe[1]?.interval}
                      </h2>
                    )}
                  </div>
                  <div className="toggle-option-button">
                    <label
                      class={
                        active3 === 'quaterly'
                          ? 'toggler toggler-is-active'
                          : 'toggler'
                      }
                    >
                      Quaterly
                    </label>
                    <div class="toggle">
                      <input
                        type="checkbox"
                        id="switcher"
                        class="check"
                        checked={isChecked3}
                        onChange={() => {
                          setIsChecked3(!isChecked3)
                          if (active3 === 'quaterly') {
                            setActive3('yearly')
                          } else if (active3 === 'yearly') {
                            setActive3('quaterly')
                          }
                        }}
                      />
                      <b class="b switch"></b>
                    </div>
                    <label
                      class={
                        active3 === 'yearly'
                          ? 'toggler toggler-is-active'
                          : 'toggler'
                      }
                    >
                      Yearly
                    </label>
                  </div>
                  <p className="description">
                    {active3 === 'quaterly' ? (
                      <>
                        {Entrepreneursubscribe &&
                          ReactHtmlParser(
                            Entrepreneursubscribe[0]?.description
                          )}
                      </>
                    ) : (
                      <>
                        {Entrepreneursubscribe &&
                          ReactHtmlParser(
                            Entrepreneursubscribe[1]?.description
                          )}
                      </>
                    )}
                  </p>
                  <div className="bottom-subs">
                    <hr />
                    <div className="row ">
                      <button
                        onClick={() => showModalBtn(true)}
                        className="btn btn-sm btn-ani"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
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

export default SubscriptionSection
