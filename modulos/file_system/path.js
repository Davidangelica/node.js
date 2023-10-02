const path = require('node:path')

//unir rutas con path.join

const filePath = path.join('sistema','router','empleados')
console.log(filePath)

// obtener nombre del fichero
const baseName = path.basename('C:\\programa_distribudora\\routers\\administrador.py')
console.log(baseName)

// obtner la extencion 
const extension = path.extname('C:\\programa_distribudora\\routers\\menu.py')
console.log(extension)