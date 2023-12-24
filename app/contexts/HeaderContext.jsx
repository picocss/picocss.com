import { createContext, useContext, useEffect, useRef, useState } from "react";

const HeaderContext = createContext({});
const useHeader = () => useContext(HeaderContext);

export default function HeaderProvider({ children }) {
  const headerRef = useRef();
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    setHeaderHeight(headerRef.current ? headerRef.current.offsetHeight : 0);
  }, [headerRef]);

  return (
    <HeaderContext.Provider value={{ headerHeight, headerRef }}>{children}</HeaderContext.Provider>
  );
}

export { HeaderProvider, useHeader };
