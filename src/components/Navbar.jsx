import styles from "./Navbar.module.css";
import { ListNavigation } from "./ListNavigation.jsx";

export const Navbar = () => {
  return (
    <section className={styles.header}>
      <picture className={styles.header_logo}>
        <img src="./logo.png" alt="" />
      </picture>
      <ListNavigation />
    </section>
  );
};
