<template>
  <div>
    <div>
      <span @click="jump(1)">首页</span>
      <span @click="jump(2)">登录</span>
      <span @click="jump(3)">关于页面</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    methods: {
      jump(num) {
        let path = null;
        if(num == 1) {
          path = '/'
        } else if(num == 2) {
          path = '/login'
        } else if(num == 3) {
          path = '/about'
        }
        this.$router.push({
          path: path
        })
      }
    }
  };
</script>

<style scoped>
</style>