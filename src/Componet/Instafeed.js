import React from "react";

const Instafeed = () => {
  return (
    <div>
      <h1 className="mt-5  text-center TopHeading">Instagram</h1>

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
