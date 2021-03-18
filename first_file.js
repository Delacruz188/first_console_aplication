// const {createFile} = require('./helpers/multiplicar');
const {createFile} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
// const base = 5;

// createFile(base)
//     .then(() => console.log('Todo bien'))
//     .catch( err => console.log(err))


// const [,,baseArg] = process.argv
// const [, base] = baseArg.split('=');



console.clear();
// console.log(process.argv);
// console.log(argv.b);
createFile(argv.b, argv.l, argv.t)
    .then(() => console.log('Todo bien'.america))
    .catch( err => console.log(err))
