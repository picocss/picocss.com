const { copyFileSync } = require("fs");

// Config
const customThemesFolder = "./app/styles/css/custom-themes/";
const picoLibraryFolder = "./node_modules/@picocss/pico/scss/";
const cssSnippetsFolder = "./app/styles/css/snippets/";
const codeSnippetsFolder = "./app/data/code-snippets/";

const files = [
  customThemesFolder + "orange.css",
  picoLibraryFolder + "_settings.scss",
  picoLibraryFolder + "colors/utilities/_settings.scss",
  cssSnippetsFolder + "default-theme-color-schemes.css",
  cssSnippetsFolder + "default-theme-styles.css",
];

// Copy files to the code snippets folder
// and rename them to .txt
files.forEach((file) => {
  const isColorUtilitiesSettings = file.includes("colors/utilities/_settings.scss");
  const fileName = file.split("/").pop().replace(".css", ".txt").replace(".scss", ".txt");
  let destination = codeSnippetsFolder + fileName;
  if (isColorUtilitiesSettings) {
    destination = codeSnippetsFolder + "_color-utilities-settings.txt";
  }
  copyFileSync(file, destination);
});
