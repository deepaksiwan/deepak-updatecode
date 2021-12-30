import React from 'react';

const Banners = (props) => {
  const x = props.banner;

  const buttonStyle = {
    color: x.banner_bg_color,
    backgroundColor: x.banner_title_color,
  };

  const bannerBackground = {
    color: x.banner_title_color,
    backgroundColor: x.banner_bg_color + '95',
  };

  return (
    <div className='banner'>
      <img
        src={
          'https://www.test.pinsoutinnovation.com/uploaded-images/' +
          x.banner_image
        }
        alt=''
      />
      <div className={props.myclass} style={bannerBackground}>
        <div className='banner-content'>
          <div className='row align-items-center'>
            <div className='col-md-9'>
              <h1>{x.banner_title}</h1>
            </div>
            <div className='col-md-3'>
              <button
                className='btn btn-ani py-xxl-2 px-xxl-5 px-4'
                style={buttonStyle}
              >
                {x.button_text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
