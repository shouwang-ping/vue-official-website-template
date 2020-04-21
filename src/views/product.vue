
<template>
  <div class>
    <span>产品content</span>
    <P v-for="list of lists" :key="list">{{list}}</P>
    <button @click="addLists">添加</button>
    <span>测试updata---{{flag}}</span>
    <span v-if="flag == 1">文本显示</span>
    <input type="text" v-else @click="stopInput($event)">
    <button @click="setFlag($event)">设置flag</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: 1,
      lists: [
        0,1,2
      ]
    };
  },
  methods: {
    addLists() {
      this.lists[3] = 3
      console.log(this.lists)
      this.$set(this.lists, 3, 3) // Vue.set() Vue.set(company, 'text', company.name)
    },
    setFlag(e) {
      e.stopPropagation();
      this.flag = 2
      console.log(e)
    },
    stopInput(e) {
      e.stopPropagation();
    }
  },
  created() {
    document.onclick = () => {
      this.flag = 1
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log(to);
    console.log(from);
    next(vm => {
      // 通过 `vm` 访问组件实例
      console.log(vm);
    });
  }
};
</script>

<style scoped>
</style>
