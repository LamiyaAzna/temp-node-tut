const path = require('path');

console.log(path.sep);


const filePath = path.join('/content', 'sunfolder', 'test.txt');

console.log(filePath);


const base = path.basename(filePath)
console.log(base);

const absolute = path.relative(__dirname, '/content', 'sunfolder', 'test.txt' );
console.log(absolute);