<template>
  <div class="phonecontent">
    <swiper v-show="clickshow==false" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" class="" :style="{height:height+'px'}">
      <div v-for="item in bannerArr" :key="index">
        <swiper-item>
          <img :src="item.imageUrl" class="slide-image" style="width: 100%;height: 100%;"/>
        </swiper-item>
      </div>
    </swiper>
    <!--轮播-->
    <div class="form">
      <div class="wrap">
        <input v-show="clickshow==true" disabled="disabled" type="text" v-model="params.callee" maxlength="11" style="width: 100%;text-align: center;font-size:26px;height: 50px;line-height: 50px;letter-spacing: 1px;">
      </div>
      <div class="wrap">
        <div @click="numClick(1)">
          <p class="num">1</p>
          <p class="yinwen">abc</p>
        </div>
        <div @click="numClick(2)">
          <p class="num">2</p>
          <p class="yinwen">ABC</p>
        </div>
        <div @click="numClick(3)">
          <p class="num">3</p>
          <p class="yinwen">DEF</p>
        </div>
      </div>
      <div class="wrap">
        <div @click="numClick(4)">
          <p class="num">4</p>
          <p class="yinwen">GHI</p>
        </div>
        <div @click="numClick(5)">
          <p class="num">5</p>
          <p class="yinwen">JKL</p>
        </div>
        <div @click="numClick(6)">
          <p class="num">6</p>
          <p class="yinwen">MNO</p>
        </div>
      </div>
      <div class="wrap">
        <div @click="numClick(7)">
          <p class="num">7</p>
          <p class="yinwen">PQRS</p>
        </div>
        <div @click="numClick(8)">
          <p class="num">8</p>
          <p class="yinwen">TUV</p>
        </div>
        <div @click="numClick(9)">
          <p class="num">9</p>
          <p class="yinwen">WXYZ</p>
        </div>
      </div>
      <div class="wrap">
        <div>
          <img src="/static/images/telephone_call_records@3x.png" alt="">
          <p class="yinwen" style="color: #393939!important;font-size: 12px!important;">通话记录</p>
        </div>
        <div style="line-height: 65px!important;" @click="numClick(0)">
          <p class="num">0</p>
        </div>
        <div style="line-height: 65px!important;" @click="deletenum()">
          <img src="/static/images/telephone_cancellation@3x.png" alt="" style="width: 20px!important;">
        </div>
      </div>
      <div class="wrap">
        <div style="line-height: 65px;">
          <img src="/static/images/telephone_call_button@3x.png" alt="" style="width: 40px;height: 40px;position: absolute;top: 50%;margin-top: -20px;left: 50%;margin-left: -20px" @click="call()">
        </div>
      </div>
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
          callee: ''
        },
        params2: {
          userId: this.$saveToken.getToken().token
        },
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 900,
        circular: true,
        height: '',
        bannerArr: [],
        numarr: [],
        clickshow: false
      }
    },
    methods: {
      async getBanner (params) {
        var bannerArr = await this.$net.get('http://api.kuayet.com:8080/crossindustry/phonePage/getImageUrl', params)
        this.bannerArr = bannerArr.list
        // console.log(bannerArr.list);
      },
      numClick (num) {
        this.clickshow = true
        if (this.params.callee.length!=11) {
          this.params.callee += num
        } else {
          return false
        }
      },
      //删除最后一位字符
      deletenum () {
        if (this.params.callee.length!=1) {
          this.params.callee = this.params.callee.substring(0, this.params.callee.length - 1)
        } else {
          this.clickshow = false
          this.params.callee = ''
        }
      },
      call () {
        if (!(/^1[34578]\d{9}$/.test(this.params.callee))) {
          wx.showToast({
            title: '手机号码有误',
            icon: 'none'
          })
          return false
        } else {
          this.$net.get('http://api.kuayet.com:8080/crossindustry/phonePage/doPhone', this.params)
          wx.showToast({
            title: '呼叫成功',
            icon: 'none'
          })
          wx.navigateTo({
            url: '../waitlisten/main?phonenum=' + this.params.callee,
            redirect: false
          })
        }
      },
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
      },
      getHeight (res) {
        const _this = this
        var query = wx.createSelectorQuery()
        query.select('.form').boundingClientRect(function (rect) {
          _this.height = res.windowHeight - rect.height
        }).exec()
      }
    },
    onPullDownRefresh () {
      this.getBanner(this.params2)
    },
    onLoad () {
      const _this = this
      this.getHeight()
      wx.getSystemInfo({
        success: function (res) {
          _this.getHeight(res)
          // this.height = res.windowHeight
        }
      })
      this.getBanner(this.params2)
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
  .form{
    position: fixed;
    height: auto;
    width: 100%;
    bottom: 0px;
    left: 0px;
    background: white;
  }
  .wrap{
    display: flex;
  }
  .wrap div{
    flex: 1;
    height: 65px;
    text-align: center;
    line-height: 60px;
    position: relative;
  }
  .wrap div img{
    width: 16px;
    height: 16px;
  }
  .wrap div p.num{
    color: #4A4A4A;
    font-size: 30px;
  }
  .wrap div p.yinwen{
    color: #8F8F8F;
    position: absolute;
    top: 50px;
    font-size: 14px;
    height: 14px;
    width: 80px;
    left: 50%;
    margin-left: -40px;
    line-height: 14px;
    font-weight: bold;
    letter-spacing: 1px;
  }

</style>
