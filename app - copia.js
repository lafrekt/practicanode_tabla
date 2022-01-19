const fs = require('fs');

console.clear();

console.log('=================================================');
console.log('==================== La tabla del 5 =============');
console.log('=================================================');
const base = 3;
let salida = '';

for (  i = 1 ; i <= 10 ; i++ ){
    salida += `${ base } x ${ i } = ${ base * i }\n` ;
}


console.log(salida);
/*
//Ejemplo con writeFile simple
fs.writeFile( `tabla-${ base }.txt`, salida, ( err ) => {
    if ( err ) throw err;
    console.log( `Tabla  tabla-${ base }.txt creada correctamente` );
});
*/
fs.writeFileSync(`tabla-${ base }.txt`, salida );
console.log(`tabla-${ base }.txt creado `) ;