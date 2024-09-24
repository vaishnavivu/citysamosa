import React from "react";
import { Link } from "react-router-dom";
const HomeGallery = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row mt-5">
        <div className="col-sm-6 col-12 pt-4 p-5 center-vertical">
          <h2 className="text-left mainheading pb-3">Award Function 2023</h2>
          <p className="subheading justify pt-2">
            We have success organised City Samosa 50+ Franchise Celebration
            Award Function 2023 at Lonavala, Where we gave awards to our
            franchise owners on the basis of their last year business
            performance..
          </p>
          <button type="submit" class="btn" title="Click to see more pictures">
            <Link className="btn_text pl-1 pr-1" to="/gallery">
              Know More!
            </Link>
          </button>
        </div>
        <div className="col-sm-6 col-12 leader_img p-sm-5 p-3">
          <div className="row">
            <div className="col-6">
              <img src="../IMG_8050.jpeg" alt="" loading="lazy"/>
            </div>
            <div className="col-6">            
              <img src="../IMG_8019.jpeg" alt="" loading="lazy"/>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-6">
              <img src="../12.jpeg" alt="" loading="lazy"/>
            </div>
            <div className="col-6">
              <img src="../14.jpeg" alt="" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeGallery;
