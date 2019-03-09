<template>
  <div v-if="responseStyle === 'left' && type === 'Text'" class="response-chat">
    <img :src="require('../../assets/images/toux1.jpeg')" alt="">
    <div class="chat-left">
      <p>{{ content }}</p>
      <span v-show="isDanger">
        <a
          v-for="(item, index) in detectedArr"
          :key="index"
          :title="formatTipContent(item.result_label)"
          :style="{backgroundColor: formatTipBg(item.result_label)}">
          {{ formatTip(item.result_label) }}
        </a>
      </span>
    </div>
  </div>
  <div v-else-if="responseStyle === 'right' && type === 'Text'"  class="send-chat">
    <div class="chat-right">
      <p>{{ content }}</p>
      <span v-show="isDanger">
        <a
          v-for="(item, index) in detectedArr"
          :key="index"
          :title="formatTipContent(item.result_label)"
          :style="{backgroundColor: formatTipBg(item.result_label)}">
          {{ formatTip(item.result_label) }}
        </a>
      </span>
    </div>
    <img :src="require('../../assets/images/toux2.jpg')" alt="">
  </div>
  <div v-else-if="responseStyle === 'left' && type === 'Audio'" class="response-audio-chat">
    <div class="audio-chat-box-left">
      <img :src="require('../../assets/images/toux1.jpeg')">
      <div
        @click='playAudioFn'
        class="chat-left">
        <span v-show="isDanger">
          <a
            v-for="(item, index) in detectedArr"
            :key="index"
            :title="formatTipContent(item.result_label)"
            :style="{backgroundColor: formatTipBg(item.result_label)}">
            {{ formatTip(item.result_label) }}
          </a>
        </span>
        <Icon :icon='leftAudioPlay'/>
        <b>{{ countTime }}s</b>
      </div>
    </div>
    <div class="audioText-left">
      <p>{{ content }}</p>
    </div>
  </div>
  <div v-else-if="responseStyle === 'right' && type === 'Audio'" class="send-audio-chat">
    <div class="audio-chat-box-right">
      <div
        @click='playAudioFn'
        class="chat-right">
        <span v-show="isDanger">
          <a
            v-for="(item, index) in detectedArr"
            :key="index"
            :title="formatTipContent(item.result_label)"
            :style="{backgroundColor: formatTipBg(item.result_label)}">
            {{ formatTip(item.result_label) }}
          </a>
        </span>
        <b>{{ countTime }}s</b>
        <Icon :icon='rightAudioPlay'/>
      </div>
      <img :src="require('../../assets/images/toux2.jpg')">
    </div>
    <div class="audioText-right">
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-left, .chat-right{
  font-size: 15px;
  min-height: 40px;
  position: relative;
  top: 0;
  text-align: left;
  border-radius: 5px;
  padding: 8px 10px;
  max-width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.chat-left {
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
}
.chat-right{
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #9EEA6A;
}
.chat-left:before, .chat-right:after{   /*用伪类写出小三角形*/
  content: '';
  display: block;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  position: absolute;
  top: 11px;
}
.chat-left:before{
  border-right: 8px solid #fff;
  left: -16px;
}
.chat-right:after{
  border-left: 8px solid #9EEA6A;
  right: -16px;
}
img{
  width: 40px;
  height: 40px;
  position: relative;
  top: 0;
}
.response-chat{
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  img{
    left: 0;
  }
  .chat-left{
    position: relative;
    span{
      width: 100px;
      max-height: 40px;
      overflow: scroll;
      position: absolute;
      right: -110px;
      top: 0px;
      color: #fff;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      a{
        width: 16px;
        height: 16px;
        background-color: #ff0000;
        border-radius: 50%;
        margin-right: 4px;
        margin-bottom: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
      }
    }
  }
}
.send-chat{
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  img{
    right: 0;
  }
  .chat-right{
    position: relative;
    span{
      width: 100px;
      max-height: 40px;
      overflow: scroll;
      position: absolute;
      left: -110px;
      top: 0px;
      color: #fff;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-wrap: wrap;
      a{
        width: 16px;
        height: 16px;
        background-color: #ff0000;
        border-radius: 50%;
        margin-left: 4px;
        margin-bottom: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
      }
    }
  }
}
.audioText-left, .audioText-right{
  width: 100%;
  margin-top: 5px;
  font-size: 12px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  p{
    background: #fff;
    position: relative;
    padding: 8px;
    max-width: 220px;
    text-align: left;
  }
}
.response-audio-chat{
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .audio-chat-box-left{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .chat-left{
      min-width: 100px;
      position: relative;
      cursor: pointer;
      span{
        width: 100px;
        max-height: 40px;
        overflow: scroll;
        position: absolute;
        right: -110px;
        top: 0px;
        color: #fff;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        a{
          width: 16px;
          height: 16px;
          background-color: #ff0000;
          border-radius: 50%;
          margin-right: 4px;
          margin-bottom: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
      }
      b{
        font-size: 14px;
        font-weight: normal;
      }
    }
  }
  .audioText-left{
    p{
      left: 57px;
    }
  }
}
.send-audio-chat{
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  .audio-chat-box-right{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .chat-right{
      min-width: 100px;
      position: relative;
      cursor: pointer;
      span{
        width: 100px;
        max-height: 40px;
        overflow: scroll;
        position: absolute;
        left: -110px;
        top: 0px;
        color: #fff;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        a{
          width: 16px;
          height: 16px;
          background-color: #ff0000;
          border-radius: 50%;
          margin-left: 4px;
          margin-bottom: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
      }
      b{
        font-size: 14px;
        font-weight: normal;
      }
    }
  }
  .audioText-right{
    p{
      right: 57px;
    }
  }
}
</style>

