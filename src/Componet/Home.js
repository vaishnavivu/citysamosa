import React from 'react'
import Founder from './Founder';
import Cards from './Cards';
import Counter from './Counter';
import ControlledCarousel from './ControlledCarousel';
import Slider from './Slider'
import Imageoverlay from './Imageoverlay';
function Home() {
  return (
    <div>
      <ControlledCarousel/>
       <Counter/>
    <Founder/>
    <Cards/>
    <Slider/>   
    <Imageoverlay/>
   
    </div>
  )
}

export default Home
