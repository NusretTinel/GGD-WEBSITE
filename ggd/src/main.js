import '@babel/polyfill'
import 'mutationobserver-shim'

// main.js
import { createApp } from 'vue';
import App from './App.vue';




import router from '@/router/router';
// import VueGtag from "vue-gtag";
import i18n from './i18n';

const app = createApp(App);


app.use(i18n);
app.use(router);

// app.use(VueGtag, { config: { id: "G-VRWLSVSQCV" } });
app.mount("#app");
