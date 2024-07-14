import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
// components
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
// utils
import { getCategories } from "../utils/getCategories";
// helpers
import { categoriesCourses } from "../helpers/categoriesCourses";
import { ContexApp } from "../context/ContexApp";

export const MainLayout = () => {
  const { reload } = useContext(ContexApp);
  const categories = getCategories();

  
  useEffect(() => {
    if (!categories) {
      localStorage.setItem("categories", JSON.stringify(categoriesCourses));
    }
  }, [reload]);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
