<template>
  <div class="xinxi">
    <div class="mod1">
      <div class="form">
        <div><label>我的手机</label><input type="text" value="18357165263" disabled="disabled"></div>
        <div><label>余额</label><input type="text" value="88元" disabled="disabled"></div>
        <div style="border: none"><label>有效期</label><input type="text" value="2018-12-23" disabled="disabled"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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
  .form div label{
    vertical-align: middle;
    padding-left: 20px;
    color: #393939;
    font-size: 14px;
    letter-spacing: 1px;
  }
  .form div input{
    width: 4rem;
    height: 100%;
    float: right;
    vertical-align: middle;
    text-align: right;
    padding-right: 20px;
    color: #8F8F8F;
    font-size: 14px;
    letter-spacing: 1px;
  }
</style>
