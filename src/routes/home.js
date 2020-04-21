import home from '@/views/home'
export default {
  path: '/home',
  name: 'home',
  component: home
}
function test(age) {
  console.log(age)
  var age = 10
  function age() {
    return 20
  }
  console.log(age)
}
test('age')