// import {num1Module as numberOverride, str1Module, bool1Module} from './export.mjs';
// import * as moduleData from './export.mjs';

import defaultExport, {str1Module, num1Module, bool1Module} from './export.js';
import chalk from 'chalk';

console.log(chalk.blue(str1Module));
console.log(chalk.green(num1Module));
console.log(chalk.red(bool1Module));
console.log(chalk.yellow(defaultExport));

// console.log(str1Module);
// console.log(num1Module);
// console.log(bool1Module);
// console.log(defaultExport);