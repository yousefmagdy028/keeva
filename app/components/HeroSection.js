import styles from "../styles/HeroSection.module.css"
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>Creative Design</h2>
        <h1 className={styles.title}>
          Motion Graphic <span>|</span>
        </h1>
        <p className={styles.description}>
        We add in all our work an imprint of love, and 
        this is what distinguishes usWe add in all our work an imprint of  
        </p>
      </div>
      <div className={styles.footersection}>
      <span className={styles.year}>2022</span>
      <Image className={styles.mouse}  src="/Images/mouse.svg" alt="mouse" width={10} height={17} />
      <span className={styles.text}>Latest designs</span>
      </div>
    
    </section>
      
      
    
  );
}
export default HeroSection