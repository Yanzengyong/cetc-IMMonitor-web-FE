<template>
  <div class="chat-window-container">
    <Drawer :title="`${groupName}（成员列表）`" :closable="false" v-model="value1">
      <p
      v-for="(item, index) in 30"
      :key="index"
      class="chat-groupList">
        <img src="../../assets/images/toux2.jpg" >
        <span>张小明</span>
      </p>
    </Drawer>
    <div class="chat-header">
      <span>{{ groupName }}</span>
      <div
      @click="openGroupPeopleList"
      class="chat-groupNum">
        <Icon icon='icon-groupNum'/>
        <span>(666)</span>
      </div>
    </div>
    <div class="chat-content">
      <div class="chat-inner-container">
        <div class="content">
          <ul>
            <li
            v-for="(item, index) in messageData.msg_list"
            :key="index">
              <WeChatNews
              :responseStyle='uin === item.user_uin ? "right" : "left"'
              :type='item.Type'
              :content='item.Content'
              :detectedArr='item.detectedArr'
              :fileUrl='item.FileUrl'
              @click='chatMessageClick'/>
            </li>
            <!-- <li>
              <WeChatNews responseStyle='right' type='Audio' content='等哈就快点哈说带回家啊啥的考试啊'/>
            </li>
            <li>
              <WeChatNews responseStyle='left' type='Audio' content='等哈就快点哈说带回家啊啥的考试啊'/>
            </li> -->
            <!-- <li>
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
            </li> -->
          </ul>
        </div>
     </div>
    </div>
    <!-- 原生音频文件 -->
    <!-- <div class="originalAudio">
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
    </div> -->
    <div class="chat-input-box">
      <textarea v-model="introduct" placeholder="输入你要发送的消息"></textarea>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-groupList{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img{
    width: 40px;
    height: 40px;
    margin-bottom: 6px;
  }
  span{
    font-size: 14px;
    color: #333;
    padding-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
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
    .chat-groupNum{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      span{
        margin-left: 6px;
      }
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
import WeChatNews from '../weChatNewsComponent'
import { Drawer } from 'iview'
import { mapGetters } from 'vuex'
// let msg = {
//   'msgid': '223423423423', // 消息id
//   'Type': 'Audio', // Text Image
//   'FromUserName': '@324242', // 信息发送人的唯一id（以@开头，仅在登录期间有效，重新登录唯一id会改变）
//   'FromNickName': '谢红韬',
//   'FromGoupUserName': '@@sdfasfsaf', // 信息来自的群的唯一id（以@@开头，仅在登录期间有效，重新登录唯一id会改变）
//   'FromGroupNickName': '哈哈群',
//   'Content': '今天拿着ak去天安门闹事',
//   'FileUrl': '/static/wxmsg/audio/xxx.wav',
//   'spam': '0, 1, 2', // 违禁消息、待人工审查
//   'label': {
//     'reject': [{
//       'name': '涉恐',
//       'hit': [
//         '天安门',
//         '闹事'
//       ]
//     }],
//     'review': [
//       {
//         'name': '敏感词汇',
//         'hit': [
//           'ak'
//         ]
//       }
//     ]
//   }
// }
// console.log(msg)
// let timer
// let timer2
export default {
  data () {
    return {
      groupName: '还有谁，妈的群',
      value1: false,
      isRead: true,
      leftAudioPlay: 'icon-goutongye_yuyin_you_00',
      rightAudioPlay: 'icon-goutongye_yuyin_zuo_00',
      introduct: '',
      source: 'http://music.163.com/song/media/outer/url?id=431795489.mp3',
      altogetherTimer: null, // 音频总时长
      accomplishData: null, // 当前播放进度比
      messageData: {
        'msg_list': [{
          'Type': 'Text',
          'Content': '明天去天安门闹事杀人，我操你妈',
          'user_uin': '1812385440',
          'MsgId': '6513922112831519952',
          'GroupNickName': 'IMMonitor测试又又改💼',
          'GroupUserName': '@@bbdc9cee884a08a605da1ae0d3040f8dcc2b4ef2f43449c4f948f3338fe5f06e',
          'FromUserName': '@1f0bbc415d6bb21beac0985db39f4014',
          'FromUserNickName': 'Taoz',
          'FromUserDisplayName': '改名回来'
        }, {
          'Type': 'Text',
          'Content': '明天去天安门闹事杀人，我操你妈',
          'user_uin': '1812385440',
          'MsgId': '8806363632074272318',
          'GroupNickName': 'IMMonitor测试又又改💼',
          'GroupUserName': '@@bbdc9cee884a08a605da1ae0d3040f8dcc2b4ef2f43449c4f948f3338fe5f06e',
          'FromUserName': '@1f0bbc415d6bb21beac0985db39f4014',
          'FromUserNickName': 'Taoz',
          'FromUserDisplayName': '改名回来'
        }, {
          'Type': 'Audio',
          'Content': '明天去天安门闹事杀人，我操你妈',
          'user_uin': '1812385440',
          'MsgId': '8806363632074272318',
          'GroupNickName': 'IMMonitor测试又又改💼',
          'GroupUserName': '@@bbdc9cee884a08a605da1ae0d3040f8dcc2b4ef2f43449c4f948f3338fe5f06e',
          'FromUserName': '@1f0bbc415d6bb21beac0985db39f4014',
          'FromUserNickName': 'Taoz',
          'FromUserDisplayName': '改名回来',
          'FileUrl': 'http://www.aaaaa.com'
        }, {
          'Type': 'Image',
          'user_uin': '1812385440',
          'MsgId': '8806363632074272318',
          'GroupNickName': 'IMMonitor测试又又改💼',
          'GroupUserName': '@@bbdc9cee884a08a605da1ae0d3040f8dcc2b4ef2f43449c4f948f3338fe5f06e',
          'FromUserName': '@1f0bbc415d6bb21beac0985db39f4014',
          'FromUserNickName': 'Taoz',
          'FromUserDisplayName': '改名回来',
          'FileUrl': 'http://172.16.25.249:5000/static/wxmsg/audio/413760509807345618.wav'
        }],
        'msg_list_detected': [{
          'msg_id': '6513922112831519952',
          'spam_type': 'review',
          'result_info': ['天安门'],
          'result_ratio': 0.9,
          'result_label': 13
        }, {
          'msg_id': '6513922112831519952',
          'spam_type': 'reject',
          'result_info': ['操你妈', '我操', '操', '操你'],
          'result_ratio': 1.0,
          'result_label': 15
        }, {
          'msg_id': '8806363632074272318',
          'spam_type': 'review',
          'result_info': ['天安门'],
          'result_ratio': 0.9,
          'result_label': 13
        }, {
          'msg_id': '8806363632074272318',
          'spam_type': 'reject',
          'result_info': ['操你妈', '我操', '操', '操你'],
          'result_ratio': 1.0,
          'result_label': 15
        }]
      },
      originalText: '明天去天安门闹事杀人，我操你妈',
      keywords: ['操你妈', '我操', '操', '操你']
    }
  },
  components: {
    Icon,
    WeChatAudio,
    WeChatMessage,
    WeChatNews,
    Drawer
  },
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'uin'
      // ...
    ])
  },
  created () {
    this.dataFormat(this.messageData)
  },
  methods: {
    // 打开群人数列表
    openGroupPeopleList () {
      this.value1 = true
    },
    // 数据格式化
    dataFormat (data) {
      data['msg_list'].map((item) => {
        let detectedArr = []
        data['msg_list_detected'].map((e) => {
          if (item.MsgId === e.msg_id) {
            detectedArr.push(e)
          }
        })
        Object.assign(item, {'detectedArr': detectedArr})
      })
      console.log(this.messageData)
    },
    // 文字暴恐格式化
    textViolationFormat (originalText, keywords) {

    },
    chatMessageClick (e) {
      console.log(e)
    }
    // oncanplaythrough 事件在视频/音频（audio/video）可以正常播放且无需停顿和缓冲时触发
    // oncanplaythrough () {
    //   this.altogetherTimer = Math.round(this.$refs.audioEl.duration) === Infinity ? 0 : Math.round(this.$refs.audioEl.duration)
    // },
    // playAudioFn (e) {
    //   let index = 0
    //   let audioEl = this.$refs.audioEl
    //   if (audioEl.paused && this.altogetherTimer) {
    //     audioEl.play()
    //     clearInterval(timer) // 清除计时器
    //     clearInterval(timer2) // 清除计时器
    //     timer = setInterval(() => {
    //       this.countTime = this.altogetherTimer - Math.round(audioEl.currentTime)
    //     }, 1000)
    //     timer2 = setInterval(() => {
    //       if (this.responseStyle === 'left') {
    //         let num = index++
    //         if (num <= 3) return this.leftAudioPlay = `icon-goutongye_yuyin_you_0${num}`
    //         this.leftAudioPlay = 'icon-goutongye_yuyin_you_01'
    //         index = 2
    //       } else {
    //         let num = index++
    //         if (num <= 3) return this.rightAudioPlay = `icon-goutongye_yuyin_zuo_0${num}`
    //         this.rightAudioPlay = 'icon-goutongye_yuyin_zuo_01'
    //         index = 2
    //       }
    //     }, 500)
    //   } else {
    //     audioEl.pause()
    //     clearInterval(timer) // 清除计时器
    //     clearInterval(timer2) // 清除计时器
    //     this.responseStyle === 'left'
    //       ? this.leftAudioPlay = 'icon-goutongye_yuyin_you_00'
    //       : this.rightAudioPlay = 'icon-goutongye_yuyin_zuo_00'
    //   }
    // }
  }
}
</script>
