const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs'); 
require('colors');

console.clear();


/*
Probar con la funcion del proceso
console.log(process.argv);

Para probar el yargs.
console.log(argv);
*/


console.log('base yargs', argv.base);





/*
// codigo usado para generar  una multiplicacion usando un argumento que se pasa de consola

const [ , , arg3 = 'base=5'] = process.argv;

const[,base=5] = arg3.split('=');
console.log(process.argv);
console.log('hola querido argumento ', base);


crearArchivo( base ).then( nombreArchivo => console.log( nombreArchivo, 'creado') )
.catch( err => console.log( err ) );
*/

/* */
crearArchivo( argv.b, argv.l, argv.h )
.then( nombreArchivo => console.log( nombreArchivo, 'creado') )
.catch( err => console.log( err ) );
