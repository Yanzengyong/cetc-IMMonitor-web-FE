<template>
  <div class="container">
    <div class="header">
      <div></div>
      <!--<h3>通讯软件群组监管分析系统</h3>-->
    </div>
    <!--左边栏布局-->
    <div class="left">
      <LeftPage ref="leftPage"></LeftPage>
    </div>
    <!--中间布局-->
    <div class="center">
      <CenterPage ref="centerPage"></CenterPage>
    </div>
    <!--右边布局-->
    <div class="right">
      <RightPage ref="rightPage"></RightPage>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container{
    height: 100vh;
    width: 100vw;
    position: relative;
    background: url('../../assets/images/home_bg.jpg') no-repeat;
    background-color: rgba(13, 42, 67, 0);
    transform: scale(1);
    transform-origin: left top;
    background-size: cover;
    font-family: 'Microsoft Yahei';
    color: #ffffff;
    overflow: hidden;
    .header{
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      justify-content: center;
      padding: 0 20px;
      height: 96px;
      background: url(../../assets/images/home_header.png) no-repeat;
      background-size: 100% 100%;
      >div{
        width: 21.8vw;
        height: 28px;
        background: url(../../assets/images/home_font.png) no-repeat;
        background-size: 100% 100%;
        position: relative;
        bottom: 6px;
      }
    }
    .left, .right {
      position: absolute;
      bottom: 20px;
      top:85px;
      width: 24.8vw;
    }
    .left {
      left: 1.15vw;
      padding: 36px 0 20px 20px;
    }
    .center{
      width: 44.98vw;
      position: absolute;
      left: 27.51vw;
      bottom: 20px;
      top:105px;
    }
    .right {
      right: 1.15vw;
    }

  }
</style>

<script>
  import LeftPage from './component/LeftPage/index.vue'
  import RightPage from './component/RightPage/index.vue'
  import CenterPage from './component/CenterPage/index.vue'

  export default {
    data () {
      return {

      }
    },
    components: {
      LeftPage,
      RightPage,
      CenterPage
    },
    mounted () {
      // 窗口监听事件 监听echarts图例随窗口大小自适应变化
      window.onresize = () => {
        this.$refs.leftPage.outRule()
        this.$refs.centerPage.countyMap()
        this.$refs.centerPage.outMessage()
        this.$refs.rightPage.wordCloudBar()
        this.$refs.rightPage.wordCloud()
      }
    }
  }
</script>
