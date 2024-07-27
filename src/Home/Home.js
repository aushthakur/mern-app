import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Hero2 from '../components/hero2';
import Hero3 from '../components/hero3';
// import careersection from '../components/careerSection'
import Footer from '../components/footer';
import CareerSection from '../components/careerSection';

const Home = () => {
 

  
  return (
    <>
    <div>
    <div>
      { (
        // Your application content
        <div>
          <h1>Welcome to my app!</h1>
          {/* <!-- Your app content here --> */}
        </div>
      )}
    </div>
   
        <Navbar/>
        <Hero/>
        <Hero2/>
        <Hero3/>
       <CareerSection/>
        <Footer/>
    </div>
    </>
  )
}

export default Home