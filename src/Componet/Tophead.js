import React, { useEffect } from "react";
import "./Tophead.css";
import { Link } from "react-router-dom";

function Tophead() {
  useEffect(() => {
    // Load the Google Translate script
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    };

    // Initialize the Google Translate Element
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );

      // Extract the select element
      const comboBox = document.querySelector(".goog-te-combo");
      if (comboBox) {
        // Remove all other elements from the google_translate_element
        const parentElement = document.getElementById(
          "google_translate_element"
        );
        parentElement.innerHTML = ""; // Clear all content
        parentElement.appendChild(comboBox); // Append only the select element
      }
    };

    addGoogleTranslateScript();

    return () => {
      // Cleanup the script when the component unmounts
      const googleTranslateScript = document.querySelector(
        'script[src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
      );
      if (googleTranslateScript) {
        document.body.removeChild(googleTranslateScript);
      }
    };
  }, []);

  return (
    <>
      <div className="sticky-top bg-body-transperant mt-0">
        <nav
          className="navbar pt-0  d-sm-none d-md-none d-none
	d-md-none d-lg-block pb-0"
        >
          <div
            className="container firstnav pt-2 pb-2"
            style={{ height: 42 }}
          ></div>
        </nav>

        {/* second navbar */}
        <nav className="navbar navbar-expand-lg   pb-0 pt-0">
          <div className="container" id="yellowline">
            <div
              className=" d-sm-block d-md-block
	d-md-block d-lg-none"
            >
              <img
                src="../logo512.png"
                alt=""
                id="logo"
                className="smallscreenlogo"
              />
            </div>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <img
                className="tophead_img1 mbhidden"
                alt=""
                src="../City Samosa1.png"
              ></img>
              
              <ul className="navbar-nav">
                <li className="nav-item pt-1 pb-1">
                  <Link
                    className="nav-link pl-1 pr-1  "
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item pt-1 pb-1 active">
                  <Link className="nav-link pl-1 pr-1 " to="/about">
                    About us
                  </Link>
                </li>

                <li className="nav-item pt-1 pb-1 active">
                  <Link className="nav-link pl-1 pr-1" to="/gallery">
                    Gallery
                  </Link>
                </li>

                <li className="nav-item  pt-1 pb-1 active">
                  <Link className="nav-link pl-1 pr-1" to="/product">
                    Product
                  </Link>
                </li>

                <li
                  className="nav-item pt-1 pb-1 mbhidden  ml-5 mr-4  d-sm-none d-md-none d-none
	d-md-none d-lg-block"
                  id="logo"
                >
                  <Link className="active navbar-brand logo ml-5" to="/">
                    <img src="../whlogo.png" className="pl-5 pr-5" alt="" />
                  </Link>
                </li>
                <li className="nav-item mbhidden pt-1 pb-1  ">
                  <Link className="nav-link pl-1 pr-1" to="/"></Link>
                </li>
                <li className="nav-item mbhidden pt-1 pb-1  ">
                  <Link className="nav-link pl-1 pr-1" to="/"></Link>
                </li>

                <li className="nav-item pt-1 pb-1 active">
                  <Link className="nav-link pl-1 pr-1" to="/contact">
                    Contact
                  </Link>
                </li>

                <li className="nav-item pt-1 pb-1 active">
                  <Link className="nav-link pl-1 pr-1" to="/home">
                    <div>
                      <div id="google_translate_element"></div>
                    </div>
                  </Link>
                </li>
              </ul>


              <img
                className="tophead_img2 mbhidden"
                alt=""
                src="../City Samosa1.png"
              ></img>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Tophead;
