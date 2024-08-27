import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import './AnimationComponent.css'

gsap.registerPlugin(ScrollTrigger);

const AnimationComponent = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        // markers: true,
      },
    });

    tl.to("#fanta", { top: "120%", left: "0%" }, "orange")
      .to("#orange-cut", { top: "160%", left: "23%" }, "orange")
      .to("#orange", { width: "15%", top: "160%", right: "10%" }, "orange")
      .to("#leaf", { top: "110%", rotate: "130deg", left: "70%" }, "orange")
      .to("#leaf2", { top: "110%", rotate: "130deg", left: "0%" }, "orange");

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
        // markers: true,
      },
    });

    tl2.from(".lemon1", { rotate: "-90deg", left: "-100%", top: "110%" }, "ca")
      .from("#cocacola", { rotate: "-90deg", top: "110%", left: "-100%" }, "ca")
      .from(".lemon2", { rotate: "90deg", left: "100%", top: "110%" }, "ca")
      .from("#pepsi", { rotate: "90deg", top: "110%", left: "100%" }, "ca")
      .to("#orange-cut", { width: "18%", left: "42%", top: "204%" }, "ca")
      .to("#fanta", { width: "35%", top: "210%", left: "33%" }, "ca");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      {/* Your HTML structure here */}
      <div className="two">
        <div id="fanta"></div>
        <div id="orange-cut"></div>
        <div id="orange"></div>
        <div id="leaf"></div>
        <div id="leaf2"></div>
      </div>
      <div className="three">
        <div className="lemon1"></div>
        <div id="cocacola"></div>
        <div className="lemon2"></div>
        <div id="pepsi"></div>
      </div>
    </div>
  );
};

export default AnimationComponent;
