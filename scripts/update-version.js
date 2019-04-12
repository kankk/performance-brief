const _package = require('../package.json');
const chalk = require('chalk');

const fs = require('fs');
const path = require('path');

function run() {
  if (process.argv.length < 3) {
    console.log(chalk.red('请输入版本'));
    return;
  }
  
  const version = process.argv[2];

  // 根据输入的version修改package.json的version
  _package.version = version;

  // 覆盖原package.json
  fs.writeFileSync(path.resolve(process.cwd(), './package.json'), JSON.stringify(_package, null, 2));
}

run();