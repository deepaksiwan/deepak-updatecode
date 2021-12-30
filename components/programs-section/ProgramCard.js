import React, { useState } from 'react';
import SignUpModal from '../join-mentokart/SignUpModal';
import Modal from 'react-modal';

const ProgramCard = ({ data }) => {
  const loggedIn = JSON.parse(localStorage.getItem('userInfo'));
  const [showModal, setShowModal] = useState(false);

  const showModalBtn = (bool) => {
    setShowModal(bool);
  };

  return (
    <div>
      <div className='program-card p-3'>
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

        <div className=''>
          <div className='px-0'>
            <div className='img'>
              {data.icon_url === null ? (
                <img src='/images/user.png' alt='' />
              ) : (
                <img
                  src={
                    'https://mentorkart-admin-staging.s3.amazonaws.com/' +
                    data.icon_url
                  }
                  style={{
                    borderRadius: '10px',
                    objectFit: 'cover',
                    width: '100%',
                    height: '165px'
                  }}
                  alt=''
                />
              )}
            </div>
          </div>
          <div className=''>
            <div className='category-tags my-2'>
              {data.user_category.split(',').map((cate, index) => {
                return (
                  <span key={index} className='btn btn-sm me-2'>
                    {cate}
                  </span>
                );
              })}
            </div>
            <h2>{data.mk_course_name}</h2>
            <h1>₹ {data.price} </h1>
            <p className='mb-md-3 mb-2 packages-description-homepage'>
              {data.description}
            </p>
            <button
              onClick={() => {
                if (loggedIn === null) {
                  setShowModal(true);
                } else {
                  window.location = `http://mentorkart.org/mentorkart?SSO_Mtoken=${loggedIn}&domain=https://mentorkart-new-ui.netlify.app`;
                }
              }}
              className='enroll-btn btn px-xl-5 px-md-3 px-3 py-md-1 btn-ani'
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
