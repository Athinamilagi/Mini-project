import React from "react";
import Sidebar from "./sidebar";
import WebcamCapture from "./webcamcapture";
import { Link, useOutletContext } from "react-router-dom";

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
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                </li>
                <li>
                  <Link to="/home" className="active">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </main>
        {val && <WebcamCapture val={setVal} />}
      </section>
    </>
  );
};

export default Dashboard;
