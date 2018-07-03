<template>
    <div>
  <nav id="mySidenav" class="sidenav">
  
 
<div class="text-center container texto_sidenav">
        <a  onclick="closeNav()" class="nav-link" ><router-link :to="{ name: 'activitats'}">Activitats</router-link></a>


        <a  onclick="closeNav()" class="nav-link"><router-link :to="{ name: 'ip'}">Integral Presence</router-link></a>
        <a  onclick="closeNav()" class="nav-link"><router-link :to="{ name: 'espai'}">Espai</router-link></a>
        <a  onclick="closeNav()" class="nav-link" ><router-link :to="{ name: 'blog'}">Blog</router-link></a>
                <a  onclick="closeNav()" class="nav-link" ><router-link :to="{ name: 'biografia'}">Biografia</router-link></a>
        <a  onclick="closeNav()" class="nav-link"><router-link :to="{ name: 'contacte'}">Contacte</router-link></a>
<p class="nav-link" v-if="sesion">Benvinguda Laura &nbsp; <i  class="fas fa-sign-in-alt" v-on:click="logout()"></i></p>       </li>

</div>
</nav>

        <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div class="container">
  <a onclick="closeNav()" class="navbar-brand" ><router-link :to="{ name: 'home'}">lauracc</router-link></a>
  <button id="hamburguer" class="navbar-toggler" type="button" onclick="openNav()" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="icon-bar top-bar"></span>
          <span class="icon-bar middle-bar"></span>
          <span class="icon-bar bottom-bar"></span>
          <span class="sr-only">Toggle navigation</span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto order-0">
     
      <li class="nav-item list-responsive">
        <a class="nav-link" ><router-link :to="{ name: 'activitats'}">Activitats</router-link></a>
      </li>
      <li class="nav-item list-responsive">
        <a class="nav-link"><router-link :to="{ name: 'ip'}">Integral Presence</router-link></a>
      </li>
      <li class="nav-item list-responsive">
        <a class="nav-link"><router-link :to="{ name: 'espai'}">Espai</router-link></a>
      </li>
      <li class="nav-item list-responsive">
        <a class="nav-link" ><router-link :to="{ name: 'blog'}">Blog</router-link></a>
      </li>
     <li class="nav-item list-responsive">
        <a class="nav-link" ><router-link :to="{ name: 'biografia'}">Biografia</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link :to="{ name: 'contacte'}">Contacte</router-link></a>
      </li>
     
    </ul>
    <a class="navbar-brand" v-if="sesion">Benvinguda Laura &nbsp; <i  class="fas fa-sign-in-alt" v-on:click="logout()"></i></a>    

  </div>
  </div>
</nav>
<transition name="router-anim"     enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"  mode="out-in">
 <router-view></router-view>
</transition>
    <div class="footer">
          <div class="container text-center">
            
          
             
                
     
    <h4>Copyright © lauracc 2018</h4>
       
         <router-link :to="{ name: 'admin'}" v-if="!sesion" ><i class="fas fa-user"></i></router-link> 
   
        </div>
        </div>
    </div>
</template>

<script>



export default {
    data(){
        
          
           sesion: false
      
    }, 
    created(){
    
    },
     beforeCreate: function () {
    if (!this.$session.exists()) {
      console.log("No existe");
      this.sesion = false;
       console.log("SESION: "+this.sesion);
    }else{
      console.log("si existe");
       this.sesion = true;
       console.log("SESION: "+this.sesion);
    }
  },
    methods: {
    logout: function () {
     this.$session.destroy()
     this.$router.go(this.$router.currentRoute)
         }
  }
   
}
</script>
