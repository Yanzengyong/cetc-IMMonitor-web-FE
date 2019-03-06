<template>
  <div :style="{width: '460px'}">
    <ChatBox />
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import ChatBox from '../../components/chatWindowComponent'
export default {
  data () {
    return {

    }
  },
  components: {
    ChatBox
  }
}
</script>
