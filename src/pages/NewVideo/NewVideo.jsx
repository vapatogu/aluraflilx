import { FormNewVideo } from "./components/FormNewVideo";
import styles from "./NewVideo.module.css";

export const NewVideo = () => {
  return (
    <section className={styles.newVideo}>
      <h1 className={styles.newVideo_title}>Nuevo video</h1>
      <p className={styles.newVideo_instructions}>
        Complete el formulario para crear una nueva tarjeta de video
      </p>
      <hr />
      <h2 className={styles.newVideo_subtitle}>Crear Tarjeta</h2>
      <hr />
      <FormNewVideo />
    </section>
  );
};
