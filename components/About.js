import React, { useEffect,useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import SignUpModal from '../components/join-mentokart/SignUpModal';
import Modal from 'react-modal';
import Footer from './footer/Footer';
import MyNavbar from './header-section/MyNavbar';
Modal.setAppElement('#root');
const About = () =>{
    const user = localStorage.getItem('userInfo');
  const [showModal, setShowModal] = useState(false);

  const showModalBtn = (bool) => {
    setShowModal(bool);
  };

  const handleClick = () => {
    if (user) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <MyNavbar />
      <div className='about'>
        <header className='mt-md-0 mt-5 pt-md-0 pt-4'>
          <div className='container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-4'>
            <img className='guru-img' src='/images/mentorkartguru.png' alt='' />
            <h1 className='mb-1'>#DREAM BIG</h1>
            <div className='row'>
              <div className='col-lg-6 offset-lg-3 col-md-8 offset-md-2'>
                <p className='mb-3 lead-md'>
                  Our philosophy is that everyone on this planet needs great
                  mentors at every stage of life to achieve success. They help
                  in nurturing personal and professional growth.
                </p>
              </div>
            </div>
            <div className='mt-3'>
              <button className='btn btn-dark btn-lg' onClick={handleClick}>
                {user ? 'Know More' : 'Signup Now'}
                </button>
            </div>
          </div>
        </header>
        <main>
          <div className=''>
            <div className='section-3 text-center py-3 px-lg-0 px-3'>
              <div className='row text-center'>
                <div className='col-lg-6 offset-lg-3'>
                  <h3>
                    Every individual has its own ability & every phase in life
                    comes up with own challenge.
                  </h3>
                </div>
              </div>
              <div className='row text-center'>
                <div className='col-lg-10 offset-lg-1'>
                  <p className='mb-3 mt-3'>
                    This initiative will help a person know its ability and to
                    take right decision at right time. How one can make his
                    identity in this Rat Race and know his ‘Happiness Quotient”
                    in professional & personal forms. Or know the right way to
                    balance work & life.
                  </p>
                  <p className='mb-3'>
                    MentorKart® provides opportunity to self-introspect and know
                    your weaknesses, not to the world but Self. How to overcome
                    same, conquer fears & hesitations, survive in competition,
                    handle corporate politics, bring passion in life, making an
                    impact on one’s own self and beyond.
                  </p>
                  <p className='mb-3'>
                    We believe in establishing a strong relationship between the
                    mentor and the mentee and in generating a belief in what is
                    possible…in seeing a spark inside oneself.
                  </p>
                </div>
              </div>
            </div>

            <div className='section-2 py-lg-5 py-3'>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-lg-7 order-lg-1 order-2 text-md-left text-center'>
                    <p>
                      MentorKart® helps you to fulfil your dreams and take that
                      big step towards success. Get professional support to
                      enrich your professional and personal life. A mentorship
                      program that brings you the best mentor from India and
                      abroad from different walks of life to handhold you along
                      your journey.
                    </p>

                    <p className='my-4'>
                      <strong>
                        We believe that mentor-mentee relationships have the
                        power to transform lives & close in the skills gaps in a
                        sustainable fashion.
                      </strong>
                    </p>

                    <p className='mb-0'>
                      These best of industry veterans, educational gurus,
                      specific domain experts and entrepreneurs share their
                      mantra to see life and claim what one can deserves from
                      life. Their experience can help an individual to build own
                      wisdom to face ups & downs in various phases of Life.
                      These real-world people and their ground level realistic
                      experience makes them modern guru or life coach or true
                      Mentor.
                    </p>
                  </div>
                  <div className='col-lg-5 order-lg-2 order-1 text-center'>
                    <img
                      src='/images/about-main.png'
                      alt=''
                      className='img-fluid ' style={{height:'350px',padding:'10px'}}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='section-1 text-center py-5'>
              <div className='container'>
                <h5 className='mb-4'>TOGETHER WE BUILD DREAMS</h5>
                <div className='row'>
                  <div className='col-lg-6 offset-lg-3 col-md-8 offset-md-2'>
                    <p className='mb-1'>
                      There are two ways to succeed in life.
                      <br />
                      <strong>Learn by making mistakes</strong> or
                      <strong> Learn with Mentor</strong>.
                    </p>
                  </div>
                  <div className='row mb-4'>
                    <div className='col-md-8 offset-md-2'>
                      <p className='lead'>
                        MentorKart® find answers, polish your skills and unleash
                        your potential
                      </p>
                    </div>
                  </div>
                </div>
                <button className='btn btn-dark btn-lg' onClick={handleClick}>
                  {user ? 'Know More' : 'Signup Now'}
                  </button>
              </div>
            </div>

            <div className='section-4 py-5  px-lg-0 px-3'>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-lg-4'>
                    <img
                      src='/images/about-achieve.png'
                      alt=''
                      className='img-fluid'
                    />
                  </div>
                  <div className='col-lg-7 offset-lg-1 text-center mt-lg-0 mt-4'>
                    <h2>Our Mission</h2>
                    <div className='mb-3'>
                      <strong>
                        “We are on a mission to make the youth of India
                        future-ready”.
                      </strong>
                    </div>
                    <p className='mb-3'>
                      DG Guru Learning Solutions Pvt. Ltd is founded by
                      professional with extensive experience in Mentorship,
                      Life-Coaching and Information Technology. MentorKart® is
                      India’s first online mentoring platform bringing together
                      renowned mentors with vast experience and mentee’s who
                      look for guidance.
                    </p>
                    <p className='mb-3'>
                      Our Mission is to provide a unique platform to individuals
                      for chase their goals with the help of active mentoring
                      from our leading mentors. We bring together Industry
                      leaders and experts to share their vast Life experience
                      and wisdom to the mentee’s. Our objective is to assist
                      people overcome their fear of failure, conquer hesitation,
                      survive in the face of competition and cover up the skills
                      gap in a sustainable fashion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='section-5 container py-5'>
              <div className='row text-center'>
                <div className='col-lg-8 offset-lg-2'>
                  <h2>Our Vision</h2>
                  <p>
                    Our vision is
                    <strong>
                      “To Provide a Mentor to all seeking Knowledge and Growth”
                    </strong>
                    and we seek to develop the most innovative mentoring
                    platform and inspire moments of success through active
                    mentorship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
      
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
    </div>
  );
};

export default About;
