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
      <footer class="bg-light py-5">
        <div class="container px-4 px-lg-5">
          <div class="small text-center text-muted">
            Copyright &copy; 2023 - Home Security Corp.Pvt.Ltd. All
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
