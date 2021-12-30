import React, { useState, useEffect } from 'react';
import 'react-phone-input-2/lib/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { listMentorDetails } from '../redux/actions/mentorActions';

import SignUpModal from './join-mentokart/SignUpModal';
import Modal from 'react-modal';

import Footer from './footer/Footer';
import MyNavbar from './header-section/MyNavbar';

const MentorProfile = (props) => {
  const [showModal, setShowModal] = useState(false);
  const loggedIn = JSON.parse(localStorage.getItem('userInfo'));

  const showModalBtn = (bool) => {
    setShowModal(bool);
  };

  const dispatch = useDispatch();
  const mentorDetails = useSelector((state) => state.mentorDetailsList);
  const { mentorDetail } = mentorDetails;
  const {
    user,
    userDetail,
    user_achievement,
    user_experience,
    user_testimonial,
    menteerating,
  } = mentorDetail;

 // console.log(mentorDetail);

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(listMentorDetails(props.match.params.id));
  }, [dispatch, props.match]);

  return (
    <div className='mentor-profile'>
      <MyNavbar />
      <header className='pt-sm-0 pt-5'>
        <div className='container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-5'>
          <img className='guru-img' src='/images/mentorkartguru.png' alt='' />
          <h1 className='mb-1'>MENTOR PROFILE</h1>
        </div>
      </header>
      <div className='secondary pb-5 pt-md-5'>
        <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
          <div className='section-3'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='bio text-center pt-3 mb-4'>
                  <div className='profile-img'>
                    <img
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        height: '100%',
                        width: '100%',
                      }}
                      src={user?.profile_image}
                      className='img-fluid'
                      alt=''
                    />
                  </div>
                  <h2 className='text-capitalize mt-3'>
                    {user?.first_name +
                      ' ' +
                     
                      user?.last_name}
                  </h2>
                  <h6>
                    Designation:{' '}
                    <span className='text-capitalize'>{user?.designation}</span>
                  </h6>
                  <h6>
                    Industry:{' '}
                    <span className='text-capitalize'>
                      {userDetail?.industry}
                    </span>
                  </h6>
                  <small>{user?.user_categories.split(',').join(' | ')}</small>
                </div>
                <div className='book-sec mb-4 px-md-0 px-3'>
                  <div className='row'>
                   {/*} <div className='col-6'>
                      <div className='row me-1'>
                        <button
                          onClick={() => {
                            if (loggedIn === null) {
                              setShowModal(true);
                            }
                          }}
                          className='btn btn-primary'
                        >
                          Book Chat
                        </button>
                      </div>
                        </div>*/}
                        <div className='col-12 '>
                      <div className='ms-2 row'>
                        <button
                          onClick={() => {
                            if (loggedIn === null) {
                              setShowModal(true);
                            }
                          }}
                          className='btn btn-outline-primary '
                        >
                          Book Call
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<div className='rating-sec px-3 mb-md-0 mb-4'>
                  <div className='d-flex align-items-center'>
                    <div className=''>
                      <h3 className='display-4 mb-0'>4.5</h3>
                    </div>
                    <div className='ms-4'>
                      <p className='d-flex mb-0'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='far fa-star'></i>
                      </p>
                      <span>(200 reviews)</span>
                    </div>
                  </div>
                  </div>*/}
                <div className='row showcase-cards mt-md-4 px-md-0 px-3'>
                  <div className='col-lg-6 col-md-12 col-6 ps-0'>
                    <div
                      onClick={() => {
                        if (loggedIn === null) {
                          setShowModal(true);
                        } else {
                          window.location = `https://mentorkart.org/mentorkart?SSO_Mtoken=${loggedIn}&domain=https://mentorkart-new-ui.netlify.app`;
                        }
                      }}
                      className='showcase-card one'
                    >
                      <div className='showcase-card-top d-flex align-items-center py-md-2 px-md-3 py-1 px-2'>
                        <div>
                          <img src='/images/showcase-card-one.png' alt='' />
                        </div>
                        <div className='ms-2'>
                          <p className='mb-0'>Mentor Me</p>
                          <h5 className='mb-0'>For 3 Months</h5>
                          <p className='mb-0 font-lg'>Rs 10000/-</p>
                        </div>
                      </div>
                      <div className='showcase-card-bottom text-center'>
                        Coming soon
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-12 col-6 pe-0'>
                    <div
                      onClick={() => {
                        setShowModal(true);
                      }}
                      className='showcase-card two'
                    >
                      <div className='showcase-card-top d-flex align-items-center py-md-2 px-md-3 py-1 px-2'>
                        <div className=''>
                          <img src='/images/showcase-card-two.png' alt='' />
                        </div>
                        <div className='ms-2'>
                          <p className='mb-0'>Mentor Me</p>
                          <h5 className='mb-0'>For 3 Months</h5>
                          <p className='mb-0 font-lg'>Rs 10000/-</p>
                        </div>
                      </div>
                      <div className='showcase-card-bottom text-center'>
                        Coming Soon
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-8 ps-md-5'>
                <div
                  className='accordion accordion-flush'
                  id='mentor-profile-accordian'
                >
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='flush-headingOne'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#flush-collapseOne'
                        aria-expanded='true'
                        aria-controls='flush-collapseOne'
                      >
                        <h4>About the Mentor</h4>
                      </button>
                    </h2>
                    <div
                      id='flush-collapseOne'
                      className='accordion-collapse collapse show'
                      aria-labelledby='flush-headingOne'
                      data-bs-parent='#accordionFlushExample'
                    >
                      <div className='accordion-body'>
                        <p>{user?.about}</p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='flush-headingTwo'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#flush-collapseTwo'
                        aria-expanded='true'
                        aria-controls='flush-collapseTwo'
                      >
                        <h4>Experience Recognitions</h4>
                      </button>
                    </h2>
                    <div
                      id='flush-collapseTwo'
                      className='accordion-collapse collapse show'
                      aria-labelledby='flush-headingTwo'
                      data-bs-parent='#accordionFlushExample'
                    >
                      <div className='accordion-body'>
                        <div className='experience'>
                          <ul>
                            {user_experience &&
                              user_experience.map((experience, index) => {
                                return (
                                  <li key={index}>
                                    <h6>
                                      {experience.title} at{' '}
                                      {experience.organisation}{' '}
                                    </h6>
                                    <p>{experience.description}</p>
                                  </li>
                                );
                              })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<div className='accordion-item'>
                    <h2 className='accordion-header' id='flush-headingThree'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#flush-collapseThree'
                        aria-expanded='false'
                        aria-controls='flush-collapseThree'
                      >
                        <h4>Awards & Achievements</h4>
                      </button>
                    </h2>
                    <div
                      id='flush-collapseThree'
                      className='accordion-collapse collapse'
                      aria-labelledby='flush-headingThree'
                      data-bs-parent='#accordionFlushExample'
                    >
                      <div className='accordion-body'>
                        <ul>
                          {user_achievement &&
                            user_achievement.map((achievement, index) => {
                              return (
                                <li key={index}>
                                  <h6>
                                    {achievement.name} on {achievement.year}{' '}
                                  </h6>
                                  <p>{achievement.description}</p>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='flush-headingFour'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#flush-collapseFour'
                        aria-expanded='false'
                        aria-controls='flush-collapseFour'
                      >
                        <h4>Testimonials</h4>
                      </button>
                    </h2>
                    <div
                      id='flush-collapseFour'
                      className='accordion-collapse collapse'
                      aria-labelledby='flush-headingFour'
                      data-bs-parent='#accordionFlushExample'
                    >
                      <div className='accordion-body'>
                        <ul>
                          {user_testimonial &&
                            user_testimonial.map((testimonial, index) => {
                              return (
                                <li key={index}>
                                  <p className='mb-0'>
                                    {testimonial.description}
                                  </p>
                                  <address>
                                    {' '}
                                    ~ {testimonial.given_by} on{' '}
                                    {testimonial.year}{' '}
                                  </address>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </div>
                   </div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        id='signup-modal'
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
      <Footer />
    </div>
  );
};

export default MentorProfile;
