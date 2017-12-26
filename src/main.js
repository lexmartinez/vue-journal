// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueMoment from 'vue-moment'
import SocialSharing from 'vue-social-sharing'
import VueClipboard from 'vue-clipboard2'

import('vuetify/dist/vuetify.min.css')

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueMoment)
Vue.use(SocialSharing)
Vue.use(VueClipboard)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
