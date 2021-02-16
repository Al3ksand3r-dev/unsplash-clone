import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/main.scss";

const resetURL = () => {
  router.push({ name: "Home" });
};

createApp(App)
  .use(store)
  .use(router)
  .use(resetURL)
  .mount("#app");
