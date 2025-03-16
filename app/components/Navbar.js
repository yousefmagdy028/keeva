"use client";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isLightBackground, setIsLightBackground] = useState(false);

  const handleButtonClick = () => {
    setIsLightBackground(!isLightBackground);

    if (isLightBackground) {
      document.body.style.backgroundColor = "#111111";
    } else {
      document.body.style.backgroundColor = "#F5F5F5";
    }

    // تغيير لون جميع الأزرار عند تغيير الخلفية
    document.querySelectorAll("button").forEach((btn) => {
      btn.style.color = !isLightBackground ? "#262D66" : "#F6F6F6"; // اللون الأزرق عند الخلفية الفاتحة والعكس عند الداكنة
    });
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#111111";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <Image
        className={styles.logo}
        src="/Images/logo.svg"
        alt="logo"
        width={165.05}
        height={49}
      />
      <div>
        <button className={styles.span} onClick={handleButtonClick}>
          Let's Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
