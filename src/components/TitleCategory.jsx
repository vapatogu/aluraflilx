import styles from "./TitleCategory.module.css";

export const TitleCategory = ({ children, color }) => {
  return <div style={{ backgroundColor: color }} className={styles.title_category}>{children}</div>;
};
