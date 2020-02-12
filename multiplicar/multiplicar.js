const fs = require('fs'); //propia d expres
const colors = require('colors');



let listarTabla = (base, limite) => {

    console.log('============================'.green);
    console.log(`TABLA DEL ${base}`.green);
    console.log('============================'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);
    }

};





let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un numero`)
            return
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else {
                resolve(`tabla-${base}.txt`);
            }
        });



    })
}


module.exports = {
    crearArchivo,
    listarTabla
}