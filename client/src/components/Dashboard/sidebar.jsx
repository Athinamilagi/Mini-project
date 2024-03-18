import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [val, setVal] = useState(true);
  const toggleSidebar = () => {
    setVal(!val);
  };
  return (
    <section id="sidebar" className={val ? "" : "hide"}>
      <i
        className={val ? "bx bx-menu menu" : "bx bx-menu hide"}
        onClick={toggleSidebar}
      ></i>
      <a href="#" className="brand">
        <i className="bx bxs-smile"></i>
        <span className="text">UserHub</span>
      </a>
      <ul className="side-menu top">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <a href="#">
              <i className={`bx ${menuItem.icon}`}></i>
              <span className="text">{menuItem.text}</span>
            </a>
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
        <li>
          <a href="#" className="logout">
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

// Define menu items as an array of objects with text and icon properties
const menuItems = [
  { text: "Dashboard", icon: "bxs-dashboard" },
  { text: "My Store", icon: "bxs-shopping-bag-alt" },
  { text: "Log", icon: "bxs-doughnut-chart" },
  { text: "Alert", icon: "bxs-message-dots" },
  { text: "Members", icon: "bxs-group" },
];

export default Sidebar;
