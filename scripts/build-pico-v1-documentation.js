// Import necessary modules from Node.js File System and Child Process APIs
const { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync } = require("fs");
const { execSync } = require("child_process");

// Settings
const picoLibraryFolder = "./node_modules/@picocss/pico-v1/";
const picoCssFilePath = picoLibraryFolder + "css/pico.min.css";
const picoCssSourceMapFilePath = picoLibraryFolder + "css/pico.min.css.map";
const picoDocsFolder = picoLibraryFolder + "docs/";

// Create a folder if it does not exist
function createFolderIfNonExistent(folderPath) {
  if (!existsSync(folderPath)) {
    mkdirSync(folderPath, { recursive: true });
  }
}

// Clear the output folder and create it if it does not exist
function clearAndCreateOutputFolder(outputDocsFolder) {
  rmSync(outputDocsFolder, { recursive: true, force: true });
  createFolderIfNonExistent(outputDocsFolder);
}

// Copy the Pico library's documentation folder to the output folder
function copyDocsFolderToOutputFolder(outputDocsFolder) {
  const excludePatternsInPicoDocsFolder = [
    "*.html",
    "css/*.docs.css",
    "css/*.css.map",
    "scss/",
    "js/src/",
    "js/*.js",
  ];
  const includePatternsInPicoDocsFolder = [
    "css/*.docs.min.css.map",
    "css/*.docs.min.css.map",
    "js/*.min.js",
    "src/*.html",
  ];
  const excludeFilesInPicoDocsFolder = excludePatternsInPicoDocsFolder
    .map((pattern) => `--exclude='${pattern}'`)
    .join(" ");
  const includeFilesInPicoDocsFolder = includePatternsInPicoDocsFolder
    .map((pattern) => `--include='${pattern}'`)
    .join(" ");
  const copyPicoDocsFolderCommand = `rsync -r ${includeFilesInPicoDocsFolder} ${excludeFilesInPicoDocsFolder} ${picoDocsFolder} ${outputDocsFolder}`;
  execSync(copyPicoDocsFolderCommand);
}

// Copy the Pico library's CSS file to the output folder
function copyPicoCssFileToOutputFolder(outputCssFolder) {
  copyFileSync(picoCssFilePath, outputCssFolder + "pico.min.css");
  copyFileSync(picoCssSourceMapFilePath, outputCssFolder + "pico.min.css.map");
}

// Function to replace the CSS path in the head partial file
function replaceCssPathInHeadPartial(picoDocsHeadPartialFilePath) {
  const headPartialFileContent = readFileSync(picoDocsHeadPartialFilePath, "utf8");
  const headPartialFileContentWithCorrectCssPath = headPartialFileContent.replace(
    "../css/pico.min.css",
    "css/pico.min.css",
  );
  execSync(`echo '${headPartialFileContentWithCorrectCssPath}' > ${picoDocsHeadPartialFilePath}`);
}

// Build the documentation with html-includes
function buildDocs() {
  execSync(
    `html-includes --src public/docs/v1/src --dest public/docs/v1/ --minify minifyJS=true --quiet`,
  );
}

// Remove the documentation's source folder
function removeDocsSourceFolder() {
  rmSync(`public/docs/v1/src`, { recursive: true, force: true });
}

// Main
function main() {
  const outputDocsFolder = `./public/docs/v1/`;
  const outputCssFolder = outputDocsFolder + "css/";
  const picoDocsHeadPartialFilePath = outputDocsFolder + "src/_head.html";

  clearAndCreateOutputFolder(outputDocsFolder);
  copyDocsFolderToOutputFolder(outputDocsFolder);
  copyPicoCssFileToOutputFolder(outputCssFolder);
  replaceCssPathInHeadPartial(picoDocsHeadPartialFilePath);
  buildDocs();
  removeDocsSourceFolder();
}

main();
