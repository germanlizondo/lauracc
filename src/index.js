const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');


//models
var Postblog = require('./models/postblog');


const app = express();
 mongoose.connect('mongodb://admin:public00@ds155699.mlab.com:55699/lauracc')
 .then(db => console.log('Conected to Mongo OK!'))
 .catch(err=> console.error(err));
// mongoose.connect('mongodb://localhost/lauracc')
// .then(db => console.log('Conected to Mongo OK!'))
// .catch(err=> console.error(err));

//settings
app.set('port',process.env.PORT || 3000);


//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(session({secret: 'hellothere'}));

//Routes
app.post('/api/login',(req,res)=>{

   console.log(req.body);
   res.sendStatus(200);
  
  });

  app.get('/api/login',(req,res)=>{

    
    console.log("La sesion es: "+req.session);
    res.end('done');
   
   });


   app.get('/api/getpublicacions', async(req,res)=>{    
    var publicacions = await Postblog.find();
  res.send(publicacions);

  console.log("hola : "+publicacions);
   });


   app.get('/api/post/:name', async(req,res)=>{    
    var name = req.params.name;
    console.log("HOLAAAAAAAA: "+name);
    var post = await Postblog.findOne({titulo:name});
  res.send(post);

  console.log("hola : "+post);
   });



   app.post('/api/postblog',(req,res)=>{
    
    console.log(req.body);
var fecha = new Date();

    var newPublicacio = new Postblog();
    newPublicacio.categoria = req.body.categoria;
    newPublicacio.image =  "";
    newPublicacio.titulo=  req.body.titulo;
    newPublicacio.descripcio=  req.body.descipcio;
    newPublicacio.cuerpo =  req.body.contingut;
    newPublicacio.dia =  fecha.getDay();
    newPublicacio.mes =  fecha.getMonth();
    newPublicacio.año = fecha.getFullYear();
    newPublicacio.hora =  fecha.getHours();
    newPublicacio.min = fecha.getMinutes() < 10 ? '0' : '' + fecha.getMinutes();
    newPublicacio.comments =  0;
    
    newPublicacio.respuesta = [
        {
            cuerpo:"", 
            autor: "",
            email : "",
            dia : "",
            mes : "",
            año : "",
            hora : "",
            min : ""
           
        }
    ];
 
newPublicacio.save((err)=>{
    if(err) {
        throw err;
        res.sendStatus(500);
    }
})
   });

//Static Files

app.use(express.static(__dirname+'/public'));









app.listen(app.get('port'),()=>{
    console.log('Server init on Port',app.get('port'));
});