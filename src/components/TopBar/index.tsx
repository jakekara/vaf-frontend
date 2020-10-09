import React from "react";
import { Link } from "react-router-dom";
import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.TopBar}>
      <h6 className={styles.AppTitle}>
        <Link to="/">Virtual Authority File home</Link>
      </h6>
    </div>
  );
}
