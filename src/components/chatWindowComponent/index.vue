<template>
  <div class="chat-window-container">
    <div class="chat-header">
      <span>一群帅哥哈哈群</span>
    </div>
    <div class="chat-content">
      <div class="chat-inner-container">
        <div class="content">
          <ul>
            <li class="response-chat">
              <img :src="require('../../assets/images/toux1.jpeg')" alt="">
              <div class="chat-left">
                <p>的哈接电话啊是假的阿圣诞节啊说的带回家阿斯顿回家啊说</p>
              </div>
            </li>
            <li class="response-chat">
              <img :src="require('../../assets/images/toux1.jpeg')" alt="">
              <div class="chat-left">
                <p>的哈接电话啊是假的阿圣诞节啊说的带回家阿斯顿回家啊说</p>
              </div>
            </li>
            <li class="send-chat">
              <div class="chat-right">
                <p>的哈接电话啊是假的阿圣诞节啊说的带回家阿斯顿回家啊说</p>
              </div>
              <img :src="require('../../assets/images/toux2.jpg')" alt="">
            </li>
            <li class="response-audio-chat">
              <!-- <div class="audio-chat-box">
                <img :src="require('../../assets/images/toux1.jpeg')">
                <div
                @click='playAudioFn'
                class="chat-left">
                  <span v-show="isRead">暴</span>
                  <Icon :icon='leftAudioPlay'/>
                  <b>8s</b>
                </div>
              </div>
              <div class="audioText">大手大脚卡上大卡司好久</div> -->
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
              <WeChatAudio responseStyle='left'/>
            </li>
            <li class="send-audio-chat">
              <!-- <div class="audio-chat-box">
                <div class="chat-right">
                  <span v-show="isRead">黄</span>
                  <b>8s</b>
                  <Icon :icon='rightAudioPlay'/>
                </div>
                <img :src="require('../../assets/images/toux2.jpg')">
              </div>
              <div class="audioText">大手大脚卡上大卡司大厦将颠撒谎搭建大叔控快点哈说好久</div> -->
              <WeChatAudio responseStyle='right'/>
            </li>
          </ul>
        </div>
     </div>
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
            .originalAudio{
              width: 0;
              height: 0;
              audio{
                width: 0;
                height: 0;
              }
            }
          }
          .chat-left, .chat-right{
            font-size: 15px;
            min-height: 40px;
            position: relative;
            top: 0;
            text-align: left;
            border-radius: 5px;
            padding: 8px 10px;
            max-width: 330px;
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
            justify-content: flex-start;
            img{
              left: 0;
            }
          }
          .send-chat{
            justify-content: flex-end;
            img{
              right: 0;
            }
          }
          .audioText{
            max-width: 200px;
            min-height: 40px;
            background: #fff;
            margin-top: 5px;
            font-size: 13px;
            padding: 8px;
            position: relative;
            display: flex;
            align-items: center;
          }
          .response-audio-chat{
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            .audio-chat-box{
              display: flex;
              align-items: center;
              justify-content: flex-start;
              .chat-left{
                min-width: 100px;
                position: relative;
                span{
                  position: absolute;
                  right: -26px;
                  top: 0px;
                  width: 20px;
                  height: 20px;
                  color: #fff;
                  font-size: 12px;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-color: #ff0000;
                }
                b{
                  font-size: 14px;
                  font-weight: normal;
                }
              }
            }
            .audioText{
              left: 57px;
            }
          }
          .send-audio-chat{
            justify-content: flex-end;
            .audio-chat-box{
              display: flex;
              align-items: center;
              justify-content: flex-end;
              .chat-right{
                min-width: 100px;
                position: relative;
                span{
                  position: absolute;
                  left: -26px;
                  top: 0px;
                  width: 20px;
                  height: 20px;
                  color: #fff;
                  font-size: 12px;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-color: #ff0000;
                }
                b{
                  font-size: 14px;
                  font-weight: normal;
                }
              }
            }
            .audioText{
              right: 57px;
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
export default {
  data () {
    return {
      isRead: true,
      leftAudioPlay: 'icon-goutongye_yuyin_you_00',
      rightAudioPlay: 'icon-goutongye_yuyin_zuo_00',
      introduct: '',
      source: 'http://music.163.com/song/media/outer/url?id=431795489.mp3',
      altogetherTimer: null, // 音频总时长
      accomplishData: null // 当前播放进度比
    }
  },
  components: {
    Icon,
    WeChatAudio
  },
  methods: {
    playAudioFn () {
      console.log('111')
    }
  }
}
</script>
