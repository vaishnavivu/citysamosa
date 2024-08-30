import React from "react";
import "./Contact.css";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7a82f31f-f1c2-44b6-b25b-8d58f38990f1");

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
        <h2 className="pt-5 TopHeading1 text-wrap">
          Get in Touch with City Samosa!
        </h2>
        <p>
          We'd love to hear from you! Your feedback is important to us, and
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
                  <p>
                    Shop No 2,New Monica CHS, OPP Jai Shankar Wine Shop. Near
                    Castle Mill Naka, Uthalasar, Thane, West 400601.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon col-1 mx-auto mb-3"><i class="fa-solid fa-envelopes-bulk fa-beat-fade"></i>
                </div>
                
                  <h4 className="text">citysamosa@gmail.com</h4>
               
              </div>
              <div className="box">
                <div className="icon col-1 mx-auto mb-3">
                  <i class="fa-brands fa-instagram fa-beat-fade"></i>
                </div>
                  <h4 className="text">@citysamosaofficial</h4> 
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
      <div className="container-fluid  contactbg">
        <img src="../wc samosa-01.png"className="formimg" alt=""></img>
        <div
          className="container  text-center pt-5 col-12 col-md-6 mx-auto aos-init aos-animate"
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
                placeholder="USERNAME"
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
                placeholder="In area which you want to open CITY SAMOSA outlet?"
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
            <button type="submit" className="btn btn-primary mb-5">
              Submit
            </button>
          </form>
          
          <span>{result}</span>
          
        </div>
        <img src="../wc samosa-01.png"className=" formimg2" alt=""></img>
       
      </div>
    </>
  );
}

export default Contact;
