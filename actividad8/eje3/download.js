//Recogemos el argumento y lo asociamos a una variable
var url = process.argv[2];
//Generamos el nombre de la carpeta
let uuidv1 = require('uuid');
const folderName = uuidv1();
//Creamos la carpeta.
let fs = require('fs');
fs.mkdirSync(folderName);
//Llamamos al modulo http
const http = require('http')
//Hacemos un get sobre la URL
http.get(url, (response) => {
  let rawData = ''
  response.on('data', (chunk) => {
    rawData += chunk
  })
  response.on('end', () => {
    fs.writeFileSync(folderName+"/file.html",rawData);
    console.log('Descargado en el fichero.')
  })
}).on('error', (error) => {
  console.log("Event: Error")
  console.error(`Got error: ${error.message}`)
})
