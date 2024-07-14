import { getCategories } from "./getCategories";

export const updateCourse = (values) => {
  const categories = getCategories();
  const allCourses = categories.flatMap(({ courses }) => courses);

  const updateCourses = allCourses.map((course) => {
    if (course.id === values.id) {
      return values;
    } else {
      return course;
    }
  });

  const orderCategories = categories.map((categoryCourse) => {
    const courses = updateCourses
      .filter((course) => course.category === categoryCourse.name)
      .sort((a, b) => a.id - b.id);

    return {
      ...categoryCourse,
      courses,
    };
  });

  return orderCategories;
};
