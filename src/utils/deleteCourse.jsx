import { getCategories } from "./getCategories";

export const deleteCourse = (values) => {
  const categories = getCategories();

  const newCategories = categories.map((categoryCourse) => {
    if (categoryCourse.name === values.category) {
      const { courses } = categoryCourse

      const newCourses = courses.filter(course => course.id !== values.id)

      return {
        ...categoryCourse,
        courses: newCourses
      };
    } else {
      return categoryCourse;
    }
  });

  localStorage.setItem("categories", JSON.stringify(newCategories))
};
