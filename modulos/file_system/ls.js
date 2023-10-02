// crear un ls
const fs = require('node:fs')

// funcion para leer directorios
fs.readdir('.',(err,files) =>{  // toma como primer parametro la ruta y como segundo un callback
    if (err) {
        console.error('tienes el siguiente error:',err)
        return;
    }
    files.forEach(file =>{ //obtenemos todos los dir con forEach 
        console.log(file)
    })
})



//usando Promises
const fsP = require('node:fs/promises')

fsP.readFile('.')
.then(files=>{
files.forEach(file =>{
    console.log(file)
})
})
.catch(err =>{
        console.error('tienes el siguente error:',err) 
        return;
    
})