<template>
  <div v-if="responseStyle === 'left'" class="response-chat">
    <img :src="require('../../assets/images/toux1.jpeg')" alt="">
    <div class="chat-left">
      <p>的哈接电话啊是假的阿圣诞节啊说的带回家阿斯顿回家啊说</p>
    </div>
  </div>
  <div v-else class="send-chat">
    <div class="chat-right">
      <p>的哈接电话啊是假的阿圣诞节啊说的带回家阿斯顿回家啊说</p>
    </div>
    <img :src="require('../../assets/images/toux2.jpg')" alt="">
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
}
.send-chat{
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  img{
    right: 0;
  }
}
</style>

<script>
export default {
  name: 'weChatMessageComponent',
  props: {
    responseStyle: {
      type: String
    }
  }
}
</script>
