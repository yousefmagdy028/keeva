import styles from "../styles/Blog.module.css";
import Image from "next/image";

const BlogSection = () => {
  return (
    <section className={styles.blogSection}>
      <div className={styles.blogcontainer}>
        <h2 className={styles.heading}>Blog</h2>
        <div className={styles.bloggrid}>

          <div className={styles.blogcard}>
            <div className={styles.blogImage}>
              <Image
                src="/Images/one.png"
                className={styles.imageblo}
                alt="kevaa"
                width={300}
                height={200}
              />
            </div>
            <h3 className={styles.blogtitle}>Blog 1</h3>
            <p className={styles.blogdescription}>
              We add in all our work an imprint of love, and this is what distinguishes us
            </p>
            <button className={styles.blogbutton}>Let's Talk</button>
          </div>

          <div className={styles.blogcard}>
            <div className={styles.blogImage}>
              <Image
                src="/Images/one.png"
                className={styles.imageblo}
                alt="kevaa"
                width={300}
                height={200}
              />
            </div>
            <h3 className={styles.blogtitle}>Blog 1</h3>
            <p className={styles.blogdescription}>
              We add in all our work an imprint of love, and this is what distinguishes us
            </p>
            <button className={styles.blogbutton}>Let's Talk</button>
          </div>

          <div className={styles.blogcard}>
            <div className={styles.blogImage}>
              <Image
                src="/Images/social.png"
                className={styles.imageblo}
                alt="kevaa"
                width={300}
                height={200}
              />
            </div>
            <h3 className={styles.blogtitle}>Blog 1</h3>
            <p className={styles.blogdescription}>
              We add in all our work an imprint of love, and this is what distinguishes us
            </p>
            <button className={styles.blogbutton}>Let's Talk</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSection;