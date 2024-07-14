import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// components
import { Input } from "../../../components/Input";
// utils
import { yupResolver } from "@hookform/resolvers/yup";
// schema
import { videoSchema } from "../../../schemas/videoSchema";
// utils
import { addCourse } from "../../../utils/addCourse";
import styles from "./FormNewVideo.module.css";

export const FormNewVideo = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(videoSchema),
    defaultValues: {
      title: "",
      category: "",
      description: "",
      image: "",
      video: "",
    },
  });

  const onSubmit = (values) => {
    const newCategories = addCourse(values);

    localStorage.setItem("categories", JSON.stringify(newCategories));

    reset();
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form_newVideo}>
      <Input
        label="Título"
        placeholder="Ingrese un título"
        name="title"
        control={control}
      />
      <Input name="category" label="Categoría" control={control}>
        <select>
          <option value="">Seleccione una categoría</option>
          <option value="Front End">Front end</option>
          <option value="Back end">Back end</option>
          <option value="Innovación y gestión">Innovación y gestión</option>
        </select>
      </Input>
      <Input
        label="Imagen"
        placeholder="Ingrese una imagen"
        name="image"
        control={control}
      />
      <Input
        label="Video"
        placeholder="Ingrese un video"
        name="video"
        control={control}
      />
      <Input name="description" label="Descripción" control={control}>
        <textarea placeholder="¿De qué se trata este vídeo?" />
      </Input>
      <div />
      <div className={styles.form_buttons}>
        <button>Guardar</button>
        <button type="button" onClick={() => reset()}>
          Limpiar
        </button>
      </div>
    </form>
  );
};
