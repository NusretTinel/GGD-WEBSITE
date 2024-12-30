// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Anasayfa from '@/components/Pages/MainPage.vue';
import Contact from '@/components/Pages/ContactUs.vue';
import Join from '@/components/Pages/Join.vue';
import About from '@/components/Pages/AboutUs.vue';
import Projects from '@/components/Pages/Projects.vue';


const routes = [
    { path: '/', component: Anasayfa },
    { path: '/contact', component: Contact },
    { path: '/join', component: Join },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/projects/erasmus', component: Projects }, // Erasmus için örnek
    { path: '/projects/horizon', component: Projects }, // Horizon 2020 için örnek


    // { path: '/content/:id', name: 'ContentPage', component: ReferenceInPage, props: true }
];

const router = createRouter({

    history: createWebHistory(),
    routes,
});

export default router;
