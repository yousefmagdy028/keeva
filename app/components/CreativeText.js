import styles from "../styles/Creative.module.css"
const CreativeText = () => {
  return (
    <div className={styles.creativecontainer}>
    <div className={styles.alltext}>
    <span className={styles.textgray}>Passion</span>
    <span className={styles.vector}>◂</span>
    <span className={styles.textwhite}>Creativity</span>
    <span className={styles.vector}>◂</span>
    <span className={styles.textgray}>craft</span>
    <span className={styles.vector}>◂</span>
    <span className={styles.textgray}>intuition</span>
  </div>
  </div>
  );
};

export default CreativeText;