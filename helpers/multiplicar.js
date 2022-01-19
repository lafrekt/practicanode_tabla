const fs = require('fs');
const colors = require('colors');

/*
//Ejemplo de funcion sin promesa!

const crearArchivo = ( base = 5 ) => {

    console.log( '=================================================' );
    console.log( '       La tabla del  ', base );
    console.log( '=================================================' );

    let salida = '';

    for ( i = 1; i <= 10; i++ ) {
        salida += `${ base } x ${ i } = ${ base * i }\n`;
    }


    console.log( salida );

    fs.writeFileSync( `tabla-${ base }.txt`, salida );
    console.log( `tabla-${ base }.txt creado ` );

}

*/


const crearArchivo = async (base = 5 , listar = false, hasta = 10 ) => {
    try {

        

        let  salida = '';
        let consola = '';

        for (i = 1; i <= hasta; i++) {
            consola+= `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if ( listar ) {
        console.log('================================================='.green);
        console.log('       La tabla del  '.green, colors.white(base));
        console.log('================================================='.green);
        console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`
    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo // es igual a crearArchivo : crearArchivo
}