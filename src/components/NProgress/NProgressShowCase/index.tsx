import NProgress from "@site/src/utils/nprogress";
import styles from "./index.module.css";

NProgress.configure({ showSpinner: true });
function NProgressShowCase(props: {
  action: string;
  desc: string;
  value?: number;
}) {
  const { action, desc, value = "" } = props;

  const handlePlayer = () => {
    if (value) {
      return NProgress[action](value);
    }
    NProgress[action]();
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["player-btn"]} onClick={handlePlayer}></div>
      <div className={styles["content"]}>
        <span>NProgress.</span>
        <span className={styles["active"]}>{action}</span>
        <span className={styles["active"]}>{"(" + value + ")"}</span>
      </div>
      <div className={styles["desc"]}>{desc}</div>
    </div>
  );
}

export default NProgressShowCase;
