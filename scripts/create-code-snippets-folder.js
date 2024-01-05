const { existsSync, mkdirSync, rmSync } = require("fs");

// Config
const codeSnippetsFolder = "./app/data/code-snippets/";

// Create folder if it doesn't exist
const createFolderIfItDoesntExist = (folder) => {
  if (!existsSync(folder)) {
    mkdirSync(folder);
  }
};

// Remove all files in the code snippets folder
rmSync(codeSnippetsFolder, { recursive: true, force: true });

// Create the code snippets folder
createFolderIfItDoesntExist(codeSnippetsFolder);