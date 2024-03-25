import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Game = () => {
  useEffect(() => {
    function walkLeft() {
      player.className = "walk-left";
      setTimeout(searchLeft, 1000);
    }
    function searchLeft() {
      player.className = "search-left";
      // player.style.left = "40%";
      setTimeout(walkRight, 3000);
    }
    function walkRight() {
      player.className = "walk-right";
      setTimeout(searchRight, 1000);
    }
    function searchRight() {
      player.className = "search-right";
      // player.style.left = "60%";
      setTimeout(walkLeft, 3000);
    }
    const handleKeyDown = (e) => {
      if (e.keyCode === 37) {
        console.log("Move left");
        walkLeft();
      }
      if (e.keyCode === 39) {
        console.log("Move right");
        walkRight();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div id="skybox" className="skybox">
      <div className="txt">
        Sorry the Page is not yet available
        <br />
        <span>404 FILE NOT FOUND(Stay with us for futrue updates)</span>
      </div>
      <Back to="/">Go Back</Back>
      <div id="player" className="idle"></div>
      <div className="ground"></div>
    </div>
  );
};

export default Game;

const Back = styled(Link)`
  font-weight: bold;
  font-size: 1.2rem;
  position: absolute;
  top: 15px;
  left: 15px;
`;
