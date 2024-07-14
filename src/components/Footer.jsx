import { ListNavigation } from "./ListNavigation";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src="./logo_footer.png" alt="logo" className={styles.logo_footer} />

      {/* MOBILE OPTIONS */}
      <span className={styles.elements_footer}>
        <ListNavigation />
      </span>
    </div>
  );
};
