import React, { useState, useEffect } from 'react'
import Footer from '../footer/Footer'
import MyNavbar from '../header-section/MyNavbar'
import SingleMentorCard from './SingleMentor'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import {
  listStudentMentor,
  listProfessionalMentor,
  listEntrepreneurMentor,
  listMentor,
  searchMentor,
} from '../../redux/actions/mentorActions';
import MentorFilter from './MentorFilter'

const Mentors = () => {
  const dispatch = useDispatch()
  const mentorList = useSelector((state) => state.mentorList)
  const { mentor } = mentorList

  const [sort, setSort] = useState('')
  const [search, setSearch] = useState('')

  const [mentorFilter, setmentorFilter] = useState(false)
  const mentorFilterBtn = (bool) => {
    setmentorFilter(bool)
  }

  const handleCLick = (value) => () => {
    setSort(value)
  };

  useEffect(() => {

    const identifier = setTimeout(() => {
      window.scrollTo(0, 0);
      if (search === '') {
        dispatch(listMentor());
      } else {
        dispatch(searchMentor(search));
      }
  
      if (sort === 'student') {
        dispatch(listStudentMentor());
      }
      if (sort === 'professional') {
        dispatch(listProfessionalMentor());
      }
      if (sort === 'entrepreneur') {
        dispatch(listEntrepreneurMentor());
      }
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
    
    
  }, [dispatch, sort, search]);

  return (
    <div className="mentors">
      <MyNavbar />

      <div className="mentors-head">
        <div className="container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-4 py-3">
          <h1>Our Mentors</h1>
          <form action="/search-mentors" className="mentors-search">
            <div className="form-group">
              <span>
                <i className="fas fa-search me-2 ms-1"></i>
              </span>
              <input
                type="text"
                name="search-text"
                placeholder="Search Mentor"
                value={search}
                className="form-control"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </form>
          <div className="tags d-flex mt-3 justify-content-center">
            <ul className="d-flex flex-wrap" >
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
              <li >
                <button
                  className="nav-link btn"
                  onClick={() => setmentorFilter(true)}
                >
                  More Filters
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mentors-content">
        <div className="mentors-cards">
          <div className="container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 pb-5">
            <div className="row">
              {mentor?.map((mentor, index) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6 col-12">
                    <div className="mentors-card mb-4">
                      <SingleMentorCard
                        id={mentor.id}
                        img={mentor.profile_image}
                        name={mentor.first_name + ' ' + mentor.last_name}
                        designation={mentor.designation}
                        categories={mentor.user_categories}
                        charges={mentor.mentor_cost}
                        position={mentor.current_position}
                        about={mentor.about}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <Modal
        id="packages-modal"
        isOpen={mentorFilter}
        onRequestClose={() => setmentorFilter(false)}
        style={{
          overlay: {
            zIndex: '5000',
          },
          content: {
            maxWidth: '700px',
            margin: 'auto',
            height: '400px',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '15px',
          },
        }}
      >
        <MentorFilter mentorFilterBtn={mentorFilterBtn} />
      </Modal>
      <Footer />
    </div>
  )
}

export default Mentors
