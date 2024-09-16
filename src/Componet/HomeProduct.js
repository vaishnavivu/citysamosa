import React from "react";
import { Link } from "react-router-dom";

const HomeProduct = () => {
  return (
    <section className="pb-4 mt-3 pt-3 mt-sm-4 pt-sm-4">
         <Link className="btn_text pl-1 pr-1" to="/product">
      <div className="container-fluid productvideo text-center pt-2 pt-sm-5">
        <h3>Are you eager to see our delicious menu products?</h3>
        <button type="submit" className="btn mt-1 mt-sm-5">
            <Link className="btn_text pl-1 pr-1" to="/product">
              Know More!
            </Link>
          </button>
      </div>

      <video autoPlay muted loop width="100%">
        <source src="../HOME PAGE PRODUCT VIDEO.mp4" type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
      </Link>
    </section>
  );
};

export default HomeProduct;
