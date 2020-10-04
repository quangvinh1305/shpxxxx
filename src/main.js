import Vue from 'vue'
import App from './App.vue'
import VueCarousel from './components/Carousel'
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
