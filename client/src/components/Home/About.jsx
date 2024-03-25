import React from "react";

const About = () => {
  return (
    <section className="page-section bg-about" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">
              Experience the Power of Face Detection!
            </h2>
            <hr className="divider divider-light" />
            <p className="text-white-75 mb-4">
              Our face detection solution offers seamless integration and
              advanced features to meet your security needs. Download our app
              today and experience the convenience of biometric authentication
              with no compromise on security.
            </p>
            <a className="btn btn-light btn-xl" href="#services">
              Get Started!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
