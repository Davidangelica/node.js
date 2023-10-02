//.js --> por defecto utliza Common js 
//.mjs --> para utlizar ES modules 
//.cjs --> para utilizar Common js


//importar la funcion modulo mjs
import { suma,saludo,multiplicar } from './fun.mjs'

console.log('la suma es:',suma(7,7))

console.log(saludo('pepe'))

console.log(multiplicar(5,5))