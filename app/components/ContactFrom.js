"use client"; 
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/ContactFrom.module.css"

const ContactForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("Branding");
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className={styles.contactSection}>
      <p className={styles.subtitle}>We are always happy to help 😇</p>
      <h1 className={styles.title}>Get in touch</h1>

      <div className={styles.categoryButtons}>
        {["Branding", "UX/UI", "Content", "Marketing"].map((category) => (
          <button
            key={category}
            className={`${styles.categoryButton} ${
              selectedCategory === category ? styles.active : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          </div>
          <textarea
           placeholder="Description"
          className={styles.textarea}
          {...register("description", { required: "Description is required" })}
          />


        <div className={styles.attachment}>
          <label>Attachments</label>
          <div
           className={styles.uploadBox}
          onClick={() => document.getElementById("fileInput").click()}
          >
          <div className={styles.uploadIcon}>☁️</div>
            <p className={styles.uploadText}>
                 Drag and Drop (or) <span className={styles.chooseFiles}>Choose Files</span>
            </p>
          <input
          type="file"
          id="fileInput"
          {...register("attachments")}
          style={{ display: "none" }}
        />
  </div>
</div>


        <button type="submit" className={styles.submitButton}>
          Send Request
        </button>
      </form>
    </section>
  );
};

export default ContactForm;