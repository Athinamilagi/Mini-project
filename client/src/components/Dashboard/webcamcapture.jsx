import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamCapture = (props) => {
  const [base64String, setBase64String] = useState(null);
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const handleUser = async () => {
    if (props.name === "log") {
      // console.log(props.name);
      try {
        console.log(base64String);
        const res = await axios.post(
          "http://localhost:5000/login/checkuser",
          base64String,
          {
            headers: {
              "Content-Type": "image/octet-stream",
            },
          }
        );
        if (res.data.Authenticated === true) {
          localStorage.setItem("loggedIn", true);
          navigate("/dashboard", { replace: true });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User Not Authenticated.Try again....!",
          });
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const res = await axios.post(
          "http://localhost:5000/upload/adduser",
          base64String,
          {
            headers: {
              "Content-Type": "image/octet-stream",
            },
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    // Execute handleAddUser when base64String changes
    if (base64String) {
      handleUser();
      if (props.name === "log") {
        props.logVal(false);
      } else {
        props.val(false);
      }
    }
  }, [base64String]); // Trigger effect when base64String changes

  const handleCapture = async () => {
    try {
      const image = webcamRef.current.getScreenshot({
        width: 500,
        height: 400,
      });
      const base64Data = image.substring(image.indexOf(",") + 1);
      setBase64String(base64Data);
    } catch (error) {
      console.error("Error capturing image:", error);
    }
  };

  return (
    <Cam>
      <Webcam
        audio={false}
        height={300}
        screenshotFormat="image/jpeg"
        width={500}
        videoConstraints={videoConstraints}
        ref={webcamRef}
      />
      {props.name === "log" ? (
        <button onClick={handleCapture} className="add-user">
          Login User
        </button>
      ) : (
        <button onClick={handleCapture} className="add-user">
          Add User +
        </button>
      )}
    </Cam>
  );
};

const Cam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default WebcamCapture;
