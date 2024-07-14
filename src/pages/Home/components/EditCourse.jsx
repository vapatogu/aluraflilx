import { useContext } from "react";
import { useForm } from "react-hook-form";
// components
import { Input } from "../../../components/Input";
// context
import { ContexApp } from "../../../context/ContexApp";
// schemas
import { videoSchema } from "../../../schemas/videoSchema";
// utils
import { updateCourse } from "../../../utils/updateCourse";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./EditCourse.module.css";

const commonStyles = {
  border: "3px solid #2271D1",
};

export const EditCourse = () => {
  const { courseSelected, closeModal } = useContext(ContexApp);
  const { handleSubmit, control, reset, watch } = useForm({
    defaultValues: courseSelected,
    resolver: yupResolver(videoSchema),
  });

  const onSubmit = (values) => {
    const newCategories = updateCourse({ id: courseSelected.id, ...values });


    localStorage.setItem("categories", JSON.stringify(newCategories));
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.editCourse}>
      <h1 className={styles.title}>Editar card:</h1>
      <Input
        style={commonStyles}
        label="Título"
        name="title"
        placeholder="Ingrese un título"
        control={control}
      />
      <Input label="Categoría" name="category" control={control}>
        <select
          style={{
            border: "3px solid #2271D1",
          }}
        >
          <option value="">Seleccione una categoría</option>
          <option value="Front End">Front End</option>
          <option value="Back End">Back End</option>
          <option value="Innovación y gestión">Innovación y gestión</option>
        </select>
      </Input>
      <Input
        style={commonStyles}
        label="Imagen"
        name="image"
        placeholder="Ingrese una imagen"
        control={control}
      />
      <Input
        style={commonStyles}
        label="Video"
        name="video"
        placeholder="Ingrese una video"
        control={control}
      />
      <Input
        placeholder="¿De qué se trata este vídeo?"
        label="Descripción"
        name="description"
        control={control}
      >
        <textarea
          style={{ ...commonStyles, height: "112px", minHeight: "112px" }}
        />
      </Input>
      <div />
      <div className={styles.form_buttons}>
        <button>Guardar</button>
        <button
          type="button"
          onClick={() =>
            reset({
              title: "",
              category: "",
              image: "",
              video: "",
              description: "",
            })
          }
        >
          Limpiar
        </button>
      </div>
    </form>
  );
};
