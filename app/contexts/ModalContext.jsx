import { createContext, useContext, useEffect, useState } from "react";
import { isScrollbarVisible } from "~/utils";

const ModalContext = createContext({});
const useModal = () => useContext(ModalContext);

export default function ModalProvider({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalHelperClasses, setModalHelperClasses] = useState();
  const scrollbarIsVisible = isScrollbarVisible();
  const modalAnimationDuration = 400;
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  // On open modal
  const onOpenModal = ({ isAnimated = true } = {}) => {
    if (isAnimated) {
      setModalHelperClasses("modal-is-open modal-is-opening");
      setModalIsOpen(true);
      setTimeout(() => {
        setModalHelperClasses("modal-is-open");
      }, modalAnimationDuration);
    } else {
      setModalHelperClasses("modal-is-open");
      setModalIsOpen(true);
    }
  };

  // On close modal
  const onCloseModal = ({ isAnimated = true } = {}) => {
    if (isAnimated) {
      setModalHelperClasses("modal-is-open modal-is-closing");
      setTimeout(() => {
        setModalHelperClasses();
        setModalIsOpen(false);
      }, modalAnimationDuration);
    } else {
      setModalHelperClasses();
      setModalIsOpen(false);
    }
  };

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
}

export { ModalProvider, useModal };
