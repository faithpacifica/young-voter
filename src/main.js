import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import "../index.css";
import { createI18n } from "vue-i18n";
import ElementPlus from "element-plus";
import VueLottiePlayer from "vue-lottie-player";
import VueTheMask from "vue-the-mask";
import "element-plus/dist/index.css";
import uz from "@/lang/uz.js";
import en from "@/lang/en.js";
import ru from "@/lang/ru.js";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const app = createApp(App);

const i18n = createI18n({
  locale: "uz",
  fallbackLocale: "en",
  messages: {
    uz,
    en,
    ru,
  },
});

app.use(AOS);
app.use(i18n);
app.use(ElementPlus);
app.use(router);
app.use(VueLottiePlayer);
app.mount("#app");
app.use(VueTheMask);
