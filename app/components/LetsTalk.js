import styles from "../styles/LetsTalk.module.css"

const LetsTalk = () => {
  return (
    <div className={styles.letstalkcontainer}>
      <p className={styles.projecttext}>You want to start a project</p>
      <h1 className={styles.maintitle}>LET'S TALK</h1>
      <button className={styles.talkbutton}>Let's Talk</button>
    </div>
  );
};

export default LetsTalk;