import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueQuillEditor from 'vue-quill-editor'


import '@/assets/_template/css/light.css'
import '@/assets/_template/js/app.js'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

Vue.config.productionTip = false;
Vue.use(VueQuillEditor)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
