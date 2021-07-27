import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "normalize.css";

import Vue from 'vue/dist/vue.js';
export const EventBus = new Vue();

createApp(App).use(store).use(router).mount("#app");
