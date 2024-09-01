import React from "react";

const Instafeed = () => {
  return (
    <div >
      <div className="mt-4 pt-4 mt-sm-5 pt-sm-5  centerheading" >
        <h3>Instagram Feed</h3>
      </div>
      <iframe data-aos="zoom-in-down" data-aos-duration="3000"
        src="https://widget.taggbox.com/161525"
        className="w-100 instaframe "
        style={{
          width: "100%",
          height: "60vh",
          border: "none",
          overflow: "hidden",
        }}
        title="insta"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Instafeed;
