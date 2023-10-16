import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import OurDelights from '../components/OurDelights'
import SocialMedias from '../components/SocialMedias'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
     <Navbar/>
     <div className=' py-8'>
      <About/>

     </div>
     <div className='py-8'>
      <OurDelights/>
     </div>
     <div className=' py-8'>
      <SocialMedias/>

     </div>
     <div className=' py-8'>
      <Footer/>
     </div>
    </>
  )
}

export default Home