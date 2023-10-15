import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import OurDelights from '../components/OurDelights'


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
    </>
  )
}

export default Home