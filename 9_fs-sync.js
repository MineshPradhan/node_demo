const {readFileSync, writeFileSync} = require('fs')
console.log('start')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
// console.log(first,"n",second)

writeFileSync('./content/result-sync.txt',`Here is the result ${first}, ${second}`,
    {flag:`a`} // It will override the result
)

const result = readFileSync('./content/result-sync.txt','utf8')
// console.log(result)

console.log('done with the task')
console.log('starting new one')