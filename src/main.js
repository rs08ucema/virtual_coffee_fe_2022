import * as Vue from 'vue';
// Official documentation -> https://router.vuejs.org/guide/#html
import * as  VueRouter from 'vue-router';

// Import defined Views
import App from "@/App";
import HomeView from "@/views/HomeView";
import Subscription from "@/components/Subscription";
import SubscriptionSuccess from "@/components/SubscriptionSuccess";
import OrderOnlineView from "@/views/OrderOnlineView";
import NotFound from "@/components/NotFound";


// Here we will define all the routes
const routes = [
    {path: '/', name: "HomeRoute", component: HomeView},
    {path: '/subscription', name: "SubscriptionRoute", component: Subscription},
    {path: '/subscription/success', name: "SubSuccessRoute", component: SubscriptionSuccess},
    {path: '/order-online', name: "OrderOnlineRoute", component: OrderOnlineView},


    {path: '/:pathMatch(.*)*', component: NotFound}
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