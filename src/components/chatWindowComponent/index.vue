<template>
  <div class="chat-window-container">
    <div class="chat-header">
      <span>一群帅哥哈哈群</span>
    </div>
    <div class="chat-content">
      <div class="chat-inner-container">
        <div class="content">
          <ul>
            <li>
              <WeChatMessage responseStyle='left'/>
            </li>
            <li>
              <WeChatMessage responseStyle='left'/>
            </li>
            <li >
              <WeChatMessage responseStyle='right'/>
            </li>
            <li >
              <WeChatAudio responseStyle='left'/>
            </li>
            <li >
              <WeChatAudio responseStyle='right'/>
            </li>
          </ul>
        </div>
     </div>
    </div>
    <!-- 原生音频文件 -->
    <div class="originalAudio">
      <audio
        ref='audioEl'
        autobuffer
        controls="controls"
        id="myAudio"
        @canplaythrough="oncanplaythrough">
        <source
          :src="source"
          type="audio/mpeg">
      </audio>
    </div>
    <div class="chat-input-box">
      <textarea v-model="introduct" placeholder="Add a bio to your profile"></textarea>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-window-container{
  width: 100%;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, .3);
  border-radius: 6px;
  .chat-header{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    box-sizing: border-box;
    padding: 0 20px;
    span{
      font-size: 16px;
      color: #333;
    }
  }
  .chat-content{
    width: 100%;
    height: 360px;
    position: relative;
    overflow: hidden;
    .chat-inner-container{
      position: absolute;
      left: 0;
      top: 0;
      overflow-x: hidden;
      overflow-y: scroll;
      width: 100%;
      background-color: #f3f3f3;
      .content{
        width: 100%;
        height: 360px;
        padding: 0 20px;
        box-sizing: border-box;
        ul{
          width: 100%;
          li{
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: 10px;
            position: relative;
            &:last-child{
              padding-bottom: 10px;
            }
          }
        }
      }
    }
     /* for Chrome */
    .inner-container::-webkit-scrollbar {
        display: none;
    }
  }
  .originalAudio{
    width: 0;
    height: 0;
    audio{
      width: 0;
      height: 0;
    }
  }
  .chat-input-box{
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, .3);
    height: 90px;
    box-sizing: border-box;
    textarea{
      width: 100%;
      height: 100%;
      padding: 10px;
      box-sizing: border-box;
      border: none;
      background-color: #f3f3f3;
      font-size: 14px;
      outline: none;
      resize: none;
      border-radius: 0 0 6px 6px;
    }
  }
}
</style>

