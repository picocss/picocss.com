import { createContext, useContext, useRef } from "react";

const HeaderContext = createContext({});
const useHeader = () => useContext(HeaderContext);

export default function HeaderProvider({ children }) {
  const headerRef = useRef();
  const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;

  return (
    <HeaderContext.Provider value={{ headerHeight, headerRef }}>{children}</HeaderContext.Provider>
  );
}

export { HeaderProvider, useHeader };
