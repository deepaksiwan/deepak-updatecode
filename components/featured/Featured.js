import React from 'react';

const Featured = (props) => {
  return (
    <div className='partners-div'>
      <img
        src={
          'https://www.test.pinsoutinnovation.com/uploaded-images/' + props.url
        }
        alt=''
      />
    </div>
  );
};

export default Featured;
