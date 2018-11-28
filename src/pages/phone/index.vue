<template>
  <div class="phonecontent">
    <div class="mod">
      <ul>
        <li @click="callPhone()">
          <img src="/static/images/my_head@3x.png" alt="">
          <span style="text-align: center">{{phonenum}}</span>
          <span style="font-size: 14px!important;float: right;color: #F08400;letter-spacing: 1px;margin-right: 20px;">添加联系人</span>
        </li>
        <li @click="callPhone()">
          <img src="/static/images/my_head@3x.png" alt="">
          <span style="text-align: center">{{phonenum}}</span>
          <span style="font-size: 14px!important;float: right;color: #F08400;letter-spacing: 1px;margin-right: 20px;">添加联系人</span>
        </li>
        <li @click="callPhone()">
          <img src="/static/images/my_head@3x.png" alt="">
          <span style="text-align: center">{{phonenum}}</span>
          <span style="font-size: 14px!important;float: right;color: #F08400;letter-spacing: 1px;margin-right: 20px;">添加联系人</span>
        </li>
        <li @click="callPhone()">
          <img src="/static/images/my_head@3x.png" alt="">
          <span style="text-align: center">{{phonenum}}</span>
          <span style="font-size: 14px!important;float: right;color: #F08400;letter-spacing: 1px;margin-right: 20px;">添加联系人</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        phonenum: '1881881989',
        params: {
          userId: this.$saveToken.getToken().token,
          caller: '18868457449',
          callee: '13782509632'
        }
      }
    },
    methods: {
      callPhone () {
        const _this = this
        wx.showActionSheet({
          itemList: ['呼叫', '添加联系人'],
          success: function (res) {
            if (res.tapIndex == 0) {
              var data = _this.$net.get('http://api.kuayet.com:8080/crossindustry/phonePage/doPhone', _this.params)
              console.log(data)
            } else if (res.tapIndex == 1) {
              wx.addPhoneContact({
                firstName: '关关',
                mobilePhoneNumber: _this.phonenum,
                success: function(res_addphone) {
                  console.log('电话添加联系人返回：', res_addphone)
                }
              })
            }
          }
        })
      }
    }
  }
</script>

<style scoped>
  .phonecontent{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    /*position: fixed;*/
    position: absolute;
  }
  .mod{
    padding-left: 20px;
    padding-right: 20px;
  }
  ul{
    width: 100%;
    height: auto;
    margin-top: 10px;
  }
  ul li{
    width: 100%;
    height: 45px;
    text-align: center;
    line-height: 45px;
    border-bottom: 1px solid #CFCFCF;
    font-size: 14px;
    letter-spacing: 1px;
    color: #8F8F8F;
    position: relative;
    background: white;
  }
  ul li img{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    margin-top: -15px;
    left: 20px;
    vertical-align: middle;
  }
  ul li span{
    vertical-align: middle;
  }
</style>
