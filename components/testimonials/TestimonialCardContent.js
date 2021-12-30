import React from 'react';

const TestimonialCardContent = ({ data }) => {
  return (
    <div className='testimonial-card-content'>
      <div className='testi-img mb-4'>
        <img
          src={
            'https://www.test.pinsoutinnovation.com/uploaded-images/' +
            data.testimonial_image
          }
          alt=''
        />
      </div>
      <p>{data.text}</p>
      <div className='d-flex justify-content-between align-items-center'>
        <div>
          <p className='testimonial-writer mb-0'>{data.author}</p>
          <p className='sec mb-0'>{data.post}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardContent;
