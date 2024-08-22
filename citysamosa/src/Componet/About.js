import React from 'react'
import Founder from './Founder'
import Cards from './Cards'

const About = () => {
  return (
    <div >
      <h1 className=' TopHeading text-center mt-5'>
        About Us</h1>
        <Founder></Founder>
        <Cards/>
       </div>
  )
}

export default About;
