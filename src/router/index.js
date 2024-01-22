import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CategoryView from '../views/CategoryView.vue';
import ExperienceView from '../views/ExperienceView.vue';
import ContactView from '../views/ContactView.vue'; 
import AboutUsView from '../views/AboutUsView.vue'; 
import ThankYouView from '../views/ThankYouView.vue'; 
import TheLogin from '../views/TheLogin.vue';
import TheRegister from '../views/TheRegister.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/category/:slug', name: 'category', component: CategoryView, props: true },
  { path: '/experience/:slug', name: 'experience', component: ExperienceView, props: true },
  { path: '/login', name: 'login', component: TheLogin },
  { path: '/register', name: 'register', component: TheRegister },
  { path: '/aboutUs', name: 'AboutUs', component: AboutUsView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/thankYou', name: 'ThankYou', component: ThankYouView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
