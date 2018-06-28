const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


const app = express();
mongoose.connect('mongodb://admin:public00@ds155699.mlab.com:55699/lauracc')
.then(db => console.log('Conected to Mongo OK!'))
.catch(err=> console.error(err));


//settings



//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.get('/',(req,res)=>{

    res.sendFile(__dirname+'/public/index.html');
  
  });

//Static Files

app.use(express.static(__dirname+'/public'));









var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("Express is working on port " + port);
  });