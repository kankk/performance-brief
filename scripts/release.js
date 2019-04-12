const _package = require('../package.json');
const chalk = require('chalk');

function getPackageVersion () {
  console.log(`当前version: ${chalk.green(`${_package.version}`)}`);
}

function run() {
  getPackageVersion();
}

run();