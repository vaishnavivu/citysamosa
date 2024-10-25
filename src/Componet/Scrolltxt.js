import "./Scrolltxt.css";
import React from "react";
const Scrolltxt = () => {
  return (
    <div
      className="mt-5 mb-5 overflow-hidden"
      src="../CITY WEBSITE EDITS-02.png"
      alt=""
    >
      <div className="mt-5  mb-4 centerheading">
        <h3>Our Presence</h3> <div className="line mt-0"></div>
      </div>
      <div className="text-center Map mt-0">
        <div>
          <img
            className="csMap pt-5 pb-5"
            src="../CITY WEBSITE EDITS-02.webp"
            loading="lazy"
            alt=""
          />
        </div>
      </div>
      <div class="container-fluid scroll_hidden">
        <div class="scroll">
          <div class="RightToLeft">
            <div className="txtmap">
              AB PURA INDIA KHAYEGA CITY SAMOSA! WITH CITY SAMOSA REACHING 100+
              FRANCHISES, THE BRAND IS RAPIDLY EXPANDING ACROSS THE COUNTRY.
              FROM SMALL TOWNS TO BUSTLING CITIES, THE IRRESISTIBLE TASTE OF
              CITY SAMOSA IS BECOMING A NATIONWIDE FAVORITE, DELIGHTING MILLIONS
              WITH ITS UNIQUE FLAVORS AND FRESH OFFERINGS.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Scrolltxt;
