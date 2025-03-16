import styles from "../styles/Info.module.css"

const Info = () => {
  return(
    <div className={styles.info}>
      <p className={styles.infotext}>
      " We are closer than you imagine and further beyond all expectations. We are surrounded by astonishment and the love of adventure. "
      </p>
      <button className={styles.infobutton}>Download</button>
    </div>
  )
}
export default Info;