import React, { useEffect } from 'react';

import Footer from './footer/Footer';
import MyNavbar from './header-section/MyNavbar';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className='refund-policy'>
      <MyNavbar />
      <div className='container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-5'>
        <h1>Refund Policy</h1>
        <p className='lead my-3'>
          Our platform provides free limited access to the App and some content
          after logging in. You can decide based on this whether to subscribe or
          not. We stand by the quality and depth of the content we provide and
          do not offer refunds. All payments on this platform will be
          irrevocable, non-refundable, non-transferable and non-creditable.
        </p>
        <p className='lead mb-3'>
          <strong>The subscription once made cannot be cancelled.</strong>
        </p>
        <address>Last updated: 31st August 2020</address>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
