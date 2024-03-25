// Sidebar.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [val, setVal] = useState(false);

  const toggleSidebar = () => {
    setVal(!val);
  };
  const handleLogOut = () => {
    localStorage.setItem("loggedIn", false);
    navigate("/", { replace: true });
    Swal.fire({
      icon: "success",
      title: "Logged Out",
      text: "You have been logged out successfully",
    });
  };

  return (
    <section
      id="sidebar"
      className={localStorage.getItem("loggedIn") ? "" : "hide"}
    >
      <i
        className={
          localStorage.getItem("loggedIn")
            ? "bx bx-menu menu"
            : "bx bx-menu hide"
        }
        onClick={toggleSidebar}
      ></i>
      <a href="#" className="brand">
        <i className="bx bxs-smile"></i>
        <span className="text">UserHub</span>
      </a>
      <ul className="side-menu top">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <Link to={"/"+ menuItem.text}>
              <i className={`bx ${menuItem.icon}`}></i>
              <span className="text">{menuItem.text}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="side-menu">
        <li>
          <a href="#">
            <i className="bx bxs-cog"></i>
            <span className="text">Settings</span>
          </a>
        </li>
        <li onClick={handleLogOut}>
          <a className="logout">
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

const menuItems = [
  { text: "dashboard", icon: "bxs-dashboard" },
  { text: "my store", icon: "bxs-shopping-bag-alt" },
  { text: "log", icon: "bxs-doughnut-chart" },
  { text: "alert", icon: "bxs-message-dots" },
  { text: "members", icon: "bxs-group" },
];

export default Sidebar;
