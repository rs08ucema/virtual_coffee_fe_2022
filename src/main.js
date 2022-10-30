import * as Vue from 'vue';
// Official documentation -> https://router.vuejs.org/guide/#html
import * as  VueRouter from 'vue-router';

// Import defined Views
import HomeView from "@/views/HomeView";
import App from "@/App";
// import NotFound from "@/views/NotFound";


// Here we will define all the routes
const routes = [
    {path: '/', component: HomeView},

    // { path: '*', component: NotFound }
]

// Create the object router, add pass the routes above
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

// Add router to the Vue instance
Vue.createApp(App)
    .use(router)
    .mount('#app');