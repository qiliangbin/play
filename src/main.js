import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
// import axios from 'axios'
// import './main.scss'

import './assets/icon/iconfont.css'
Vue.config.productionTip = false


require('swiper/dist/css/swiper.css');
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
