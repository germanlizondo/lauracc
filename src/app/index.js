import Vue from 'vue';
import VueRouter from 'vue-router';



import app from './components/app.vue';
import activitats from './components/activitats.vue';
import biografia from './components/biografia.vue';
import blog from './components/blog.vue';
import contacte from './components/contacte.vue';
import espai from './components/espai.vue';
import home from './components/home.vue';
import ip from './components/ip.vue';
import admin from './components/admin.vue';
import post from './components/post.vue';

import VueSession from 'vue-session';

var options = {
    persist: true
}

Vue.use(VueRouter)
Vue.use(VueSession, options)

const routes = [
    {path:'/',name: 'home', component: home},
    {path:'/activitats', name: 'activitats',component: activitats},
    {path:'/integralpresence',name: 'ip', component: ip},
    {path:'/espai',name: 'espai', component: espai},
    {path:'/blog', name: 'blog',component: blog},
    {path:'/biografia',name: 'biografia', component: biografia},
    {path:'/contacte',name: 'contacte', component: contacte},
    {path:'/admin',name: 'admin', component: admin},
    {path:'/post/:name',component: post}
];

const router = new VueRouter({
    
    routes,   
})
new Vue({
    el: '#app',
    router,
    render: h => h(app)
}).$mount('#app');