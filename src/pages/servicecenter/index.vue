<template>
  <div class="qcodeimg">
    <div class="mod1">
      <div class="qcode">
        <div style="float: left">
          <img :src="src1" alt="" style="width: 120px;height: 120px;" @longpress="saveImg(src1)">
          <p>微信公众号</p>
        </div>
        <div style="float: right">
          <img :src="src2" alt="" style="width: 120px;height: 120px;" @longpress="saveImg(src2)">
          <p>官方微博</p>
        </div>
      </div>
    </div>

    <div style="text-align: center;color: #717171;font-size: 14px;margin-top:80px;">长按二维码即可保存</div>

    <div class="mod3">
      <div class="mod_item">
        <div style="" class="weixinphone">专属客服微信：{{code}}</div>
        <div style="" class="fuzhi" @click="fuzhi()">复制</div>
      </div>
      <div class="mod_item">
        <div style="" class="weixinphone">专属客服电话：{{phone}}</div>
        <div style="" class="fuzhi" @click="callPhone()">拨打</div>
      </div>
    </div>

    <p style="text-align: center;color: #717171;font-size: 12px;margin-top: 15px;letter-spacing: 1px;">服务时间：周一至周六 9:00-18:00</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        code: '79216969',
        phone: '0571-87682268',
        src1: '/static/images/appcode.png',
        src2: '/static/images/appcode.png'
      }
    },
    methods: {
      fuzhi () {
        const _this = this
        wx.setClipboardData({
          data: _this.code,
          success: function (res) {
          }
        })
      },
      callPhone () {
        const _this = this
        wx.makePhoneCall({
          phoneNumber: _this.phone
        })
      },
      saveImg (src) {
        wx.getImageInfo({
          src: src,
          success: function (res) {
            wx.saveImageToPhotosAlbum({
              filePath: res.path,
              success: function (res) {
                wx.showToast({
                  title: '保存成功',
                  icon: 'none'
                })
              }
            })
          }
        })
      }
    }
  }
</script>

<style scoped>
  .qcodeimg{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
  /*position: fixed;*/
    position: absolute;
  }
  .mod1{
    padding-left: 43px;
    padding-right: 43px;
  }
  .mod1 div.qcode{
    height: 120px;
    width: 100%;
    /*background: #0bb20c;*/
    margin-top: 51px;
  }
  .mod1 div.qcode div{
    height: 150px;
    text-align: center;
  }
  .mod1 div.qcode div p{
    color: #393939;
    padding-top: 16px;
    letter-spacing: 1px;
  }
  .mod3{
    padding-left: 38px;
    padding-right: 38px;
  }
  .mod_item{
    width: 100%;
    height: 35px;
    border: 1px solid #F08400;
    border-radius: 30px;
    margin-top: 20px;
  }
  .weixinphone{
    width: 80%;height: 100%;background: #F08400;float: left;border-radius: 30px 0px 0px 30px;
    color: #FFFFFF;
    font-size: 14px;
    line-height: 35px;
    letter-spacing: 1px;
    text-align: center;
  }
  .fuzhi{
    width: 20%;height: 100%;background: white;float: right;border-radius: 0px 30px 30px 0px;
    text-align: center;
    color: #F08400;
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 35px;
  }
</style>
