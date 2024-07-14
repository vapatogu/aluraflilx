import styles from "./Banner.module.css";
import { BannerLeft } from "./BannerLeft";
import { BannerRight } from "./BannerRight";

export const Banner = () => {
  return (
    <article className={styles.banner}>
      <img src="./banner.png" alt="banner" className={styles.banner_image} />
      <BannerLeft />
      <BannerRight />
    </article>
  );
};
