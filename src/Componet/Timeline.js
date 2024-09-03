import React from "react";
const Timeline = () => {
  return (
    <div className="main container">
      <div className="mt-5 centerheading">
        <h3>
          OUR <span> JOURNEY </span>
        </h3>
      </div>

      <div className="timeline">
       

        <div className="timecontainer left-container " >
          <img src="../2021-08.png" alt="HTML" />

          <div className="text-box htmlcard" data-aos="flip-right">
            <h2 className="htmltext"> HTML </h2>

            <small>
              {" "}
              <span className="company"> [ Company Name ] </span> 2023 - 2024{" "}
            </small>

            <p>
              MR Coder has 1 years of experience at [Company Name], specializing
              in HTML.
            </p>

            <span className="left-container-arrow htmlarrow"></span>
          </div>
        </div>

        <div className="timecontainer right-container" >
          <img src="../2022-08.png" alt="JavaScript" />

          <div className="text-box javascriptcard" data-aos="flip-right">
            <h2 className="javascripttext"> JavaScript </h2>

            <small>
              {" "}
              <span className="company"> [ Company Name ] </span> 2023 - 2024{" "}
            </small>

            <p>
              MR Coder has 1 year of experience at [Company Name], focusing on
              JavaScript.
            </p>

            <span className="right-container-arrow javascriptarrow"></span>
          </div>
        </div>

        <div className="timecontainer left-container" >
          <img src="../2023-08.png" alt="React JS" />

          <div className="text-box reactjscard" data-aos="flip-right">
            <h2 className="reactjstext"> React Js </h2>

            <small>
              {" "}
              <span className="company"> [ Company Name ] </span> 2023 - 2024{" "}
            </small>

            <p>
              MR Coder has 1 year of experience at [Company Name] in React.js,
            </p>

            <span className="left-container-arrow reactjsarrow"></span>
          </div>
        </div>

        <div className="timecontainer right-container" >
          <img src="../2024-08.png" alt="Node JS" />

          <div className="text-box nodejscard" data-aos="flip-right">
            <h2 className="nodejstext"> Node Js </h2>

            <small>
              {" "}
              <span className="company"> [ Company Name ] </span> 2023 - 2024{" "}
            </small>

            <p>
              MR Coder has 1 year of experience at [Company Name] in Node.js,
            </p>

            <span className="right-container-arrow nodejsarrow"></span>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Timeline;
