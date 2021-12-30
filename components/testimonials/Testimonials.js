import React, { useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import { useDispatch, useSelector } from 'react-redux';
import { listWebsiteContent } from '../../redux/actions/websiteContentActions';

const Testimonials = () => {
  const dispatch = useDispatch();
  const websiteContentList = useSelector((state) => state.websiteContentList);

  const { websiteContent } = websiteContentList;

  useEffect(() => {
    dispatch(listWebsiteContent());
  }, [dispatch]);

  return (
    <div className='testimonials-section py-5'>
      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
        <div className='row align-items-center order-md-first order-last '>
          <div className='col-md-5 left mb-md-0 mb-5'>
            <div className='testimonial-cards'>
              <TestimonialCard />
            </div>
          </div>
          <div className='col-md-6 offset-md-1 right mb-md-0 mb-5 order-md-last order-first'>
            <span>{websiteContent[0]?.data[14]?.field_data}</span>
            <h1>{websiteContent[0]?.data[15]?.field_data}</h1>
            <p>{websiteContent[0]?.data[16]?.field_data}</p>
            <p className='sec'>{websiteContent[0]?.data[17]?.field_data}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
