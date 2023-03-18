import { createContext, useContext, useEffect, useState } from "react";

import usePrefersColorScheme from "use-prefers-color-scheme";
import useLocalStorageState from "use-local-storage-state";

import { NavigationProvider } from "~/contexts/NavigationContext";
import { useModal } from "~/contexts/ModalContext";

const PageContext = createContext({});
const usePage = () => useContext(PageContext);

export default function PageProvider({ children, ...props }) {
  const isSSR = typeof window === "undefined";

  // Modal
  const { modalHelperClasses, modalIsOpen, scrollbarIsVisible, scrollbarWidth } = useModal();

  // Theme
  const systemPrefersColorScheme = usePrefersColorScheme();
  const defaultTheme = systemPrefersColorScheme === "dark" ? "dark" : "light";
  const [selectedTheme, setSelectedTheme] = useLocalStorageState("picoTheme", null);
  const [pageTheme, setPageTheme] = useState("light");

  const switchTheme = () => {
    setSelectedTheme(pageTheme === "dark" ? "light" : "dark");
  };

  // Set pageTheme on load
  useEffect(() => {
    if (selectedTheme) {
      setPageTheme(selectedTheme);
    } else {
      setPageTheme(defaultTheme);
    }
  }, [selectedTheme, defaultTheme]);

  return (
    <PageContext.Provider
      value={{
        isSSR,
        pageTheme,
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
        <NavigationProvider>{children}</NavigationProvider>
      </html>
    </PageContext.Provider>
  );
}

export { PageProvider, usePage };
