import React from "react";
export default function AnimatedGallery() {
  return (
    <div className="container-fluid">
      <div className="centerheading pt-5 pt-sm-3">
        <h3>Our Leaders</h3>
        <div className="line mt-0 mb-3"></div>
      </div>

      {/* Leaders */}
      <div className="container founder pt-0 mt-0">
        {/* left */}
        <div className="row ">
          <div className="col-sm-6  col-12 leader_img">
            <img src="../owners website photo-01.png" alt=""></img>
          </div>
          <div className="col-sm-6  col-12 center-vertical flex_left">
            <h2 className="text-center mt-4 mt-sm-3 mainheading">Chandrashekhar</h2>
            <p className="subheading justify">
              hhhhhhhhhhhhhhhhhhhh hhhhh hhh hhhh
            </p>
          </div>
        </div>

        {/* right */}
        <div className="row">
          {/* For large screens */}
          <div className="col-sm-6 col-12 center-vertical flex_right largescreen">
            <h2 className="text-center mt-4 mt-sm-3 mainheading">Chandrashekhar</h2>
            <p className="subheading justify">
              hhhhhhhhhhhhhhhhhhhh hhhhh hhh hhhh
            </p>
          </div>
          <div className="col-sm-6 col-12 leader_img">
            <img src="../owners website photo-03.png" alt="" />
          </div>
          {/* For small screens */}
          <div className="col-sm-6 col-12 smallscreen">
            <h2 className="text-center mt-2 mainheading">Chandrashekhar</h2>
            <p className="subheading justify">
              hhhhhhhhhhhhhhhhhhhh hhhhh hhh hhhh
            </p>
          </div>
        </div>

        {/* left */}
        <div className="row">
          <div className="col-sm-6 col-12 leader_img">
            <img src="../owners website photo-02.png" alt=""></img>
          </div>
          <div className="col-sm-6 col-12 center-vertical flex_left">
            <h2 className="text-center mt-4 mt-sm-3 mainheading">Chandrashekhar</h2>
            <p className="subheading justify">
              hhhhhhhhhhhhhhhhhhhh hhhhh hhh hhhh
            </p>
          </div>
        </div>

         {/* right */}
         <div className="row mb-5 pb-5 ">
          {/* For large screens */}
          <div className="col-sm-6 col-12 center-vertical largescreen flex_right">
            <h2 className="text-center mt-4 mt-sm-3 mainheading">Chandrashekhar</h2>
            <p className="subheading justify">
              hhhhhhhhhhhhhhhhhhhh hhhhh hhh hhhh
            </p>
          </div>
          <div className="col-sm-6 col-12 leader_img">
            <img src="../owners website photo-04.png" alt="" />
          </div>
          {/* For small screens */}
          <div className="col-sm-6 col-12 smallscreen">
            <h2 className="text-center mt-2 mainheading">Chandrashekhar</h2>
            <p className="subheading justify">
              hhhhhhhhhhhhhhhhhhhh hhhhh hhh hhhh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
