import React from "react";

const Instafeed = () => {
  return (
    <div data-aos="zoom-in-down" data-aos-duration="3000">
      <div className="mt-5 pb-3  centerheading" >
        <h3>Instagram Feed</h3>
      </div>
      <iframe
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
