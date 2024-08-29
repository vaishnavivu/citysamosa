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
      <div className="Contact_top container overflow-hidden">
        <h2 className="pt-5 pb-4 TopHeading1">WANT TO GET IN TOUCH?</h2>

        <p>
          We value your feedback, and we’re available to assist you with any
          queries or concerns you might have.
          <br /> Whether you want to join our team or partner with us, we are
          happy to have a chat!
        </p>
      </div>

      
      {/* maplocation */}
      <div
        className="container-fluid mt-0"
        style={{ background: "#d42121", textAlign: "center" }}
      >
        <div className="row">
          <div className=" order-1 col-md-5">
            <div className="contactInfo ">
              <div className="box">
                <div className="icon col-1 mx-auto mb-3 ">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="text">
                  <h3>Address</h3>
                  <p>
                  Shop No 2,New Monica CHS, OPP Jai Shankar Wine Shop. Near Castle Mill Naka, Uthalasar, Thane, West 400601.


                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon col-1 mx-auto mb-3">
                  <i className="fa fa-envelope aria-hidden='true'"></i>
                </div>
                <div className="text">
                  <h3>Mailid@gmail.com</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon col-1 mx-auto mb-3">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className="text">
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
        <div className="container  text-center pt-5 col-12 col-md-6 mx-auto aos-init aos-animate"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="5000"
        loading="lazy"
        alt="">
        <form onSubmit={onSubmit} action="" method="POST">
          <div className="mb-4">
            <label for="exampleFormControlInput1" className="form-label">
            
            </label>
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
            <label for="exampleFormControlInput1" className="form-label">
              
            </label>
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
            <label for="exampleFormControlInput1" className="form-label">
             
            </label>
            <input
              type="number"
              name="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Contact Number"
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label for="exampleFormControlInput1" className="form-label">
             
            </label>
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
      </div>

      
      
    </>
  );
}

export default Contact;
