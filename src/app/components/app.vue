<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div class="container">
  <a class="navbar-brand" ><router-link :to="{ name: 'home'}">lauracc</router-link></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
       
         
     
        </div>
        </div>
    </div>
</template>
