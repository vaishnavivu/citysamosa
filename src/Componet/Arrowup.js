import React from "react";
import "./Arrowup.css";
function Arrowup() {
  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <button onClick={top} className="topbtn" aria-label="Scroll to top">
        <i class="fa-solid fa-angles-up"></i>
      </button>
    </div>
  );
}

export default Arrowup;
