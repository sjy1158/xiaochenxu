<template>
  <div class="novice">
    <div class="mod1">
      <div @click="adlogin"><img src="/static/images/my_manage_card_number@3x.png" alt=""><span>运维员登录</span></div>
    </div>
    <div class="mod2">
      <div @click="zhanghuxinxi"><img src="/static/images/my_management_users@3x.png" alt=""><span>账户信息</span></div>
    </div>
    <div class="mod3">
      <div @click="singlEquery"><img src="/static/images/my_account_information@3x.png" alt=""><span>话单查询</span></div>
    </div>
    <div class="mod4">
      <div @click="zifeishuoming"><img src="/static/images/my_fee_statement@3x.png" alt=""><span>资费说明</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      skychongzhi () {
        wx.navigateTo({
          url: '../skychongzhi/main',
          redirect: false
        })
      },
      //修改密码
      changeuserpass () {
        wx.navigateTo({
          url: '../changeuserpass/main',
          redirect: false
        })
      },
      //跳转账户信息
      zhanghuxinxi () {
        wx.navigateTo({
          url: '../zhanghuxinxi/main',
          redirect: false
        })
      },
      //跳转运维员登录
      adlogin () {
        wx.navigateTo({
          url: '../adlogin/main',
          redirect: false
        })
      },
      //跳转话单查询
      singlEquery () {
        wx.navigateTo({
          url: '../singlequery/main',
          redirect: false
        })
      },
      //跳转资费说明
      zifeishuoming () {
        wx.navigateTo({
          url: '../zifeishuoming/main',
          redirect: false
        })
      }
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
