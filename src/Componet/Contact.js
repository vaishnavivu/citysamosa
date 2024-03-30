import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
    <div className="Contact_top">
       <h2 className="pt-4 mt-5 pb-4 TopHeading1">
        WANT TO GET IN TOUCH?
      </h2>
     
      <p>
        We value your feedback, and we’re available to assist you with any
        queries or concerns you might have.
        <br /> Whether you want to join our team or partner with us, we are
        happy to have a chat!
      </p>

    </div>
   

      <div className="container-fluid mt-0" style={{ background: "#d42121", textAlign:"center"}}>
        <div className="row">
          
          <div className=" order-1 col-md-5">
            <h1 className="pt-3" style={{color: "#FFCC04"}}>GET IN TOUCH</h1>

            <div class="contactInfo ">
              <div class="box">
                <div class="icon col-1 mx-auto">
                  <i class="fa-brands fa-whatsapp"></i>
                </div>
                <div class="text">
                  <h3>Address</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
              </div>
              <div class="box">
                <div class="icon col-1 mx-auto">
                  <i class="fa fa-envelope aria-hidden='true'"></i>
                </div>
                <div class="text">
                  <h3>Mailid@gmail.com</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
              </div>
              <div class="box">
                <div class="icon col-1 mx-auto">
                  <i class="fa-brands fa-instagram"></i>
                </div>
                <div class="text">
                  <h3>Address</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="order-2 col-md-7 m-0 p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120572.1216852657!2d72.87260472286854!3d19.200495199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9051f60fffb%3A0x8a9e9548d6e83c8f!2sCity%20Samosa%20Thane%20West!5e0!3m2!1sen!2sin!4v1694423927713!5m2!1sen!2sin"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>  

 {/* form */}
      <div className="container pt-5 mt-5 text-center col-12 col-md-6 mx-auto ">
          <form action="" method="POST">
            <div class="mb-4">
            <label for="exampleFormControlInput1" class="form-label">Your Name</label>
              <input
                type="text"
                class="form-control"
                name="username"
                id="exampleFormControlInput1"
                placeholder="USERNAME"
                required
                autoComplete="off"
              />
            </div>
            <div class="mb-4">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input
                type="email"
                name="Email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Email Id"
                required
                autoComplete="off"
              />
            </div>
            <div class="mb-4">
            <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
              <input
                type="number"
                name="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Contact Number"
                required
                autoComplete="off"
              />
            </div>
            <div class="mb-4">
            <label for="exampleFormControlInput1" class="form-label">Message</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="8"
                name="Message"
                placeholder="Enter Your Message"
                required
                autoComplete="off"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary mb-5">
              Submit
            </button>
          </form>

          
        </div>
    </>
  );
}

export default Contact;
