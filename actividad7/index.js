var lsmod = require('./modules/modulels');

var ruta = process.argv[2];
var extension = "."+process.argv[3];

lsmod(ruta,extension,(error,res) =>{
    if(error){
        console.log("Error: " + error.message);
    }else{
        for (var i=0; i<res.length; i++) {
            console.log(res[i]);
        }
    }
});
