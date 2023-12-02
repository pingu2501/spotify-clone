import React from "react";
import Body from "../body-page/Body";
import Footer from "../footer-page/Footer";
import SideBar from "../sidebar/SideBar";
import "./Player.css"

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
