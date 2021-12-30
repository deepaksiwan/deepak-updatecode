import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyNavbar from '../header-section/MyNavbar';
import Footer from '../footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { listBlogs } from '../../redux/actions/blogsActions';

// import Swiper core and required modules
import SwiperCore, { A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([A11y, Autoplay]);

const Blogs = () => {
  const dispatch = useDispatch();
  const blogsList = useSelector((state) => state.blogsList);
  const { blogs } = blogsList;

  useEffect(() => {
    dispatch(listBlogs());
    window.scroll(0, 0);
  }, [dispatch]);

  return (
    <div className='our-blogs'>
      <MyNavbar />
      <div className='our-blogs-head'>
        <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3'>
          <h1>Our Blogs</h1>
          <form
            action='/search-blogs'
            className='blog-search d-flex justify-content-between align-items-center'
          >
            <div className='form-group'>
              <span>
                <i className='fas fa-search me-2 ms-1'></i>
              </span>
              <input type='text' name='search-text' placeholder='Search Blog' />
            </div>
          </form>
          <div className='tags d-flex mt-3 justify-content-center '>
            <ul className='d-flex flex-wrap'>
              <li>
                <button className='btn'>All</button>
              </li>
              <li>
                <button className='btn'>Design</button>
              </li>
              <li>
                <button className='btn'>UI/UX</button>
              </li>
              <li>
                <button className='btn'>Development</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='our-blogs-content'>
        <div id='#all' className='blogs-cards-one container mt-5 mb-5'>
          <div className='mt-4' style={{padding:'10px'}}>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ autoplay: true, delay: 10000 }}
              breakpoints={{
                // when window width is >= 0px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 1000px
                500: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 3,
                },
              }}
            >
              {blogs[0]?.data?.map((blog, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link to={'/blog/' + blog.id}>
                      <div className='cards' style={{ height: '400px' }}>
                        <img
                          style={{
                            height: '400px',
                            width: '100%',
                            objectFit: 'cover',
                          }}
                          src={
                            'https://www.test.pinsoutinnovation.com/uploaded-images/' +
                            blog.blog_bg
                          }
                          alt=''
                        />
                        <span className='tag'>{blog.blog_tag}</span>
                        <div className='cards-content'>
                          <div>
                            <p className='text mt-2'>{blog.blog_title}</p>
                            <hr />
                            <div className='d-flex justify-content-between align-items-center'>
                              <span>{blog.blog_author}</span>
                              <span>
                                {blog.blog_date
                                  ? blog.blog_date.split('T')[0]
                                  : ''}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
