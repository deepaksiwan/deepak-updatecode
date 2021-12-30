import React from 'react';
import Facilities from './Facilities';
import MyNavbar from './MyNavbar';
import Showcase from './Showcase';

const Header = () => {
  return (
    <div id='header-section'>
      <MyNavbar />
      <Showcase />
      {/* <Facilities /> */}
    </div>
  );
};

export default Header;
