<template>
  <div class="paycode">
    <div class="mod2">
      <div class="name"><label>原手机号：</label><input type="text" v-model="phone"></div>
      <div class="name"><label>新手机号：</label><input type="text" placeholder="请输入新手机号" v-model="params.phone"></div>
      <div class="name"><label>验证码：</label><input type="text" placeholder="请输入验证码" v-model="code" style="width:7rem"><span class="getcode" @click="getCode">获取验证码</span></div>
    </div>

    <div class="mod3">
      <button type="button" @click="changePhone">立即修改</button>
    </div>
  </div>
</template>

<script>
  import getRouter from '../../utils/getOptions'
  export default {
    data () {
      return {
        params: {
          phone: '',
          userId: ''
        },
        phone: '',
        code: '',
        code1: ''
      }
    },
    methods: {
     async getCodeapi (params) {
       var data = await this.$net.get('/crossindustry/userOperation/sendMessage', params)
       console.log(JSON.stringify(data))
       if (data.codeString!=undefined) {
         this.code1 = data.codeString
         wx.showToast({
           title: '验证码发送成功',
           icon: 'none'
         })
       } else {
         wx.showToast({
           title: '验证码发送失败',
           icon: 'none'
         })
       }
      },
      getCode () {
        var phoneid = /^1[34578]\d{9}$/
        if (phoneid.test(this.params.phone)) {
          var params = {
            type: 2,
            phone: this.params.phone
          }
          this.getCodeapi(params)
        } else {
          wx.showToast({
            title: '请输入正确手机号',
            icon: 'none'
          })
        }
      },
      changePhone () {
       if (this.params.phone!='') {
         if (this.code!=''&&this.code==this.code1) {
           this.params.userId = this.$saveToken.getToken().token
           this.changegetphone(this.params)
         } else {
           wx.showToast({
             title: '验证码输入错误',
             icon: 'none'
           })
         }
       } else {
         wx.showToast({
           title: '请输入正确手机号',
           icon: 'none'
         })
       }
      },
      async changegetphone (params) {
       var data = await this.$net.get('/crossindustry/userPage/changePhone', params)
        console.log(JSON.stringify(data))
        if (data.code == 400) {
          wx.showToast({
            title: data.msg,
            icon: 'none'
          })
        } else {
          wx.showToast({
            title: '修改成功',
            icon: 'none'
          })
          setTimeout(function () {
            wx.navigateBack()
          }, 2000)
        }
      }
    },
    onLoad () {
      this.phone = getRouter().phoneid.replace(/^(\d{3})\d{4}(\d+)/, '$1****$2')
    }
  }
</script>

<style scoped>
  .paycode{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    /*position: fixed;*/
    position: absolute;
  }
  .name{
    height: 50px;
    width: 100%;
    background: white;
    line-height: 50px;
    border-top: 1px solid #F2F2F2;
    position: relative;
  }
  .mod2 div label{
    float: left;
    color: #393939;
    font-size: 14px;
    padding-left: 15px;
    vertical-align: middle;
  }
  .mod2 div input{
    width: 5rem;
    height: 50px;
    color: #8F8F8F;
    font-size: 14px;
    text-align: left;
    vertical-align: middle;
    position: absolute;
    left:2rem;
  }
  .mod2 div span{
    vertical-align: middle;
    float: right;
    padding-right: 29px;
    color:#8F8F8F;
    font-size: 14px;
  }
  .getcode{
    color: #F08400!important;
  }
  .mod3{
    padding-left: 24px;
    padding-right: 24px;
  }
  .mod3 button{
    height: 33px;
    width: 100%;
    background: #F08400;
    margin-top: 25px;
    border-radius: 30px;
    color: white;
    line-height: 33px;
    font-size: 16px;
  }
</style>
