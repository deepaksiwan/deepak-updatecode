import React from 'react';
import { Link } from 'react-router-dom';

const JoinCard = (props) => {
  const loggedIn = JSON.parse(localStorage.getItem('userInfo'));
  return (
    <div>
      <div className='px-xl-4 px-lg-3 px-0 py-lg-4 py-3'>
        <div className='join-card px-sm-4 px-3 py-sm-4 py-3'>
          <img src={props.url} className='sec-img' alt='' />
          <span>as</span>
          <h2>{props.title}</h2>

          {props.as === '' ? (
            <button
              className='signup-btn btn-ani btn py-1 px-3'
              onClick={() => {
                if (loggedIn === null) {
                  props.showModalBtn(true);
                } else {
                  window.location = `http://mentorkart.org/mentorkart?SSO_Mtoken=${loggedIn}&domain=https://mentorkart-new-ui.netlify.app`;
                }
              }}
            >
              SignUp Now
            </button>
          ) : (
            <Link to={props.as} className='signup-btn btn-ani btn py-1 px-3'>
               Request a callback
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinCard;
