import styles from "./BannerLeft.module.css";

export const BannerLeft = () => {
  return (
    <div className={styles.banner_left}>
      <h1 className={styles.title_banner}>Front End</h1>
      <h2 className={styles.subtitle_banner}>Challenge React</h2>
      <p className={styles.paragraph_banner}>
        Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás
        comprometerte en la resolución de un problema para poder aplicar todos
        los conocimientos adquiridos en la formación React.
      </p>
    </div>
  );
};
