import React from 'react'
import  Tophead from './Tophead'
import Founder from './Founder';
import Cards from './Cards';
import Counter from './Counter';
import ControlledCarousel from './ControlledCarousel';
import Swiper3D from './Swiper3D';
function Home() {
  return (
    <div>
      <ControlledCarousel/>
       <Counter/>
    <Founder/>
    <Cards/>
    <Swiper3D/>
    
   
    </div>
  )
}

export default Home
