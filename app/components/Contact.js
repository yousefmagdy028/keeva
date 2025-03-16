import styles from "../styles/Contact.module.css"
import Link from "next/link";
const Contact = () => {
  return(
    <div className={styles.contactcontainer}>
      <div className={styles.contactcontent}>
      <div className={styles.contacttitle}>
        <h1 className={styles.title}>
          <span>How to </span>
          <br className={styles.br}/>
          <span>contact<span className={styles.us}>us</span></span>
        
        </h1>
      </div>
      <div className={styles.contactinfo}>
        <p className={styles.description}>
        We are closer than you imagine and further beyond all expectations. We are surrounded by astonishment and the love of adventure.
        </p>
        <Link href="/form">
        <button className={styles.button}>
        Let's Talk
        </button>
        </Link>
        
      </div>
      </div>
    </div>
  )
}
export default Contact;