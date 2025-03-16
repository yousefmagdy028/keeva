import styles from "../styles/Servers.module.css"
import Image from "next/image";
const Servers = () => {
  return(
    <div className={styles.containerservers}>
      <div className={styles.headerservers}>
      <p className={styles.subtitleservers}>Your Creative Partner Creativity for Your</p>
      <h1 className={styles.titleservers}>A global digital design agency</h1>
      </div>
      <div className={styles.servers}>
        <div className={styles.serversCard}>
          <div className={styles.icon}>
          <Image  src="/Images/remove.svg" alt="remove" width={50} height={54} />
          </div>
          <h2 className={styles.title}><span>Branding and</span><br/>
           <span> Identity</span>
           </h2>
        </div>
        <div className={styles.serversCard}>
          <div className={styles.icon}>
          <Image  src="/Images/laptop.svg" alt="laptop" width={50} height={54} />
          </div>
          <h2 className={styles.title}>UX/UI Web<br/> Design</h2>
        </div>
        <div className={styles.serversCard}>
          <div className={styles.icon}>
          <Image  src="/Images/graphic.svg" alt="graphic" width={50} height={54} />
          </div>
          <h2 className={styles.title}>Motion<br/> Graphic</h2>
        </div>
        <div className={styles.serversCard}>
          <div className={styles.icon}>
          <Image  src="/Images/message.svg" alt="message" width={50} height={54} />
          </div>
          <h2 className={styles.title}>Managing<br/> social media</h2>
        </div>
      </div>
    </div>
    
  )
}
export default Servers