const fs = require('fs')
const crearArchivo = async(base, listar,hasta) =>{
const colors = require('colors');    
    try {
        
        let salida = '';
        for(let i = 1; i <=hasta; i++){
          salida +=`${base} x ${i} = ${base*i}\n`
        }
        if (listar){
            console.log("===============".green)
            console.log('  Tabla del ', base.toString().red)
            console.log("===============".green)
            console.log(salida)
        }
       
        const nombreArchivo = `tabla-${base}.txt` 
        fs.writeFileSync(`./salida/${nombreArchivo}`,salida)
        return nombreArchivo;
    } catch (error) {
        throw 'Problema al crear el archivo'
    }
      
}
module.exports = {
    crearArchivo
}