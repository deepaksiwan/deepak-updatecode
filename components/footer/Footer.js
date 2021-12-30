import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { listFooter } from '../../redux/actions/footerActions';
import { toast } from 'react-toastify'
import { Dropdown } from 'react-bootstrap';
//import validator from 'validator'
const Footer = () => {
  const [newsletterText, SetNewsletterText] = useState('Submit');
  const [newsletterEmail, SetNewsletterEmail] = useState('');
  const dispatch = useDispatch();
  

  const newsletterSubmit = (e) => {
    e.preventDefault();
    dispatch(listFooter({ email: newsletterEmail }));
    SetNewsletterText('Done');
    SetNewsletterEmail('');
  };
  const popOnSuccessfullySubmission = () => {
    toast.success('Thank You😊, You will be notified with our latest Blogs!');
      }
    
  
  
  return (
    <div className='footer py-5'>
      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
        <div className='row footer-div-1 pb-3 align-items-center'>
          <div className='col-xl-8 col-md-7'>
            <h3>Sign Up to our Newsletter!</h3>
            <p className='mb-0'>
              Get Updates regarding latest blogs news and other amazing stuff
              through a mail
            </p>
          </div>
          <div className='col-xl-4 col-md-5 mt-md-0 mt-3'>
            <form
              onSubmit={(e) => {
                newsletterSubmit(e);
              }}
            >
              <div className='row'>
                <div className='col-9 pe-0'>
                  <div className='form-group'>
                    <input
                    
                     type='email'
                      name='email'
                      email='required'
                      required='true'
                      //pattern="/^(([^<>()\[\]\\.,;:\s@"
                     pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$"
                      value={newsletterEmail}
                      onChange={(e) =>SetNewsletterEmail (e.target.value)}
                      className='form-control'
                    placeholder='Enter Your Email Here...'
                    />

                  </div>
                </div>
                <div className='col-3 ps-md-0 ps-0'>
                  <input
                    type='submit'
                    value={newsletterText}
                    className={'btn'}
                    onClick={popOnSuccessfullySubmission}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='row footer-div-2 pt-sm-4 pt-3 pb-4'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-sm-4 middle-img '>
                <img src='/images/main-icon-white.png' alt='' />
                <p>
                  <span className='pt-3 pb-2 contact'>CONTACT</span>
                  <br />
                  Email : education@edu.com
                  <br />
                  Phone : +1 (234 567-89-00)
                </p>
              </div>
              <div className='col-sm-8 middle-links pt-sm-0 pt-3 pb-sm-0 pb-2'>
                <div className='row'>
                  <div className='col-4 mb-md-3 colored-footer-links'>
                    <Link to='' className='footer-links disabled'>
                      USEFUL LINKS
                    </Link>
                  </div>
                  <div className='col-4 mb-md-3 colored-footer-links'>
                    <Link to='' className='footer-links disabled'>
                      KNOW MORE
                    </Link>
                  </div>
                  <div className='col-4 mb-md-3 colored-footer-links'>
                    <Link to='' className='footer-links disabled'>
                      COMING SOON
                    </Link>
                  </div>
                </div>
                <div className='row '>
                  <div className='col-4'>
                    <ul className='list-group'>
                      <li className='list-group-item'>
                        <Link className='footer-list-links' to='/about'>
                          About
                        </Link>
                      </li>
                      <li className='list-group-item'>
                        <Link className='footer-list-links' to='/our-team'>
                          Our Team
                        </Link>
                      </li>
                      <li className='list-group-item'>
                        <Link className='footer-list-links' to='/our-blogs'>
                          Blogs
                        </Link>
                      </li>
                      <li className='list-group-item'>
                        <Link className='footer-list-links' to='/find-a-mentor'>
                          Find a Mentor
                        </Link>
                      </li>
                      <li className='list-group-item'>
                        <Link to='/as-a-organisation'>For Organisation</Link>
                      </li>
                      <li className='list-group-item'>
                        <Link to='/as-a-campus'>For campus</Link>

                      </li>
                    </ul>
                  </div>
                  <div className='col-4'>
                    <ul className='list-group'>
                      <li className='list-group-item'>
                        <Link
                          className='footer-list-links'
                          to='/privacy-policy'
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li className='list-group-item'>
                        <Link className='footer-list-links' to='/refund-policy'>
                          Refund Policy
                        </Link>
                      </li>
                      <li className='list-group-item'>
                        <Link
                          className='footer-list-links'
                          to='/terms-conditions'
                        >
                          <span className='d-md-block d-none'>
                            Terms & Conditions
                          </span>
                          <span className='d-md-none d-block'>T&C</span>
                        </Link>
                      </li>
                      <li className='list-group-item'>
                        <Link className='footer-list-links' to='/faq'>
                          FAQ
                        </Link>
                      </li>
                      <li className='list-group-item'>
                        <Link className='footer-list-links' to='/careers'>
                          Careers
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className='col-4'>
                    <ul className='list-group'>
                      <li className='list-group-item'>
                        <Link className='footer-list-links' to=''>
                          Jobs
                        </Link>
                      </li>
                      <li className='list-group-item'>
                        <Link className='footer-list-links' to=''>
                          Study Abroad
                        </Link>
                      </li>
                      <li className='list-group-item'>
                        <Link className='footer-list-links' to=''>
                          Partner Program
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 d-flex flex-column align-items-center justify-content-center text-center pt-sm-0 pt-3'>
            <h3 className='mb-0'>Connect with us:</h3>
            <a
              rel='noreferrer'
              target='_blank'
              className='mb-2'
              href='mailto:mentorkart@mentorkart.com'
            >
              mentorkart@mentorkart.com
            </a>
            <div className='socials d-flex justify-content-around align-items-center py-2'>
              <a
                rel='noreferrer'
                target='_blank'
                href='https://twitter.com/mentor_kart'
              >
                <i className='fab fa-twitter social-icons'></i>
              </a>
              <a rel='noreferrer' target='_blank' href='tel:7678276493'>
                <i className='fas fa-phone-square-alt'></i>
              </a>
              <a
                rel='noreferrer'
                target='_blank'
                href='https://www.facebook.com/mentorkart/'
              >
                <i className='fab fa-facebook social-icons'></i>
              </a>
              <a
                rel='noreferrer'
                target='_blank'
                href='https://www.youtube.com/channel/UCI3bjjLPNzth2RrSyQo8acw'
              >
                <i className='fab fa-youtube social-icons'></i>
              </a>
              <a
                rel='noreferrer'
                target='_blank'
                href='https://www.linkedin.com/company/mentorkart/'
              >
                <i className='fab fa-linkedin social-icons'></i>
              </a>
            </div>
          </div>
        </div>
        <div className='footer-div-3 d-flex justify-content-between align-items-center pt-4'>
          <p>
            © 2021 MentorKart is Registered Trademark of DGguru Learning
            Solutions Pvt. Ltd
          </p>
          <p  style={{color: '#f07867'}} className='sec d-md-flex d-none'>© 2021 Mentorkart</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
