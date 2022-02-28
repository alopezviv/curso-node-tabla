const { boolean } = require('yargs');
const argv = require('yargs')
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false
                })
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .check((argv,options) => {
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10
                })
                .check((argv,options) => {
                    if(isNaN(argv.h)){
                        throw 'La h tiene que ser un numero'
                    }
                    return true;
                })
                .argv;
module.exports = argv;