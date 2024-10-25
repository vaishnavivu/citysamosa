import React from "react";
import "./Contact.css";
function Contact() {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzypxpF8Hria6IlTryHW1LbrUgsvHlRiXNVoStxmeUfzWlVp4lKCFfOUgCqoRLcndhbkg/exec",
        {
          method: "POST",
          body: new URLSearchParams(formData),
        }
      );
      const data = await response.json();
      console.log("Response data:", data);
      if (data.success || data.result === "success") {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult("Failed to submit form");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("Error submitting form");
    }
  };
  return (
    <>
      <div className="Contact_top container overflow-hidden ">
        <div className="pt-5 centerheading">
          <h3>Get in Touch with City Samosa!</h3>
        </div>
        <p className="justify pt-4 pb-4">
          We would love to hear from you! Your feedback is important to us, and
          we're here to assist with any questions or concerns you may have.
          Whether you're interested in joining our team or exploring partnership
          opportunities, we're eager to connect. Let’s have a chat!
        </p>
      </div>
      <div
        className="container-fluid mt-0"
        style={{ background: "#d42121", textAlign: "center" }}
      >
        <div className="row">
          <div className="order-1 col-md-3 text-wrap">
            <div className="contactInfo ">
              <div className="box">
                <div className="icon col-1 mx-auto mb-3 ">
                  <i className="fa-solid fa-location-dot fa-bounce"></i>
                </div>
                <div className="text">
                  <h4>Address</h4>
                  <p className="justify Address">
                    Shop No 2, New Monica CHS, OPP Jai Shankar Wine Shop. Near
                    Castle Mill Naka, Uthalasar, Thane, West 400601.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon col-1 mx-auto mb-3">
                  <i className="fa-solid fa-envelopes-bulk fa-beat-fade"></i>
                </div>
                <h4 className="text justify">
                  <a
                    href="mailto:citysamosafranchise@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    citysamosafranchise@gmail.com
                  </a>
                </h4>
              </div>
              <div className="box">
                <div className="icon col-1 mx-auto mb-3">
                  <i className="fa-solid fa-phone-volume fa-beat-fade"></i>
                </div>
                <h4 className="text">
                  <a
                    href="tel:+917304454574"
                    className="callnu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 7304454574
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div className="order-2 col-md-9 m-0 p-0">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1BXvpnyB4dnUlaUHqAdWG4bDYR4ueGAE&ehbc=2E312F"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="maplocation"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-5 mb-sm-5 pb-5 contactbg">
        <img
          src="../City Samosa Vector Art-06.webp"
          className="formimage"
          alt=""
          loading="lazy"
        />
        <div
          className="container zindex text-center pt-5 col-12 col-md-6 mx-auto"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="5000"
        >
          <form onSubmit={onSubmit} method="POST">
            <h2>Submit the following details for franchisee enquiry!</h2>

            <div className="mb-4 mt-5">
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Your Name"
                required
                autoComplete="off"
                pattern="[A-Za-z\s]+"
                title="Please enter letters only"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="callnumber"
                className="form-control"
                placeholder="Contact Number"
                required
                autoComplete="off"
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="Email"
                className="form-control"
                placeholder="Email Id"
                required
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="address"
                className="form-control"
                placeholder="Which city are you looking for?"
                required
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <textarea
                className="form-control"
                rows="8"
                name="Message"
                placeholder="Enter Your Message"
                required
                autoComplete="off"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn mb-3"
              aria-label="Submit the button"
            >
              Submit
            </button>
          </form>
          <span
            className={`result-message 
            ${result === "Sending...." ? "sending" : ""}
            ${result === "Form Submitted Successfully" ? "success" : ""}
            ${
              result.includes("Error") || result.includes("Failed")
                ? "error"
                : ""
            }`}
          >
            {result}
          </span>
        </div>
      </div>
    </>
  );
}
export default Contact;
