import React from "react";
const Instafeed = () => {
  return (
    <div className=" mt-5 mb-5 pb-5 pb-sm-5">
      <div className="mt-4 pt-4 mb-4  mt-sm-5 pt-sm-5  centerheading" >
        <h3>Instagram Feed</h3>
        <div className="line mt-0"></div>
      </div>
      <iframe
        src="https://widget.taggbox.com/161525"
        className="w-100 instaframe "
        style={{
          width: "100%",
          height: "50vh",
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
