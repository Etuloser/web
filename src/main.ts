import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

// axios -.
import axios from "./utils/requests.ts";

app.provide("$axios", axios);
app.mount("#app");
