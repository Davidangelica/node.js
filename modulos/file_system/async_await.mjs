// con modulos mjs no hace falta usar el async

import { readFile } from "node:fs/promises";

console.log('leyendo el primer archivo.....')
const text1 = await readFile('./archivo.txt', 'utf-8')
.then((text) => {console.log('texto 1:',text)})


console.log('----realizando acciones----')

console.log('leyendo el segundo archivo.....')
const text2 = await readFile('./archivo2.txt', 'utf-8')
.then((text) => {console.log('texto 2:',text)})

console.log('---fin---')