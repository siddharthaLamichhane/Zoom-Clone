import React from "react";
import { Link } from "react-router-dom";

import Image from "../assets/mobile.png";
function LandingPage() {
  return (
    <div className="landingPagecontainer">
      <nav>
        <div className="nav-header">
          <h2>AION-VideoCall</h2>
        </div>
        <div className="nav-list">
          <p>Join Us</p>
          <p>Register</p>
          <div role="button">Login</div>
        </div>
      </nav>
      <div className="mainlandingContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loves
            Ones
          </h1>
          <p style={{ fontSize: "18px" }}>
            Cover a distance by AION Video Call
          </p>
          <div role="button">
            <Link to={"/"}>Get Started</Link>
          </div>
        </div>
        <div>
          <img src={Image}></img>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
