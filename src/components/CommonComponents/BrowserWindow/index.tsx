import React from "react";
import styles from "./styles.module.css";

/**
 * 模仿浏览器窗口组件
 */
const BrowserWindow = (props: any) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.row}`}>
        <div className={`${styles.column} ${styles.left}`}>
          <span
            className={`${styles.dot}`}
            style={{ background: "#ED594A" }}
          ></span>
          <span
            className={`${styles.dot}`}
            style={{ background: "#FDD800" }}
          ></span>
          <span
            className={`${styles.dot}`}
            style={{ background: "#5AC05A" }}
          ></span>
        </div>
        <div className={`${styles.middle}`}>
          <input type="text" value="http://localhost:3000" disabled />
        </div>
        <div className={`${styles.column} ${styles.right}`}>
          <div style={{ float: "right" }}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </div>
      </div>

      <div className={`${styles.content}`}>{props.children}</div>
    </div>
  );
};

export default BrowserWindow;
