import React from "react";

const Masthead = () => {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8 align-self-end">
            <h1 className="text-white font-weight-bold">
              Enhance Your Security with Face Detection
            </h1>
            <hr className="divider" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 mb-5">
              Secure your Home with cutting-edge face detection technology! Our
              solution offers seamless integration and robust protection against
              unauthorized access. Elevate your security measures and safeguard
              your sensitive data with confidence.
            </p>
            <a className="btn btn-primary btn-xl" href="#about">
              Find Out More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Masthead;
