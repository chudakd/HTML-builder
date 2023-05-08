const { stdout } = process;
const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'secret-folder');
fs.readdir(folderPath,{ encoding: 'utf8', withFileTypes: true }, (err, files) => {
  files.forEach(el => {
    if (el.isFile()) {
      fs.stat(path.join(folderPath, el.name), (err, stat) => {
        stdout.write(`${el.name.split('.')[0]} - ${path.extname(el.name).slice(1)} - ${stat.size}\n`);
        });
    }
  });
});
