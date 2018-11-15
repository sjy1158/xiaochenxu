<template>
  <div class="changename">
    <div class="mod2">
      <div class="name"><label>昵称：</label><input type="text" v-model="name"><span>修改</span></div>
    </div>

    <div class="mod3">
      <button type="button">确认修改</button>
    </div>
  </div>
</template>

<script>
  import getRouter from '../../utils/getOptions'
  export default {
    data () {
      return {
        name: ''
      }
    },
    methods: {
    },
    onLoad () {
      const name = getRouter().name
      this.name = name
    }
  }
</script>

<style scoped>
  .changename{
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
  }
  .mod2 div label{
    float: left;
    color: #393939;
    font-size: 14px;
    padding-left: 15px;
    vertical-align: middle;
  }
  .mod2 div input{
    width: 3rem;
    height: 50px;
    float: left;
    color: #8F8F8F;
    font-size: 14px;
    padding-left: 14px;
    vertical-align: middle;
  }
  .mod2 div span{
    vertical-align: middle;
    float: right;
    padding-right: 29px;
    color:#8F8F8F;
    font-size: 14px;
  }

  .mod3{
    padding-left: 24px;
    padding-right: 24px;
  }
  .mod3 button{
    height: 33px;
    width: 100%;
    background: #F08400;
    border-radius: 30px;
    line-height: 33px;
    font-size: 16px;
    color: white;
    margin-top: 31px;
  }
</style>
