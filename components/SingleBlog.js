import React, { useEffect } from 'react';
import 'react-phone-input-2/lib/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { listBlogsDetails } from '../redux/actions/blogsActions';
import parse from 'html-react-parser';

import Footer from './footer/Footer';
import MyNavbar from './header-section/MyNavbar';

const SingleBlog = ({ match }) => {
  const dispatch = useDispatch();
  const listBlogsDetail = useSelector((state) => state.blogsDetailsList);

  const { blogsDetail } = listBlogsDetail;

  useEffect(() => {
    window.scroll(0, 0);

    if (match.params.id) {
      dispatch(listBlogsDetails(match.params.id));
    }
  }, [dispatch, match]);

  return (
    <div className='single-blog'>
      <MyNavbar />
      <div className='section-1'>
        <img
          src={
            'https://www.test.pinsoutinnovation.com/uploaded-images/' +
            blogsDetail?.data?.blog_bg
          }
          alt=''
        />
        <div className='content'>
          <div className='container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 d-flex flex-column justify-content-between py-3'>
            <h1 className='mb-3'>{blogsDetail?.data?.blog_title}</h1>
            <div className='d-flex sec justify-content-between align-items-center mb-2'>
              <span className='badge rounded-pill bg-warning'>
                {blogsDetail?.data?.blog_tag}
              </span>
              <span>{blogsDetail?.data?.blog_date.split('T')[0]}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='section-2'>
        <div className='container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-5'>
          <div className='main-content'>
            <div>{parse(`${blogsDetail?.data?.blog_content}`)}</div>
            <address className='lead'>
              ~ {blogsDetail?.data?.blog_author}
            </address>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleBlog;
