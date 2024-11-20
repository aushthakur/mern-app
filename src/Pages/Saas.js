import React from 'react'
import YourSaasGrowth from '../components/YourSaasGrowth'
import SaasExperties from '../components/SaasExperties'
import OurSolution from '../components/OurSolution'
import StrugglingScale from '../components/StrugglingScale'
import ContactForm from '../components/contact_section'
import Footer from '../components/footer'

function Saas() {
    return (
        <>
        <div className="app-container">
        <div className="layout-container">

          <YourSaasGrowth/>
          <SaasExperties/>
          <OurSolution/>
          <StrugglingScale/>
          <ContactForm/>
          <Footer/>
        </div>
        </div>
        
        </>
      )
}

export default Saas
