<template>
    <div class="page">
    
        <div class="page-login">
        <div class="container">
            <div class="row row_login" v-if="!sesion">
                <div class="col-md-12 col-lg-4 col-sm-12 col-12"></div>
                 <div class="col-md-12 col-lg-4 col-sm-12 col-12  login_col text-center">
<form @submit.prevent="login" >
  <div class="form-group">
    <label for="exampleInputEmail1"><i class="fas fa-user"></i></label>
    <input  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" v-model="admin.user">
  </div>
  <div class="form-group">
   <label for="exampleInputEmail1"><i class="fas fa-unlock"></i></label>
    <input  type="password" class="form-control" id="exampleInputPassword1" placeholder=""  v-model="admin.password">
  </div>

  <button type="submit" class="btn btn-primary">Inicia</button>
</form>
</div>
 <div class="col-md-12 col-lg-4 col-sm-12 col-12"></div>
</div>
      <div class="row row_login" v-else>
                <div class="col-md-12 col-lg-4 col-sm-12 col-12"></div>
                 <div class="col-md-12 col-lg-4 col-sm-12 col-12  login_col text-center">
<h1>Benvinguda Laura</h1>
</div>
 <div class="col-md-12 col-lg-4 col-sm-12 col-12"></div>
</div>
    </div>
    </div>
    </div>
</template>

<script>

class Admin{
    constructor(user,password) {
       this.user = user;
    this.password= password;
    
    }
}

export default {
    data(){
        return{
            admin: new Admin(),
         
        }
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
   
    methods:{
       
        login(){
            
           fetch('/api/login',{
               method: 'POST',
               body: JSON.stringify(this.admin),
               headers:{
                   'Accept': 'application/json',
                   'Content-type': 'application/json'
               }
           }).then((response)=>{
               console.log(this.admin);
               if (response.status === 200 ) {
              console.log("sesion good");
              this.$session.start();
              console.log(this.$session);
              
              this.$router.go(this.$router.currentRoute)
            }

           });

           
            
           
        },
        
    
     
    }
}
</script>
