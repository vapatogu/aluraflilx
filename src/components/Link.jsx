import { NavLink } from "react-router-dom";
import styles from "./Link.module.css";

export const Link = ({ children, icon, ...props }) => (
  <NavLink
    {...props}
    className={({ isActive }) =>
      `${styles.button} ${
        isActive ? styles.button_active : styles.button_inactive
      }`
    }
  >
    {({ isActive }) => (
      <>
        <span className={styles.button_icon}>{icon}</span>
        <span className={`${!isActive && styles.button_content_inactive}`}>
          {children}
        </span>
      </>
    )}
  </NavLink>
);
