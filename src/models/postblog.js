var mongoose = require('mongoose');

var { Schema } = mongoose;

var Postblog = new Schema({
    categoria: String,
    image: String,
    titulo: String,
    descripcio: String,
    cuerpo : String,
    dia : String,
    mes : String,
    año : String,
    hora : String,
    min : String,
    comments: Number,
    
    respuesta: [
        {
            cuerpo: String,
            autor: String,
            email : String,
            dia : String,
            mes : String,
            año : String,
            hora : String,
            min : String,
           
        }
    ],
    
});


module.exports = mongoose.model('Postblog',Postblog);