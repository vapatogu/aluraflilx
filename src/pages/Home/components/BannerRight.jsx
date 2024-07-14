import styles from "./BannerRight.module.css";

export const BannerRight = () => {
  return (
    <section className={styles.banner_right}>
      <picture className={styles.banner_right_picture}>
        <img
          src="./banner-course.png"
          alt="banner_course"
          className={styles.banner_right_img}
        />
      </picture>
    </section>
  );
};
