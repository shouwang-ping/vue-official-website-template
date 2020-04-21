
<template>
  <div id="app">
    <span>{{msg}}</span>
    <span @click="goPage(1)">到首页</span>
    <span @click="goPage(2)">到产品</span>
    <!-- <span>{{ping.name}}112</span> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      msg: '公共内容'
    }
  },
  computed: {
    ...mapState({
      ping: "userInfo",
      plists: "lists"
    }),
    num() {
      return 1 + 1;
    }
  },
  methods: {
    goPage(num) {
      if(num == 1) {
        this.$router.push({
          name: 'home'
        })
      } else {
        this.$router.push({
          name: 'product'
        })
      }
    }
  },
  async mounted() {
    $https.defaults.baseURL = "http://localhost:5000"
    $https.interceptors.response.use((res) => {
        return res.data
    })
    let aa = await $https.get('/test')
    console.log(aa, 'sdfs')
  },
  created() {
    // let params = {
    //   id: 1
    // }
    // this.$axios.get('/').then((res) => {
    //   consol.log(res, '数据')
    // })

    // let ss = mapState({
    //   ping: "userInfo",
    //   plists: "lists"
    // });
    // let cc = {
    //   ...mapState({
    //     ping: "userInfo",
    //     plists: "lists"
    //   })
    // };
    // console.log(ss);
    // console.log(cc);
    // 模板方法
    // this.$store.dispatch("getInfo", value => {
    //   this.$emit("add", value); // 触发父组件方法
    // });
    // this.$store.dispatch(updateAddress, {
    // //   address: this.address,
    //   success() {
    //     // $.hideIndicator();
    //     // self.$router.back();
    //   },
    //   fail() {
    //     // $.toast("添加错误请稍后");
    //   }
    // });
  }
};
</script>

<style scoped>
</style>
