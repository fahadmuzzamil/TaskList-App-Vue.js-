import {createRouter, createWebHistory} from 'vue-router';
import AppHome from '../views/Home' ;
import AppAbout from '../views/About' ;

const routes= [
    {
     path: "/",
     name: "home",
     component: AppHome,
     props: true
    },
    {
     path: "/about",
     name: "about",
     component: AppAbout,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;