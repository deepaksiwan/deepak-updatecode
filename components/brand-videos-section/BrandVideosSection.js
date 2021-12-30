import React, { useEffect } from 'react';
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';
import { useDispatch, useSelector } from 'react-redux';
import { listWebsiteContent } from '../../redux/actions/websiteContentActions';

const BrandVideosSection = () => {
  const dispatch = useDispatch();
  const websiteContentList = useSelector((state) => state.websiteContentList);

  const { websiteContent } = websiteContentList;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(listWebsiteContent());
  }, [dispatch]);

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      origin: 'https://localhost:8100',
    },
  };
  return (
    <div className='brand-videos-section'>
      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-5'>
        <div className='row text-center'>
          <span>{websiteContent[0]?.data[28]?.field_data}</span>
          <h1>{websiteContent[0]?.data[29]?.field_data}</h1>
        </div>
        <div className='content'>
          <div className='row pt-lg-3 pt-3'>
            <div className='col-lg-6 py-md-5 py-3'>
              <h2>Life is a</h2>
              <h1>Big University</h1>

              <p>
                We will ensure every individual to be connected with matching
                mentor who helps person to become achiever at every stage of
                life.
              </p>

              <span>
                BEHIND EVERY SUCCESSFUL PERSON, THERE IS ALWAYS A GREAT MENTOR
              </span>
            </div>
            <div className='col-lg-6'>
              <div className='row px-lg-4'>
                <div className='youtube-video'>
                  <YouTube
                    videoId={getYouTubeID(
                      'https://www.youtube.com/watch?v=kOsv-aUuXOQ'
                    )}
                    opts={opts}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='row pt-lg-5 pt-3 flex-column-reverse flex-md-row'>
            <div className='col-lg-6'>
              <div className='row px-lg-4'>
                <div className='youtube-video'>
                  <YouTube
                    videoId={getYouTubeID(
                      'https://www.youtube.com/watch?v=kOsv-aUuXOQ'
                    )}
                    opts={opts}
                  />
                </div>
              </div>
            </div>
            <div className='col-lg-6 py-md-5 py-3 order-sm-12'>
              <h2>Life is a</h2>
              <h1>Big University</h1>

              <p>
                We will ensure every individual to be connected with matching
                mentor who helps person to become achiever at every stage of
                life.
              </p>

              <span>
                BEHIND EVERY SUCCESSFUL PERSON, THERE IS ALWAYS A GREAT MENTOR
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandVideosSection;
