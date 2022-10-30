import * as Vue from 'vue';
// Official documentation -> https://router.vuejs.org/guide/#html
import * as  VueRouter from 'vue-router';

// Import defined Views
import App from "@/App";
import HomeView from "@/views/HomeView";


// Here we will define all the routes
const routes = [
    {path: '/', name: "HomeRoute", component: HomeView},

    // Add the missing paths to views and components

    // '/subscription'
    // '/subscription/success'
    // '/order-online'
    // '/order-online/checkout'


    // add not Found path: '*' -> at the end
];

// Create the object router, add pass the routes above
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

// Add router to the Vue instance
const app = Vue.createApp(App);
app.use(router);
app.mount('#app');