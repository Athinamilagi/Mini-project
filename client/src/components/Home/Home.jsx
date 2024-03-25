import React from "react";
import Navigation from "./Navigation";
import About from "./About";
import Masthead from "./Masthead";
import Services from "./Services";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Navigation />
      <Masthead />
      <About />
      <Services />
      <Contact />
      <footer className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="small text-center text-muted">
            Copyright &copy; 2023 - Home Security Corp.Pvt.Ltd. All
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
