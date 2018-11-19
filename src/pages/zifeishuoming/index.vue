<template>
  <div class="xinxi">
    <div class="mod1">
      <div class="form">
        <div><input type="text" value="1.打给别人，对方需要安装跨业通APP吗" disabled="disabled"></div>
        <div><input type="text" value="2.使用跨业通拨打电话需要流量吗？" disabled="disabled"></div>
        <div style="border: none"><input type="text" value="3.对方不接通还扣平台话费吗？" disabled="disabled"></div>
      </div>
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
    color: #393939;
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
