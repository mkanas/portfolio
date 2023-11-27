"use client";
import React from "react";
import styles from "./text.module.css";

const RotatingText = () => {
  return (
    <div className={`${styles.roundedText} ${styles.rotating}`}>
      <svg width="140" height="140" viewBox="0 0 200 200">
        <path
          id="textPath"
          d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
          transform="translate(100,100)"
          fill="none"
          strokeWidth="0"
        ></path>
        <g fontSize="13.1px">
          <text textAnchor="start">
            <textPath
              xlinkHref="#textPath"
              startOffset="0%"
              className={`${styles.coloring}`}
            >
              Front-End Web Developer &nbsp;&nbsp;&nbsp; Keep Calm And Coding
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};

export default RotatingText;
