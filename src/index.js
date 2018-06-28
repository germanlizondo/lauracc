const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


const app = express();
mongoose.connect('mongodb://localhost/lauracc')
.then(db => console.log('Conected to Mongo OK!'))
.catch(err=> console.error(err));


//settings
app.set('port',process.env.PORT || 3000);


//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.get('/hola',(req,res)=>{
    res.send("hola");
});


//Static Files

app.use(express.static(__dirname+'/public'));









app.listen(app.get('port'),()=>{
    console.log('Server init on Port',app.get('port'));
});