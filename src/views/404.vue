<template>
  <div class="netWrokError">
    <img class="netWrokErrorMK" :src="netWrokErrorIcon" alt="">
    <h3>{{netWrokErrorTit}}</h3>
    <p class="netWrokErrorTxt" v-html="netWrokErrorTxt"></p>
    <div class="errorBtn" @click="rest">{{netWrokErrorBtnOne}}</div>
  </div>
</template>
<style lang="scss">
.netWrokError {
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  h3 {
    font-size: 22px;
  }
  img {
    width: 70%;
  }
  .netWrokErrorTxt {
    color: #00b5b7;
    font-size: 16px;
    padding: 20px 0;
  }
  .errorBtn {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: #00b5b7;
    font-size: 16px;
    border-radius: 40px;
    padding: 13px 0;
  }
}
</style>
<script>
export default {
  data () {
    return {
      netWrokErrorIcon: require('../assets/images/error002.gif'),
      netWrokErrorTit: '网页出错！',
      netWrokErrorTxt: '很抱歉，无法找到此页面',
      netWrokErrorBtnOne: '返回首页'
    }
  },
  created () {

  },
  methods: {
    rest () {
      this.$router.push({path: '/'})
    }
  },
  mounted () {
    document.title = '404'
  }
}
</script>
