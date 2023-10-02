// argumentos de entrada
console.log(process.argv)

//controlar el proceso y su salida
process.exit(1)

//podemos controlar eventos del preceso 
process.on('exit',()=>{

})

//current working directory, es de donde se ejecute el proceso 

console.log(process.cwd())