import React, { useState } from "react";
import GalleryDb from "./GalleryDb";
import "./Gallery.css";


const Gallery = () => {
  const [items, setItems] = useState(GalleryDb);
  const filterItem = (categItem) => {
    const updatedItems = GalleryDb.filter((curElem)=>{
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  }
  return (
    <>
      <h1 className="mt-5 text-center ">Gallery</h1>
      <hr />
      <div className="gallery-tabs container">
        <div className="gallery-tab d-flex justify-content-center">
          <button className="btn btn-warning active " onClick={() => setItems(GalleryDb)}>All</button>
          <button className="btn btn-warning active " onClick={() => filterItem('Outlet')}>Outlet</button>
          <button className="btn btn-warning active " onClick={() => filterItem('Event')}>Event</button>
        </div>
      </div>
      {/* main items section */}
      <div className="gallery-items container-fluid mt-2">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((elem) => {
                const {  image } = elem;

                return (
                  <>
                    <div className="item1 image-container  mb-4 col-12 col-md-6 col-lg-6 col-xl-4" data-aos="zoom-in-down"data-aos-delay="50"
                  data-aos-duration="1000">
                    <div className="image">
                      <img src={image} alt="gallerypic" className="img-fluid image" />
                    </div>
                      </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
