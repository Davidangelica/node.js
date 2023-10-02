const fs = require('node:fs/promises')
const path = require('node:path')


// en esta constante obtenemos el directorio que queremos mediante el argumento
const folder = process.argv[2] ?? '.' // con el operador ?? estamos diciendo que en que en caso de que el valor del argumento sea nulo o indefinido tome el valor '.' que seria el del directorio actual

async function ls (folder){
let files // creamos la variable files, esto se hace cuando trabajamos con asincronias porque sino puede que la variable quede undefined

try{
    files = await fs.readdir(folder) // leemos el folder con el modulo de fs, esto devuelve un array con todos los elementos del directorio
}

catch{
    console.error(`ocurrio un error en el siguiente directorio: ${folder}`) //mostramos el error en consola 
    process.exit(1) //cerramos el processo 
}
const filesPromises = files.map(async file =>{ //con el map buscamos iterar sobre cada archivo obtenido del folder y obtener sus estadisticas con el fs.stat, 
                                              //el mapeo se hace en paralelo esto quiere decir que itera todas las promesas en simultaneo
    const filePath = path.join(folder,file)  //unimos la ruta del archivo con la del directorio con el modulo path
    let stats
    try{
        stats = await fs.stat(filePath)  //obtenemos las estadisticas de los archivos con el modulo de fs
        console.log(file)
    }
    catch{
        console.error(`no se pudo leer el archivo ${filePath}`)
        process.exit(1)
    }
    const isDirectory = stats.isDirectory() // para saber si es un directorio
    const filetype = isDirectory ? 'd' : 'f' // para saber que tipo de dato es, si un directorio o un archivo
    const fileSize = stats.size.toString() //para saber el tamaño 
    const fileModified = stats.mtime.toLocaleString() // para seber la fecha de modificacion

    return `${filetype} ${file.padEnd(20)} ${fileSize.padStart(10)} ${fileModified}` //padend(maximo de caracteres), padStart(el dato se muestra con 10 caracteres de espacio al inicio)

})

const fileInfo = await Promise.all(filesPromises) //resolvemos todas las promesas y  almacenamos los resultados en filesInfo
fileInfo.forEach(fileInfo => console.log(fileInfo)) //iteramos sobre cada elemento y lo mostramos en consola
}

ls(folder)