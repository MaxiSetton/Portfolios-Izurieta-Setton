/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const SignaiLogos = ({
  property1,
  className,
  subtract = "https://c.animaapp.com/w835WOil/img/subtract-1.svg",
  signAi = "https://c.animaapp.com/w835WOil/img/signai-1.svg",
}) => {
  return (
    <div className={`signai-logos ${property1} ${className}`}>
      <img
        className="subtract"
        alt="Subtract"
        src={
          property1 === "signai-white"
            ? subtract
            : "https://c.animaapp.com/w835WOil/img/subtract.svg"
        }
      />

      <img
        className="sign-AI"
        alt="Sign AI"
        src={
          property1 === "signai-white"
            ? signAi
            : "https://c.animaapp.com/w835WOil/img/signai.svg"
        }
      />
    </div>
  );
};
