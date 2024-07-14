export const getCategories = () => {
  const categories = localStorage.getItem("categories");

  return categories ? JSON.parse(categories) : undefined;
};
