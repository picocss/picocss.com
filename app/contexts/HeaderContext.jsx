import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useNavigation } from "~/contexts/NavigationContext";

const ANIMATION_DURATION = 1000;

const HeaderContext = createContext({});
const useHeader = () => useContext(HeaderContext);

export default function HeaderProvider({ shouldAnimateOnRouteChange = true, children }) {
  const headerRef = useRef();
  const { locationPath } = useNavigation();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [previousPath, setPreviousPath] = useState(locationPath);
  const [shouldAnimateLogo, setShouldAnimateLogo] = useState(false);

  useEffect(() => {
    if (previousPath !== locationPath && shouldAnimateOnRouteChange) {
      setShouldAnimateLogo(true);
      setPreviousPath(locationPath);
      setTimeout(() => {
        setShouldAnimateLogo(false);
      }, ANIMATION_DURATION);
    }
  }, [locationPath, previousPath, shouldAnimateOnRouteChange]);

  useEffect(() => {
    setHeaderHeight(headerRef.current ? headerRef.current.offsetHeight : 0);
  }, [headerRef]);

  return (
    <HeaderContext.Provider value={{ headerHeight, headerRef, shouldAnimateLogo }}>
      {children}
    </HeaderContext.Provider>
  );
}

export { HeaderProvider, useHeader };
