import { readFile } from "node:fs/promises";
// lectura en paralelo, quiere decir que se van a leer los dos a la vez
// hacemos una promesa con los dos archivos
Promise.all([
    readFile('./archivo.txt','utf-8'),
    readFile('./archivo2.txt','utf-8')
]).then(([text1,text2]) => {w
console.log('primer texto:',text1)
console.log('segundo texto:',text2)
})
