import React, { useEffect } from 'react';

import Footer from './footer/Footer';
import MyNavbar from './header-section/MyNavbar';

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className='faq'>
      <MyNavbar />
      <header className=''>
        <div className='container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3'>
          <img className='guru-img' src='/images/mentorkartguru.png' alt='' />
          <h1 className='mb-1'>FAQ</h1>
          <h4 className='mt-3 mb-1'>FREQUENTLY ASKED QUESTIONS</h4>
        </div>
      </header>
      <div className='container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-5'>
        <div className='accordion accordion-flush' id='faq-accordian'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingOne'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseOne'
                aria-expanded='false'
                aria-controls='flush-collapseOne'
              >
                How is MentorKart® different than career guidance programs ?
              </button>
            </h2>
            <div
              id='flush-collapseOne'
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingOne'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                Career guidance programs are largely aimed at acquainting you
                with the various career options available and how to prepare for
                it. MentorKart® goes a step ahead and handholds you by mentoring
                on academic and personal skills which help you in achieving the
                goal.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingTwo'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseTwo'
                aria-expanded='false'
                aria-controls='flush-collapseTwo'
              >
                What is MentorKart®?
              </button>
            </h2>
            <div
              id='flush-collapseTwo'
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingTwo'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                MentorKart® is the next gen 1:1 mentoring platform in India
                bringing together renowned mentors and mentees who need
                mentoring.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingThree'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseThree'
                aria-expanded='false'
                aria-controls='flush-collapseThree'
              >
                How does MentorKart® assign mentors ?
              </button>
            </h2>
            <div
              id='flush-collapseThree'
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingThree'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                MentorKart® has intelligent algorithms for matching a mentee
                with a relevant and highly rated mentor. So you can be assured
                of getting the best.
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
                How does MentorKart® work ?
              </button>
            </h2>
            <div
              id='flush-collapseFour'
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingFour'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                Sign up on MentorKart® as a mentee and set your professional and
                personal goals. You can set upto 6 goals. Choose a membership
                option and a relevant mentor is assigned to you. Take up the
                mentorship program with the mentor and whoosh… achieve your
                goals.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingFive'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseFive'
                aria-expanded='false'
                aria-controls='flush-collapseFive'
              >
                I already have a mentor assigned at workplace, why should I sign
                up at MentorKart® ?
              </button>
            </h2>
            <div
              id='flush-collapseFive'
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingFive'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                Mentoring at workplace would prepare you for the next level role
                in the organisational hierarchy whereas Mentoring program with
                MentorKart® would give you access to the best industry mentors
                with some exclusive webinars, articles and book excerpts
                widening your scope of learning.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingSix'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseSix'
                aria-expanded='false'
                aria-controls='flush-collapseSix'
              >
                How do I stay in touch with my mentors ?
              </button>
            </h2>
            <div
              id='flush-collapseSix'
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingSix'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                MentorKart® enables you to stay in touch with your mentor all
                the time. You can SMS, schedule a call and have a voice chat
                with your mentor, all through the platform.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingSeven'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseSeven'
                aria-expanded='false'
                aria-controls='flush-collapseSeven'
              >
                How does MentorKart® ensures the quality of the program ?
              </button>
            </h2>
            <div
              id='flush-collapseSeven'
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingSeven'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                All the mentoring programs are being closely monitored by our
                panel of observers who ensure the quality of programs and also
                assist in recalibration if the mentee needs assistance.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
