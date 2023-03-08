const { copyFileSync } = require("fs");

// Config
const customThemesFolder = "./app/styles/css/custom-themes/";
const picoLibraryFolder = "./node_modules/@picocss/pico/scss/";
const cssCodeExtractsFolder = "./app/styles/css/extracts/";
const codeSnippetsFolder = "./app/data/code-snippets/";

const files = [
  customThemesFolder + "amber.css",
  customThemesFolder + "azure.css",
  customThemesFolder + "blue.css",
  customThemesFolder + "cyan.css",
  customThemesFolder + "fuchsia.css",
  customThemesFolder + "green.css",
  customThemesFolder + "grey.css",
  customThemesFolder + "indigo.css",
  customThemesFolder + "jade.css",
  customThemesFolder + "lime.css",
  customThemesFolder + "orange.css",
  customThemesFolder + "pink.css",
  customThemesFolder + "pumpkin.css",
  customThemesFolder + "purple.css",
  customThemesFolder + "red.css",
  customThemesFolder + "sand.css",
  customThemesFolder + "slate.css",
  customThemesFolder + "violet.css",
  customThemesFolder + "yellow.css",
  customThemesFolder + "zinc.css",
  picoLibraryFolder + "_settings.scss",
  cssCodeExtractsFolder + "default-theme-color-schemes.css",
  cssCodeExtractsFolder + "default-theme-styles.css",
];

// Copy files to the code snippets folder
// and rename them to .txt
files.forEach((file) => {
  const fileName = file.split("/").pop().replace(".css", ".txt").replace(".scss", ".txt");
  const destination = codeSnippetsFolder + fileName;
  copyFileSync(file, destination);
});
