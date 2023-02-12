import { createContext, useEffect, useContext, useState } from "react";

import usePrefersColorScheme from "use-prefers-color-scheme";
import useLocalStorageState from "use-local-storage-state";

import isScrollbarVisible from "~/utils/isScrollbarVisible";

const PageContext = createContext({});
const usePage = () => useContext(PageContext);

export default function PageProvider({ children, ...props }) {
  // Theme
  const systemPrefersColorScheme = usePrefersColorScheme();
  const defaultTheme = systemPrefersColorScheme === "dark" ? "dark" : "light";
  const [selectedTheme, setSelectedTheme] = useLocalStorageState("picoTheme", null);
  const pageTheme = selectedTheme || defaultTheme;
  const switchTheme = () => {
    setSelectedTheme(pageTheme === "dark" ? "light" : "dark");
  };

  // Header
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  // Modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const scrollbarIsVisible = isScrollbarVisible();
  const [modalHelperClasses, setModalHelperClasses] = useState();
  const modalAnimationDuration = 400;
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  useEffect(() => {
    if (!modalIsOpen && typeof window !== "undefined") {
      setScrollbarWidth(window.innerWidth - document.documentElement.clientWidth);
    }
  }, [modalIsOpen]);

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

  return (
    <PageContext.Provider
      value={{
        isHeaderFixed,
        modalIsOpen,
        onOpenModal,
        onCloseModal,
        pageTheme,
        setIsHeaderFixed,
        switchTheme,
        systemPrefersColorScheme: defaultTheme,
      }}
      {...props}
    >
      <html
        lang="en"
        {...(selectedTheme && { "data-theme": selectedTheme })}
        {...(modalIsOpen && { className: modalHelperClasses })}
        {...(modalIsOpen && scrollbarIsVisible
          ? { style: { "--pico-scrollbar-width": `${scrollbarWidth}px` } }
          : null)}
      >
        {children}
      </html>
    </PageContext.Provider>
  );
}

export { PageProvider, usePage };
