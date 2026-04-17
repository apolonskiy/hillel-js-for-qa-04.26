const importedData = require('./export');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');


console.log(chalk.blue(importedData.str1));
console.log(chalk.green(importedData.num1));
console.log(chalk.red(importedData.bool1));

console.log(fs.readFileSync(path.join(__dirname, 'export.js'), 'utf-8'))