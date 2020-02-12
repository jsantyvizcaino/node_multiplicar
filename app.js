const fs = require('fs'); //propia d expres
// const fs = require('expres');        //paquetes no nativos de node
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //archivos q se excribieron por uno mismo

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

//comandos independientes

let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(mensaje => console.log('se ha creado el archivo', colors.red.underline(mensaje)))
            .catch(error => console.log(error))
        break;

    default:
        console.log('comando no reconocido');
        break;
}







// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]


//console.log(argv.limite);