<template>
  <div class="xinxi">
    <div class="mod1">
      <div class="form">
        <div><label>原始密码</label><input type="text" v-model="params.originalPassword" placeholder="请输入原始密码"></div>
        <div><label>新密码</label><input type="password" v-model="params.newPassword" placeholder="请输入新密码"></div>
        <div style="border: none"><label>确认密码</label><input type="password" v-model="params.accountNumber" placeholder="请确认密码"></div>
      </div>
    </div>

    <div class="mod2">
      <button type="button" @click="change">确认修改</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        params: {
          originalPassword: '',
          newPassword: '',
          accountNumber: ''
        }
      }
    },
    methods: {
      async changeAdpass (params) {
        var data = await this.$net.get('/crossindustry/userPage/changeManagePassword', params)
        console.log(JSON.stringify(data))
        if (data.code==400) {
          wx.showToast({
            title: data.msg,
            icon: 'none',
            duration: 2000
          })
          return
        }
      },
      change () {
        if (this.params.originalPassword!=''&&this.params.newPassword!=''&&this.params.accountNumber!='') {
          this.changeAdpass(this.params)
        } else {
          wx.showToast({
            title: '输入有误',
            icon: 'none',
            duration: 2000
          })
        }
      }
    },
    onLoad () {
    }
  }
</script>

<style scoped>
  .xinxi{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    /*position: fixed;*/
    position: absolute;
  }
  .mod1{
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 10px;
  }
  .form{
    width: 100%;
    height: auto;
    background: white;
    border-radius: 20px;
  }
  .form div{
    height: 49px;
    width: 100%;
    line-height: 49px;
    border-bottom: 1px solid #F2F2F2;
    position: relative;
  }
  .form div input{
    width: 70%;
    height: 100%;
    vertical-align: middle;
    padding-left: 20px;
    color: #8F8F8F;
    font-size: 14px;
    letter-spacing: 1px;
    position: absolute;
    left: 80px;
    top: 0px;
  }
  .form div label{
    height: 100%;
    width: 70px;
    position: absolute;
    letter-spacing: 1px;
    color: #393939;
    font-size: 14px;
    padding-left: 20px;
  }
  .mod2{
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 25px;
  }
  .mod2 button{
    width: 100%;
    height: 33px;
    line-height: 33px;
    background: #F08400;
    color: white;
    font-size: 16px;
    letter-spacing: 1px;
    border-radius: 20px;
  }
</style>
