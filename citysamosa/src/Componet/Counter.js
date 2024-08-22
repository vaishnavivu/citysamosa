import React, { useState } from "react";
import "./Counter.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
export default function Counter() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>     
        <div className="container-fluid mb-5 row section-work-data mx-auto">
          <div className="col-6">
            <h2 className="counter-numbers">+
              {counterOn && <CountUp start={0} end={50} duration={2} delay={0} />}             
            </h2>
            <p >Outlets Serving</p>
          </div>
          <div className="col-6">
            <h2 className="counter-numbers">+
              {counterOn && <CountUp start={0} end={4} duration={2} delay={0} />}             
            </h2>
            <p>Outlets Serving</p>
          </div>
        </div>
    </ScrollTrigger>
  );
}