<script>
import Icon from '../iconComponent'
export default {
  name: 'weChatNewsComponent',
  data () {
    return {
      leftAudioPlay: 'icon-goutongye_yuyin_you_00',
      rightAudioPlay: 'icon-goutongye_yuyin_zuo_00'
    }
  },
  components: {
    Icon
  },
  props: {
    // 左右样式判断
    responseStyle: {
      type: String
    },
    // 消息类型
    type: {
      type: String,
      default: 'Text'
    },
    // 消息内容 文字消息/语音翻译消息
    content: {
      type: String,
      default: ''
    },
    // 涉嫌的词汇tip数组
    detectedArr: {
      type: Array,
      default: []
    },
    // 图片地址或者音频地址
    fileUrl: {
      type: String
    },
    countTime: {
      type: String,
      default: '--'
    },
    isDanger: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    playAudioFn () {
      this.$emit('click', this.fileUrl)
    },
    formatTipContent (id) {
      switch (id) {
        case 1: return '色情'
        case 2: return '性感'
        case 3: return '暴恐'
        case 4: return '恶心'
        case 5: return '水印码'
        case 6: return '二维码'
        case 7: return '条形码'
        case 8: return '政治人物'
        case 9: return '敏感词'
        case 11: return '暴恐违禁'
        case 12: return '文本色情'
        case 13: return '政治敏感'
        case 14: return '恶意推广'
        case 15: return '低俗辱骂'
        case 16: return '低质灌水'
      }
    },
    formatTip (id) {
      switch (id) {
        case 1: return '色'
        case 2: return '性'
        case 3: return '暴'
        case 4: return '恶'
        case 5: return '水'
        case 6: return '二'
        case 7: return '条'
        case 8: return '政'
        case 9: return '敏'
        case 11: return '暴'
        case 12: return '色'
        case 13: return '政'
        case 14: return '恶'
        case 15: return '骂'
        case 16: return '水'
      }
    },
    formatTipBg (id) {
      switch (id) {
        case 1: return '#f9dd15'
        case 2: return '#f99315'
        case 3: return '#f91515'
        case 4: return '#58f915'
        case 5: return '#1590f9'
        case 6: return '#1590f9'
        case 7: return '#1590f9'
        case 8: return '#171615'
        case 9: return '#ea5b17'
        case 11: return '#f91515'
        case 12: return '#f9dd15'
        case 13: return '#171615'
        case 14: return '#58f915'
        case 15: return '#ea7817'
        case 16: return '#e8e45c'
      }
    }
  }
}
</script>
