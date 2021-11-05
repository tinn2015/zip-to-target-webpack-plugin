<template lang="pug">
.demo-page
  h2 测试页面2(1227)
  img(src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg")
  h3(@click="goPage1") 点我返回页面1
</template>
<script>

export default {
  data() {
    return {
      list: [],
      data: null,
    };
  },
  mounted() { document.dispatchEvent(new Event('render-event')); },
  methods: {
    async goPage1() {
      this.$router.push('/demo');
    }
  }
};
</script>

<style scoped>
.demo-page{
  text-align: center;
  margin: 50px auto;
}
img {
  width: 140px;
  display: block;
  margin: 10px auto;
}
</style>
