import { useContext } from "react";
// components
import { Modal } from "../../components/Modal";
import { Banner } from "./components/Banner";
import { Courses } from "./components/Courses";
import { EditCourse } from "./components/EditCourse";
// context
import { ContexApp } from "../../context/ContexApp";

export const Home = () => {
  const { isModalOpen, closeModal } = useContext(ContexApp);

  return (
    <section>
      <Banner />
      <Courses />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <EditCourse />
      </Modal>
    </section>
  );
};
