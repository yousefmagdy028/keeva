"use client";
import { useState } from "react";
import styles from "../styles/Dashboard.module.css";
import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className={styles.dashboard}>
      <Image
        className={styles.board}
        src="/Images/board.svg"
        alt="Dashboard Icon"
        width={48}
        height={48}
        onClick={toggleMenu} 
        style={{ cursor: "pointer" }}
      />
      

      {isMenuOpen && (
        <div className={styles.menuOverlay}>
          <div className={styles.closeIcon} onClick={toggleMenu}>✖</div>
          <ul className={styles.menu}>
            <li><Link href="/"><h2>Home</h2></Link></li>
            <li><Link href="/about"><h2>About us</h2></Link></li>
            <li><Link href="/featured"><h2>Portfolio</h2></Link></li>
          </ul>
          

          <div className={`${styles.menuInfo} ${styles.menuInfoOverlay}`}>
            <Link href="/about" className={styles.pra}>About us</Link>
            <h2 className={styles.lag}>Arabic</h2>
            <Image
              className={styles.point}
              src="/Images/point.svg"
              alt="Indicator Icon"
              width={16}
              height={29}
            />
          </div>
        </div>
      )}
      
  
      <div className={styles.menuInfo}>
        <Link href="/about" className={styles.pra}>About us</Link>
        <h2 className={styles.lag}>Arabic</h2>
        <Image
          className={styles.point}
          src="/Images/point.svg"
          alt="Indicator Icon"
          width={16}
          height={29}
        />
      </div>
    </div>
  );
};

export default Dashboard;