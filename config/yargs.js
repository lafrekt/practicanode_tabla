const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Este argumento es la base de la multiplicacion'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,        
        describe: 'Este argumento permite delimitar el tope superior de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Este argumento permite pintar la multiplicacion en consola'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La Base tiene que ser un numero';
        }
        return true

    })
    .argv;

    module.exports = argv;