import React from 'react'
import ProfessionalSeo from '../components/ProfessionalSeo'
import OurServices from '../components/OurServices'
import WhyChooseUs from '../components/WhyChooseUs';
import TopChoice from '../components/TopChoice';
import Navbar from '../components/navbar';
import FireSection from '../components/section5';
import ContactForm from '../components/contact_section';
import Footer from '../components/footer';

function SeoPage() {
  return (
    <>
    <div className="app-container">
    <div className="layout-container">
  
      { (
        // Your application content
        <div>
          <h1>Welcome to my app!</h1>
          {/* <!-- Your app content here --> */}
        </div>
      )}
          <Navbar/>
          <ProfessionalSeo/>
          <OurServices/>
          <WhyChooseUs/>
          <TopChoice/>
          <ContactForm/>
          <Footer/>
    </div>
    </div>
    
    </>
  )
}

export default SeoPage
