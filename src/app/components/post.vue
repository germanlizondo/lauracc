<template>
    <div>
<br><br><br><br><br>
<div class="container post-titulo ">
            <h1 class="text-left "  style="color:black">{{post.titulo}}</h1>
    <p class="">{{post.dia}}/{{post.mes}}/{{post.año}}  {{post.hora}}:{{post.min}}h</p>
</div>

<img :src="'./img/snow.jpg'" class="img-fluid" alt="Responsive image">

    <div class="container post-cuerpo ">    
    <p>{{post.cuerpo}}</p>




</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:this.$route.params.name,
            post:{}
        }
    },
    created(){
         this.getPost(this.name);
          
    },
    methods:{
          getPost(name){
      
            fetch('/api/post/'+name)
            .then(res => res.json())
            .then(data =>{
             
                this.post = data;
    console.log("HOLAAAAAAAA: "+this.post);
           
            } )
        }
    }
}
</script>
