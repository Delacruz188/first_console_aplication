const fs = require('fs');
require('colors');
//! variables para esta funcion
let salida = '';
//!
const createFile = async (data, listar, limit) => {

    try {
        for (let i = 1; i <= limit; i++) {
            salida += `${data} x ${i} = ${data*i}\n`;
        }
        
        if (listar) {
            console.log(salida.underline);
        }

        fs.writeFileSync(`./archives/nuevoArchivo_tabla${data}.txt`, salida, (err) => {
            err ?  err : console.log('Todo bien');
        }) 

        return `nuevoArchivo_tabla${data}.txt`;
        
    } catch (err) {
        console.log(err);
    }

}

module.exports = { 
    createFile
};