<script>
import Icon from '../iconComponent'
import WeChatAudio from '../weChatAudioComponent'
import WeChatMessage from '../weChatMessageComponent'
let msg = {
  'msgid': '223423423423', // 消息id
  'Type': 'Audio', // Text Image
  'FromUserName': '@324242', // 信息发送人的唯一id（以@开头，仅在登录期间有效，重新登录唯一id会改变）
  'FromNickName': '谢红韬',
  'FromGoupUserName': '@@sdfasfsaf', // 信息来自的群的唯一id（以@@开头，仅在登录期间有效，重新登录唯一id会改变）
  'FromGroupNickName': '哈哈群',
  'Content': '今天拿着ak去天安门闹事',
  'FileUrl': '/static/wxmsg/audio/xxx.wav',
  'spam': '0, 1, 2', // 违禁消息、待人工审查
  'label': {
    'reject': [{
      'name': '涉恐',
      'hit': [
        '天安门',
        '闹事'
      ]
    }],
    'review': [
      {
        'name': '敏感词汇',
        'hit': [
          'ak'
        ]
      }
    ]
  }
}
console.log(msg)
let timer
let timer2
export default {
  data () {
    return {
      isRead: true,
      leftAudioPlay: 'icon-goutongye_yuyin_you_00',
      rightAudioPlay: 'icon-goutongye_yuyin_zuo_00',
      introduct: '',
      source: 'http://music.163.com/song/media/outer/url?id=431795489.mp3',
      altogetherTimer: null, // 音频总时长
      accomplishData: null, // 当前播放进度比
      messageData: [
        {
          'msgid': '223423423423',
          'Type': 'Audio',
          'FromUserName': '@324242',
          'FromNickName': '谢红韬',
          'FromGoupUserName': '@@sdfasfsaf',
          'FromGroupNickName': '哈哈群',
          'Content': '今天拿着ak去天安门闹事',
          'FileUrl': '/static/wxmsg/audio/xxx.wav',
          'spam': '0, 1, 2',
          'label': {
            'reject': [{
              'name': '涉恐',
              'hit': [
                '天安门',
                '闹事'
              ]
            }],
            'review': [
              {
                'name': '敏感词汇',
                'hit': [
                  'ak'
                ]
              }
            ]
          }
        },
        {
          'msgid': '223423423423',
          'Type': 'Audio',
          'FromUserName': '@324242',
          'FromNickName': '谢红韬',
          'FromGoupUserName': '@@sdfasfsaf',
          'FromGroupNickName': '哈哈群',
          'Content': '今天拿着ak去天安门闹事',
          'FileUrl': '/static/wxmsg/audio/xxx.wav',
          'spam': '0, 1, 2',
          'label': {
            'reject': [{
              'name': '涉恐',
              'hit': [
                '天安门',
                '闹事'
              ]
            }],
            'review': [
              {
                'name': '敏感词汇',
                'hit': [
                  'ak'
                ]
              }
            ]
          }
        },
        {
          'msgid': '223423423423',
          'Type': 'Audio',
          'FromUserName': '@324242',
          'FromNickName': '谢红韬',
          'FromGoupUserName': '@@sdfasfsaf',
          'FromGroupNickName': '哈哈群',
          'Content': '今天拿着ak去天安门闹事',
          'FileUrl': '/static/wxmsg/audio/xxx.wav',
          'spam': '0, 1, 2',
          'label': {
            'reject': [{
              'name': '涉恐',
              'hit': [
                '天安门',
                '闹事'
              ]
            }],
            'review': [
              {
                'name': '敏感词汇',
                'hit': [
                  'ak'
                ]
              }
            ]
          }
        },
        {
          'msgid': '223423423423',
          'Type': 'Audio',
          'FromUserName': '@324242',
          'FromNickName': '谢红韬',
          'FromGoupUserName': '@@sdfasfsaf',
          'FromGroupNickName': '哈哈群',
          'Content': '今天拿着ak去天安门闹事',
          'FileUrl': '/static/wxmsg/audio/xxx.wav',
          'spam': '0, 1, 2',
          'label': {
            'reject': [{
              'name': '涉恐',
              'hit': [
                '天安门',
                '闹事'
              ]
            }],
            'review': [
              {
                'name': '敏感词汇',
                'hit': [
                  'ak'
                ]
              }
            ]
          }
        }
      ]
    }
  },
  components: {
    Icon,
    WeChatAudio,
    WeChatMessage
  },
  watch () {
    // id
  },
  methods: {
    // oncanplaythrough 事件在视频/音频（audio/video）可以正常播放且无需停顿和缓冲时触发
    oncanplaythrough () {
      this.altogetherTimer = Math.round(this.$refs.audioEl.duration) === Infinity ? 0 : Math.round(this.$refs.audioEl.duration)
    },
    playAudioFn (e) {
      let index = 0
      let audioEl = this.$refs.audioEl
      if (audioEl.paused && this.altogetherTimer) {
        audioEl.play()
        clearInterval(timer) // 清除计时器
        clearInterval(timer2) // 清除计时器
        timer = setInterval(() => {
          this.countTime = this.altogetherTimer - Math.round(audioEl.currentTime)
        }, 1000)
        timer2 = setInterval(() => {
          if (this.responseStyle === 'left') {
            let num = index++
            if (num <= 3) return this.leftAudioPlay = `icon-goutongye_yuyin_you_0${num}`
            this.leftAudioPlay = 'icon-goutongye_yuyin_you_01'
            index = 2
          } else {
            let num = index++
            if (num <= 3) return this.rightAudioPlay = `icon-goutongye_yuyin_zuo_0${num}`
            this.rightAudioPlay = 'icon-goutongye_yuyin_zuo_01'
            index = 2
          }
        }, 500)
      } else {
        audioEl.pause()
        clearInterval(timer) // 清除计时器
        clearInterval(timer2) // 清除计时器
        this.responseStyle === 'left'
          ? this.leftAudioPlay = 'icon-goutongye_yuyin_you_00'
          : this.rightAudioPlay = 'icon-goutongye_yuyin_zuo_00'
      }
    }
  }
}
</script>
