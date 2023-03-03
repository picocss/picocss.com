import { createContext, useContext, useEffect, useRef, useState } from "react";

import usePrefersColorScheme from "use-prefers-color-scheme";
import useLocalStorageState from "use-local-storage-state";

import isScrollbarVisible from "~/utils/isScrollbarVisible";

const PageContext = createContext({});
const usePage = () => useContext(PageContext);

export default function PageProvider({ children, ...props }) {
  const isSSR = typeof window === "undefined";

  // Theme
  const systemPrefersColorScheme = usePrefersColorScheme();
  const defaultTheme = systemPrefersColorScheme === "dark" ? "dark" : "light";
  const [selectedTheme, setSelectedTheme] = useLocalStorageState("picoTheme", null);
  const [pageTheme, setPageTheme] = useState("light");

  const switchTheme = () => {
    setSelectedTheme(pageTheme === "dark" ? "light" : "dark");
  };

  // Header
  const [headerIsFixed, setHeaderIsFixed] = useState(false);
  const headerRef = useRef(null);
  const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;

  // Modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const scrollbarIsVisible = isScrollbarVisible();
  const [modalHelperClasses, setModalHelperClasses] = useState();
  const modalAnimationDuration = 400;
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  // Set pageTheme on load
  useEffect(() => {
    if (selectedTheme) {
      setPageTheme(selectedTheme);
    } else {
      setPageTheme(defaultTheme);
    }
  }, [selectedTheme, defaultTheme]);

  // Set scrollbar when modal is open
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
  const onCloseModal = (event) => {
    event.preventDefault();
    setModalHelperClasses("modal-is-open modal-is-closing");
    setTimeout(() => {
      setModalHelperClasses();
      setModalIsOpen(false);
    }, modalAnimationDuration);
  };

  return (
    <PageContext.Provider
      value={{
        isSSR,
        headerHeight,
        headerIsFixed,
        headerRef,
        modalIsOpen,
        onOpenModal,
        onCloseModal,
        pageTheme,
        setHeaderIsFixed,
        switchTheme,
        systemPrefersColorScheme: defaultTheme,
      }}
      {...props}
    >
      <html
        lang="en"
        {...(selectedTheme && { "data-theme": selectedTheme })}
        {...(modalIsOpen && { className: modalHelperClasses })}
        {...(modalIsOpen &&
          scrollbarIsVisible && { style: { "--pico-scrollbar-width": `${scrollbarWidth}px` } })}
      >
        {children}
      </html>
    </PageContext.Provider>
  );
}

export { PageProvider, usePage };
