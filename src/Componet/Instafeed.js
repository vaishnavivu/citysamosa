import React from "react";

const Instafeed = () => {
  return (
    <div data-aos="zoom-in-down" data-aos-duration="3000">
      <div className="textanim mt-5" >
        <h2 data-text="Instagram...">Instagram...</h2>
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
