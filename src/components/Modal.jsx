import { useEffect, useState } from "react";
import styles from "./Modal.module.css";

export const Modal = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div
      className={`${styles.modalOverlay} ${isOpen ? styles.active : ""}`}
      onClick={onClose}
    >
      <div
        className={`${styles.modalContent} ${isOpen ? styles.active : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {isVisible && children}
      </div>
    </div>
  );
};
