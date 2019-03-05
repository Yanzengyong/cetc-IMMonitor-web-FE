<template>
    <div class="login">
login
    </div>
</template>
<script>
import {
  setToken,
  setUserInfo
} from '@/tools/util'
import axios from '@/tools/api.request'

export default {
  name: 'login',

  data () {
    return {
      mobile: '',
      password: ''
    }
  },
  methods: {
    submit () {
      axios.request({
        url: '/login',
        method: 'post'

      }).then(res => {
        if (res) {
          setToken(res.token)
          setUserInfo(res.data)
          this.$router.push({path: '/'})
        }
      })
    }
  }
}
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  background: url(../../assets/images/login-bg.png) no-repeat;
  background-size: cover;
  position: fixed;
  z-index: 2;
  font-size: 14px;
}
.welcome {
  width: 100%;
  margin: 25% 0;
}
.welcome img {
  width: 100%;
}
.login-inp {
  margin: 0 30px 15px 30px;
  border: 1px solid #fff;
  border-radius: 25px;
}
.login-inp label {
  width: 4em;
  text-align: center;
  display: inline-block;
  color: #fff;
}
.login-inp input {
  line-height: 40px;
  color: #fff;
  background-color: transparent;
  border: none;
  outline: none;
}
.login-inp a {
  display: block;
  width: 100%;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 16px;
  letter-spacing: 5px;
}
.login-txt {
  text-align: center;
  color: #fff;
}
.login-txt a {
  color: #fff;
  padding: 0 5px;
}
</style>

