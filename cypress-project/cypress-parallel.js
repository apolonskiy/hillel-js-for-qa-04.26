const fs = require("fs");
const path = require("path");

const NODE_INDEX = Number(process.env.CI_NODE_INDEX || 1);
const NODE_TOTAL = Number(process.env.CI_NODE_TOTAL || 3);
const TEST_FOLDER = path.resolve(__dirname, process.argv[2]);

const walk = (dir) => {
  const files = fs.readdirSync(dir).map((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      return walk(filePath);
    } else if (stats.isFile()) {
      return filePath;
    }
  });

  return files
    .reduce((all, folderContents) => all.concat(folderContents), [])
    .filter((file) => /^.+\.test\.js/.test(file));
};

const getSpecFiles = () => {
  const allSpecFiles = walk(TEST_FOLDER);
  const testName = "it(";
  return allSpecFiles
    .sort(
      (file1, file2) =>
        fs.readFileSync(file1).toString().split(testName).length -
        fs.readFileSync(file2).toString().split(testName).length,
    )
    .filter((_, index) => index % NODE_TOTAL === NODE_INDEX - 1)
    .map((file) => file.replace(__dirname, "."));
};

// This log will be printed out to the console
// so that cypress will know which files will be run.
// Also, since getSpecFiles returns an array, the paths are
// joined with comma
// eslint-disable-next-line
console.log(`${getSpecFiles().join(',')}`);