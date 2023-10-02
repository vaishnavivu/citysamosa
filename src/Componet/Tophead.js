import React from "react";
import "./Tophead.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

function Tophead() {
 
  return (
    <>
    <div className="sticky-top bg-body-transperant mt-0">
      
      <nav
        className="navbar pt-0  d-sm-none d-md-none d-none
	d-md-none d-lg-block pb-0"
      >
        
     
        <div className="container firstnav pt-2 pb-2">
          
          <div>
            <FontAwesomeIcon icon={faPhone} beat  style={{ color: "rgb(197, 31, 31)" ,margin: "0 10px 0 0" }} />
            <span>   </span>
            
            <a className="navbar-brand pl-5 ml-5" href="/">
              +91 7304454573
            </a>
            <a className="navbar-brand" href="/">
              +91 7304454574
            </a>
          </div>

          <a className="navbar-brand me-1" href="/">
            <FontAwesomeIcon
              icon={faEnvelope}
              beat
              style={{ color: "rgb(197, 31, 31)" , margin: "0 10px 0 0"}}
            />
            <span >  </span> citysamosa2021@gmail.com
          </a>
        </div>
      </nav>
      
        {/* second navbar */}
      <nav class="navbar navbar-expand-lg   pb-0 pt-0">
        <div class="container" id="yellowline" >
         

          <div
            className=" d-sm-block d-md-block
	d-md-block d-lg-none"
          >
            <img
              src="../logo512.png"
              alt="logo"
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
          <img className='tophead_img1 mbhidden' src="../City Samosa1.png"></img> 
            <ul className="navbar-nav">
            

              <li className="nav-item pt-1 pb-1">
                <Link className="nav-link pl-1 pr-1  " aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item pt-1 pb-1 active">
                <Link className="nav-link pl-1 pr-1 "to="/about">
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
              <li className="nav-item mbhidden  pt-1 pb-1 ">
                <Link className="nav-link pl-1 pr-1" to="/">
                 
                </Link>
              </li>
              <li className="nav-item mbhidden pt-1 pb-1 ">
                <Link className="nav-link pl-1 pr-1" to="/">
                
                </Link>
              </li>
             
              <li className="nav-item pt-1 pb-1 mbhidden  ml-5 mr-4  d-sm-none d-md-none d-none
	d-md-none d-lg-block" id="logo">
                <Link className="active navbar-brand logo ml-5" to="/">
                  <img src="../logo512.png" className="pl-5 pr-5" alt="logo" />
                </Link>
              </li>
              <li className="nav-item mbhidden pt-1 pb-1  ">
                <Link className="nav-link pl-1 pr-1" to="/">
                 
                </Link>
              </li>
              <li className="nav-item mbhidden pt-1 pb-1  ">
                <Link className="nav-link pl-1 pr-1" to="/">
                
                </Link>
              </li>

              <li className="nav-item  mbhidden pt-1 pb-1  ">
                <Link className="nav-link pl-1 pr-1" to="/">
                 
                </Link>
              </li>
              <li className="nav-item pt-1 pb-1 active">
                <Link className="nav-link pl-1 pr-1" to="/">
                  Blog
                </Link>
              </li>
              <li className="nav-item pt-1 pb-1 active">
                <Link className="nav-link pl-1 pr-1" to="/contact">
                  Contact 
                </Link>
              </li>
              <li className="nav-item pt-1 pb-1 active">
                <Link className="nav-link pl-1 pr-1" to="/">
                  Cart
                </Link>
              </li>
              <li className="nav-item pt-1 pb-1 active">
                <Link className="nav-link pl-1 pr-1" to="/">
                  Checkout
                </Link>
              </li>
            </ul>
            <img className='tophead_img2 mbhidden' src="../City Samosa1.png"></img>
          </div>
        </div>
      </nav>
     
      </div>
      

    
    </>
  );
}

export default Tophead;
