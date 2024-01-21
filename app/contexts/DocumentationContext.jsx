import { createContext, useContext, useState } from "react";

const DocumentationContext = createContext({});
const useDocumentation = () => useContext(DocumentationContext);

const DocumentationProvider = ({ children }) => {
  const [menuIsOpenOnMobile, setMenuIsOpenOnMobile] = useState(false);

  return (
    <DocumentationContext.Provider value={{ menuIsOpenOnMobile, setMenuIsOpenOnMobile }}>
      {children}
    </DocumentationContext.Provider>
  );
};

export { DocumentationProvider, useDocumentation };
