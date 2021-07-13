// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import plugins from './components/index'
import './style/style.css'
import './style/style.styl'
import './iconfont/iconfont.css'
import Global from './global/global'
import './iconfont/iconfont'
// import './style/style.sass';

Vue.prototype.global=Global
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(plugins);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
