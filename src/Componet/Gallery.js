import React, { useState } from "react";
import GalleryDb from "./GalleryDb";
import "./Gallery.css";
const Gallery = () => {
  const [items, setItems] = useState(GalleryDb);
  const filterItem = (categItem) => {
    const updatedItems = GalleryDb.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems(updatedItems);
  };
  return (
    <>
      <div className=".contactbg">
      <div className="centerheading pt-5 pt-sm-3">
          <h3>Gallery</h3>
          <div className="line mt-0 mb-3"></div>
        </div>
        <div className="gallery-tabs container mt-5">
          <div className="gallery-tab d-flex justify-content-center">
            <button
              className="btn btn-warning active btn_text"
              onClick={() => setItems(GalleryDb)}
            >
              All
            </button>
            <button
              className="btn btn-warning active btn_text"
              onClick={() => filterItem("Outlet")}
            >
              Outlet
            </button>
            <button
              className="btn btn-warning active btn_text"
              onClick={() => filterItem("Event")}
            >
              Event
            </button>
          </div>
        </div>
        <div className="gallery-items container-fluid mt-2 overflow-hidden">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row my-5">
                {items.map((elem) => {
                  const { image } = elem;
                  return (
                    <>
                      <div
                        className="item1 image-container  mb-4 col-12 col-md-6 col-lg-6 col-xl-4"
                        data-aos="zoom-in-down"
                        data-aos-delay="100"
                        data-aos-duration="2000"
                      >
                        <div className="image">
                          <img
                            src={image}
                            alt="gallerypic"
                            className="img-fluid image" loading="lazy"
                          />
                        </div>
                      </div>
                    
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
