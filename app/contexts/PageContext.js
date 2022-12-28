import { createContext, useContext } from "react";

import usePrefersColorScheme from "use-prefers-color-scheme";
import useLocalStorageState from "use-local-storage-state";

const PageContext = createContext({});
const usePage = () => useContext(PageContext);

export default function PageProvider({ children, ...props }) {
  const systemPrefersColorScheme = usePrefersColorScheme();
  const defaultTheme = systemPrefersColorScheme === "dark" ? "dark" : "light";
  const [selectedTheme, setSelectedTheme] = useLocalStorageState("picoTheme", null);
  const pageTheme = selectedTheme || defaultTheme;
  const switchTheme = () => {
    setSelectedTheme(pageTheme === "dark" ? "light" : "dark");
  };

  return (
    <PageContext.Provider
      value={{
        systemPrefersColorScheme: defaultTheme,
        pageTheme,
        switchTheme,
      }}
      {...props}
    >
      <html lang="en" {...(selectedTheme && { "data-theme": selectedTheme })}>
        {children}
      </html>
    </PageContext.Provider>
  );
}

export { PageProvider, usePage };
