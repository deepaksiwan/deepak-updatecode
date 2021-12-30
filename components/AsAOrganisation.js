import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { asOrganisation } from '../redux/actions/asCampusActions';
import { useDispatch } from 'react-redux';

import Footer from './footer/Footer';
import MyNavbar from './header-section/MyNavbar';

const AsAOrganisation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo();
  });
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [phone, SetPhone] = useState(0);
  const [orgName, SetOrgName] = useState('');
  const [designation, SetDesignation] = useState('');
  const [message, SetMessage] = useState('');
  const [address, SetAddress] = useState('');

  const handleSubmit = () => {
    dispatch(
      asOrganisation({
        name,
        email,
        phone,
        orgName,
        message,
        address,
        designation,
      })
    );
  };
  

  return (
    <div>
      <MyNavbar />
      <div className='be-a-mentor'>
        <header className=''>
          <div className='container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-4 py-3'>
            <img className='guru-img' src='/images/mentorkartguru.png' alt='' />
            <h4 className='mt-3 mb-1'>Register Now</h4>
            <h1 className='mb-1'>As A Organisation</h1>
            <p className='mb-3 lead-md'>
              Leave your information here, we'll get back to you
            </p>
          </div>
        </header>
        <img className='rocket-img' src='/images/rocket.png' alt='' />
        <img className='plane-img' src='/images/plane.png' alt='' />
        <div className='form-container'>
          <div className='container-xxl px-lg-5 px-md-4 px-sm-3 py-md-5 py-4'>
            <div className='row mx-xxl-5'>
              <div className='col-lg-5'>
                <div className='organisation-left'>
                  <span>Organisation</span>
                  <h1>Lorem ipsum sit.</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className='sec'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Enim laudantium non totam quas, quaerat voluptatum minima.
                  </p>
                </div>
              </div>
              <div className='col-lg-7'>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  <div className=''>
                    <div className='form-group mb-4'>
                      <label htmlFor='org-name'>Name of the Organisation</label>
                      <input
                        type='text'
                        name='OrgName'
                        id='org-name'
                        required
                        value={orgName}
                        onChange={(e) => {
                          SetOrgName(e.target.value);
                        }}
                        placeholder='Enter Organisation Name'
                        className='form-control'
                      />
                    </div>
                  </div>
                  <div className='form-group mb-4'>
                    <label htmlFor='address'>
                      Full Address of Organisation
                    </label>
                    <textarea
                      name='Address'
                      id='address'
                      
                      className='form-control'
                      required
                      placeholder='Enter Address of Organisation'
                      rows='3'
                      value={address}
                      onChange={(e) => SetAddress(e.target.value)}
                    ></textarea>
                  </div>
                  <div className=''>
                    <div className='form-group mb-4'>
                      <label htmlFor='full-name'>Full Name of Applicant</label>
                      <input
                        type='text'
                        name='FullName'
                        required
                        id='full-name'
                        value={name}
                        onChange={(e) => {
                          SetName(e.target.value);
                        }}
                        placeholder='Enter Full Name'
                        className='form-control'
                      />
                    </div>
                  </div>
                  <div className=''>
                    <div className='form-group mb-4'>
                      <label htmlFor='designation'>
                        Designation of Applicant
                      </label>
                      <input
                        type='text'
                        name='Designation'
                        id='designation'
                        required
                        value={designation}
                        onChange={(e) => {
                          SetDesignation(e.target.value);
                        }}
                        placeholder='Enter Designation'
                        className='form-control'
                      />
                    </div>
                  </div>
                  <div className=''>
                    <div className='form-group mb-4'>
                      <label htmlFor='email'>Email Address</label>
                      <input
                        type='email'
                        name='Email'
                        id='email'
                      
                        pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$"
                       
                        required
                        value={email}
                        onChange={(e) => {
                          SetEmail(e.target.value);
                        }}
                        placeholder='Enter Your Email'
                        className='form-control'
                      />
                    </div>
                  </div>
                  <div className=''>
                    <div className='form-group mb-4'>
                      <label htmlFor='mobile'>Mobile Number</label>
                      <PhoneInput
                        inputExtraProps={{
                          name: 'phone',
                          required: true,
                        }}
                        className='form-control'
                        country={'in'}
                        value={phone}
                        onChange={(phone) => SetPhone(phone)}
                      />
                    </div>
                  </div>
                  <div className='form-group mb-4'>
                    <label htmlFor='message'>Message</label>
                    <textarea
                      name='Message'
                      id='message'
                      className='form-control'
                      required
                      placeholder='Enter Your Message'
                      rows='4'
                      value={message}
                      onChange={(e) => SetMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className='form-group my-md-5 mb-md-0 mb-3 text-center'>
                    <input
                      type='submit'
                      value='Register Now'
                      className='btn  btn-md-lg  btn-success'
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AsAOrganisation;
