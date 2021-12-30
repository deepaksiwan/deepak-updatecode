import { combineReducers } from 'redux';

import { mentor } from './mentorReducer';
import { banner } from './bannerReducer';
import { blogs } from './blogsReducer';
import { feature } from './featureReducer';
import { partner } from './partnerReducer';
import {
  subscribeStudent,
  subscribeProfessional,
  subscribeEntrepreneur,
} from './subscribeReducer';
import { testimonial } from './testimonialsReducer';
import { youtube } from './youtubeReducer';
import { program } from './programReducer';
import { packages } from './packagesReducer';
import { mentorDetails } from './mentorReducer';
import { blogsDetails } from './blogsReducer';
import { login } from './loginReducer';
import { signup } from './loginReducer';
import { otpverify } from './loginReducer';
import { websiteContent } from './websiteContentReducer';
import { advertisements } from './advertisementsReducer';

export default combineReducers({
  mentorList: mentor,
  bannerList: banner,
  partnerList: partner,
  featureList: feature,
  blogsList: blogs,
  subscribeStudent,
  subscribeProfessional,
  subscribeEntrepreneur,
  testimonialList: testimonial,
  youtubeList: youtube,
  programList: program,
  packagesList: packages,
  mentorDetailsList: mentorDetails,
  blogsDetailsList: blogsDetails,
  loginDetails: login,
  signupDetails: signup,
  otpDetails: otpverify,
  websiteContentList: websiteContent,
  advertisementsList: advertisements,
});
