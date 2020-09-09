// requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('============'.green);
    console.log(`TABLA DE ${base}`.green);
    console.log('============'.green);

    for (let i = 1; i <= limite; i++) {
        let resultado = 0;
        resultado = base * i;
        console.log(`${base} x ${i} = ${resultado}`);
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            let result = 0;
            result = base * i;
            data += `${base} * ${i} = ${result} \n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}