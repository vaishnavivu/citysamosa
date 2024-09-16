import React, { useEffect, useState } from "react";
import "./Tophead.css";
import { Link } from "react-router-dom";

function Tophead() {
  // State to track the collapse of the navbar
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );

      const comboBox = document.querySelector(".goog-te-combo");
      if (comboBox) {
        const parentElement = document.getElementById(
          "google_translate_element"
        );
        parentElement.innerHTML = ""; // Clear all content
        parentElement.appendChild(comboBox); // Append only the select element
      }
    };

    addGoogleTranslateScript();

    return () => {
      const googleTranslateScript = document.querySelector(
        'script[src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
      );
      if (googleTranslateScript) {
        document.body.removeChild(googleTranslateScript);
      }
    };
  }, []);

  // Function to handle link clicks and collapse the navbar
  const handleNavLinkClick = () => {
    setNavbarCollapsed(false); // Set collapse state to false to hide the navbar
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
      new window.bootstrap.Collapse(navbarCollapse, {
        toggle: true,
      });
    }
  };

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

        {/* Second navbar */}
        <nav className="navbar navbar-expand-lg pb-0 pt-0">
          <div className="container border-none p-0" id="yellowline">
            <div
              className="d-sm-block d-md-block
              d-md-block d-lg-none"
            >
              <img
                src="../logo512.png"
                alt=""
                id="logo"
                className="smallscreenlogo" loading="lazy"
              />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={navbarCollapsed}
              aria-label="Toggle navigation"
              onClick={() => setNavbarCollapsed(!navbarCollapsed)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <img
                className="tophead_img1 mbhidden"
                alt=""
                src="../City Samosa1.png" loading="lazy"
              ></img>

              <ul className="navbar-nav">
                <li className="nav-item pt-1 pb-1">
                  <Link
                    className="nav-link pl-1 pr-1 js-scroll-trigger"
                    aria-current="page"
                    to="/home"
                    onClick={handleNavLinkClick}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item pt-1 pb-1 active">
                  <Link
                    className="nav-link pl-1 pr-1"
                    to="/about"
                    onClick={handleNavLinkClick}
                  >
                    About us
                  </Link>
                </li>

                <li className="nav-item pt-1 pb-1 active">
                  <Link
                    className="nav-link pl-1 pr-1"
                    to="/gallery"
                    onClick={handleNavLinkClick}
                  >
                    Gallery
                  </Link>
                </li>

                

                <li
                  className="nav-item pt-1 pb-1 mbhidden ml-5 mr-4 d-sm-none d-md-none d-none
                  d-md-none d-lg-block"
                  id="logo"
                >
                  <Link
                    className="active navbar-brand logo ml-5"
                    to="/"
                    onClick={handleNavLinkClick}
                  >
                    <img src="../whlogo.png" className="pl-5 pr-5" alt="" loading="lazy"/>
                  </Link>
                </li>

                <li className="nav-item pt-1 pb-1 active">
                  <Link
                    className="nav-link mbhidden pl-1 pr-1"
                    to=""
                    onClick={handleNavLinkClick}
                  ></Link>
                </li>
                <li className="nav-item pt-1 pb-1 active">
                  <Link
                    className="nav-link pl-1 pr-1"
                    to="/product"
                    onClick={handleNavLinkClick}
                  >
                    Product
                  </Link>
                </li>

                <li className="nav-item pt-1 pb-1 active">
                  <Link
                    className="nav-link pl-2 pr-1"
                    to="/contact"
                    onClick={handleNavLinkClick}
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item pt-1 pb-1 active">
                  <div>
                    <div id="google_translate_element"></div>
                  </div>
                </li>
              </ul>

              <img
                className="tophead_img2 mbhidden"
                alt=""
                src="../City Samosa1.png" loading="lazy"
              ></img>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Tophead;
