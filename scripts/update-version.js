const currentPackage = require('../package.json');
const chalk = require('chalk');
const semver = require('semver');

const fs = require('fs');
const path = require('path');

function run() {
  if (process.argv.length < 3) {
    console.log(chalk.red('请输入版本'));
    return;
  }
  
  const version = process.argv[2];
  const currentVersion = currentPackage.version;

  // 判断输入的版本号是否合法
  if (!semver.valid(version)) {
    console.log(chalk.red('请输入有效版本'));
    return;
  } else if (!semver.gt(version, currentVersion)) {
    console.log(chalk.red('新的版本需要大于旧的版本'));
  }

  // 根据输入的version修改package.json的version
  currentPackage.version = version;

  // 覆盖原package.json
  fs.writeFileSync(path.resolve(process.cwd(), './package.json'), JSON.stringify(currentPackage, null, 2));
}

run();