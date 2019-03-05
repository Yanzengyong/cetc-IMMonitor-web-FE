<template>
  <div
  class="alert-box-center"
  :style="{
    'top': `${px2rem * (Number(top) / orgClientWidth)}px`,
    'backgroundColor': loadingBg
    }"
  v-if="isShow">
    <div
    :style="{
      'width': `${px2rem * (alertWidth / orgClientWidth)}px`
    }"
    class="alert-component">
      <div
      :style="{
        'color': titleColor,
        'fontSize': `${px2rem * (titleFontSize / orgClientWidth)}px`
      }"
      class="alert-title"
      v-html="title"
      ></div>
      <div class="alert-text">
        <div
        :style="{
          'color': textOneColor,
          'fontSize': `${px2rem * (textOneFontSize / orgClientWidth)}px`,
          'height': textOneHeight ? `${px2rem * (textOneHeight / orgClientWidth)}px` : ''
        }"
        class="alert-text-one"
        v-html="textOne"
        ></div>
        <div
        :style="{
          'color': textTwoColor,
          'fontSize': `${px2rem * (textTwoFontSize / orgClientWidth)}px`
        }"
        v-if="isTextTwo"
        class="alert-text-two"
        v-html="textTwo"
        ></div>
      </div>
      <div class="alert-btn">
        <div
        :style="{
          'color': cancelTextColor,
          'fontSize': `${px2rem * (cancelTextFontSize / orgClientWidth)}px`
        }"
        v-if='isCancel'
        @click='cancelClick'
        class="alert-btn-cancel"
        >{{cancelText}}</div>
        <div
        :style="{
          'color': sureTextColor,
          'fontSize': `${px2rem * (sureTextFontSize / orgClientWidth)}px`
        }"
        @click="sureClick"
        class="alert-btn-sure"
        >{{sureText}}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.alert-box-center {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.alert-component {
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  .alert-title {
    flex: 1;
    width: 100%;
    font-family: Noto Sans S Chinese, PingFangSC_L;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
  }
  .alert-text {
    width: 100%;
    flex: 2.5;
    border-bottom: 1px solid #efefef;
    border-top: 1px solid #efefef;
    padding: 21px 34px;
    box-sizing: border-box;
    .alert-text-one {
      font-family: Noto Sans S Chinese, PingFangSC_L;
      line-height: 20px;
      text-align: center;
      overflow-y: scroll;
    }
    .alert-text-two {
      margin-top: 15px;
      font-family: Noto Sans S Chinese, PingFangSC_L;
      line-height: 20px;
      text-align: left;
    }
  }
  .alert-btn {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    .alert-btn-cancel {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px 0;
      box-sizing: border-box;
      border-right: 1px solid #efefef;
      font-family: Noto Sans S Chinese, PingFangSC_L;
    }
    .alert-btn-sure {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px 0;
      box-sizing: border-box;
      font-family: Noto Sans S Chinese, PingFangSC_L;
    }
  }
}
</style>

<script>
export default {
  name: 'alertComponent',
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
    alertWidth: {
      type: String,
      default: '270'
    },
    title: {
      type: String,
      default: '标题'
    },
    titleColor: {
      type: String,
      default: '#333'
    },
    titleFontSize: {
      type: String,
      default: '16'
    },
    textOne: {
      type: String,
      default: '文案1'
    },
    textOneHeight: {
      type: String,
      default: ''
    },
    textOneColor: {
      type: String,
      default: '#666'
    },
    textOneFontSize: {
      type: String,
      default: '15'
    },
    isTextTwo: {
      type: Boolean,
      default: false
    },
    textTwo: {
      type: String,
      default: '文案2'
    },
    textTwoColor: {
      type: String,
      default: '#dc3f28'
    },
    textTwoFontSize: {
      type: String,
      default: '12'
    },
    isCancel: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    cancelTextColor: {
      type: String,
      default: '#666'
    },
    cancelTextFontSize: {
      type: String,
      default: '16'
    },
    sureText: {
      type: String,
      default: '确定'
    },
    sureTextColor: {
      type: String,
      default: '#28c629'
    },
    sureTextFontSize: {
      type: String,
      default: '16'
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
    }
  },
  created () {},
  watch: {},
  methods: {
    cancelClick () {
      this.$emit('cancelClick')
    },
    sureClick () {
      this.$emit('sureClick')
    }
  }
}
</script>
