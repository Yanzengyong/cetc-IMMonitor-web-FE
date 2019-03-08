<template>
  <div class="chat_page_container">
    <ChatBox class="chat_window"/>
    <ChatBox class="chat_window"/>
    <ChatBox class="chat_window"/>
    <ChatBox class="chat_window"/>
    <ChatBox class="chat_window"/>
    <ChatBox class="chat_window"/>
    <ChatBox class="chat_window"/>
  </div>
</template>

<style lang="scss" scoped>
.chat_page_container{
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  .chat_window{
    min-width: 460px;
    margin: 0 15px 30px 15px;
    box-sizing: border-box;
    background-color: white;
    flex: 0 0 25%;
  }
}
</style>

<script>
import ChatBox from '../../components/chatWindowComponent'
import Icon from '../../components/iconComponent'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {

    }
  },
  components: {
    ChatBox,
    Icon
  },
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'groupList'
      // ...
    ])
  },
  created () {
    // console.log(this.groupList)
  },
  mounted () {
  }
}
</script>
