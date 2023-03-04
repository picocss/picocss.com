import { createContext, useContext, useState } from "react";

const DocumentationContext = createContext({});
const useDocumentation = () => useContext(DocumentationContext);

export default function DocumentationProvider({ children, ...props }) {
  const [menuIsOpenOnMobile, setMenuIsOpenOnMobile] = useState(false);

  return (
    <DocumentationContext.Provider value={{ menuIsOpenOnMobile, setMenuIsOpenOnMobile }} {...props}>
      {children}
    </DocumentationContext.Provider>
  );
}

export { DocumentationProvider, useDocumentation };
