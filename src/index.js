// function test(name: string) {
//   console.log(name)
// }
// test('ts类型注解')
import Vue from 'vue';
import App from './App.vue';
import router from './router'
new Vue({
  data: {
    message: 'Hello Vue!'
  },
  router,
  render: h => h(App)
}).$mount("#app")