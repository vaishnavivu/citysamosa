import React from 'react'
import Founder from './Founder'
import Scrolltxt from './Scrolltxt'
import AnimatedGallery from './AnimatedGallery'

const About = () => {
  return (
    <div >
       {/* <div className="textanim mb-5" id="textanim1">
        <h2 data-text="About" className="mb-5">about</h2>
      </div> */}
      <AnimatedGallery/>
        <Founder></Founder>
        <Scrolltxt/>
       </div>
  )
}

export default About;
