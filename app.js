const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
console.clear();

// const[,,arg3 = 'base=5'] = process.argv
// const[,base = 5] = arg3.split('=');
// console.log(base);
console.log('base: yargs', argv.base)
console.log(argv)
//const base = 4;

crearArchivo(argv.base, argv.l,argv.h)
    .then(nombre => console.log(nombre, 'creado'))
    .catch(error => console.log(error))