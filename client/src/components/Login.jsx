import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import WebcamCapture from "./Dashboard/webcamcapture";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    userPassword: "",
    userEmail: "",
  });
  const [showWebCam, setShowWebCam] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleForgotPassword = () => {
    setShowWebCam((prevEle) => !prevEle);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setFormErrors(validate(userData));
    axios
      .post("http://localhost:8080/login", {
        userEmail: userData.userEmail,
        userPassword: userData.userPassword,
      })
      .then((res) => {
        localStorage.setItem("loggedIn", true);
        navigate("/dashboard", { replace: "true" });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your have been successfully Logged in",
          showConfirmButton: true,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error making request:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data,
        });
      });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!values.userEmail) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.userEmail)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.userPassword) {
      errors.password = "Password is required";
    } else if (values.userPassword.length < 16) {
      errors.userPassword = "Password must be more than 16 characters";
    }
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(userData);
    }
    return errors;
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className="form">
        <p>Welcome</p>
        <div className="userEmail">
          <input
            type="email"
            name="userEmail"
            placeholder="Email"
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>
        </div>
        <div className="userPassword">
          <input
            type="password"
            name="userPassword"
            placeholder="Password"
            onChange={handleChange}
          />
          <p>{formErrors.password}</p>
        </div>
        <button type="submit">Sign In</button>
        <div className="Link">
          <div className=" login">
            <Link onClick={handleForgotPassword}>Forgot Password ?</Link>.
          </div>
          <div className="signup">
            <Link to="/signup"> Are U new around ?</Link>.
          </div>
        </div>
      </form>
      {showWebCam && (
        <FaceAuth>
          <WebcamCapture logVal={setShowWebCam} name={"log"}/>
        </FaceAuth>
      )}
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #040714;
  height: 100vh;
  width: 100vw;
  background-image: url(/favicon/android-chrome-512x512.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 445px;
    height: 480px;
    border-radius: 10px;
    padding: 10px;
    position: relative;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(2px);
    transition: all 0.2s ease-in-out;

    &:hover {
      padding: 15px;
    }

    p {
      font-weight: 500;
      color: #fff;
      opacity: 0.7;
      font-size: 1.8rem;
      margin-top: 0;
      margin-bottom: 25px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }

    input {
      background: transparent;
      width: 300px;
      box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      height: 50px;
      border: 1px solid white;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 8px;
      backdrop-filter: blur(2px);

      &::placeholder {
        color: #fff;
        font-weight: 400;
        font-family: Montserrat, sans-serif;
        color: #fff;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
      }
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
        padding: 13px;
      }

      &[type="email"],
      &[type="password"] {
        &:focus {
          background: rgba(0, 0, 0, 0.6);
          box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
        }
      }
    }

    .userPassword,
    .userEmail {
      position: relative;
      label {
        position: absolute;
        left: 2px;
        top: 15px;
      }

      p {
        color: rgba(139, 0, 0, 1);
        font-size: 16px;
        opacity: 1;
      }
    }

    [type="submit"] {
      margin-top: 8px;
      width: 150px;
      font-size: 1rem;
      width: 180px;
      padding: 1em;
      margin-bottom: 1.3em;
      border: none;
      border-left: 1px solid rgba(255, 255, 255, 0.3);
      border-top: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 5000px;
      backdrop-filter: blur(1px);
      box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
      background: transparent;
      color: #fff;
      font-family: Montserrat, sans-serif;
      font-weight: 500;

      &:hover {
        cursor: pointer;
        background: black;
        color: rgba(255, 255, 255, 1);
      }

      &:active {
        background: rgba(255, 255, 255, 0.2);
      }
    }
    .Link {
      display: flex;
      justify-content: space-around;
      width: 100%;
      align-items: center;
      font-weight: 500;
      a {
        font-size: 16px;
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        &:hover {
          cursor: pointer;
          background: black;
          color: rgba(255, 255, 255, 1);
          border-radius: 10px;
          padding: 10px;
        }

        &:active {
          background: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
  @media (max-width: 428px) {
    width: 100vw;
    height: 100vh;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-image: url("/bg/mp-bg-laptop.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }

    form {
      width: 90vw;
      height: 55vh;
      p {
        font-weight: 500;
        color: #fff;
        opacity: 0.7;
        font-size: 0.5rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        margin-bottom: 14px;
      }
      input {
        width: 60vw;
        height: 3vh;
        margin-bottom: 0;
      }
      [type="submit"] {
        width: 120px;
        height: 60px;
        padding: 8px;
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-image: url("/bg/mp-bg-laptop.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }

    form {
      width: 80vw;
      height: 80vh;
      p {
        font-weight: 500;
        color: #fff;
        opacity: 0.7;
        font-size: 2rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        margin-bottom: 44px;
      }
      input {
        width: 60vw;
        height: 8vh;
        margin-bottom: 0;

        &::placeholder {
          font-size: 1rem;
        }
      }
      .userName,
      .userPassword,
      .userEmail {
        p {
          font-size: 1.2rem;
          color: rgba(200, 0, 0, 1);
        }
      }
      [type="submit"] {
        width: 150px;
        height: 50px;
        padding: 8px;
        font-size: 1rem;
      }
    }
  }
`;

const FaceAuth = styled.div`
  position: absolute;
`;
