import React, { useState } from "react";
import Sidebar from "./sidebar";
import WebcamCapture from "./webcamcapture";
import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const [val, setVal] = useOutletContext();
  return (
    <>
      <Sidebar />
      <section id="content">
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                </li>
                <li>
                  <a className="active" href="#">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>
        {val && <WebcamCapture />}
      </section>
    </>
  );
};

export default Dashboard;
