import React from "react";
import { Link } from "react-router-dom";
const HomeProduct = () => {
  return (
    <section className="pb-4 mt-5 mb-5 pt-3 mt-sm-4 pt-sm-4">
         <Link className="btn_text pl-1 pr-1" to="/product">
      <div className="container-fluid productvideo text-center pt-3 pt-sm-5">
        <h3>Are you eager to see our delicious menu products?</h3>
        <button type="submit" className="btn mt-1 mt-sm-5 largescreen">
            <Link className="btn_text pl-1 pr-1" to="/product">
              See All Product
            </Link>
          </button>
      </div>
      <video autoPlay muted loop width="100%">
        <source src="../HOME PAGE PRODUCT VIDEO.mp4" type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
      <div className="d-flex justify-content-center smallscreen"> <button type="submit" className="btn mt-1 mt-sm-5 smallscreen">
            <Link className="btn_text pl-1 pr-1" to="/product">
              See All Product
            </Link>
          </button></div>     
      </Link>
    </section>
  );
};
export default HomeProduct;
