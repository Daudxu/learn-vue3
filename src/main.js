import { createApp } from 'vue';
import './style.css';
import 'normalize.css/normalize.css'
import App from './App.vue';
import store from "./store";
import router from "./router/index";
const app = createApp(App);
app.use(store) ;
app.use(router) ;
app.mount('#app');
