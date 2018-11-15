<template>
  <div class="feedback">
    <p>我要反馈</p>
    <div class="mod1">
      <div class="content">
        <textarea rows="3" cols="20" class="inputText" placeholder="请输入反馈内容">
        </textarea>
        <div style="position: absolute;right: 0px;bottom: 10px;color: #717171;font-size: 12px;"><span style="padding-right: 10px;">您还能输入300个字</span></div>
      </div>
    </div>

    <div class="mod2">
      <button type="button">确认提交</button>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .feedback{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    position: absolute;
  }
  .feedback p{
    color: #393939;
    font-size: 14px;
    letter-spacing: 1px;
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .mod1{
    padding-left: 15px;
    padding-right: 15px;
  }
  .mod1 div.content{
    width: 100%;
    height: 144px;
    background: white;
    border-radius: 10px;
    position: relative;
  }
  .inputText{
    letter-spacing: 2px;
    color: #717171;
    font-size: 12px;
    padding-left: 10px;
    padding-top: 10px;
  }
  .mod2{
    padding-left: 24px;
    padding-right: 24px;
  }
  .mod2 button{
    width: 100%;
    height: 33px;
    background: #F08400;
    line-height: 33px;
    color: #FFFFFF;
    font-size: 16px;
    margin-top: 25px;
    letter-spacing: 1px;
    border-radius: 20px;
  }
</style>
