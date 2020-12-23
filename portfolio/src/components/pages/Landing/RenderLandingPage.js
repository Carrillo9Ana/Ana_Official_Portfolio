import React from "react";
import { Link } from "react-router-dom";

function RenderLandingPage(props) {
  return (
    <div>
      <h1> Welcom to my portfolio </h1>
      <div>
        <p>
          THe old version is being renovated. In the mean time please visit my
          github account to see what am I working on, or LinkedIn. Google me up
          as Ana Carrillo @Carrillo9Ana
        </p>
        <p>
          <Link src="github.com/carrillo9ana"> GitHub Profile</Link>
        </p>
      </div>
    </div>
  );
}

export default RenderLandingPage;
