<template>
  <div>
    <div class="mod1">
      手机密码登录
    </div>
    <!--form-->
    <div class="mod2">
      <div style="width: 100%;height: 80px;margin-top: 43px;">
        <div style="position: relative">
          <div class="num">+86</div>
          <input type="text" placeholder="输入手机号码" v-model="params.phoneId" style="padding-left: 40px;" class="phoneinput">
        </div>
        <div>
          <input type="password" placeholder="输入密码" v-model="password" style="margin-top: 19px;">
        </div>
        <button type="button" @click="goLogin()">确定</button>
        <div style="margin-top: 15px;">
          <span class="forgetpass">忘记密码</span>
          <span class="codelogin">验证码登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CryptoJS from 'crypto-js'
  export default {
    data () {
      return {
        params: {
          phoneId: '',
          password: ''
        },
        password: ''
      }
    },
    methods: {
      async Login (params) {
        const data = await this.$net.get('http://api.kuayet.com:8080/crossindustry/userOperation/login', params)
        if (data.code == 400) {
          wx.showToast({
            title: data.msg,
            icon: 'none'
          })
        } else if (data.userId != undefined || data.userId != '') {
          this.$saveToken.setToken(data.userId)
          wx.showToast({
            title: '登录成功',
            icon: 'none',
            duration: 2000,
            success: function (res) {
              setTimeout(function () {
                wx.switchTab({
                  url: '../mine/main',
                  success: function (res) {
                    const page = getCurrentPages().pop()
                    page.onLoad()
                  }
                })
              }, 2000)
            }
          })
        }
      },
      // des加密
      encryptByDES (message, key) {
        var keyHex = CryptoJS.enc.Utf8.parse(key)
        var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        })
        return encrypted.toString()
      },
      goLogin () {
        const res = /^1\d{10}$/
        if (!res.test(this.params.phoneId)) {
          wx.showToast({
            title: '请输入正确的手机号',
            icon: 'none'
          })
        } else if (this.password.length < 6) {
          wx.showToast({
            title: '请输入正确的密码',
            icon: 'none'
          })
        } else {
          this.params.password = this.encryptByDES(this.password, this.params.phoneId)
          console.log(this.params.password)
          this.Login(this.params)
        }
      }
    }
  }
</script>

<style scoped>
  .mod1{
    width: 100%;
    height: 28px;
    text-align: center;
    color: #393939;
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: bold;
    margin-top: 12px;
  }
  .mod2{
    padding: 0px 43px;
  }
  .num{
    position: absolute;
    left: 0px;
    bottom: 6px;
    color: #8F8F8F;
    font-size: 18px;
    vertical-align: middle;
  }
  input{
    border-bottom: 1px solid #CFCFCF;
    color: #CFCFCF;
    font-size: 18px;
    padding-bottom: 6px;
  }
  .phoneinput::-webkit-input-placeholder{
    vertical-align: middle;
  }
  button[type=button]{
    width: 100%;
    height: 44px;
    background: #FF0000;
    text-align: center;
    line-height: 44px;
    color: white;
    margin-top: 35px;
    font-size: 16px;
    border: none;
  }
  .forgetpass{
    color: #8F8F8F;
    font-size: 12px;
    letter-spacing: 2px;
    float: left;
  }
  .codelogin{
    color: #4AB1FE;
    font-size: 12px;
    letter-spacing: 2px;
    float: right;
  }
</style>
