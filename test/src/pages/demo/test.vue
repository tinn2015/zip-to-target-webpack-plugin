<template lang="pug">
.demo-page
  h2 离线包测试h5 0.0.3(1227)
  h3 本地图片
  img(src="../../assets/logo.png")
  h3 外部图片
  img(src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg")
  h3(@click="getData") 点我发请求
  h3(@click="goPage2") 点我跳页面2
</template>
<script>

export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    async getData() {
      const { data } = await window.axios.post('https://fat-rapi.hellobike.com/api?rent.user.getGlobalConfigInfo', {
        "from": "h5",
        "systemCode": "61",
        "platform": "61",
        "apiVersion": "1.31.0",
        "systemInfo": "",
        "adCode": "310112",
        "cityCode": "021",
        "token": "7af0dac7d46a4648bc0165e9eedd6e06",
        "ticket": "MTU4MjA5Mzg5Ng==.LP6GDVKkFYXA8r/M9Tbad991RPYzZvSrf1IfYVURfjs=",
        "action": "rent.user.getGlobalConfigInfo"
    })
      // eslint-disable-next-line
      alert(JSON.stringify(data));
    },
    goPage2() {
      this.$router.push('/demo2');
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
