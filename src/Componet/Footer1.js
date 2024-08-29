import React from "react";
import { Link } from "react-router-dom";
import "./Footer1.css";
function Footer() {
  return (
    <div
      className="container-fluid  pt-5 navbar-fixed-bottom "
      style={{ backgroundColor: "#d42121" }}
    >
      <div className="row">
        <div className="col-9 mx-auto text-center">
          <div className="row footer-h2 mb-5 ">
            {/* logo */}
            <div className="col-12 col-sm-3 m-sm-0">
              <img src="./whlogo.png" alt="" className="f-logo"></img>
              <h6>
                Chai Sutta Bar Is A Rapidly Growing Tea-Chain, Founded In 2016
                By Two Young & Passionate Entrepreneurs – Anubhav Dubey And
                Anand Nayak.
              </h6>
            </div>
            {/* Quick link */}
            <div className="col-12 col-sm-3 m-sm-0 mt-4 justify-content-center">
              <h2 className="mb-2 mt-3 justify-content-center">Quick Links</h2>
              <div className="row mb-2 mt-3 Q-link">
              <Link to="/home" className="text-decoration-none">
                  Home
                </Link>
                <Link to="/about" className="text-decoration-none">
                  About us
                </Link>
                <Link to="/gallery" className="text-decoration-none">
                  Gallery
                </Link>
                <Link to="/contact" className="text-decoration-none">
                  Contact Us
                </Link>
                <Link to="/product" className="text-decoration-none">
                  Product
                </Link>
                
              </div>
            </div>

            {/* get in touch */}
            <div className="col-12 justify-content-center  col-sm-3">
              <h2 className="mb-2 mt-3  justify-content-center">
                Get in touch
              </h2>
              <div className="text-white Add">
                Shop No 2, New Monica CHS, OPP Jai Shankar Wine Shop. Near Castle
                Mill Naka, Uthalasar, Thane, West 400601.
              </div>

              {/* <div className="row mb-2 justify-content-center">
                <div className="col-2 p-0">
                  <i className="fa-brands icon fa-whatsapp p-0 "></i>
                </div>
                <div className="col-4 p-0 text-white ">7304454574</div>
              </div> */}
              {/* <div className="row mb-2 justify-content-center">
                <div className="col-2 p-0">
                  <i className="fa fa-envelope aria-hidden='true'"></i>
                </div>
                <div className="col-4 p-0 text-white ">7304454574</div>
              </div> */}
              {/* <div className="row mb-2 justify-content-center">
                <div className="col-2 p-0 ">
                  <i className="fa-brands icon fa-instagram"></i>
                </div>
                <div className="col-4 p-0 text-white ">7304454574</div>
              </div> */}
            </div>

            {/* Social media  */}
            <div className="col-12 col-sm-3  m-sm-0 mt-4  justify-content-center">
              <h2 className="mb-2 mt-3 heading">Social Media</h2>

              <div className="row mb-2 d-inline social-icon">
                <Link to="https://wa.me/+917304454574">
                  <i className="fa-3x fa-brands fa-whatsapp p-0 icon social-icon"></i>
                </Link>
                <Link to="https://www.instagram.com/citysamosaofficial/?hl=en">
                  <i className="fa-3x fa-brands fa-instagram icon social-icon"></i>
                </Link>
                <Link to="https://www.facebook.com/citysamosa/">
                  <i className="fa-3x fa-brands fa-facebook-f icon social-icon"></i>
                </Link>
                <Link to="https://www.youtube.com/channel/UCJiRF0KFu_wtHhiGV6wcLWw">
                  <i className="fa-3x fa-brands fa-youtube icon social-icon"></i>
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
