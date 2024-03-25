import React, { useEffect, useState } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export async function loader() {
  const loggedIn = localStorage.getItem("loggedIn");
  return loggedIn === "true";
}

const Navbar = () => {
  const [val, setVal] = useState(false);
  const navigate = useNavigate();
  const render = useLoaderData();

  const handleProfileClick = () => {
    setVal(!val);
  };

  useEffect(() => {
    if (!render) {
      navigate("/", { replace: true });
    }
  }, [render]);
  if (render) {
    return (
      <>
        {render ? (
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
            <Outlet context={[val, setVal]} />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </>
    );
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Not Logged in, So",
      footer:
        '<a href="/login">Sign In</a>       <a href="/signup">Sign Up</a>',
    });
    return null;
  }
};

export default Navbar;
