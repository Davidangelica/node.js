const fs = require('node:fs')

// leer de forma sincrona
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log(text)

console.log('------------------------')

//leer de forma asincronica 
//de esta forma cuando se ejecuten las funciones de readFile al tener un callback el programa se va a seguir ejecutando mienteras lee el archivo 

console.log('leyendo el primer archivo....')

fs.readFile('./archivo.txt', 'utf-8', (err, text)=> { //el read file recibe como tercer paramatro un callback
console.log('primer texto:',text)
})

console.log('realizando acciones...')

console.log('leyendo el segundo archivo....')
fs.readFile('./archivo2.txt', 'utf-8', (err, text)=> {
    console.log('segundo texto:',text)
})
