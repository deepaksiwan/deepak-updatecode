import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import MyNavbar from '../header-section/MyNavbar';
import { useDispatch, useSelector } from 'react-redux';
import {
  listPackages,
  searchPackages,
  listStudentPackages,
  listProfessionalPackages,
  listEntrepreneurPackages,
} from '../../redux/actions/packagesActions';
import Modal from 'react-modal';
import Parser from 'react-html-parser';

import SignUpModal from '../join-mentokart/SignUpModal';
import PackagesModal from './PackagesModal';
import PackageFilter from './PackageFilter'

const Packages = () => {
  const loggedIn = JSON.parse(localStorage.getItem('userInfo'));
  const [showModal, setShowModal] = useState(false);
  const showModalBtn = (bool) => {
    setShowModal(bool);
  };
  const [showPackagesModal, setShowPackagesModal] = useState(false);
  const showPackagesModalBtn = (bool) => {
    setShowPackagesModal(bool);
  };
 
  //State Management for Modal of filter-packages ---> MORE FILTERS
  const [packageFilter, setpackageFilter] = useState(false);
  const packageFilterBtn = (bool) => {
    setpackageFilter(bool)
  }

  const dispatch = useDispatch();
  const packagesList = useSelector((state) => state.packagesList);
  const { packages } = packagesList;

  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [filterset, setFilter] = useState(packages);

  const handleCLick = (value) => () => {
    setSort(value);
    console.log(value)
  };

  useEffect(() => {

    const identifier = setTimeout(() => {

    window.scrollTo(0, 0);
    if (search === '') {
      dispatch(listPackages());
     setFilter(packages)
    } else {
      dispatch(searchPackages(search));
    }

    if (sort === 'student') {
      dispatch(listStudentPackages());
      setFilter(packages)
    }
    if (sort === 'professional') {
      dispatch(listProfessionalPackages())
      setFilter(packages)
    }
    if (sort === 'entrepreneur') {
      dispatch(listEntrepreneurPackages())
      setFilter(packages)
    }

    }, 500);

    return () => {
      clearTimeout(identifier);
    }
    
  }, [dispatch, sort, search]);

  return (
    <div className='courses'>
      <MyNavbar />
      <div className='courses-head'>
        <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-4 py-3'>
          <h1>1:1 Mentorship Programs</h1>
          <form action='' className='courses-search'>
            <div className='form-group'>
              <span>
                <i className="fas fa-search me-2 ms-1"></i>
              </span>
              <input
                type="text"
                name="search-text"
                placeholder="Search Packages"
                className="form-control"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </form>

          {/* below is all list of FILTERS */}
          <div className="tags d-flex mt-3 justify-content-center">
            <ul className="d-flex flex-wrap">
              <li>
                <button className="btn" onClick={handleCLick('')}>
                  All
                </button>
              </li>
              <li>
                <button className="btn" onClick={handleCLick('student')}>
                  Student
                </button>
              </li>
              <li>
                <button className="btn" onClick={handleCLick('professional')}>
                  Professional
                </button>
              </li>
              <li>
                <button className="btn" onClick={handleCLick('entrepreneur')}>
                  Entrepreneur
                </button>
              </li>
              <li>
                <button
                  className="nav-link btn"
                  
                  onClick={() => setpackageFilter(true)}
                >
                  More Filters
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* //Below is all list Of packages */}
      <div className="courses-content ">
        <div id="#all" className="blogs-cards-two container py-5">
          <div className="row">
            {packages.map((course, index) => {
              return (
                <div
                  className=" col-lg-4 col-md-6 col-12 px-lg-3 px-sm-2 px-3 mb-5"
                  key={index}
                  // className="be_all_equal"
                >
                  <div className="card h-100">
                    <div className="program-card p-2">
                      <div className="img">
                        {course.icon_url === null ? (
                          <img src="/images/user.png" alt="" />
                        ) : (
                          <img
                            src={
                              'https://mentorkart-admin-staging.s3.amazonaws.com/' +
                              course.icon_url
                            }
                            alt=''
                          />
                        )}
                      </div>
                      <div className='p-3'>
                        <div className='d-flex justify-content-between align-items-center'>
                          <div>
                            <h2 className='mt-0 mb-0 pe-3'>
                              {course.package_name}
                            </h2>
                          </div>
                          <h6 className='mb-0'>₹ {course.price_INR} /-</h6>
                        </div>
                        <div className='category-tags mt-2'>
                          {course.user_category &&
                            course.user_category
                              .split(',')
                              .map((cate, index) => {
                                return (
                                  <span key={index} className='btn btn-sm me-2'>
                                    {cate}
                                  </span>
                                );
                              })}
                        </div>
                        <div className="mt-2 mb-3">
                          {Parser(course.description.substring(0, 200))}
                            </div>
                        <div className='row'>
                          <button
                            onClick={() => {
                              if (loggedIn === null) {
                                setShowModal(true);
                              } else {
                                window.location = `https://mentorkart.org/mentorkart?SSO_Mtoken=${loggedIn}&domain=https://mentorkart-new-ui.netlify.app`;
                              }
                            }}
                            className='enroll-btn btn btn-ani'
                          >
                            Enroll Now
                          </button>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Modal
        id="packages-modal"
        isOpen={packageFilter}
        closeTimeoutMS={1000}
        shouldCloseOnEsc={true}
        onRequestClose={() => setpackageFilter(false)}
        style={{
          overlay: {
            zIndex: '5000',
          },
          content: {
            maxWidth: '700px',
            // height: '50px',
            height: '400px',
            margin: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '15px',
          },
        }}
      >
        <PackageFilter packageFilterBtn={packageFilterBtn} />
      </Modal>
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

      {/* <Modal
        id='packages-modal'
        isOpen={showPackagesModal}
        onRequestClose={() => setShowPackagesModal(false)}

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
        <PackagesModal showPackagesModalBtn={showPackagesModalBtn} />
      </Modal> */}

      <Footer />
    </div>
  );
};
export default Packages;
