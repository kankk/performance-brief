const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

function delDir(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(file => {
      let curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath); //递归删除文件夹
      } else {
        fs.unlinkSync(curPath); //删除文件
      }
    });
    fs.rmdirSync(path);
  }
}

function deleteDist() {
  const distPath = path.resolve(process.cwd(), './dist');
  delDir(distPath);
  console.log(chalk.green('删除dist成功'));
}

deleteDist();