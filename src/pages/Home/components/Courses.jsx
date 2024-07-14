// components
import { CategoryCourses } from "./CategoryCourses";
// utils
import { getCategories } from "../../../utils/getCategories";
import { categoriesCourses } from "../../../helpers/categoriesCourses";
import styles from "./Courses.module.css";

export const Courses = () => {
  const categories = getCategories() || categoriesCourses;

  return (
    <section className={styles.course_card}>
      {categories &&
        categories.length > 0 &&
        categories.map((category) => (
          <CategoryCourses key={category.id} {...category} />
        ))}
    </section>
  );
};
