<template>
  <div class="skychongzhi">
    <div class="mod">
      <div><input type="text" placeholder="请输入手机号码"></div>
      <div><input type="text" placeholder="请输入金额（元）"></div>
      <div><input type="text" placeholder="请输入有效期（天）"></div>
      <p>当前可用余额：20元</p>
      <button type="button">充值</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {

    }
  }
</script>

<style scoped>
  .skychongzhi{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    /*position: fixed;*/
    position: absolute;
  }
  .mod{
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 41px;
  }
  .mod div input{
    width: 94%;
    height: 45px;
    background: white;
    border-radius: 50px;
    margin-bottom: 10px;
    letter-spacing: 2px;
    font-size: 16px;
    padding-left: 6%;
  }
  .mod p{
    color: #8F8F8F;
    font-size: 14px;
    /*padding-top: 10px;*/
    padding-left: 20px;
    letter-spacing: 2px;
  }
  button[type=button]{
    color: white;
    letter-spacing: 1px;
    width: 228px;
    height: 37px;
    border-radius: 50px;
    background: #F08400;
    text-align: center;
    font-size: 18px;
    line-height: 37px;
    margin-top: 24px!important;
    margin: 0 auto;
  }
</style>
