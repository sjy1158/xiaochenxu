<template>
  <div class="xinxi">
    <div class="mod1">
      <div class="form">
        <div><input type="text" placeholder="手机号／昵称"></div>
        <div style="border: none"><input type="text" placeholder="请输入密码"></div>
      </div>
    </div>

    <div class="mod2">
      <button type="button" @click="adLogin()">登录</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      adLogin () {
        wx.navigateTo({
          url: '../yunweiyuan/main',
          redirect: false
        })
      }
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
  }
  .form div input{
    width: 100%;
    height: 100%;
    vertical-align: middle;
    padding-left: 20px;
    color: #8F8F8F;
    font-size: 14px;
    letter-spacing: 1px;
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
