import styles from "../styles/FeaturedWork.module.css";
import Image from "next/image";

const FeaturedWork = () => {
  return (
    <div className={styles.featuredcontainer}>
    <h1 className={styles.featuredtitle}>Featured Work</h1>
    
    
    <div className={styles.filterContainer}>
      <button className={styles.filterButton}>
        Branding
      </button>
      <button className={styles.filterButton}>
        UX/UI
      </button>
      <button className={styles.filterButton}>
        Content
      </button>
      <button className={styles.filterButton}>
        Marketing
      </button>
    </div>
    <div className={styles.featuredgrid}>
    <div className={styles.imageContainer}>
         <Image
         src="/Images/music.png"
         alt="music"
         width={300}
         height={200}
         className={styles.image}
         />
          <div className={styles.featuredText}>
            <h2>Featured Work</h2>
          </div>
        </div>
        <div className={styles.imageContainer}>
         <Image
         src="/Images/rumpi.png"
         alt="rumpi"
         width={300}
         height={200}
         className={styles.image}
         />
          <div className={styles.featuredText}>
            <h2>Featured Work</h2>
          </div>
        </div>
        <div className={styles.imageContainer}>
         <Image
         src="/Images/mobile.png"
         alt="mobile"
         width={300}
         height={200}
         className={styles.image}
         />
          <div className={styles.featuredText}>
            <h2>Featured Work</h2>
          </div>
        </div>
        <div className={styles.imageContainer}>
         <Image
         src="/Images/music.png"
         alt="music"
         width={300}
         height={200}
         className={styles.image}
         />
          <div className={styles.featuredText}>
            <h2>Featured Work</h2>
          </div>
        </div>
        <div className={styles.imageContainer}>
         <Image
         src="/Images/music.png"
         alt="music"
         width={300}
         height={200}
         className={styles.image}
         />
          <div className={styles.featuredText}>
            <h2>Featured Work</h2>
          </div>
        </div>
        <div className={styles.imageContainer}>
         <Image
         src="/Images/rumpi.png"
         alt="rumpi"
         width={300}
         height={200}
         className={styles.image}
         />
          <div className={styles.featuredText}>
            <h2>Featured Work</h2>
          </div>
        </div>
        <div className={styles.imageContainer}>
         <Image
         src="/Images/mobile.png"
         alt="mobile"
         width={300}
         height={200}
         className={styles.image}
         />
          <div className={styles.featuredText}>
            <h2>Featured Work</h2>
          </div>
        </div>
        <div className={styles.imageContainer}>
         <Image
         src="/Images/music.png"
         alt="music"
         width={300}
         height={200}
         className={styles.image}
         />
          <div className={styles.featuredText}>
            <h2>Featured Work</h2>
          </div>
        </div>
        <div className={styles.imageContainer}>
         <Image
         src="/Images/music.png"
         alt="music"
         width={300}
         height={200}
         className={styles.image}
         />
          <div className={styles.featuredText}>
            <h2>Featured Work</h2>
          </div>
        </div>
        <div className={styles.imageContainer}>
         <Image
         src="/Images/rumpi.png"
         alt="rumpi"
         width={300}
         height={200}
         className={styles.image}
         />
          <div className={styles.featuredText}>
            <h2>Featured Work</h2>
          </div>
        </div>
        <div className={styles.imageContainer}>
         <Image
         src="/Images/mobile.png"
         alt="mobile"
         width={300}
         height={200}
         className={styles.image}
         />
          <div className={styles.featuredText}>
            <h2>Featured Work</h2>
          </div>
        </div>
        <div className={styles.imageContainer}>
         <Image
         src="/Images/music.png"
         alt="music"
         width={300}
         height={200}
         className={styles.image}
         />
          <div className={styles.featuredText}>
            <h2>Featured Work</h2>
          </div>
        </div>
    </div>
    </div>
  )
}
export default FeaturedWork;