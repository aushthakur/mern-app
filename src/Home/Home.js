import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Hero2 from '../components/hero2';
import Hero3 from '../components/hero3';
// import careersection from '../components/careerSection'
import CaseStudiesSolarSystem from '../components/casestudy';
import Footer from '../components/footer';
import FireSection from '../components/section5';
import ContactForm from '../components/contact_section';
import CareerSection from '../components/careerSection';
import ShareYourExperties from '../components/ShareYourExperties';
import ProfessionalSeo from '../components/ProfessionalSeo';
import OurServices from '../components/OurServices';
import SeoPage from '../Pages/SeoPage';
import Saas from '../Pages/Saas';

const Home = () => {

  return (
    <>
    <div className="app-container">
    <div className="layout-container">
  
      { (
        // Your application content
          <></>
      )}
        <Navbar/>
        <Saas/>
        <Hero/>
        <Hero2/>
        <Hero3/>
       <CaseStudiesSolarSystem/>
       <FireSection/>
       <ContactForm/>
        <Footer/>
    </div>
    </div>
    
    </>
  )
}

export default Home