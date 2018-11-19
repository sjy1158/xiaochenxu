<template>
  <div class="xinxi">
    <div class="mod1">
      <div class="form">
        <div>
          <label>原始密码</label><input type="text" placeholder="请输入">
        </div>
        <div>
          <label>输新密码</label><input type="text" placeholder="请输入">
        </div>
        <div style="border: none">
          <label>确认密码</label><input type="text" placeholder="请输入">
        </div>
      </div>
    </div>

    <div class="mod2">
      <button type="button">确认修改</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    mounted () {
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
  .form div label{
    vertical-align: middle;
    padding-left: 20px;
    color: #393939;
    font-size: 14px;
    letter-spacing: 1px;
    float: left;
  }
  .form div input{
    width: 4rem;
    height: 49px;
    vertical-align: middle;
    color: #8F8F8F;
    font-size: 14px;
    letter-spacing: 1px;
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
