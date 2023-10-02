const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), //si es un fichero
    stats.isDirectory(), //si es un directorio
    stats.size //tamaño en bytes
)