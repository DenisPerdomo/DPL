//Recogemos el argumento y lo asociamos a una variable
var url = process.argv[2];
//Llamamos al modulo http
const http = require('http')
//Hacemos un get sobre la URL
http.get(url, (response) => {
  response.on('data', (chunk) => {
    console.log("Event: "+response.listenerCount('data'))
    console.log(chunk.toString('utf8'))
  })
  response.on('end', () => {
    console.log("Event: "+response.listenerCount('end'))
    console.log('FIN DEL RESPONSE')
  })
}).on('error', (error) => {
  console.log("Event: Error")
  console.error(`Got error: ${error.message}`)
})
