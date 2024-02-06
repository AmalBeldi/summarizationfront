import React from "react";
import classes from "./Loader.module.css";
import { Spin } from "antd";

const Loader = () => {
  return (
    <div
      className={classes.loaderContainer}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "60vh",
        backgroundColor: "rgba(2, 79, 168, 0)", // Set alpha value to 0 for transparency
        zIndex: "1000",
      }}
    >
      <Spin />
      {/* <svg
        className={classes.loader}
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={classes.loaderCircle}
          cx="48"
          cy="48"
          r="45"
          stroke="#024FA8"
          strokeWidth="6"
        />
      </svg> */}
      {<p className={classes.textLoader}>Veuillez patienter un instant ...</p>}
    </div>
  );
};

export default Loader;
