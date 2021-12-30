import React, { useState, useEffect, useRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { beMentor } from '../redux/actions/asCampusActions';
import { useDispatch } from 'react-redux';

import Footer from './footer/Footer';
import MyNavbar from './header-section/MyNavbar';
import SelectSearch from 'react-select-search';
import { industryOptions } from './data/industryOptions';
import { firstPrefOptions } from './data/firstPrefOptions';
import "react-select-search/style.css";
// import { ToastBody } from 'react-bootstrap';
// import { useRef } from "react";

/*function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}*/

const BeAMentor = () => {
  // const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  // console.log(industryOptions);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo();
  });
  // const searchIndustryDropdownValue = useRef();
  const otherFirstPreference = useRef();
  const otherSecondPreference = useRef();
  const otherThirdPreference = useRef();
  const otherIndustryName = useRef();
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [phone, SetPhone] = useState(0);
  const [gender, SetGender] = useState(1);
  const [linkedIn, SetLinkedIn] = useState('');
  const [address, SetAddress] = useState('');
  const [dob, SetDOB] = useState('');
  const [interests, SetInterest] = useState([]);
  const [whomToMentor, SetWhomToMentor] = useState([]);
  const [industry, SetIndustry] = useState('');
  // const [otherIndustry, SetOtherIndustry] = useState('');
  const [firstPref, SetFirstPref] = useState('');
  const [secondPref, SetSecondPref] = useState('');
  const [thirdPref, SetThirdPref] = useState('');
  const [designation, Setdesignation] = useState('');
  const [about, SetAbout] = useState('');
  const [getToKnow, SetGetToKnow] = useState('');
  const [grad_college, SetGradCollege] = useState('');
  const [grad_degree, SetGradDegree] = useState('');
  const [grad_year, SetGradYear] = useState('');
  const [post_grad_college, SetPostGradCollege] = useState('');
  const [post_grad_degree, SetPostGradDegree] = useState('');
  const [post_grad_year, SetPostGradYear] = useState('');

  //TODO:
  //submit KRNEY pr saarey IMPUT INITIAL STATE MEIN LAANEY HAI!!
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      beMentor({
        name: name,
        email: email,
        phone: phone,
        gender: gender === 1 ? 'Male' : 'Female',
        linkedIn: linkedIn,
        dob: dob,
        address: address,
        interests: JSON.stringify(interests),
        whomToMentor: JSON.stringify(whomToMentor),
        industry: industry,
        otherIndustry: otherIndustryName.current.value,
        firstPref: firstPref === 'Others' ? otherFirstPreference.current.value : firstPref,
        secondPref: secondPref === 'Others' ? otherSecondPreference.current.value : secondPref,
        thirdPref: thirdPref === 'Others' ? otherThirdPreference.current.value : thirdPref,
        designation: designation,
        about: about,
        getToKnow: getToKnow,
        grad_college: grad_college,
        grad_degree: grad_degree,
        grad_year: grad_year,
        post_grad_college: post_grad_college,
        post_grad_degree: post_grad_degree,
        post_grad_year: post_grad_year,
      })
    );

  };

  const toggleInterests = (x) => {
    var index = interests.indexOf(x);

    if (index === -1) {
      interests.push(x);
    } else {
      interests.splice(index, 1);
    }
    SetInterest(interests);
    // console.log(interests);
  };

  const toggleWhom = (x) => {
    var index = whomToMentor.indexOf(x);

    if (index === -1) {
      whomToMentor.push(x);
    } else {
      whomToMentor.splice(index, 1);
    }
    SetWhomToMentor(whomToMentor);
    // console.log(whomToMentor);
  };

  const searchDropdownHandler = (totalOptions) => {

    return (searchVal) => {
      if (searchVal === '')
        return totalOptions;

      const filteredOptions = totalOptions.filter(
        (val) => {
          return (
            val.name.toLowerCase().startsWith(searchVal.toLowerCase())
          );
        });
      return filteredOptions;
    }
  }
  // if(searchIndustryDropdownValue.current.value === '')
  //return industryOptions;
  // console.log('what is e---->',e);}
  /*const filtereedIndustryOptions = industryOptions.filter(
    (val) => {
      return ( 
        val.name.toLowerCase().startsWith(searchIndustryDropdownValue.current.value.toLowerCase())
        );
    });
  return filtereedIndustryOptions
}*/

  const industryHandleChange = (...args) => {
    // searchInput.current.querySelector("input").value = "";
    console.log("ARGS:", args);
    SetIndustry(args[1].name);
    // console.log('searchIndustryDropdownValue--->',searchIndustryDropdownValue.current);
    console.log("CHANGE:");
  };

  const otherFirstPrefChangeHandler = (...args) => {
    // searchInput.current.querySelector("input").value = "";
    console.log("ARGS:", args);
    SetFirstPref(args[1].name);
    // console.log('searchIndustryDropdownValue--->',searchIndustryDropdownValue.current);
    console.log("CHANGE_FIRST_PREF:");
  };

  const otherSecondPrefChangeHandler = (...args) => {
    // searchInput.current.querySelector("input").value = "";
    console.log("ARGS:", args);
    SetSecondPref(args[1].name);
    // console.log('searchIndustryDropdownValue--->',searchIndustryDropdownValue.current);
    console.log("CHANGED_Second_Pref:");
  };

  const otherThirdPrefChangeHandler = (...args) => {
    // searchInput.current.querySelector("input").value = "";
    console.log("ARGS:", args);
    SetThirdPref(args[1].name);
    // console.log('searchIndustryDropdownValue--->',searchIndustryDropdownValue.current);
    console.log("CHANGE_THIRD_PREF:");
  };


  return (
    <div>
      <MyNavbar />
      <div className='be-a-mentor'>
        <header className=''>
          <div className='container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3'>
            <img className='guru-img' src='/images/mentorkartguru.png' alt='' />
            <h4 className='mt-3 mb-1'>Register Now</h4>
            <h1 className='mb-1'>BECOME A MENTOR</h1>
            <p className='mb-3 lead-md'>
              Leave your information here, we'll get back to you
            </p>
          </div>
        </header>
        <img className='rocket-img' src='/images/rocket.png' alt='' />
        <img className='plane-img' src='/images/plane.png' alt='' />
        <div className='form-container'>
          <div className='container py-md-5 py-3 px-md-3 px-4'>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='form-group mb-4'>
                    <label htmlFor='full-name'>Full Name</label>
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
                <div className='col-lg-6'>
                  <div className='form-group mb-4'>
                    <label htmlFor='email'>Email Address</label>
                    <input
                      type='email'
                      name='Email'
                      required
                      id='email'
                      value={email}
                      onChange={(e) => {
                        SetEmail(e.target.value);
                      }}
                      placeholder='Enter Your Email'
                      className='form-control'
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='form-group mb-4'>
                    <label htmlFor='mobile'>Mobile Number</label>
                    <PhoneInput
                      inputExtraProps={{
                        name: 'phone',
                        required: true,
                      }}
                      className='form-control'
                      name="PhoneNumber"
                      country={'in'}
                      value={phone}
                      onChange={(phone) => SetPhone(phone)}
                    />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group mb-4'>
                    <label>Gender</label>
                    <div className='row'>
                      <div className='col-6'>
                        <div className='form-check me-5'>
                          <label className='form-check-label'>
                            <input
                              type='radio'
                              className='form-check-input'
                              name='Gender'
                              required
                              id='male'
                              value={gender}
                              onClick={(e) => {
                                SetGender(1);
                              }}
                            />
                            Male
                          </label>
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='form-check me-5'>
                          <label className='form-check-label'>
                            <input
                              type='radio'
                              className='form-check-input'
                              name='Gender'
                              id='female'
                              value={gender}
                              onClick={(e) => {
                                SetGender(0);
                              }}
                            />
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='form-group mb-4'>
                    <label htmlFor='linked-in'>Linked In URL</label>
                    <input
                      type='text'
                      name='LinkedIn'
                      id='linked-in'
                      required
                      className='form-control'
                      placeholder='Enter Your Linked In URL'
                      value={linkedIn}
                      onChange={(e) => SetLinkedIn(e.target.value)}
                    />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group mb-4'>
                    <label htmlFor='dob'>Date of Birth</label>
                    <input
                      className='form-control'
                      type='date'
                      name='DOB'
                      required
                      id='dob'
                      value={dob}
                      onChange={(e) => SetDOB(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className='form-group mb-4'>
                <label htmlFor='address'>Full Address</label>
                <textarea
                  name='Address'
                  id='address'
                  className='form-control'
                  placeholder='Enter Full Address'
                  rows='3'
                  value={address}
                  onChange={(e) => SetAddress(e.target.value)}
                ></textarea>
              </div>
              <div className='form-group mb-4'>
                <label>Choose Your Interest</label>
                <div className='d-flex flex-wrap'>
                  <div className='form-check me-5'>
                    <input
                      className='form-check-input'
                      name=""
                      type='checkbox'
                      value='Entrepreneurship'
                      id='entrepreneurship'
                      onChange={(e) => toggleInterests(e.target.value)}
                    />
                    <label
                      className='form-check-label'
                      htmlFor='entrepreneurship'
                    >
                      Entrepreneurship
                    </label>
                  </div>
                  <div className='form-check me-5'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='Business Coach'
                      id='business-coach'
                      onChange={(e) => toggleInterests(e.target.value)}
                    />
                    <label
                      className='form-check-label'
                      htmlFor='business-coach'
                    >
                      Business Coach
                    </label>
                  </div>
                  <div className='form-check me-5'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='Industry Mentorhip'
                      id='industry'
                      onChange={(e) => toggleInterests(e.target.value)}
                    />
                    <label className='form-check-label' htmlFor='industry'>
                      Industry Mentorhip
                    </label>
                  </div>
                  <div className='form-check me-5'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='Life Coaching'
                      id='life'
                      onChange={(e) => toggleInterests(e.target.value)}
                    />
                    <label className='form-check-label' htmlFor='life'>
                      Life Coaching
                    </label>
                  </div>
                  <div className='form-check me-5'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='Career Counselling'
                      id='career-counselling'
                      onChange={(e) => toggleInterests(e.target.value)}
                    />
                    <label
                      className='form-check-label'
                      htmlFor='career-counselling'
                    >
                      Career Counselling
                    </label>
                  </div>
                  <div className='form-check me-5'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='Create Webinars, Workshop etc.'
                      id='create-webinar'
                      onChange={(e) => toggleInterests(e.target.value)}
                    />
                    <label
                      className='form-check-label'
                      htmlFor='create-webinar'
                    >
                      Create Webinars, Workshop etc.
                    </label>
                  </div>
                  <div className='form-check me-5'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='Other'
                      id='other'
                      onChange={(e) => toggleInterests(e.target.value)}
                    />
                    <label className='form-check-label' htmlFor='other'>
                      Other
                    </label>
                  </div>
                </div>
              </div>
              <div className='form-group mb-4'>
                <label>Whom do you want to Mentor</label>
                <div className='d-flex flex-wrap'>
                  <div className='form-check me-5'>
                    <input

                      className='form-check-input'
                      type='checkbox'
                      value='Students'
                      id='students'
                      onChange={(e) => toggleWhom(e.target.value)}
                    />
                    <label className='form-check-label' htmlFor='students'>
                      Students
                    </label>
                  </div>
                  <div className='form-check me-5'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='Entrepreneurs'
                      id='entrepreneurs'
                      onChange={(e) => toggleWhom(e.target.value)}
                    />
                    <label className='form-check-label' htmlFor='entrepreneurs'>
                      Entrepreneurs
                    </label>
                  </div>
                  <div className='form-check me-5'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='Professionals'
                      id='professionals'
                      onChange={(e) => toggleWhom(e.target.value)}
                    />
                    <label className='form-check-label' htmlFor='professionals'>
                      Professionals
                    </label>
                  </div>
                </div>
              </div>
              
            <div className='  form-group mb-4'>
                <label htmlFor=''>Select Your Industry</label>
                <SelectSearch
                  // ref={searchIndustryDropdownValue}
                  options={industryOptions}
                  filterOptions={searchDropdownHandler}
                  search
                  required
                 // className= 'form-select'
                  value={industry}
                  name="Industry"
                  emptyMessage='Not found'
                  placeholder='---'
                  onChange={industryHandleChange}
                />
              </div>
              {industry === 'Others' && (
                <div className='form-group mb-4'>
                  <label htmlFor='others'>
                    Others <span>(please specify)</span>
                  </label>
                  <input
                    type='text'
                    name='Others'
                    id='others'
                    required
                    className= 'form-select'
                    
                    className='form-control'
                    placeholder='Other Industry'
                    ref={otherIndustryName}
                  // onChange={(e) => SetOtherIndustry(e.target.value)}
                  />
                </div>
              )}
              <div className='form-group mb-4'>
                <label htmlFor='first-pref'>
                  Choose Domain Expertise <span>(1st preference)</span>
                </label>
                <SelectSearch
                  // ref={searchIndustryDropdownValue}
                  options={firstPrefOptions}
                  filterOptions={searchDropdownHandler}
                  search
                  required
                  //className='form-select'
                  value={firstPref}
                  name="firstPref"
                  emptyMessage='Not found'
                  placeholder='---'
                  onChange={otherFirstPrefChangeHandler}
                />
              </div>
              {firstPref === 'Others' && (
                <div className='form-group mb-4'>
                  <label htmlFor='others'>
                    Others <span>(please specify)</span>
                  </label>
                  <input
                    type='text'
                    name='Others'
                    id='others'
                    className='form-select'
                    //className='form-control'
                    placeholder='Other Industry'
                    ref={otherFirstPreference}
                  // onChange={(e) => SetOtherIndustry(e.target.value)}
                  />
                </div>
              )}
              <div className='form-group mb-4'>
                <label htmlFor='second-pref'>
                  Choose Domain Expertise <span>(2nd preference)</span>
                </label>
                <select
                  name='second-pref'
                  id='second-pref'
                  required
                  value={secondPref}
                  onChange={(e) => SetSecondPref(e.target.value)}
                  className='form-select'
                >
                  <option value=''>---</option>
                  <option value='3D Painting'>3D Painting</option>
                  <option value='Accounting'>Accounting</option>
                  <option value='Ad tech'>Ad tech</option>
                  <option value='Advisory'>Advisory</option>
                  <option value='Agritech'>Agritech</option>
                  <option value='Agricultural chemicals'>
                    Agricultural chemicals
                  </option>
                  <option value='Agriculture'>Agriculture</option>
                  <option value='Animal Husbandry'>Animal Husbandry</option>
                  <option value='Apparel'>Apparel</option>
                  <option value='Apparel &amp; accessories'>
                    Apparel &amp; accessories
                  </option>
                  <option value='Application Development'>
                    Application Development
                  </option>
                  <option value='Art'>Art</option>
                  <option value='Auto &amp; Truck manufacturers'>
                    Auto &amp; Truck manufacturers
                  </option>
                  <option value='Auto vehicles, parts &amp; service retailers'>
                    Auto vehicles, parts &amp; service retailers
                  </option>
                  <option value='Auto, Truck &amp; Motorcycle Parts'>
                    Auto, Truck &amp; Motorcycle Parts
                  </option>
                  <option value='Aviation and others'>
                    Aviation and others
                  </option>
                  <option value='Baby care'>Baby care</option>
                  <option value='Banking and Financial Services'>
                    Banking and Financial Services
                  </option>
                  <option value='Big data'>Big data</option>
                  <option value='Billing and invoicing'>
                    Billing and invoicing
                  </option>
                  <option value='Biotechnology'>Biotechnology</option>
                  <option value='Bitcoin and Blockchain'>
                    Bitcoin and Blockchain
                  </option>
                  <option value='BPO'>BPO</option>
                  <option value='Branding'>Branding</option>
                  <option value='Business Analytics'>Business Analytics</option>
                  <option value='Business finance'>Business finance</option>
                  <option value='Business Intelligence'>
                    Business Intelligence
                  </option>
                  <option value='Business support services'>
                    Business support services
                  </option>
                  <option value='Business support supplies'>
                    Business support supplies
                  </option>
                  <option value='Clean tech'>Clean tech</option>
                  <option value='Clean technology'>Clean technology</option>
                  <option value='Cloud'>Cloud</option>
                  <option value='Coaching'>Coaching</option>
                  <option value='Collaboration'>Collaboration</option>
                  <option value='Commercial printing services'>
                    Commercial printing services
                  </option>
                  <option value='Commodity chemicals'>
                    Commodity chemicals
                  </option>
                  <option value='Comparison shopping'>
                    Comparison shopping
                  </option>
                  <option value='Computer and electronic retailers'>
                    Computer and electronic retailers
                  </option>
                  <option value='Construction and engeering'>
                    Construction and engeering
                  </option>
                  <option value='Construction materials'>
                    Construction materials
                  </option>
                  <option value='Construction supplies and fixtures'>
                    Construction supplies and fixtures
                  </option>
                  <option value='Consulting'>Consulting</option>
                  <option value='Consumer products'>Consumer products</option>
                  <option value='Consumer services'>Consumer services</option>
                  <option value='Corporate social responsibility'>
                    Corporate social responsibility
                  </option>
                  <option value='Coworking spaces'>Coworking spaces</option>
                  <option value='Crowdfunding'>Crowdfunding</option>
                  <option value='Customer support'>Customer support</option>
                  <option value='CXM'>CXM</option>
                  <option value='Cyber security'>Cyber security</option>
                  <option value='Dairy farming'>Dairy farming</option>
                  <option value='Data science'>Data science</option>
                  <option value='Defense equipment'>Defense equipment</option>
                  <option value='Digital marketing'>Digital marketing</option>
                  <option value='Digital marketing (SEO Automation)'>
                    Digital marketing (SEO Automation)
                  </option>
                  <option value='Digital media'>Digital media</option>
                  <option value='Digital media blogging'>
                    Digital media blogging
                  </option>
                  <option value='Digital media news'>Digital media news</option>
                  <option value='Digital media publishing'>
                    Digital media publishing
                  </option>
                  <option value='Digital media Video'>
                    Digital media Video
                  </option>
                  <option value='Discovery'>Discovery</option>
                  <option value='Diversified Chemicals'>
                    Diversified Chemicals
                  </option>
                  <option value='Drones'>Drones</option>
                  <option value='E-Commerce'>E-Commerce</option>
                  <option value='E-Learning'>E-Learning</option>
                  <option value='Education'>Education</option>
                  <option value='Education technology'>
                    Education technology
                  </option>
                  <option value='Electric vehicles'>Electric vehicles</option>
                  <option value='Electronics'>Electronics</option>
                  <option value='Electronics/ Instrumentation'>
                    Electronics/ Instrumentation
                  </option>
                  <option value='Embedded'>Embedded</option>
                  <option value='Employment services'>
                    Employment services
                  </option>
                  <option value='Enterprise Mobility'>
                    Enterprise Mobility
                  </option>
                  <option value='Entertainment'>Entertainment</option>
                  <option value='Environmental services &amp; Equipment'>
                    Environmental services &amp; Equipment
                  </option>
                  <option value='ERP'>ERP</option>
                  <option value='Event management'>Event management</option>
                  <option value='Experiental Travel'>Experiental Travel</option>
                  <option value='Facility management'>
                    Facility management
                  </option>
                  <option value='Fan Merchandise'>Fan Merchandise</option>
                  <option value='Fantasy sports'>Fantasy sports</option>
                  <option value='Fashion'>Fashion</option>
                  <option value='Fashion Technology'>Fashion Technology</option>
                  <option value='Fintech'>Fintech</option>
                  <option value='Fisheries'>Fisheries</option>
                  <option value='Food &amp; Beverage'>
                    Food &amp; Beverage
                  </option>
                  <option value='Food Processing'>Food Processing</option>
                  <option value='Food technology/ Food delivery'>
                    Food technology/ Food delivery
                  </option>
                  <option value='Foreign exchange'>Foreign exchange</option>
                  <option value='Frieght &amp; Logistic services'>
                    Frieght &amp; Logistic services
                  </option>
                  <option value='Handicraft'>Handicraft</option>
                  <option value='Health &amp; Wellness'>
                    Health &amp; Wellness
                  </option>
                  <option value='Healthcare IT'>Healthcare IT</option>
                  <option value='Healthcare services'>
                    Healthcare services
                  </option>
                  <option value='Healthcare technology'>
                    Healthcare technology
                  </option>
                  <option value='Holiday Rentals'>Holiday Rentals</option>
                  <option value='Home care'>Home care</option>
                  <option value='Home furnishings retail'>
                    Home furnishings retail
                  </option>
                  <option value='Home improvement products and services retailers'>
                    Home improvement products and services retailers
                  </option>
                  <option value='Home security Solutions'>
                    Home security Solutions
                  </option>
                  <option value='Homebuilding'>Homebuilding</option>
                  <option value='Horticulture'>Horticulture</option>
                  <option value='Hospitality'>Hospitality</option>
                  <option value='Hotel'>Hotel</option>
                  <option value='Housina'>Housina</option>
                  <option value='Human Resource'>Human Resource</option>
                  <option value='Import-Export'>Import-Export</option>
                  <option value='Industrial Design'>Industrial Design</option>
                  <option value='Industrial/ Energy'>Industrial/ Energy</option>
                  <option value='Insurance'>Insurance</option>
                  <option value='Integrated communication services'>
                    Integrated communication services
                  </option>
                  <option value='International Business'>
                    International Business
                  </option>
                  <option value='Internet/ web services'>
                    Internet/ web services
                  </option>
                  <option value='Internships'>Internships</option>
                  <option value='IT Consulting'>IT Consulting</option>
                  <option value='IT management'>IT management</option>
                  <option value='IT Services'>IT Services</option>
                  <option value='Jewellery'>Jewellery</option>
                  <option value='Job Preparation'>Job Preparation</option>
                  <option value='KPO'>KPO</option>
                  <option value='Laundry'>Laundry</option>
                  <option value='Leather footwear'>Leather footwear</option>
                  <option value='Leather textile goods'>
                    Leather textile goods
                  </option>
                  <option value='Legal'>Legal</option>
                  <option value='Lifestyle'>Lifestyle</option>
                  <option value='Location based'>Location based</option>
                  <option value='Loans'>Loans</option>
                  <option value='Loyalty'>Loyalty</option>
                  <option value='Machine learning'>Machine learning</option>
                  <option value='Manufacture of Electrical Equipment'>
                    Manufacture of Electrical Equipment
                  </option>
                  <option value='Manufacture of Machinery and Equipment'>
                    Manufacture of Machinery and Equipment
                  </option>
                  <option value='Manufacturing'>Manufacturing</option>
                  <option value='Manufacturing &amp; warehouse'>
                    Manufacturing &amp; warehouse
                  </option>
                  <option value='Market research'>Market research</option>
                  <option value='Marketing/ Advertising'>
                    Marketing/ Advertising
                  </option>
                  <option value='Media and Entertainment'>
                    Media and Entertainment
                  </option>
                  <option value='Medical devices and equipment'>
                    Medical devices and equipment
                  </option>
                  <option value='Medical devices Biomedical'>
                    Medical devices Biomedical
                  </option>
                  <option value='Microbrewery'>Microbrewery</option>
                  <option value='Microfinance'>Microfinance</option>
                  <option value='Mobile wallets payments'>
                    Mobile wallets payments
                  </option>
                  <option value='Movies'>Movies</option>
                  <option value='natural language processing'>
                    natural language processing
                  </option>
                  <option value='Network Technology Solutions'>
                    Network Technology Solutions
                  </option>
                  <option value='New age construction technologies'>
                    New age construction technologies
                  </option>
                  <option value='NGO'>NGO</option>
                  <option value='NLP'>NLP</option>
                  <option value='Non-Leather footwear'>
                    Non-Leather footwear
                  </option>
                  <option value='Non- Leather textiles goods'>
                    Non- Leather textiles goods
                  </option>
                  <option value='Oil and gas drilling'>
                    Oil and gas drilling
                  </option>
                  <option value='Oil and gas exploration and production'>
                    Oil and gas exploration and production
                  </option>
                  <option value='Oil and gas Transportation services'>
                    Oil and gas Transportation services
                  </option>
                  <option value='Oil related services and equipment'>
                    Oil related services and equipment
                  </option>
                  <option value='Online classified'>Online classified</option>
                  <option value='OOH Media'>OOH Media</option>
                  <option value='Operations'>Operations</option>
                  <option value='Organic agriculture'>
                    Organic agriculture
                  </option>
                  <option value='P2P Landing'>P2P Landing</option>
                  <option value='Passenger Transportation services'>
                    Passenger Transportation services
                  </option>
                  <option value='Payment platforms'>Payment platforms</option>
                  <option value='Personal care'>Personal care</option>
                  <option value='Personal finance'>Personal finance</option>
                  <option value='Personal security'>Personal security</option>
                  <option value='Pharmaceutical'>Pharmaceutical</option>
                  <option value='Photography'>Photography</option>
                  <option value='Physical toys and games'>
                    Physical toys and games
                  </option>
                  <option value='Point of sales'>Point of sales</option>
                  <option value='Power'>Power</option>
                  <option value='Product development'>
                    Product development
                  </option>
                  <option value='Professional information services'>
                    Professional information services
                  </option>
                  <option value='Project management'>Project management</option>
                  <option value='Public citizen security solutions'>
                    Public citizen security solutions
                  </option>
                  <option value='Railway'>Railway</option>
                  <option value='Recruitment Jobs'>Recruitment Jobs</option>
                  <option value='Renewable Energy Solutions'>
                    Renewable Energy Solutions
                  </option>
                  <option value='Renewable Nuclear energy'>
                    Renewable Nuclear energy
                  </option>
                  <option value='Renewable Solar energy'>
                    Renewable Solar energy
                  </option>
                  <option value='Renewable wind energy'>
                    Renewable wind energy
                  </option>
                  <option value='Restaurants'>Restaurants</option>
                  <option value='Retail technology'>Retail technology</option>
                  <option value='Roads'>Roads</option>
                  <option value='Robotics application'>
                    Robotics application
                  </option>
                  <option value='Robotics technology'>
                    Robotics technology
                  </option>
                  <option value='Sales'>Sales</option>
                  <option value='SCM'>SCM</option>
                  <option value='Semiconductor'>Semiconductor</option>
                  <option value='Skill development'>Skill development</option>
                  <option value='Skills assessment'>Skills assessment</option>
                  <option value='Smart home'>Smart home</option>
                  <option value='Social commerce'>Social commerce</option>
                  <option value='Social media'>Social media</option>
                  <option value='Software'>Software</option>
                  <option value='Space technology'>Space technology</option>
                  <option value='Specialty chemicals'>
                    Specialty chemicals
                  </option>
                  <option value='Sports promotion and networking'>
                    Sports promotion and networking
                  </option>
                  <option value='Strategy'>Strategy</option>
                  <option value='Stock Trading'>Stock Trading</option>
                  <option value='Supply Chain'>Supply Chain</option>
                  <option value='Talent management'>Talent management</option>
                  <option value='Testing'>Testing</option>
                  <option value='Textile'>Textile</option>
                  <option value='Ticketing'>Ticketing</option>
                  <option value='Tires and rubber products'>
                    Tires and rubber products
                  </option>
                  <option value='Traffic management'>Traffic management</option>
                  <option value='Training'>Training</option>
                  <option value='Transport infrastructure'>
                    Transport infrastructure
                  </option>
                  <option value='Transportation'>Transportation</option>
                  <option value='Travel'>Travel</option>
                  <option value='Utility services'>Utility services</option>
                  <option value='Virtual games'>Virtual games</option>
                  <option value='Waste management'>Waste management</option>
                  <option value='Wayside amenties'>Wayside amenties</option>
                  <option value='Wearables'>Wearables</option>
                  <option value='Web design'>Web design</option>
                  <option value='Web development'>Web development</option>
                  <option value='Weddings'>Weddings</option>
                  <option value='Wireless'>Wireless</option>
                  <option value='Others'>Others</option>
                </select>
                {/*<SelectSearch
                  // ref={searchIndustryDropdownValue}
                  options={secondPrefOptions}
                  filterOptions={searchDropdownHandler}
                  search
                  required
                  value={secondPref}
                  name="secondPref"
                  emptyMessage='Not found'
                  placeholder='---'
                  onChange={otherSecondPrefChangeHandler}
              />*/}
              </div>
              {secondPref === 'Others' && (
                <div className='form-group mb-4'>
                  <label htmlFor='others'>
                    Others <span>(please specify)</span>
                  </label>
                  <input
                    type='text'
                    name='Others'
                    id='others'
                    className='form-control'
                    placeholder='2nd-Preference'
                    // value={otherIndustry}
                    ref={otherSecondPreference}
                  // onChange={(e) => SetOtherIndustry(e.target.value)}
                  />
                </div>
              )}
              <div className='form-group mb-4'>
                <label htmlFor='third-pref'>
                  Choose Domain Expertise <span>(3rd preference)</span>
                </label>
                <select
                  name='third-pref'
                  id='third-pref'
                  required
                  value={thirdPref}
                  onChange={(e) => SetThirdPref(e.target.value)}
                  className='form-select'
                >
                  <option value=''>---</option>
                  <option value='3D Painting'>3D Painting</option>
                  <option value='Accounting'>Accounting</option>
                  <option value='Ad tech'>Ad tech</option>
                  <option value='Advisory'>Advisory</option>
                  <option value='Agritech'>Agritech</option>
                  <option value='Agricultural chemicals'>
                    Agricultural chemicals
                  </option>
                  <option value='Agriculture'>Agriculture</option>
                  <option value='Animal Husbandry'>Animal Husbandry</option>
                  <option value='Apparel'>Apparel</option>
                  <option value='Apparel &amp; accessories'>
                    Apparel &amp; accessories
                  </option>
                  <option value='Application Development'>
                    Application Development
                  </option>
                  <option value='Art'>Art</option>
                  <option value='Auto &amp; Truck manufacturers'>
                    Auto &amp; Truck manufacturers
                  </option>
                  <option value='Auto vehicles, parts &amp; service retailers'>
                    Auto vehicles, parts &amp; service retailers
                  </option>
                  <option value='Auto, Truck &amp; Motorcycle Parts'>
                    Auto, Truck &amp; Motorcycle Parts
                  </option>
                  <option value='Aviation and others'>
                    Aviation and others
                  </option>
                  <option value='Baby care'>Baby care</option>
                  <option value='Banking and Financial Services'>
                    Banking and Financial Services
                  </option>
                  <option value='Big data'>Big data</option>
                  <option value='Billing and invoicing'>
                    Billing and invoicing
                  </option>
                  <option value='Biotechnology'>Biotechnology</option>
                  <option value='Bitcoin and Blockchain'>
                    Bitcoin and Blockchain
                  </option>
                  <option value='BPO'>BPO</option>
                  <option value='Branding'>Branding</option>
                  <option value='Business Analytics'>Business Analytics</option>
                  <option value='Business finance'>Business finance</option>
                  <option value='Business Intelligence'>
                    Business Intelligence
                  </option>
                  <option value='Business support services'>
                    Business support services
                  </option>
                  <option value='Business support supplies'>
                    Business support supplies
                  </option>
                  <option value='Clean tech'>Clean tech</option>
                  <option value='Clean technology'>Clean technology</option>
                  <option value='Cloud'>Cloud</option>
                  <option value='Coaching'>Coaching</option>
                  <option value='Collaboration'>Collaboration</option>
                  <option value='Commercial printing services'>
                    Commercial printing services
                  </option>
                  <option value='Commodity chemicals'>
                    Commodity chemicals
                  </option>
                  <option value='Comparison shopping'>
                    Comparison shopping
                  </option>
                  <option value='Computer and electronic retailers'>
                    Computer and electronic retailers
                  </option>
                  <option value='Construction and engeering'>
                    Construction and engeering
                  </option>
                  <option value='Construction materials'>
                    Construction materials
                  </option>
                  <option value='Construction supplies and fixtures'>
                    Construction supplies and fixtures
                  </option>
                  <option value='Consulting'>Consulting</option>
                  <option value='Consumer products'>Consumer products</option>
                  <option value='Consumer services'>Consumer services</option>
                  <option value='Corporate social responsibility'>
                    Corporate social responsibility
                  </option>
                  <option value='Coworking spaces'>Coworking spaces</option>
                  <option value='Crowdfunding'>Crowdfunding</option>
                  <option value='Customer support'>Customer support</option>
                  <option value='CXM'>CXM</option>
                  <option value='Cyber security'>Cyber security</option>
                  <option value='Dairy farming'>Dairy farming</option>
                  <option value='Data science'>Data science</option>
                  <option value='Defense equipment'>Defense equipment</option>
                  <option value='Digital marketing'>Digital marketing</option>
                  <option value='Digital marketing (SEO Automation)'>
                    Digital marketing (SEO Automation)
                  </option>
                  <option value='Digital media'>Digital media</option>
                  <option value='Digital media blogging'>
                    Digital media blogging
                  </option>
                  <option value='Digital media news'>Digital media news</option>
                  <option value='Digital media publishing'>
                    Digital media publishing
                  </option>
                  <option value='Digital media Video'>
                    Digital media Video
                  </option>
                  <option value='Discovery'>Discovery</option>
                  <option value='Diversified Chemicals'>
                    Diversified Chemicals
                  </option>
                  <option value='Drones'>Drones</option>
                  <option value='E-Commerce'>E-Commerce</option>
                  <option value='E-Learning'>E-Learning</option>
                  <option value='Education'>Education</option>
                  <option value='Education technology'>
                    Education technology
                  </option>
                  <option value='Electric vehicles'>Electric vehicles</option>
                  <option value='Electronics'>Electronics</option>
                  <option value='Electronics/ Instrumentation'>
                    Electronics/ Instrumentation
                  </option>
                  <option value='Embedded'>Embedded</option>
                  <option value='Employment services'>
                    Employment services
                  </option>
                  <option value='Enterprise Mobility'>
                    Enterprise Mobility
                  </option>
                  <option value='Entertainment'>Entertainment</option>
                  <option value='Environmental services &amp; Equipment'>
                    Environmental services &amp; Equipment
                  </option>
                  <option value='ERP'>ERP</option>
                  <option value='Event management'>Event management</option>
                  <option value='Experiental Travel'>Experiental Travel</option>
                  <option value='Facility management'>
                    Facility management
                  </option>
                  <option value='Fan Merchandise'>Fan Merchandise</option>
                  <option value='Fantasy sports'>Fantasy sports</option>
                  <option value='Fashion'>Fashion</option>
                  <option value='Fashion Technology'>Fashion Technology</option>
                  <option value='Fintech'>Fintech</option>
                  <option value='Fisheries'>Fisheries</option>
                  <option value='Food &amp; Beverage'>
                    Food &amp; Beverage
                  </option>
                  <option value='Food Processing'>Food Processing</option>
                  <option value='Food technology/ Food delivery'>
                    Food technology/ Food delivery
                  </option>
                  <option value='Foreign exchange'>Foreign exchange</option>
                  <option value='Frieght &amp; Logistic services'>
                    Frieght &amp; Logistic services
                  </option>
                  <option value='Handicraft'>Handicraft</option>
                  <option value='Health &amp; Wellness'>
                    Health &amp; Wellness
                  </option>
                  <option value='Healthcare IT'>Healthcare IT</option>
                  <option value='Healthcare services'>
                    Healthcare services
                  </option>
                  <option value='Healthcare technology'>
                    Healthcare technology
                  </option>
                  <option value='Holiday Rentals'>Holiday Rentals</option>
                  <option value='Home care'>Home care</option>
                  <option value='Home furnishings retail'>
                    Home furnishings retail
                  </option>
                  <option value='Home improvement products and services retailers'>
                    Home improvement products and services retailers
                  </option>
                  <option value='Home security Solutions'>
                    Home security Solutions
                  </option>
                  <option value='Homebuilding'>Homebuilding</option>
                  <option value='Horticulture'>Horticulture</option>
                  <option value='Hospitality'>Hospitality</option>
                  <option value='Hotel'>Hotel</option>
                  <option value='Housina'>Housina</option>
                  <option value='Human Resource'>Human Resource</option>
                  <option value='Import-Export'>Import-Export</option>
                  <option value='Industrial Design'>Industrial Design</option>
                  <option value='Industrial/ Energy'>Industrial/ Energy</option>
                  <option value='Insurance'>Insurance</option>
                  <option value='Integrated communication services'>
                    Integrated communication services
                  </option>
                  <option value='International Business'>
                    International Business
                  </option>
                  <option value='Internet/ web services'>
                    Internet/ web services
                  </option>
                  <option value='Internships'>Internships</option>
                  <option value='IT Consulting'>IT Consulting</option>
                  <option value='IT management'>IT management</option>
                  <option value='IT Services'>IT Services</option>
                  <option value='Jewellery'>Jewellery</option>
                  <option value='Job Preparation'>Job Preparation</option>
                  <option value='KPO'>KPO</option>
                  <option value='Laundry'>Laundry</option>
                  <option value='Leather footwear'>Leather footwear</option>
                  <option value='Leather textile goods'>
                    Leather textile goods
                  </option>
                  <option value='Legal'>Legal</option>
                  <option value='Lifestyle'>Lifestyle</option>
                  <option value='Location based'>Location based</option>
                  <option value='Loans'>Loans</option>
                  <option value='Loyalty'>Loyalty</option>
                  <option value='Machine learning'>Machine learning</option>
                  <option value='Manufacture of Electrical Equipment'>
                    Manufacture of Electrical Equipment
                  </option>
                  <option value='Manufacture of Machinery and Equipment'>
                    Manufacture of Machinery and Equipment
                  </option>
                  <option value='Manufacturing'>Manufacturing</option>
                  <option value='Manufacturing &amp; warehouse'>
                    Manufacturing &amp; warehouse
                  </option>
                  <option value='Market research'>Market research</option>
                  <option value='Marketing/ Advertising'>
                    Marketing/ Advertising
                  </option>
                  <option value='Media and Entertainment'>
                    Media and Entertainment
                  </option>
                  <option value='Medical devices and equipment'>
                    Medical devices and equipment
                  </option>
                  <option value='Medical devices Biomedical'>
                    Medical devices Biomedical
                  </option>
                  <option value='Microbrewery'>Microbrewery</option>
                  <option value='Microfinance'>Microfinance</option>
                  <option value='Mobile wallets payments'>
                    Mobile wallets payments
                  </option>
                  <option value='Movies'>Movies</option>
                  <option value='natural language processing'>
                    natural language processing
                  </option>
                  <option value='Network Technology Solutions'>
                    Network Technology Solutions
                  </option>
                  <option value='New age construction technologies'>
                    New age construction technologies
                  </option>
                  <option value='NGO'>NGO</option>
                  <option value='NLP'>NLP</option>
                  <option value='Non-Leather footwear'>
                    Non-Leather footwear
                  </option>
                  <option value='Non- Leather textiles goods'>
                    Non- Leather textiles goods
                  </option>
                  <option value='Oil and gas drilling'>
                    Oil and gas drilling
                  </option>
                  <option value='Oil and gas exploration and production'>
                    Oil and gas exploration and production
                  </option>
                  <option value='Oil and gas Transportation services'>
                    Oil and gas Transportation services
                  </option>
                  <option value='Oil related services and equipment'>
                    Oil related services and equipment
                  </option>
                  <option value='Online classified'>Online classified</option>
                  <option value='OOH Media'>OOH Media</option>
                  <option value='Operations'>Operations</option>
                  <option value='Organic agriculture'>
                    Organic agriculture
                  </option>
                  <option value='P2P Landing'>P2P Landing</option>
                  <option value='Passenger Transportation services'>
                    Passenger Transportation services
                  </option>
                  <option value='Payment platforms'>Payment platforms</option>
                  <option value='Personal care'>Personal care</option>
                  <option value='Personal finance'>Personal finance</option>
                  <option value='Personal security'>Personal security</option>
                  <option value='Pharmaceutical'>Pharmaceutical</option>
                  <option value='Photography'>Photography</option>
                  <option value='Physical toys and games'>
                    Physical toys and games
                  </option>
                  <option value='Point of sales'>Point of sales</option>
                  <option value='Power'>Power</option>
                  <option value='Product development'>
                    Product development
                  </option>
                  <option value='Professional information services'>
                    Professional information services
                  </option>
                  <option value='Project management'>Project management</option>
                  <option value='Public citizen security solutions'>
                    Public citizen security solutions
                  </option>
                  <option value='Railway'>Railway</option>
                  <option value='Recruitment Jobs'>Recruitment Jobs</option>
                  <option value='Renewable Energy Solutions'>
                    Renewable Energy Solutions
                  </option>
                  <option value='Renewable Nuclear energy'>
                    Renewable Nuclear energy
                  </option>
                  <option value='Renewable Solar energy'>
                    Renewable Solar energy
                  </option>
                  <option value='Renewable wind energy'>
                    Renewable wind energy
                  </option>
                  <option value='Restaurants'>Restaurants</option>
                  <option value='Retail technology'>Retail technology</option>
                  <option value='Roads'>Roads</option>
                  <option value='Robotics application'>
                    Robotics application
                  </option>
                  <option value='Robotics technology'>
                    Robotics technology
                  </option>
                  <option value='Sales'>Sales</option>
                  <option value='SCM'>SCM</option>
                  <option value='Semiconductor'>Semiconductor</option>
                  <option value='Skill development'>Skill development</option>
                  <option value='Skills assessment'>Skills assessment</option>
                  <option value='Smart home'>Smart home</option>
                  <option value='Social commerce'>Social commerce</option>
                  <option value='Social media'>Social media</option>
                  <option value='Software'>Software</option>
                  <option value='Space technology'>Space technology</option>
                  <option value='Specialty chemicals'>
                    Specialty chemicals
                  </option>
                  <option value='Sports promotion and networking'>
                    Sports promotion and networking
                  </option>
                  <option value='Strategy'>Strategy</option>
                  <option value='Stock Trading'>Stock Trading</option>
                  <option value='Supply Chain'>Supply Chain</option>
                  <option value='Talent management'>Talent management</option>
                  <option value='Testing'>Testing</option>
                  <option value='Textile'>Textile</option>
                  <option value='Ticketing'>Ticketing</option>
                  <option value='Tires and rubber products'>
                    Tires and rubber products
                  </option>
                  <option value='Traffic management'>Traffic management</option>
                  <option value='Training'>Training</option>
                  <option value='Transport infrastructure'>
                    Transport infrastructure
                  </option>
                  <option value='Transportation'>Transportation</option>
                  <option value='Travel'>Travel</option>
                  <option value='Utility services'>Utility services</option>
                  <option value='Virtual games'>Virtual games</option>
                  <option value='Waste management'>Waste management</option>
                  <option value='Wayside amenties'>Wayside amenties</option>
                  <option value='Wearables'>Wearables</option>
                  <option value='Web design'>Web design</option>
                  <option value='Web development'>Web development</option>
                  <option value='Weddings'>Weddings</option>
                  <option value='Wireless'>Wireless</option>
                  <option value='Others'>Others</option>
                </select>
                {/*<SelectSearch
                  // ref={searchIndustryDropdownValue}
                  options={secondPrefOptions}
                  filterOptions={searchDropdownHandler}
                  search
                  required
                  value={thirdPref}
                  name="thirdPref"
                  emptyMessage='Not found'
                  placeholder='---'
                  onChange={otherThirdPrefChangeHandler}
              />*/}
              </div>
              {thirdPref === 'Others' && (
                <div className='form-group mb-4'>
                  <label htmlFor='others'>
                    Others <span>(please specify)</span>
                  </label>
                  <input
                    type='text'
                    name='Others'
                    id='others'
                    className='form-control'
                    placeholder='Other Industry'
                    ref={otherThirdPreference}
                  // value={otherIndustry}
                  // onChange={(e) => SetOtherIndustry(e.target.value)}
                  />
                </div>
              )}

              <div className='form-group mb-4'>
                <label htmlFor='grad_college'>Graduation (mandatory)</label>
                <div className='row'>
                  <div className='col-lg-4 p-2'>
                    <input
                      type='text'
                      name='GradCollege'
                      required
                      id='grad_college'
                      className='form-control'
                      placeholder='University/College'
                      value={grad_college}
                      onChange={(e) => SetGradCollege(e.target.value)}
                    />
                  </div>
                  <div className='col-lg-4 p-2'>
                    <input
                      type='text'
                      name='GradDegree'
                      required
                      id='grad_degree'
                      className='form-control'
                      placeholder='Degree'
                      value={grad_degree}
                      onChange={(e) => SetGradDegree(e.target.value)}
                    />
                  </div>
                  <div className='col-lg-4 p-2'>
                    <input
                      type='text'
                      name='GradYear'
                      required
                      id='grad_year'
                      className='form-control'
                      placeholder='Passout Year'
                      value={grad_year}
                      onChange={(e) => SetGradYear(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className='form-group mb-4'>
                <label htmlFor='post_grad_college'>Post Graduation</label>
                <div className='row'>
                  <div className='col-lg-4 p-2'>
                    <input
                      type='text'
                      name='GradCollege'
                      id='post_grad_college'
                      className='form-control'
                      placeholder='University/College'
                      value={post_grad_college}
                      onChange={(e) => SetPostGradCollege(e.target.value)}
                    />
                  </div>
                  <div className='col-lg-4 p-2'>
                    <input
                      type='text'
                      name='GradDegree'
                      id='post_grad_degree'
                      className='form-control'
                      placeholder='Degree'
                      value={post_grad_degree}
                      onChange={(e) => SetPostGradDegree(e.target.value)}
                    />
                  </div>
                  <div className='col-lg-4 p-2'>
                    <input
                      type='text'
                      name='GradYear'
                      id='post_grad_year'
                      className='form-control'
                      placeholder='Passout Year'
                      value={post_grad_year}
                      onChange={(e) => SetPostGradYear(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className='form-group mb-4'>
                <label htmlFor='about'>
                  Write your short bio about yourself
                </label>
                <textarea
                  name='About'
                  id='about'
                  className='form-control'
                  required
                  placeholder='Write something about yourself'
                  rows='5'
                  value={about}
                  onChange={(e) => SetAbout(e.target.value)}
                ></textarea>
              </div>
              <div className='form-group mb-4'>
                <label htmlFor='get-to-know'>
                  How did you get to know about Mentorkart?
                </label>
                <select
                  name='industry'
                  required
                  className='form-select'
                  value={getToKnow}
                  onChange={(e) => SetGetToKnow(e.target.value)}
                >
                  <option value=''>---</option>
                  <option value='Website'>Website</option>
                  <option value='Social Media'>Social Media</option>
                  <option value='Advertisements'>Advertisements</option>
                  <option value='Others'>Others</option>
                </select>
              </div>
              <div className='form-group my-5 text-center'>
                <input
                  type='submit'
                  value='Become a mentor'
                  className='btn btn-md-lg btn-success'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BeAMentor;
