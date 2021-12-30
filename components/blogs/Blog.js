import React from 'react';
import { Link } from 'react-router-dom';

const Blog = (props) => {
  let d = props.date.split('T');
  let date = d[0];

  return (
    <div className='blog col-md-4 mb-md-0 mb-4'>
      <Link to={'/blog/' + props.id}>
        <div className='blog-top'>
          <span className='text-uppercase'>{props.span}</span>
          <img
            src={
              'https://www.test.pinsoutinnovation.com/uploaded-images/' +
              props.img
            }
            alt=''
          />
        </div>
        <div className='blog-bottom py-4 px-3'>
          <h3 className='title mb-3'>{props.title}</h3>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              <img src={props.author_img} alt='' />
              <p className='mb-0 ms-2'>{props.author}</p>
            </div>
            <div className='d-flex align-items-center'>
              <i className='far fa-calendar-alt'></i>
              <p className='mb-0 ms-2'>{date}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
