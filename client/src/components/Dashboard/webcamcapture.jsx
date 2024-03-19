import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
import axios from "axios";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamCapture = () => {
  const [base64String, setBase64String] = useState(null);
  const [showWebcam, setShowWebcam] = useState(false);
  const webcamRef = useRef(null);

  const handleAddUser = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/upload/adduser",
        base64String,
        {
          headers: {
            "Content-Type": "application/octet-stream", // or 'image/jpeg' or any other appropriate content type
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCapture = async () => {
    const image = webcamRef.current.getScreenshot({
      width: 500,
      height: 400,
    });
    setBase64String(image);
    await handleAddUser();
    setShowWebcam(false);
  };

  return (
    <Cam>
      <>
        <Webcam
          audio={false}
          height={300}
          screenshotFormat="image/jpeg"
          width={500}
          videoConstraints={videoConstraints}
          ref={webcamRef}
        />
        <button onClick={handleCapture} className="add-user">
          Add User +
        </button>
      </>
    </Cam>
  );
};

const Cam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default WebcamCapture;
