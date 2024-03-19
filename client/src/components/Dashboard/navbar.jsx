import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [val, setVal] = useState(false);
  
  const handleProfileClick = () => {
    setVal(!val);
  };

  return (
    <>
      <section id="content">
        <nav>
          <a href="#" className="nav-link">
            Categories
          </a>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <i className="bx bx-search"></i>
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="switch-mode"></label>
          <a href="#" className="notification">
            <i className="bx bxs-bell"></i>
            <span className="num">8</span>
          </a>
          <a href="#" className="profile" onClick={handleProfileClick}>
            <img src="img/podcast.png" alt="profile" />
          </a>
        </nav>
      </section>
      <Outlet context={[val,setVal]}/>
    </>
  );
};

export default Navbar;
