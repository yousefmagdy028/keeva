
import Link from 'next/link';
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontent}>
        <div className={styles.followsection}>
          <p className={styles.followtext}>Follow us</p>
          <div className={styles.sociallinks}>
            <Link href="#" className={styles.facebook} >Facebook</Link>
            <Link href="#" className={styles.instagram} >Instagram</Link>
            <Link href="#" className={styles.linkedin} >linkedin</Link>
          </div>
        </div>
        
        <div className={styles.contactsection}>
          <p className={styles.contacttitle}>Contact</p>
          <div className={styles.allcontact}>
          <div className={styles.contactinfo}>
            <p>Info@gmail.com</p>
            <p>141515150</p>
          </div>
          <div  className={styles.copyright}>
            <p >© Keevamedia</p>
            </div>
        
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;