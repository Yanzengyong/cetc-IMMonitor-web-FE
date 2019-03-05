<template>
  <div class="loading-box-center" :style="{
    'top': `${px2rem * (Number(top) / orgClientWidth)}px`,
    'backgroundColor': loadingBg
    }" v-if="isShow">
    <div class="loading-component" :class="{'loading-component-shadow':shadow} ">
      <img src="../../assets/images/loading.gif" alt="">
      <div class="text" v-html="text"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../style/_include/_all.scss';
.loading-box-center {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 900;
}
.loading-component-shadow {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}
.loading-component {
  background: #fff;
  border-radius: 7px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 30px;
    margin-bottom: 16px;
  }
  .text {
    font-family: Noto Sans S Chinese, PingFangSC_L;
    font-size: 14px;
    color: #999;
  }
}
</style>

<script>
export default {
  name: 'loadingComponent',
  data () {
    return {
      px2rem: document.documentElement.clientWidth / 10
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: 'loading...'
    },
    top: {
      type: String,
      default: '0'
    },
    orgClientWidth: {
      type: Number,
      default: 37.5
    },
    loadingBg: {
      type: String,
      default: 'rgba(0, 0, 0, .3)'
    },
    shadow: {
      type: Boolean,
      default: true
    }
  },
  created () {},
  watch: {},
  methods: {}
}
</script>
