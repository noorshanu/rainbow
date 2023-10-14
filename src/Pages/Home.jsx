import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'


function Home() {
  return (
    <>
     <Navbar/>
     <div className=' py-8'>
      <About/>

     </div>
    </>
  )
}

export default Home