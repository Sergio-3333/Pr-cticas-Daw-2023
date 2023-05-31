import Vue from 'vue'
import App from './App.vue'
import * as GmapVue from 'gmap-vue'

Vue.config.productionTip = false

Vue.use(GmapVue, {
  load: {
    key: 'AIzaSyD5y_nOVdvcVYYb0DxYKwwRnLp7AeXCPa0',
    libraries: 'places',
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
