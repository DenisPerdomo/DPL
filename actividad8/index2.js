//Recogemos el argumento y lo asociamos a una variable
var url = process.argv[2];
//Llamamos al modulo http
const http = require('http')
//Hacemos un get sobre la URL
http.get(url, (response) => {
  let rawData = ''
  response.on('data', (chunk) => {
    rawData += chunk
  })
  response.on('end', () => {
    process.stdout.write('Número de carácteres: '+rawData.length+'\n')
    process.stdout.write(rawData)
  })
}).on('error', (error) => {
  console.log("Event: Error")
  console.error(`Got error: ${error.message}`)
})
