import { createApp } from "vue";
import router from "./router";
import store from "./store";
import "./style.css";
import App from "./App.vue";
import * as filters from "./filters";
import stores from "./stores";

const app = createApp(App);
app.use(router).use(store).use(stores).mount("#app");

app.config.globalProperties.$filters = filters;
