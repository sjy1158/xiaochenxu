<template>
  <div class="setTings">
    <div class="mod1" @click="chooseImage()">
      <img :src="src" alt="" style="border-radius: 50%;">
      <p>点击修改头像</p>
    </div>

    <div class="mod2">
      <div class="name" @click="changename(userInfo.user.nickName)"><label>昵称：</label><input type="text" placeholder="某某某" v-model="userInfo.user.nickName" disabled="disabled"><span>修改</span></div>
      <div class="name" style="margin-top: 10px;" @click="payCode(userInfo.user.phoneId)"><label>支付宝绑定：</label><input type="text" disabled="disabled"><span>未绑定</span></div>
      <div class="name" style="margin-top: 10px;" @click="changePhone(userInfo.user.phoneId)"><label>修改手机号：</label><input type="text" v-model="userInfo.user.phoneId" disabled="disabled"><span>修改</span></div>
      <div class="name" @click="changePass(userInfo.user.phoneId)"><label>修改密码：</label><input type="password" placeholder="某某某" v-model="userInfo.user.password" disabled="disabled"><span>修改</span></div>
      <div class="name" style="margin-top: 10px;">
        <label>清除缓存：</label><input type="text" v-model="currentSize" disabled="disabled">
        <span style="color: #F08400" @click="cleanSys()">清除缓存</span>
      </div>
    </div>

    <div class="mod3">
      <button type="button" @click="outLogin()">退出登录</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        src: '/static/images/my_head@3x.png',
        userInfo: '',
        currentSize: '',
        params: {
          userId: ''
        }
      }
    },
    methods: {
      outLogin () {
        const _this = this
        wx.showModal({
          title: '提示',
          content: '客官确认要退出吗？',
          success: function (res) {
            if (res.confirm) {
              _this.clearAllToken()
            } else {
              return
            }
          }
        })
      },
      clearAllToken () {
        this.$saveToken.clearToken()
        wx.switchTab({
          url: '../mine/main',
          success: function (res) {
            const page = getCurrentPages().pop()
            page.onLoad()
          }
        })
      },
      // 头像选择
      chooseImage () {
        const _this = this
        wx.chooseImage({
          count: 1,
          sizeType: ['compressed'],
          sourceType: ['album', 'camera'],
          success: function (res) {
            const avatar = res.tempFilePaths
            _this.src = avatar
          }
        })
      },
      //修改昵称
      changename (nickname) {
        wx.navigateTo({
          url: '../changename/main?name=' + nickname,
          redirect: false
        })
      },
      //绑定支付宝
      payCode (paycode) {
        wx.navigateTo({
          url: '../paycode/main?paycode=' + paycode,
          redirect: false
        })
      },
      // 修改手机号
      changePhone (paycode) {
        wx.navigateTo({
          url: '../changephone/main?phoneid=' + paycode,
          redirect: false
        })
      },
      //修改密码
      changePass (paycode) {
        wx.navigateTo({
          url: '../changepass/main?phoneid=' + paycode,
          redirect: false
        })
      },
      //获取用户信息
      async getUserinfo (params) {
        const data = await this.$net.get('/crossindustry/phonePage/getUserInformation', params)
        this.userInfo = data
        this.src = this.userInfo.user.headImage
      },
      getSys () {
        var res = wx.getStorageInfoSync()
        this.currentSize = res.currentSize + 'kb'
      },
      //清除缓存
      cleanSys () {
        const _this = this
        wx.showModal({
          title: '提示',
          content: '是否清除缓存？',
          success: function (res) {
            if (res.confirm) {
              wx.clearStorageSync()
              wx.showToast({
                title: '清除成功',
                icon: 'none'
              })
              _this.currentSize = '0kb'
            } else {
              return
            }
          }
        })
      }
    },
    onLoad () {
      const data = this.$saveToken.getToken()
      this.params.userId = data.token
      this.getUserinfo(this.params)
      this.getSys()
    }
  }
</script>

<style scoped>
  .setTings{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    /*position: fixed;*/
    position: absolute;
  }
  .mod1{
    height: 133px;
    width: 100%;
    border-top: 1px solid #F2F2F2;
    border-bottom: 1px solid #F2F2F2;
    text-align: center;
    background: white;
  }
  .mod1 img{
    height: 67px;
    width: 67px;
    position: absolute;
    top: 15px;
    left: 50%;
    margin-left: -33.5px;
  }
  .mod1 p{
    margin-top: 85px;
    color: #8F8F8F;
    font-size: 14px;
    text-align: center;
  }
  .mod2 div{
    width: 100%;
    height: 50px;
    background: white;
    line-height: 50px;
  }
  .mod2 div label{
    float: left;
    color: #393939;
    font-size: 14px;
    padding-left: 15px;
    vertical-align: middle;
  }
  .mod2 div input{
    width: 3rem;
    height: 50px;
    float: left;
    color: #8F8F8F;
    font-size: 14px;
    padding-left: 14px;
    vertical-align: middle;
  }
  .mod2 div span{
    vertical-align: middle;
    float: right;
    padding-right: 29px;
    color:#8F8F8F;
    font-size: 14px;
  }
  .mod3{
    padding: 0px 24px;
  }
  .mod3 button{
    width: 100%;
    height: 33px;
    background: grey;
    line-height: 33px;
    color: #FFFFFF;
    font-size: 16px;
    margin-top: 25px;
    border-radius: 50px;
  }
</style>
