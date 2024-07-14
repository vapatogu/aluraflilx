// components
import { CourseCard } from "../../../components/CourseCard";
import { TitleCategory } from "../../../components/TitleCategory";
import styles from "./CategoryCourses.module.css";

export const CategoryCourses = ({ color, courses, name }) => {
  return (
    <article className={styles.category_course}>
      <TitleCategory color={color}>{name}</TitleCategory>
      <section className={styles.category_courses_section}>
        {courses && courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard key={course.id} color={color} {...course} />
          ))
        ) : (
          <p className={styles.no_courses_title}>No se han añadido cursos</p>
        )}
      </section>
    </article>
  );
};
