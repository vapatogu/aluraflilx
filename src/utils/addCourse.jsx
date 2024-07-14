import { getCategories } from "./getCategories";

export const addCourse = (values) => {
  const categories = getCategories();
  const allCourses = categories.flatMap(({ courses }) => courses);

  const newCategories = categories.map((categoryCourse) => {
    if (categoryCourse.name === values.category) {
      return {
        ...categoryCourse,
        courses: [
          ...categoryCourse.courses,
          { id: allCourses.length + 1, ...values },
        ],
      };
    } else {
      return categoryCourse;
    }
  });

  return newCategories
};
