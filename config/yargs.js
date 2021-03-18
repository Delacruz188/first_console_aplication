const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'string',
            describe: 'Is the base of the multiplicate table.'
        }, 
        'l':{
            alias: 'list',
            demandOption: true,
            default: false,
            type: 'boolean',
            describe: 'This show you the table.'
        },
        't': {
                alias: 'to',
                demandOption: true,
                type: 'number',
                describe: 'The limit to do the multiplicate table.'
        }
        
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'The base must need to be a number.'
        }
        return true;

    })
    .argv;


    module.exports = argv;