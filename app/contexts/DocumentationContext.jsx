import { createContext, useContext, useState } from "react";
import { documentationMenu } from "~/data/documentationMenu";

const DocumentationContext = createContext({});
const useDocumentation = () => useContext(DocumentationContext);

export default function DocumentationProvider({ children, ...props }) {
  const defaultChapter = documentationMenu[0].category;
  const [menuIsOpenOnMobile, setMenuIsOpenOnMobile] = useState(false);
  const [chapter, setChapter] = useState(defaultChapter);

  return (
    <DocumentationContext.Provider
      value={{ chapter, menuIsOpenOnMobile, setChapter, setMenuIsOpenOnMobile }}
      {...props}
    >
      {children}
    </DocumentationContext.Provider>
  );
}

export { DocumentationProvider, useDocumentation };
