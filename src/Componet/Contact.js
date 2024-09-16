import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dccbfd3b-78eb-4ecd-93a8-2cf56d26db5f");/// access key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      {/* TopHeading1 */}
      <div className="Contact_top container overflow-hidden ">
      <div className=" pt-5 centerheading" >
        <h3>  Get in Touch with City Samosa!</h3>
      </div>
        <p className="justify pt-4 pb-4">
          We had love to hear from you! Your feedback is important to us, and
          we're here to assist with any questions or concerns you may have.
          Whether you're interested in joining our team or exploring partnership
          opportunities, we're eager to connect. Let’s have a chat!
        </p>
      </div>

      {/* maplocation */}
      <div
        className="container-fluid mt-0"
        style={{ background: "#d42121", textAlign: "center" }}
      >
        <div className="row">
          <div className=" order-1 col-md-3 text-wrap">
            <div className="contactInfo ">
              <div className="box">
                <div className="icon col-1 mx-auto mb-3 ">
                  <i class="fa-solid fa-location-dot fa-bounce"></i>
                </div>
                <div className="text">
                  <h4>Address</h4>
                  <p className="justify Address">
                    Shop No 2,New Monica CHS, OPP Jai Shankar Wine Shop. Near
                    Castle Mill Naka, Uthalasar, Thane, West 400601.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon col-1 mx-auto mb-3"><i class="fa-solid fa-envelopes-bulk fa-beat-fade"></i>
                </div>
                
                  <h4 className="text justify"> <Link to="mailto:citysamosafranchise@gmail.com" target="_blank"> citysamosafranchise@gmail.com</Link></h4>
               
              </div>
              <div className="box">
                <div className="icon col-1 mx-auto mb-3">
                  <i class="fa-brands fa-instagram fa-beat-fade"></i>
                </div>
                  <h4 className="text"><Link to="https://www.instagram.com/citysamosaofficial/?hl=en" target="_blank">@citysamosaofficial</Link> </h4> 
              </div>
            </div>
          </div>

          <div className="order-2 col-md-9 m-0 p-0">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1BXvpnyB4dnUlaUHqAdWG4bDYR4ueGAE&ehbc=2E312F"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="maplocation"
            ></iframe>
          </div>
        </div>
      </div>

      {/* form */}
         
      <div className="container-fluid mb-5 mb-sm-5 pb-5 contactbg">
      <img src="../City Samosa Vector Art-06.png"className="formimage" alt=""></img>
    
        <div
          className="container zindex  text-center pt-5 col-12 col-md-6 mx-auto aos-init aos-animate"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="5000"
          loading="lazy"
          alt=""
        >
          <form onSubmit={onSubmit} action="" method="POST">
            <h2>Submit following details for franchisee enquiry!</h2>

            <div className="mb-4 mt-5">
              <input
                type="text"
                className="form-control"
                name="username"
                id="exampleFormControlInput1"
                placeholder="Your Name"
                required
                autoComplete="off"
              />
            </div>
           
           
            <div className="mb-4">
              <input
                type="callnumber"
                name="callnumber"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Contact Number"
                required
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="Email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email Id"
                required
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <input
                type="address"
                name="address"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Which city you looking for?"
                required
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="8"
                name="Message"
                placeholder="Enter Your Message"
                required
                autoComplete="off"
              ></textarea>
            </div>
            <button type="submit" class="btn">
            <Link className="btn_text pl-1 pr-1" to="">
              Submit
            </Link>
          </button>
          </form>
          
          <span>{result}</span>
          
        </div>
      </div>
    </>
  );
}

export default Contact;
