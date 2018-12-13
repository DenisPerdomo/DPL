const request = require('request');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Recogemos lo que escriba en usuario por consola.
rl.question('Nombre de pokemon o número de pokedex: ', (answer) => {
  //Creamos la URL, para comunicar con la API, con lo que el usuario instroduzca, ya sea número o nombre
  let url = `https://pokeapi.co/api/v2/pokemon/${answer}/`
  //Hacemos la petición a la url y cogemos los datos que vienen en formato JSON
  request(url,function(err,response,body){
      if (err) {
        //Si da error mostramos el error en la consola
          console.log('error:', error);
      }else{
        //Transformamos los datos de formato JSON en objeto.
          let pokemon = JSON.parse(body);
          //Vamos mostrando al usuario los datos del Pokemon
          console.log(`Nº Pokedex: ${pokemon.id}`)
          console.log(`Nombre Pokemon: ${pokemon.name}`)
          console.log(`Pokemon de tipo: ${pokemon['types'][0]['type']['name']}`)
          //Como la descripcion del pokemon está en otra dirección de la API, pues consultamos los datos con el id del pokemon
          request(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`,function(err,response,body){
            if(err){
              //Mostramos error si lo hubiera
              console.log('error:', error);
            }else{
              //Transformamos los datos en objeto
              let species = JSON.parse(body)
              //Buscamos las descripciones en español
              var text = []
              let descriptions = species['flavor_text_entries']
              for (description of descriptions) {
                if(description.language.name == "es")
                  text.push(description.flavor_text)
              }
              //Mostramos la segunda descripcion en español
              console.log(`Descripción: ${text[1]}`)
            }
          });
      }
  });
  rl.close();
});
