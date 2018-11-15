<template>
  <div class="novice">
    <div class="mod1">
      <div>1.0.0版本功能说明</div>
    </div>
    <div class="mod2">
      <div>版本更新说明</div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .novice{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    /*position: fixed;*/
    position: absolute;
  }
  .mod1,.mod2{
    padding:10px;
  }
  .mod2{
    padding-top: 0px!important;
  }
  .mod1 div{
    width: 100%;
    height: 80px;
    background: #A444FD;
    border-radius: 5px;
    text-align: center;
    color: white;
    line-height: 80px;
    letter-spacing: 1px;
    font-size: 24px;
  }
  .mod2 div{
    width: 100%;
    height: 80px;
    background: #FD6B44;
    border-radius: 5px;
    text-align: center;
    color: white;
    line-height: 80px;
    letter-spacing: 1px;
    font-size: 24px;
  }
</style>
