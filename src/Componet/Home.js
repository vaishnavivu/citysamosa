import React from 'react'
import  Tophead from './Tophead'
import Founder from './Founder';
import Cards from './Cards';
import Counter from './Counter';
import ControlledCarousel from './ControlledCarousel';
function Home() {
  return (
    <div>
      <ControlledCarousel/>
       <Counter/>
    <Founder/>
    <Cards/>
   
    </div>
  )
}

export default Home
