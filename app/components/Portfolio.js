import Image from "next/image";
import styles from "../styles/Portfolio.module.css";
import Link from "next/link";

const Portfolio =  () => {
  return (
    <div className={styles.portfoliocontainer}>
      <nav className={styles.portfolionav}>
        <h1 className={styles.portfoliologo}>Portfolio</h1>
        <div className={styles.categories}>
          <span className={styles.activespan}>UX/UI <span>|</span></span>
          <span>Motion Graphics <span>|</span></span>
          <span>Branding</span>
        </div>
      </nav>
      <div className={styles.gridcard}>
      <div className={styles.maincard}>
      <Image className={styles.mainimage} src="/Images/10-01.png" alt="main" width={597} height={597} />
      </div>
      <div className={styles.subcard}>
      <div className={styles.smallcard}>
      <Image
      className={styles.smallimage}
      src="/Images/12 1.png" 
      alt="small" 
      width={327} height={327} />
      </div>
      <div className={styles.smallcardremov}>
      <Image
      className={styles.smallimage}
      src="/Images/9.png" 
      alt="small" 
      width={327} height={327} />
      </div>
      <div className={styles.smallcard}>
      <Image
      className={styles.smallimage}
      src="/Images/8.png" 
      alt="small" 
      width={327} height={327} />
      </div>
      <div className={styles.showmore}>
        <Link href="/featured" className={styles.textshow}>Show More</Link>
      </div>
      </div>
      
      </div>
    </div>
  )
}
export default Portfolio;