import React from 'react';

const Partners = (props) => {
  return (
    <div className='partners-div'>
      <img
        height='80px'
        src={
          'https://www.test.pinsoutinnovation.com/uploaded-images/' + props.url
        }
        alt=''
      />
    </div>
  );
};

export default Partners;
