<template>
  <div class="paycode">
    <div class="mod2">
      <div class="name"><label>手机号：</label><input type="text" v-model="phone"></div>
      <div class="name"><label>验证码：</label><input type="text" placeholder="请输入验证码" v-model="name"><span class="getcode">获取验证码</span></div>
      <div class="name"><label>新密码：</label><input type="text" placeholder="请输入新密码" v-model="name"></div>
    </div>

    <div style="margin-top: 15px;padding-left: 15px;font-size: 12px;color: #F08400;letter-spacing: 1px">
      新密码的长度为6-16位
    </div>

    <div class="mod3">
      <button type="button">立即修改</button>
    </div>
  </div>
</template>

<script>
  import getRouter from '../../utils/getOptions'
  export default {
    data () {
      return {
        phone: ''
      }
    },
    methods: {

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
