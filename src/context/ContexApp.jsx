import { createContext, useState } from "react";

export const ContexApp = createContext();

export const ContexProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [reload, setReload] = useState(false);
  const [courseSelected, setCourseSelected] = useState({});

  const openModal = (data) => {
    setCourseSelected(data), setModalOpen(true);
  };
  const closeModal = () => {
    setCourseSelected({}), setModalOpen(false);
  };

  const refresh = () => {
    setReload(!reload)
  }

  return (
    <ContexApp.Provider
      value={{ isModalOpen, openModal, closeModal, courseSelected, refresh, reload }}
    >
      {children}
    </ContexApp.Provider>
  );
};
