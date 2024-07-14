import * as Yup from "yup";

export const videoSchema = Yup.object().shape({
  title: Yup.string().required("Este campo es obligatorio."),
  category: Yup.string().required("Este campo es obligatorio."),
  image: Yup.string().required("Este campo es obligatorio."),
  video: Yup.string(),
  description: Yup.string(),
});
