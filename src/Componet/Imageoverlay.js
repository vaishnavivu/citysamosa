import React,{useState} from "react";
import "./imageoverlay.css";
import Productdb from "./Produtdb"
function Imageoverlay() {
  const [items] = useState(Productdb);
  return (
    
    <>
      <div className="textanim" id="textanim1">
        <h2 data-text="Product...">product...</h2>
      </div>

      <section className="cards mt-5">
        {
          items.map((elem)=>{
            const { image } = elem;
            return(
              <div className="card js-tilt" data-tilt>

          <div className="banner">
            <h2>
              Converse <br/>
              All star
            </h2>
          </div>
          <img src={image} alt="samosa" className="pop" />
          <div className="content mt-5 ml-0">
            <div className="details">
              <h5>product details</h5>
              <small>color:Cherry red</small>      
            </div>
          
          </div>
        </div>
            )
          })
        }
        
      </section>
    </>
  );
}

export default Imageoverlay;