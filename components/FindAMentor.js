import React, { useEffect } from 'react';
import MyNavbar from './header-section/MyNavbar';
import Footer from './footer/Footer';
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';

const FindAMentor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      origin: 'https://localhost:8100',
    },
  };
  return (
    <div className='find-a-mentor'>
      <MyNavbar />
      <header>
        <div className='container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3'>
          <img
            className='guru-img d-lg-block d-none'
            src='/images/findmentor-head.png'
            alt=''
          />
          <h1 className='my-md-5 my-3'>#LEARN</h1>
        </div>
      </header>
      <div className='content container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3'>
        <h1 className='text-center my-md-3 my-0 mb-md-0 mb-4'>
          Learning from someone who wants you to grow.
        </h1>
        <div className='section-1 my-3 py-lg-5 py-md-3 py-1'>
          <div className='row'>
            <div className='col-lg-4 col-sm-6 text-center px-4 mb-lg-0 mb-4'>
              <div className='card p-4'>
                <div className='mb-4'>
                  <img
                    className='img-fluid'
                    src='/images/find-mentor/student.png'
                    alt=''
                  />
                </div>
                <h6 className='text-uppercase'>I am a</h6>
                <h2 className='text-uppercase'>Student</h2>
                <div className=''>
                  <button className='btn'>
                    Explore More <i className='fas fa-arrow-right'></i>
                  </button>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6 text-center px-4 mb-md-0 mb-4'>
              <div className='card p-4'>
                <div className='mb-4'>
                  <img
                    className='img-fluid'
                    src='/images/find-mentor/pro.png'
                    alt=''
                  />
                </div>
                <h6 className='text-uppercase'>I am a</h6>
                <h2 className='text-uppercase'>Professional</h2>
                <div className=''>
                  <button className='btn'>
                    Explore More <i className='fas fa-arrow-right'></i>
                  </button>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6 offset-lg-0 offset-sm-3 text-center px-4 mb-md-0 mb-4'>
              <div className='card p-4'>
                <div className='mb-4'>
                  <img
                    className='img-fluid'
                    src='/images/find-mentor/ent.png'
                    alt=''
                  />
                </div>
                <h6 className='text-uppercase'>I am an</h6>
                <h2 className='text-uppercase'>entrepreneur</h2>
                <div className=''>
                  <button className='btn '>
                    Explore More <i className='fas fa-arrow-right'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section-2 my-3'>
        <div className='content container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-5'>
          <div className='row'>
            <div className='col-lg-6 py-md-5 py-3'>
              <h2>Life is a</h2>
              <h1>Big University</h1>

              <p>
                We will ensure every individual to be connected with matching
                mentor who helps person to become achiever at every stage of
                life.
              </p>

              <span>
                BEHIND EVERY SUCCESSFUL PERSON, THERE IS ALWAYS A GREAT MENTOR
              </span>
            </div>
            <div className='col-lg-6'>
              <div className='row px-lg-4'>
                <div className='youtube-video'>
                  <YouTube
                    videoId={getYouTubeID(
                      'https://www.youtube.com/watch?v=kOsv-aUuXOQ'
                    )}
                    opts={opts}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section-3'>
        <div className='py-md-5 py-3'>
          <div className='content container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3'>
            <div className='row align-items-center'>
              <div className='col-md-6 order-md-1 order-2'>
                <img
                  src='/images/find-mentor/mob-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div className='col-md-6 order-md-2 order-1'>
                <span>Changing the way people</span>
                <h2>achieve their goals</h2>
                <p>
                  Behind every successful person there is always a great Mentor,
                  do you have one? MentorKart gives you an opportunity to
                  interact with great mentors and successful people.
                </p>
                <p>
                  So why learn by making mistakes when you can learn with
                  mentors, Set your personal and professional goals and we help
                  them achieve and monitor them at MentorKart
                </p>
                <button className='btn'>
                  Signup to achieve your goals
                  <i className='fas fa-arrow-right ms-2 p-1'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='row-alt py-md-5 py-3'>
          <div className='content container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3'>
            <div className='row align-items-center'>
              <div className='col-md-6'>
                <span>Chat with</span>
                <h2>group of mentors</h2>
                <p>
                  Its critical to ask questions for clarifying your doubts, at
                  time we shy away with that for various reasons including
                  privacy, MentorKart brings you dtwak as chat feature where you
                  ask anything and our expert mentors respond to you.
                </p>
                <p>
                  Your chat are private to group of mentors only and no mentee
                  can see that, so answers/solutions and conversation are
                  specific to your problem.
                </p>
                <p className='sec'>
                  So what are you waiting for raise a Question on dtwak now.
                </p>

                <button className='btn'>
                  Sign up to Chat with Mentors
                  <i className='fas fa-arrow-right ms-2 p-1'></i>
                </button>
              </div>
              <div className='col-md-6'>
                <img
                  src='/images/find-mentor/mob-2.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>

        <div className='py-md-5 py-3'>
          <div className='content container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3'>
            <div className='row align-items-center'>
              <div className='col-md-6 order-md-1 order-2'>
                <img
                  src='/images/find-mentor/mob-3.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div className='col-md-6 order-md-2 order-1'>
                <span>Personalised 1:1</span>
                <h2>chat with mentors</h2>
                <p>
                  With our Personalized 1:1 chat, Ask all your questions to
                  whomsoever mentor you want to connect with. We respect your
                  privacy so your chat would be kept private.
                </p>
                <p className='sec'>So, what are you waiting for, engage now.</p>
                <button className='btn'>
                  Signup up for 1:1 Session with Mentor
                  <i className='fas fa-arrow-right ms-2 p-1'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='row-alt py-md-5 py-3'>
          <div className='content container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3'>
            <div className='row align-items-center'>
              <div className='col-md-6'>
                <span>Schedule a</span>
                <h2>call with mentors</h2>
                <p>
                  Everybody knows that interaction becomes more convenient when
                  we talk rather than we write or type. Apart from dtwak and
                  personalized chat, MentorKart provides you a call scheduling
                  option in its app.
                </p>
                <p>
                  A mentee can schedule a call with any mentor at an affordable
                  cost. The calendar of mentor would be shown to mentee before
                  he/she schedules a call.
                </p>
                <p className='sec'>
                  Schedule a call now and gift yourself a mentor.
                </p>

                <button className='btn'>
                  Sign up to Schedule a Call with Mentor
                  <i className='fas fa-arrow-right ms-2 p-1'></i>
                </button>
              </div>
              <div className='col-md-6'>
                <img
                  src='/images/find-mentor/mob-4.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>

        <div className='py-md-5 py-3'>
          <div className='content container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3'>
            <div className='row align-items-center'>
              <div className='col-md-6 order-md-1 order-2'>
                <img
                  src='/images/find-mentor/mob-5.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div className='col-md-6 order-md-2 order-1'>
                <span>Attend live</span>
                <h2>q&a sessions</h2>
                <p>
                  When you subscribe to MentorKart, it gives you an opportunity
                  to attend live Q&A sessions from various Mentors, CxO’s,
                  Industry experts, Investors and advisors every month there
                  would be opportunity to meet such experts and MentorKart.
                </p>
                <p className='sec'>So Download now</p>
                <button className='btn'>
                  Signup to Attend Live Q/A Sessions
                  <i className='fas fa-arrow-right ms-2 p-1'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='row-alt py-md-5 py-3'>
          <div className='content container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3'>
            <div className='row align-items-center'>
              <div className='col-md-6'>
                <span>Master classes & exclusive</span>
                <h2>blogs & articles</h2>
                <p>
                  MentorKart also adding every month exclusive Videos and other
                  contents from experts designed to solve specific problem and
                  gives you focused learning opportunity.
                </p>
                <p>
                  Anyone with having our app can watch these free assets like
                  video lectures, blogs & articles, Audio lectures , what you
                  waiting for?
                </p>
                <p className='sec'>Download our app now.</p>

                <button className='btn'>
                  Sign up to Read Exclusive Blogs/Articles
                  <i className='fas fa-arrow-right ms-2 p-1'></i>
                </button>
              </div>
              <div className='col-md-6'>
                <img
                  src='/images/find-mentor/mob-6.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>

        <div className='py-md-5 py-3'>
          <div className='content container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3'>
            <div className='row align-items-center'>
              <div className='col-md-6 order-md-1 order-2'>
                <img
                  src='/images/find-mentor/mob-7.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div className='col-md-6 order-md-2 order-1'>
                <span>Recorded events &</span>
                <h2>conferences</h2>
                <p>
                  To get focused learning so many events and conferences are
                  happening across India and overseas but its not practically
                  possible to attend all , at the same time we wish to hear
                  great speakers , hence MentorKart is reaching out to all such
                  events organizers and getting those events accessed within
                  App.
                </p>
                <p>
                  On our app, you get to watch all the recorded events that are
                  held by MentorKart or our partners.
                </p>
                <p className='sec'>Is it not an amazing thing ?</p>
                <button className='btn'>
                  Signup to watch recorded events
                  <i className='fas fa-arrow-right ms-2 p-1'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='row-alt py-md-5 py-3'>
          <div className='content container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3'>
            <div className='row align-items-center'>
              <div className='col-md-6'>
                <span>Meet investors & industry experts to</span>
                <h2>raise funds</h2>
                <p>
                  Do you own a startup or planning to have one? If yes,It is the
                  right platform for you. MentorKart not only provide you the
                  expert mentors that help you in growing business , but we also
                  invite investors from startup ecosystem in our panel , you get
                  to know about them and opportunity interact with them directly
                  , this help you to network with Investors and pitch them for
                  funding.
                </p>

                <button className='btn'>
                  Sign up to meet investors
                  <i className='fas fa-arrow-right ms-2 p-1'></i>
                </button>
              </div>
              <div className='col-md-6'>
                <img
                  src='/images/find-mentor/mob-8.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FindAMentor;
