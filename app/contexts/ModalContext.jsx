import { createContext, useContext, useEffect, useState } from "react";
import { isScrollbarVisible } from "~/utils";

const ModalContext = createContext({});
const useModal = () => useContext(ModalContext);

const ModalProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalHelperClasses, setModalHelperClasses] = useState();
  const scrollbarIsVisible = isScrollbarVisible();
  const modalAnimationDuration = 400;
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  // On open modal
  const onOpenModal = () => {
    setModalHelperClasses("modal-is-open modal-is-opening");
    setModalIsOpen(true);
    setTimeout(() => {
      setModalHelperClasses("modal-is-open");
    }, modalAnimationDuration);
  };

  // On close modal
  const onCloseModal = () => {
    setModalHelperClasses("modal-is-open modal-is-closing");
    setTimeout(() => {
      setModalHelperClasses();
      setModalIsOpen(false);
    }, modalAnimationDuration);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (!modalIsOpen) return;
      if (event.key === "Escape") {
        onCloseModal(event);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [modalIsOpen]);

  // Set scrollbar when modal is open
  useEffect(() => {
    if (!modalIsOpen && typeof window !== "undefined") {
      setScrollbarWidth(window.innerWidth - document.documentElement.clientWidth);
    }
  }, [modalIsOpen]);

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        onOpenModal,
        onCloseModal,
        modalHelperClasses,
        scrollbarIsVisible,
        scrollbarWidth,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, useModal };
