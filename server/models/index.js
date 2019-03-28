const path = require('path');
const fs = require('fs');
const indexFile  = path.basename(__filename);

fs.readdirSync(__dirname)
    .filter(file => file != indexFile && file.slice(-3) == '.js')
    .forEach(file => require(path.join(__dirname, file)));