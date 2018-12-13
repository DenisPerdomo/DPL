var fs = require('fs');
var path = require('path');


module.exports = (route, typeFile, callback) =>{
    let files=[];
    let cont = 0;
    fs.readdir(route, function(error, lista) {
        if(error){
            return callback(new Error("Error leyendo carpeta"));
        }else{
            if(typeFile == ".undefined"){
                return callback(new Error("Debe especificar un tipo de archivo o la opcion 'all'"));
            }
            if(typeFile == ".all"){
                return callback(null,lista);
            }
            if(typeFile != ".undefined"){
                for (var i=0; i<lista.length; i++) {
                    if(path.extname(lista[i]) == typeFile){
                        files.push(lista[i]);
                        cont++;
                    }
                }
                if(cont == 0){
                    return callback(new Error("No existe fichero con esta extensión."));
                }else{
                    return callback(null,files);
                }
            }
        }
    });
}
