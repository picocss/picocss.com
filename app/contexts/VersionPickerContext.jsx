import { createContext, useContext, useState } from "react";

const VersionPickerContext = createContext({});
const useVersionPicker = () => useContext(VersionPickerContext);

const VersionPickerProvider = ({ children, value }) => {
  const { themeRef, customizationRef, usageFromCdnRef, usageWithSaasRef, starterHtmlTemplateRef } =
    value;
  const [baseIndex, setBaseIndex] = useState(0);
  const [conditionalIndex, setConditionalIndex] = useState(0);
  const [themeColor, setThemeColor] = useState("azure");

  const baseConfiguration = [
    {
      name: "Regular, with classes",
      filePattern: "",
      description: "The default version of Pico CSS, with all components and classes.",
      sassProperties: {},
    },
    {
      name: "Class-less, with centered viewports",
      filePattern: "classless.",
      description: `The <a href="/docs/classless">class-less version</a> for HTML purists with centered viewports.`,
      sassProperties: {
        "$enable-semantic-container": true,
        "$enable-classes": false,
      },
    },
    {
      name: "Class-less, with fluid viewport",
      filePattern: "fluid.classless.",
      description: `The <a href="/docs/classless">class-less version</a> for HTML purists with a fluid viewport.`,
      sassProperties: {
        "$enable-semantic-container": true,
        "$enable-viewport": false,
        "$enable-classes": false,
      },
    },
  ];

  const conditionalConfiguration = [
    {
      name: "No",
      filePattern: "",
      description: "The default version applies Pico styles to every HTML element.",
      sassProperties: {},
    },
    {
      name: "Yes",
      filePattern: "conditional.",
      description: `This version restricts Pico styling to HTML elements within <code>.pico</code> containers only. <a href="/docs/conditional">See here</a>.`,
      sassProperties: {
        "$parent-selector": `".pico"`,
      },
    },
  ];

  const colorFilePattern = themeColor === "azure" ? "" : `${themeColor}.`;

  const picoFileName = `pico.${baseConfiguration[baseIndex].filePattern}${conditionalConfiguration[conditionalIndex].filePattern}${colorFilePattern}min.css`;
  const simplifiedCssLink = `<link rel="stylesheet" href="css/${picoFileName}" />`;

  return (
    <VersionPickerContext.Provider
      value={{
        themeRef,
        customizationRef,
        usageFromCdnRef,
        usageWithSaasRef,
        starterHtmlTemplateRef,
        baseIndex,
        baseConfiguration,
        conditionalIndex,
        conditionalConfiguration,
        setBaseIndex,
        setConditionalIndex,
        picoFileName,
        simplifiedCssLink,
        themeColor,
        setThemeColor,
      }}
    >
      {children}
    </VersionPickerContext.Provider>
  );
};

export { VersionPickerProvider, useVersionPicker };
