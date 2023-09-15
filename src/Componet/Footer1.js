import React from "react";
import { Link } from "react-router-dom";
import { text } from "@fortawesome/fontawesome-svg-core";
import "./Footer1.css";
function Footer() {
  return (
    <div
      className="container-fluid mt-5 pt-5 navbar-fixed-bottom "
      style={{ backgroundColor: "#d42121" }}
    >
      <div className="row">
        <div className="col-9 mx-auto text-center">
          <div className="row footer-h2 mb-5 ">
            {/* get in touch */}
            <div className="col-12 justify-content-center  col-sm-4">
              <h2 className="mb-4 justify-content-center">Get in touch</h2>

              <div className="row mb-2 justify-content-center">
                <div className="col-2 p-0">
                  <i className="fa-brands icon fa-whatsapp p-0 "></i>
                </div>
                <div className="col-4 p-0 text-white ">7304454574</div>
              </div>
              <div className="row mb-2 justify-content-center">
                <div className="col-2 p-0">
                  <i
                    class="fa fa-envelope aria-hidden='true'"
                  ></i>
                </div>
                <div className="col-4 p-0 text-white ">7304454574</div>
              </div>
              <div className="row mb-2 justify-content-center">
                <div className="col-2 p-0 ">
                  <i
                    class="fa-brands icon fa-instagram"
                  ></i>
                </div>
                <div className="col-4 p-0 text-white ">7304454574</div>
              </div>
            </div>

            {/* Quick link */}
            <div className="col-12 col-sm-4 m-sm-0 mt-4 justify-content-center">
              <h2 className="mb-4 justify-content-center">Quick Links</h2>
              <div className="row mb-2">
                <div className="text-center p-0 text-white ">7304454574</div>
              </div>
              <div className=" row mb-2">
                <div className="text-center p-0 text-white ">7304454574</div>
              </div>
              <div className="row mb-2">
                <div className="text-center p-0 text-white ">7304454574</div>
              </div>
            </div>

            {/* Social media  */}
            <div className="col-12 col-sm-4  m-sm-0 mt-4  justify-content-center">
              <h2 className="mb-4 ">Social Media</h2>

              <div className="row mb-2 d-inline">
                <Link to="https://www.facebook.com/citysamosa/">
                  <i
                    className="fa-brands fa-whatsapp p-0 icon"
                  ></i>
                </Link>
                <Link to="https://www.instagram.com/citysamosaofficial/?hl=en">
                  <i
                    class="fa-brands fa-instagram icon"
                  ></i>
                </Link>
                <Link to="https://www.facebook.com/citysamosa/"><i class="fa-brands fa-facebook-f icon"></i></Link>
                <Link to="https://www.youtube.com/channel/UCJiRF0KFu_wtHhiGV6wcLWw">
                <i class="fa-brands fa-youtube icon"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
