import React from 'react';
import '../Componet/Comingsoon.css'

const Comingsoon = () => {
  return (
    <div className='container-fluid comingbg pt-4 pb-5'>
      <div className="Comingheading" >
        <h3 className="pb-3">Coming Soon</h3>
      </div>
      <div className='container comingsoon'>
      <div className='row'>
        <div className='col-4'><img src='../hydrabad.jpg' alt=''></img></div>
        <div className='col-4'><img src='../hydrabad.jpg' alt=''></img></div>
        <div className='col-4'><img src='../hydrabad.jpg' alt=''></img></div>
      </div>
    </div>
    </div>
    
  )
}

export default Comingsoon
