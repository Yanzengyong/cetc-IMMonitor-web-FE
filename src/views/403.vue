<template>
  <div class="netWrokError">
    <img class="netWrokErrorMK" :src="netWrokErrorIcon" alt="">
    <h3>{{netWrokErrorTit}}</h3>
    <p class="netWrokErrorTxt" v-html="netWrokErrorTxt"></p>
    <p>自动跳转----倒计时[ <span>{{countTime}}</span> ]s</p>
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
  p{
    color: #00b5b7;
    font-size: 16px;
    padding: 10px 0 20px;
    span{
      color: #666;
    }
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
    padding: 8px 0;
  }
}
</style>
<script>
export default {
  data () {
    return {
      netWrokErrorIcon: require('../assets/images/error001.gif'),
      netWrokErrorTit: '无此访问权限',
      netWrokErrorTxt: '您当前没有登录, 手动点击前往登陆',
      netWrokErrorBtnOne: '登陆',
      countTime: 5
    }
  },
  created () {

  },
  mounted () {
    document.title = '403'
    this.countTimeFn()
  },
  methods: {
    countTimeFn () {
      let timer = setInterval(() => {
        if (this.countTime === 0) {
          clearTimeout(timer)
          this.$router.push({path: '/login'})
          return
        }
        this.countTime--
      }, 1000)
    },
    rest () {
      this.$router.push({path: '/login'})
    }
  }
}
</script>
