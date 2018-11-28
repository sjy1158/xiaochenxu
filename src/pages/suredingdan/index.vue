<template>
  <div class="getallcontent">
    <div class="header">
      <div>地址信息</div>
    </div>

    <div class="mod1">
      <div class="form">
        <div>
          <label>收货人名</label>
          <input type="text" placeholder="请使用真实姓名">
        </div>

        <div>
          <label>联系电话</label>
          <input type="text" placeholder="手机号／昵称">
        </div>

        <div>
          <label>所在地区</label>
            <picker mode="region" v-modal="region" @change="bindRegionChange">
              <input type="text" v-model="placevalue" disabled=disabled>
            </picker>
        </div>

        <div>
          <label>详细地址</label>
          <input type="text" placeholder="街道、小区门牌等">
        </div>
      </div>
    </div>

    <div class="mod2">
      保存收货信息
    </div>

    <div class="mod3" style="background: white">
      <div class="title">
        <img src="http://i2.hdslb.com/bfs/archive/8a64f786a0282ea753667b3dc88ea94ff329e52e.jpg" alt="">
        <span>枸杞之乡旗舰店</span>
      </div>
      <div class="content">
        <div class="all">
          <div>
            <img src="http://i2.hdslb.com/bfs/archive/8a64f786a0282ea753667b3dc88ea94ff329e52e.jpg" alt="">
          </div>
          <div class="alltitle">
            <p style="font-size: 12px;color: #393939;letter-spacing: 1px;">新疆精河头茬枸杞，精选“中国枸杞之乡”新疆精河头茬枸</p>
            <p style="position: absolute;bottom: 0px;color: #FF0000;font-size: 14px;vertical-align: middle">
              <span style="letter-spacing: 1px;">¥138</span>
            </p>
            <div class="addsum" style="vertical-align: middle;margin-bottom: 7px;">
              <div style="float: left;height: 19px;width: 24px;background: #F2F2F2;font-size: 14px;color: #8F8F8F;text-align: center;line-height: 19px;vertical-align: middle">-</div>
              <span style="vertical-align: middle;color: #393939;font-size: 14px;">1</span>
              <div style="float: right;height: 19px;width: 24px;background: #F2F2F2;font-size: 14px;color: #8F8F8F;text-align: center;line-height: 19px;vertical-align: middle">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mod1" style="margin-top: 10px!important;margin-bottom: 62px;">
      <div class="form">
        <div>
          <label>配送方式</label>
          <input type="text" value="快递免费" style="float: right;text-align: right!important;padding-right: 15px!important;color: black!important;" disabled="disabled">
        </div>

        <div>
          <label>买家留言</label>
          <input type="text" placeholder="选填：填写内容已和卖家协商">
        </div>
      </div>
    </div>

    <div class="footer">
      <span style="color: #8F8F8F;font-size: 14px;letter-spacing: 1px;padding-left: 10px;">合计：</span>
      <span style="color: #FF0000;font-size: 14px;letter-spacing: 1px;">¥138</span>
      <div style="display: inline-block;width: 160px;height: 41px;background: #FF0000;position: absolute;right: 27px;line-height: 41px;color: white;letter-spacing: 1px;top: 50%;margin-top: -20.5px;text-align: center;font-size: 16px;border-radius: 50px;" @click="pay()">提交订单</div>
    </div>
  </div>
</template>

<script>
  import citys from '@/utils/getPlace.js'
  export default {
    data () {
      return {
        region: citys,
        placevalue: ''
      }
    },
    methods: {
      bindRegionChange (e) {
        this.placevalue = e.target.value[0] + '-' + e.target.value[1] + '-' + e.target.value[2]
      },
      pay () {
        wx.login({
          success: function (res) {
            if (res.code) {
              wx.requestPayment({
                timeStamp: '1490840662',
                nonceStr: '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
                package: 'prepay_id=wx2017033010242291fcfe0db70013231072',
                signType: 'MD5',
                paySign: '22D9B4E54AB1950F51E0649E8810ACD6',
                success: function (res) {
                  console.log(res)
                }
              })
            }
          }
        })
      }
    },
    onLoad () {
    }
  }
</script>

<style scoped>
  .getallcontent{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    /*position: fixed;*/
    position: absolute;
  }
.header{
  padding-left: 10px;
  background: #F2F2F2;
}
  .header div{
    width: 100%;
    height: 38px;
    font-size: 14px;
    color: #717171;
    line-height: 38px;
  }
.mod1{
  padding-left: 10px;
  padding-right: 10px;
  background: white;
}
.form{
  width: 100%;
  height: auto;
  /*border-radius: 20px;*/
}
.form div{
  height: 49px;
  width: 100%;
  line-height: 49px;
  border-bottom: 1px solid #F2F2F2;
}
.form div label{
  vertical-align: middle;
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
    width: 100%;
    height: 48px;
    text-align: center;
    color: white;
    letter-spacing: 1px;
    line-height: 48px;
    background: #8F8F8F;
    font-size: 14px;
  }
  .mod3{
  }
  .mod3 .title{
    width: 100%;
    height: 52px;
    line-height: 52px;
    border-bottom: 1px solid #F2F2F2;
    color: #4A4A4A;
    font-size: 12px;
    position: relative;
  }
.mod3 .title span{
  margin-left: 48px;
  letter-spacing: 1px;
  vertical-align: middle;
}
.mod3 .title img{
  height: 28px;
  width: 28px;
  position: absolute;
  top: 50%;
  margin-top: -14px;
  left: 10px;
  vertical-align: middle;
}
  .content{
    padding: 10px;
  }
.content div.all{
  width: 100%;
  height: auto;
  position: relative;
}
  .content img{
    height: 86px;
    width: 86px;
    border-radius: 10px;
    box-shadow: 5px 10px 5px #F3F3F3;
  }
  .alltitle{
    height: 86px;
    position: absolute;
    top: 0px;
    left: 93px;
  }
  .addsum{
    height: 19px;
    width: 74px;
    /*background: red;*/
    position: absolute;
    bottom: 0px;
    right: 16px;
    line-height: 19px;
    text-align: center;
  }
  .footer{
    height: 62px;
    width: 100%;
    border-top: 1px solid #F2F2F2;
    position: fixed;
    bottom: 0px;
    background: white;
    line-height: 62px;
    z-index: 9999999999999999999;
  }
</style>
