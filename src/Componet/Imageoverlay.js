// import React, { useState } from "react";
// import "./imageoverlay.css";
// import Productdb from "./Produtdb";
// import ScrollingSection from "./ScrollingSection ";
// function Imageoverlay() {
//   const [items] = useState(Productdb);
//   return (
//     <>
//       <div>
//         <div className="centerheading pt-5 pt-sm-3">
//           <h3>Our Product</h3>
//           <div className="line mt-0 mb-3"></div>
//         </div>
//         <div className="productbg overflow-hidden pb-5">
//           {/* <section className="cards ">
//             {items.map((elem) => {
//               const { image, heading } = elem;
//               return (
//                 <div
//                   className="card"
//                   data-aos="fade-up"
//                   data-aos-duration="3000"
//                 >
//                   <div className="banner">
//                     <h2>{heading}</h2>
//                   </div>
//                   <img src={image} alt="samosa" className="pop" />
//                   <div className="content mt-5 ml-0">
//                     <div className="details">
//                       <h5>product details</h5>
//                       <small>color:Cherry red</small>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </section> */}
//           {/* new product */}
//           <div className="container">
//             {items.map((elem) => {
//               const { image, heading } = elem;
//               return (
//                 <div
//                   className=" mb-5  row"
//                   data-aos="fade-up"
//                   data-aos-duration="3000"
//                 >
//                   <div
//                     className="col-4 center-vertical"
//                     data-aos="fade-right"
//                     data-aos-easing="linear"
//                     data-aos-delay="1500"
//                     data-aos-duration="1500"
//                   >
                    
//                     <img
//                       src="../red chatni.png"
//                       alt=""
//                       className="chutani"
//                     ></img>
//                   </div>
//                   <div className="product_img col-4 center-vertical">
//                     <img src={image} alt="" className=" product"></img>{" "}
//                   </div>
//                   <div
//                     className="col-4 center-vertical"
//                     data-aos="fade-left"
//                     data-aos-easing="linear"
//                     data-aos-delay="1500"
//                     data-aos-duration="1500"
//                   >
//                     <img
//                       src="../green chatni.png"
//                       alt=""
//                       className="chutani"
//                     ></img>
//                   </div>
//                   <div className="center-vertical">
//                     <button className=" mt-sm-5 btn_text d-flex productTitle">
//                       {heading}
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       <ScrollingSection/>
//     </>
//   );
// }

// export default Imageoverlay;
