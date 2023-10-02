//forma secuencial, quiere decir que no se va a leer otro archivo hasta que no se lea el anterior pero si va a realizar las otras acciones 
const rd = require('node:fs/promises')

async function init() {
    console.log('leyendo el primer archivo...')
    const text = await rd.readFile('./archivo.txt','utf-8')
    console.log('texto1:',text)

    console.log('----realizando acciones----')

    console.log('leyendo el segundo archivo...')
    const text2 = await rd.readFile('./archivo2.txt','utf-8')
    console.log('texto2:',text2)

}
init()