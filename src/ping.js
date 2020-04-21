import Vue from 'vue';
import App from './App.vue';
import router from './routes';
// import store from './store';
// import axios from 'axios';
// axios.defaults.baseURL = "http://localhost:5000"
// axios.interceptors.response.use((res) => {
//     return res.data
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
