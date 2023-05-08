const { stdout } = process;
const fs = require('fs');
const path = require('path');

const link = path.join(__dirname, 'text.txt');
const readable = fs.createReadStream(link);
let data = '';
readable.on('data', chunk => data += chunk);
readable.on('end', () => {
    stdout.write(data);
    process.exit();
    });

