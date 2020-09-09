const argv = require('./config/yargs').argv;
const colors = require('colors');

const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${ archivo.cyan }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido'.red);
        break;
}