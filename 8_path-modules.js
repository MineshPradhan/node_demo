const path  = require('path')
console.log(path.sep) // shows path seperator

const filePath = path.join('/content','subfolder','text.txt')
console.log(filePath) // shows file path

const base = path.basename(filePath)
console.log(base) // shows base file from file path

const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
const absolute1 = path.resolve(__filename)
console.log(absolute)
console.log(absolute1)