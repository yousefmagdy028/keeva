import styles from "../styles/AboutUs.module.css";
import Image from "next/image";
import Footer from "../components/Footer";
const AboutUs = () => {
  return (
    <section className={styles.aboutsection}>
      <div className={styles.aboutcontainer}>
        <h1 className={styles.abouttitle}>About us</h1>
        <p className={styles.aboutdescription}>
          We add in all our work an imprint of love,<br/> 
          and this is what distinguishes us
        </p>
        <a href="#" className={styles.downloadlink}>
          Download Profile (PDF)
        </a>
      </div>
      <div className={styles.teamcontainer}>
        <h2 className={styles.teamtitle}>Ourt team </h2>
        <div className={styles.teamgrid}>
          <div className={styles.teamcard}>
            <div className={styles.teamimage}>
            <Image
                src="/Images/team.png"
                className={styles.imageteam}
                alt="Yassir abu Ghanima"
                width={300}
                height={200}
              />
            </div>
            <div>
              <span className={styles.titlework}>Motion graphic</span>
              <h3 className={styles.nameteam}>Yassir 
              abu Ghanima</h3>
              <p className={styles.descriptionteam}>We add in all our work an imprint of love, and this is what distinguishes us</p>
            </div>
          </div>
          <div className={styles.teamcard}>
            <div className={styles.teamimage}>
            <Image
                src="/Images/mousa.png"
                className={styles.imageteam}
                alt="Mousa Alashqar"
                width={300}
                height={200}
              />
            </div>
            <div>
              <span className={styles.titlework}>UX/UI Design</span>
              <h3 className={styles.nameteam}>Mousa Alashqar</h3>
              <p className={styles.descriptionteam}>We add in all our work an imprint of love, and this is what distinguishes us</p>
            </div>
          </div>
          <div className={styles.teamcard}>
            <div className={styles.teamimage}>
            <Image
                src="/Images/team.png"
                className={styles.imageteam}
                alt="Mohamad Dalol"
                width={300}
                height={200}
              />
            </div>
            <div>
              <span className={styles.titlework}>Social media</span>
              <h3 className={styles.nameteam}>Mohamad Dalol</h3>
              <p className={styles.descriptionteam}>We add in all our work an imprint of love, and this is what distinguishes us</p>
            </div>
          </div>
          <div className={styles.teamcard}>
            <div className={styles.teamimage}>
            <Image
                src="/Images/team.png"
                className={styles.imageteam}
                alt="Nadeem aysh"
                width={300}
                height={200}
              />
            </div>
            <div>
              <span className={styles.titlework}>Social media</span>
              <h3 className={styles.nameteam}>Nadeem aysh</h3>
              <p className={styles.descriptionteam}>We add in all our work an imprint of love, and this is what distinguishes us</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
    
  );
};

export default AboutUs;