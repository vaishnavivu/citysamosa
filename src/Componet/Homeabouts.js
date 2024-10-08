import React from "react";
import { Link } from "react-router-dom";
const Homeabouts = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row mt-5">
        <div className="col-sm-6 col-12 pt-4 p-4 center-vertical">
          <h2 className="text-left mainheading pb-3">
            The Untold Journey of the City Samosa
          </h2>
          <p className="subheading justify">
            "City Samosa – where every bite tells a story! From the crunch of
            the samosa to the warmth of our chai, We cherish the joy of each
            customer’s smile. Infusing tradition with a touch of love, Join us
            and savor moments that bring the world closer!"{" "}
          </p>
          <button type="submit" class="btn" title="Click to know more about us">
            <Link className="btn_text pl-1 pr-1" to="/about" aria-label="Learn more about us">
              Know More!
            </Link>
          </button>
        </div>
        <div className="col-sm-6 col-12 leader_img p-sm-5 p-4">
          <img src="../WhatsApp Image 2024-09-16 at 12.16.58 PM.webp" alt="city samosa owner" loading="lazy"/>
        </div>
      </div>
    </div>
  );
};

export default Homeabouts;
