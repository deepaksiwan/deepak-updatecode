import React, { useEffect } from 'react';
import Blog from './Blog';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listBlogs } from '../../redux/actions/blogsActions';
import { listWebsiteContent } from '../../redux/actions/websiteContentActions';

const BlogsSection = () => {
  const dispatch = useDispatch();

  const blogsSection = useSelector((state) => state.blogsList);
  const websiteContentList = useSelector((state) => state.websiteContentList);

  const { blogs } = blogsSection;
  const { websiteContent } = websiteContentList;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(listBlogs());
    dispatch(listWebsiteContent());
  }, [dispatch]);

  // console.log(websiteContent[0]?.data[0]);

  return (
    <div className='blogs-section pb-5'>
      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
        <span>{websiteContent[0]?.data[23]?.field_data}</span>
        <h1>{websiteContent[0]?.data[24]?.field_data}</h1>
        <p>{websiteContent[0]?.data[25]?.field_data}</p>
        <div className=' mt-4'>
          <div className='blogs row'>
            {blogs[0]?.data?.map((blog, index) => {
              return (
                <Blog
                  key={index}
                  id={blog.id}
                  span={blog.blog_tag}
                  img={blog.blog_bg}
                  title={blog.blog_title}
                  author={blog.blog_author}
                  date={blog.blog_date}
                />
              );
            })}
          </div>
        </div>
        <div className='mt-4'>
          <Link to='/our-blogs' className='btn btn-dark'>
            Our Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
