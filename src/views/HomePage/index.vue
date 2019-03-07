<template>
  <div class="container">
    <div class="header">
      <div></div>
      <!--<h3>通讯软件群组监管分析系统</h3>-->
    </div>
    <div class="left">
      <LeftPage></LeftPage>
    </div>
    <div class="center">
      <CenterPage></CenterPage>
    </div>
    <div class="right">
      <RightPage></RightPage>
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
    background-size: 100%;
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
    beforeCreate () {
      console.log('breforeCreate')
    },
    created () {
      console.log('created')
    },
    beforeMount () {
      console.log('beforeMount')
    },
    mounted () {
      console.log('mounted')
    },
    beforeUpdate () {
      console.log('beforeUpdate')
    },
    updated () {
      console.log('updated')
    },
    activated () {
      console.log('activated')
    },
    deactivated () {
      console.log('deactivated')
    },
    beforeDestroy () {
      console.log('beforeDestroy')
    },
    destroyed () {
      console.log('destroyed')
    }
  }
</script>
