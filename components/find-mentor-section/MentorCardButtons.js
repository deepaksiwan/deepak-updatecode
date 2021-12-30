//import React from 'react';
import React, { useState } from 'react';
import Modal from 'react-modal';
import SignInModal from '../join-mentokart/SignUpModal';
Modal.setAppElement('#root');

const MentorCardButtons = (props) => {
  const loggedIn = JSON.parse(localStorage.getItem('userInfo'));

  const [showModal, setShowModal] = useState(false);

  const showModalBtn = (bool) => {
    setShowModal(bool);
  };

  return (
    <>
      <button
        onClick={() => {
          if (loggedIn === null) {
            setShowModal(true);
          } else {
            window.location = `https://mentorkart.org/mentorkart?SSO_Mtoken=${loggedIn}&domain=https://mentorkart-new-ui.netlify.app`;
          }
        }}
        className={props.classes}
      >
        {props.text} <br /> <span>{props.smtext}</span>
      </button>

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
        <SignInModal showModalBtn={showModalBtn} />
      </Modal>
    </>
  );
};

export default MentorCardButtons;

