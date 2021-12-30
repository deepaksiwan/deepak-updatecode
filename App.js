import FindMentorSection from './components/find-mentor-section/FindMentorSection'
import Header from './components/header-section/Header'
import JoinMentorkart from './components/join-mentokart/JoinMentorkart'
import PartnersSection from './components/partners/PartnersSection'
import ProgramsSection from './components/programs-section/ProgramsSection'
import Footer from './components/footer/Footer'
import BlogsSection from './components/blogs/BlogsSection'
import FeaturedSection from './components/featured/FeaturedSection'
import Testimonials from './components/testimonials/Testimonials'
import BannerSection from './components/banner/BannerSection'
import Blogs from './components/blogs/Blogs'
import Courses from './components/programs-section/Courses'
import BeAMentor from './components/BeAMentor'
import About from './components/About'
import OurTeam from './components/OurTeam'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Switch, Route } from 'react-router-dom'
import Mentors from './components/find-mentor-section/Mentors'
import AsAOrganisation from './components/AsAOrganisation'
import AsACampus from './components/AsACampus'
import PrivacyPolicy from './components/PrivacyPolicy'   
import RefundPolicy from './components/RefundPolicy'
import TermsCondi from './components/TermsCondi'
import Faq from './components/Faq'
import Careers from './components/Careers'
import MentorProfile from './components/MentorProfile'
import SingleBlog from './components/SingleBlog'
import FindAMentor from './components/FindAMentor'
import YoutubeSection from './components/youtube-section/YoutubeSection'
import SubscriptionSection from './components/subscription-section/SubscriptionSection'
import Packages from './components/packages-section/Packages'
import PackagesSection from './components/packages-section/PackagesSection'
import DetailsSection from './components/details-section/DetailsSection'
import CampusSection from './components/campus/CampusSection'
import BrandVideosSection from './components/brand-videos-section/BrandVideosSection'
import Facilities from './components/header-section/Facilities'

function App() {
  return (
    <div>
      <Switch>
        <Route  exact path="/">
          <Header />
          <ToastContainer />
          <FindMentorSection />
          <DetailsSection />
          <PackagesSection />
          <Facilities />
          <JoinMentorkart />
          <ProgramsSection />
          <SubscriptionSection />
          <BannerSection />
          <BrandVideosSection />
          <PartnersSection />
          <Testimonials />
          <FeaturedSection />
          <BlogsSection />
          <CampusSection />
          <YoutubeSection />
          <Footer />
        </Route>
        <Route exact path="/our-blogs">
          <Blogs />
        </Route>
        <Route exact path="/courses">
          <Courses />
        </Route>
        <Route exact path="/packages">
          <Packages />
        </Route>
        <Route exact path="/be-a-mentor">
          <BeAMentor />
        </Route>
        <Route exact path="/all-mentors">
          <Mentors />
        </Route>
        <Route exact path="/as-a-campus">
          <AsACampus />
        </Route>
        <Route exact path="/as-a-organisation">
          <AsAOrganisation />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/our-team">
          <OurTeam />
        </Route>
        <Route exact path="/faq">
          <Faq />
        </Route>
        <Route exact path="/careers">
          <Careers />
        </Route>
        <Route exact path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route exact path="/refund-policy">
          <RefundPolicy />
        </Route>
        <Route exact path="/terms-conditions">
          <TermsCondi />
        </Route>
        <Route exact path="/find-a-mentor">
          <FindAMentor />
        </Route>
        <Route
          exact
          path="/mentor-profile/:username/:id"
          component={MentorProfile}
        ></Route>
        <Route exact path="/blog/:id" component={SingleBlog}></Route>
      </Switch>
    </div>
  )
}

export default App
