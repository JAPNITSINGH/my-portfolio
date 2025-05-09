import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';

createApp(App).mount('#app')
AOS.init({
    duration: 2000,     // animation duration in ms
    once: false,         // only animate once
    easing: 'ease-out', // easing function
  });
