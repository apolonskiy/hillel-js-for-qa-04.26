/* eslint-disable */
const {exec, execSync} = require("child_process");

const command = process.argv[2];

const cypressWrapped = exec(command, err => {
  // if there are errors we generate a single report then send the messaging for that
  if (err) {
    console.log(err)
    console.log('Error executing js files');
  }
});

// We need to force the data to output to see the execution in the command line
cypressWrapped.stdout.on("data", function (data) {
  console.log(data);
});
