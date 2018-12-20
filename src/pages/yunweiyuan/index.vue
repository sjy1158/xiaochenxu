<template>
  <div class="novice">
    <div class="mod1">
      <div><img src="/static/images/electricity_purchase_icon@3x.png" alt=""><span>电商购素材</span></div>
    </div>
    <div class="mod2">
      <div><img src="/static/images/merchants_icon@3x.png" alt=""><span>联盟商家素材</span></div>
    </div>
    <div class="mod3">
      <div><img src="/static/images/calendar@3x.png" alt=""><span>日历素材</span></div>
    </div>
    <div class="mod4">
      <div><img src="/static/images/change_password@3x.png" alt=""><span>修改密码</span></div>
    </div>
    <div class="mod4">
      <div><img src="/static/images/top_up@3x.png" alt=""><span>空中充值</span></div>
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
  .novice{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    /*position: fixed;*/
    position: absolute;
  }
  .mod1,.mod2,.mod3,.mod4,.mod5{
    padding:10px;
  }
  .mod2,.mod3,.mod4,.mod5{
    padding-top: 0px!important;
  }
  .mod1 div,.mod2 div,.mod3 div,.mod4 div,.mod5 div{
    width: 100%;
    height: 80px;
    background: #8F8F8F;
    border-radius: 5px;
    line-height: 80px;
    position: relative;
  }
  .mod1 div img,.mod2 div img,.mod3 div img,.mod4 div img,.mod5 div img{
    width: 45px;
    height: 40px;
    position: absolute;
    top: 50%;
    margin-top: -20px;
    left: 21px;
  }
  .mod1 div span,.mod2 div span,.mod3 div span,.mod4 div span,.mod5 div span{
    color: white;
    letter-spacing: 1px;
    font-size: 16px;
    margin-left: 85px;
  }
  /*.mod2 div{*/
  /*width: 100%;*/
  /*height: 80px;*/
  /*background: #30CC79;*/
  /*border-radius: 5px;*/
  /*}*/
  /*.mod3 div{*/
  /*width: 100%;*/
  /*height: 80px;*/
  /*background: #FD6B44;*/
  /*border-radius: 5px;*/
  /*}*/
</style>
