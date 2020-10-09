import React, { FunctionComponent } from "react";
import styles from "./SplashArea.module.css";

interface SplashAreaProps {
  sticky?: boolean;
  offset?: number;
}

const SplashArea: FunctionComponent<SplashAreaProps> = ({
  children,
  sticky,
  offset,
}) => {
  if (!offset) {
    offset = 0;
  }
  return (
    <div
      style={{ top: offset }}
      className={
        `${styles.SplashArea}` + " " + `${sticky ? styles.Sticky : ""}`
      }
    >
      {children}
    </div>
  );
};

export default SplashArea;
