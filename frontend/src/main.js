import { createApp } from "vue";
import App from "./App.vue";

import "./style.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";

const app = createApp(App);
app.use(BootstrapIconsPlugin);
app.mount("#app");
