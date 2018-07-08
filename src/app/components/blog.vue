<template>
   <div class="page">
        
        <div class="container">
              <div class="ip3">
          <div class="container text-left">
            
                
        <h4 class="display-4">Blog</h4>
        <div class="text-right">
          <i v-on:click="show = !show" class="fas fa-plus-circle"></i>
        </div>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated bounceInLeft"
    leave-active-class="animated bounceOutRight"  mode="out-in"
  >
        <div v-if="show">
          <form @submit.prevent="addPublicacio">
  <div  class="form-group" >
    <label for="exampleFormControlInput1">Nova Publicació</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="títol"  v-model="publicacio.titulo">
  </div>
  <div  class="form-group" >

    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Categoria"  v-model="publicacio.categoria">
  </div>
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Descripció"  v-model="publicacio.descipcio"></textarea>
  </div>
  <div class="form-group">
  
    <textarea  class="form-control" id="exampleFormControlTextarea1" rows="3"  placeholder="Contingut"  v-model="publicacio.contingut"></textarea>
  </div>
  <div class="custom-file">
  <input type="file">

</div>

      <button class="btn btn-lg  btn-block publica-boton" type="submit" >Publica</button>

</form>
        </div>
        </transition>
        <div class="row">
             <div class="col-lg-4 col-md-6 col-sm-12  col-xl-4 "  v-for="publi of publicacions" >
       <div class="card">
          
  <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{publi.titulo}}</h5>
     <p class="card-text">{{publi.dia}}/{{publi.mes}}/{{publi.año}}  {{publi.hora}}:{{publi.min}}h <i @click="eliminaPost(publi._id)" class="fas fa-trash-alt"></i></p>
    <p class="card-text">{{publi.descripcio}}...<router-link :to="'/post/'+publi.titulo" v-if="!sesion" ><span>lee mas</span></router-link></p>
   
  </div>
  </div>
</div>
  

   
      






</div>
        </div>
        </div>
        </div>
    </div>
</template>

<script>
class Publicacio{
    constructor(contingut,descipcio,categoria,titulo) {
       this.categoria = categoria;
    this.titulo= titulo;
    this.contingut = contingut;
 
        this.descipcio = descipcio;
    }
}
export default {
   data(){
        return{
           publicacio: new Publicacio(),
            show: false,
          publicacions:[],

           
        }
    },
      created(){
        this.getAllPublicacions();
    
    },
    methods:{
              addPublicacio(){
            
           fetch('/api/postblog',{
               method: 'POST',
               body: JSON.stringify(this.publicacio),
               headers:{
                   'Accept': 'application/json',
                   'Content-type': 'application/json'
               }
           }).then(this.$router.go(this.$router.currentRoute))

           
            
           
        },
          getAllPublicacions(){
            fetch('/api/getpublicacions')
            .then(res => res.json())
            .then(data =>{
            
                this.publicacions = data;
             this.publicacions.reverse();
         
            } )
        },
          eliminaPost(id){
             
              if(confirm("Estas segur de eliminar? No podràs recuperar aquest post")){
                console.log("EL ID ES: "+id)
                 fetch('/api/eliminarpost/'+id,{
               method: 'DELETE',
                headers:{
                   'Accept': 'application/json',
                   'Content-type': 'application/json'
               }
           }).then(this.$router.go(this.$router.currentRoute))
              }
              
   
        
        }
    }
}
</script>
