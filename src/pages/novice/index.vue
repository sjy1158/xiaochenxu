<template>
  <div class="novice">
    <div class="mod1">
      <div></div>
    </div>
    <div class="mod2">
      <div></div>
    </div>
    <div class="mod3">
      <div></div>
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
  .mod1,.mod2,.mod3{
    padding:10px;
  }
  .mod2,.mod3{
    padding-top: 0px!important;
  }
  .mod1 div{
    width: 100%;
    height: 80px;
    background: #A444FD;
    border-radius: 5px;
  }
  .mod2 div{
    width: 100%;
    height: 80px;
    background: #30CC79;
    border-radius: 5px;
  }
  .mod3 div{
    width: 100%;
    height: 80px;
    background: #FD6B44;
    border-radius: 5px;
  }
</style>
