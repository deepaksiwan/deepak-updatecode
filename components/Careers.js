import React, { useEffect } from 'react';

import Footer from './footer/Footer';
import MyNavbar from './header-section/MyNavbar';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className='faq'>
      <MyNavbar />
      <header className=''>
        <div className='container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3'>
          <img className='guru-img' src='/images/mentorkartguru.png' alt='' />
          <h1 className='mb-1'>Careers</h1>
        </div>
      </header>
      <div className='container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-5'>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
