<template>
  <div>
    <!--商家主页头部-->
    <div class="mod1">
      <div class="header">
        <img src="/static/images/head_portraityuan.png" alt="">
        <div class="headertext">
          <p>星巴克Starbucks</p>
          <p>官方旗舰店</p>
        </div>
      </div>
    </div>

    <!--优惠券-->
    <div class="mod2">
      <ul>
        <li>
          <img src="/static/images/disconbg.png" alt="">
          <div style="float: left" class="leftdis">¥100</div>
          <div style="float: right" class="rightdis">¥10</div>
        </li>
        <li>
          <img src="/static/images/disconbg.png" alt="">
          <div style="float: left" class="leftdis">¥100</div>
          <div style="float: right" class="rightdis">¥10</div>
        </li>
        <li>
          <img src="/static/images/disconbg.png" alt="">
          <div style="float: left" class="leftdis">¥100</div>
          <div style="float: right" class="rightdis">¥10</div>
        </li>
        <li>
          <img src="/static/images/disconbg.png" alt="">
          <div style="float: left" class="leftdis">¥100</div>
          <div style="float: right" class="rightdis">¥10</div>
        </li>
      </ul>
    </div>

    <!--定位-->
    <div class="mod3">
      <div class="location">
        <img src="/static/images/merchant_address_box@2x.png" alt="" class="bgimg">
        <img src="/static/images/merchant_address_location@2x.png" alt="" style="height: 17px;width: 16px;" class="logimg">
        <div style="height: 100%;" class="locationText">
          <span style="padding-left: 3px;">杭州市江干区新塘路58号星巴克</span>
        </div>
        <div class="locationicons">
          <div class="daohang" style="float: left" @click="goLocation()">
            <img src="/static/images/merchant_address_navigation@2x.png" alt="">
          </div>
          <div style="width: 1px;height: 21px;position: absolute;background: #D9D9D9;left: 50%;margin-left: -0.5px;top: 50%;margin-top: -10.5px;"></div>
          <div class="dianhua" style="float: right" @click="callphone()">
            <img src="/static/images/merchant_address_telephone@2x.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="mod5" style="width: 100%;">
      <scroll-view scroll-x class="top">
        <div class="tabbar" :class="currentTab==0?'activeTab':''" @click="tabClick(0)">
          <div v-show="currentTab==0" style="width: 10px;height: 2px;background: #F08400;position: absolute;left: 50%;margin-left: -5px;bottom: 0px;"></div>
          明星产品
        </div>
        <div class="tabbar" :class="currentTab==1?'activeTab':''" @click="tabClick(1)">
          <div v-show="currentTab==1" style="width: 10px;height: 2px;background: #F08400;position: absolute;left: 50%;margin-left: -5px;bottom: 0px;"></div>
          商家详情
        </div>
      </scroll-view>
      <swiper :current="currentTab" @change="changeTab" id="swiperContent">
        <!--明星产品-->
        <swiper-item>
          <ul class="shopcontent">
            <li>
              <div>
                <img src="http://img4.imgtn.bdimg.com/it/u=3823744570,2679992710&fm=11&gp=0.jpg" alt="">
                <p style="padding-left: 12px;padding-right: 12px;" class="title">新疆精河头茬枸杞，精选“中国枸杞之乡”</p>
                <p style="padding-left: 12px;padding-right: 12px;height: 1.4rem;line-height: 1.4rem;" class="discon">
                  <span style="color:#393939;font-size: 12px;vertical-align: middle">¥288</span>
                  <span style="color:#FF0000;font-size: 14px;float: right;vertical-align: middle">可抵<span style="font-size: 12px;">¥</span>150</span>
                </p>
              </div>
            </li>
            <li>
              <div>
                <img src="http://img4.imgtn.bdimg.com/it/u=3823744570,2679992710&fm=11&gp=0.jpg" alt="">
                <p style="padding-left: 12px;padding-right: 12px;" class="title">新疆精河头茬枸杞，精选“中国枸杞之乡”</p>
                <p style="padding-left: 12px;padding-right: 12px;height: 1.4rem;line-height: 1.4rem;" class="discon">
                  <span style="color:#393939;font-size: 12px;vertical-align: middle">¥288</span>
                  <span style="color:#FF0000;font-size: 14px;float: right;vertical-align: middle">可抵<span style="font-size: 12px;">¥</span>150</span>
                </p>
              </div>
            </li>
            <li>
              <div>
                <img src="http://img4.imgtn.bdimg.com/it/u=3823744570,2679992710&fm=11&gp=0.jpg" alt="">
                <p style="padding-left: 12px;padding-right: 12px;" class="title">新疆精河头茬枸杞，精选“中国枸杞之乡”</p>
                <p style="padding-left: 12px;padding-right: 12px;height: 1.4rem;line-height: 1.4rem;" class="discon">
                  <span style="color:#393939;font-size: 12px;vertical-align: middle">¥288</span>
                  <span style="color:#FF0000;font-size: 14px;float: right;vertical-align: middle">可抵<span style="font-size: 12px;">¥</span>150</span>
                </p>
              </div>
            </li>
            <li>
              <div>
                <img src="http://img4.imgtn.bdimg.com/it/u=3823744570,2679992710&fm=11&gp=0.jpg" alt="">
                <p style="padding-left: 12px;padding-right: 12px;" class="title">新疆精河头茬枸杞，精选“中国枸杞之乡”</p>
                <p style="padding-left: 12px;padding-right: 12px;height: 1.4rem;line-height: 1.4rem;" class="discon">
                  <span style="color:#393939;font-size: 12px;vertical-align: middle">¥288</span>
                  <span style="color:#FF0000;font-size: 14px;float: right;vertical-align: middle">可抵<span style="font-size: 12px;">¥</span>150</span>
                </p>
              </div>
            </li>
            <li>
              <div>
                <img src="http://img4.imgtn.bdimg.com/it/u=3823744570,2679992710&fm=11&gp=0.jpg" alt="">
                <p style="padding-left: 12px;padding-right: 12px;" class="title">新疆精河头茬枸杞，精选“中国枸杞之乡”</p>
                <p style="padding-left: 12px;padding-right: 12px;height: 1.4rem;line-height: 1.4rem;" class="discon">
                  <span style="color:#393939;font-size: 12px;vertical-align: middle">¥288</span>
                  <span style="color:#FF0000;font-size: 14px;float: right;vertical-align: middle">可抵<span style="font-size: 12px;">¥</span>150</span>
                </p>
              </div>
            </li>
            <li>
              <div>
                <img src="http://img4.imgtn.bdimg.com/it/u=3823744570,2679992710&fm=11&gp=0.jpg" alt="">
                <p style="padding-left: 12px;padding-right: 12px;" class="title">新疆精河头茬枸杞，精选“中国枸杞之乡”</p>
                <p style="padding-left: 12px;padding-right: 12px;height: 1.4rem;line-height: 1.4rem;" class="discon">
                  <span style="color:#393939;font-size: 12px;vertical-align: middle">¥288</span>
                  <span style="color:#FF0000;font-size: 14px;float: right;vertical-align: middle">可抵<span style="font-size: 12px;">¥</span>150</span>
                </p>
              </div>
            </li>
          </ul>
        </swiper-item>
        <!--商品详情-->
        <swiper-item>
          <div class="shopxiangqing">
            <div>
              <p class="titlexiangqing">店家环境</p>
              <div class="box">
                <ul>
                  <li><img src="http://pic1.win4000.com/wallpaper/2017-11-13/5a0905bae9f95.jpg" alt=""></li>
                  <li><img src="http://pic1.win4000.com/wallpaper/2017-11-13/5a0905bae9f95.jpg" alt=""></li>
                  <li><img src="http://pic1.win4000.com/wallpaper/2017-11-13/5a0905bae9f95.jpg" alt=""></li>
                  <li><img src="http://pic1.win4000.com/wallpaper/2017-11-13/5a0905bae9f95.jpg" alt=""></li>
                  <li><img src="http://pic1.win4000.com/wallpaper/2017-11-13/5a0905bae9f95.jpg" alt=""></li>
                </ul>
              </div>
            </div>
            <div>
              <p class="titlexiangqing">服务时间</p>
              <p class="text">9:00-10:00</p>
            </div>
            <div>
              <p class="titlexiangqing">商家介绍</p>
              <p class="text">星享更同步。现在您可以通过Apple Watch打开星巴克移动应用。更便捷地 支付、查询星享卡还有查找附近门店。</p>
            </div>
            <div>
              <p class="titlexiangqing">商家公告</p>
              <p class="text">星享更同步。现在您可以通过Apple Watch打开星巴克移动应用。更便捷地 支付、查询星享卡还有查找附近门店。</p>
            </div>
          </div>
        </swiper-item>
      </swiper>
    </div>

    <!--按钮-->
    <div style="height: 49px;background: #F08400;width: 100%;color: #FFFFFF;font-size: 18px;line-height: 49px;text-align: center;letter-spacing: 1px;position: fixed;bottom: 0px;" @click="payDiscon()">立即抵扣买单</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentTab: 0
      }
    },
    methods: {
      // 电弧拨打
      callphone () {
        wx.makePhoneCall({
          phoneNumber: '18868457449'
        })
      },
      goLocation () {
        wx.getLocation({//获取当前经纬度
          type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息
          success: function (res) {
            wx.openLocation({//​使用微信内置地图查看位置。
              latitude: 22.5542080000,//要去的纬度-地址
              longitude: 113.8878770000,//要去的经度-地址
              name: "宝安中心A地铁口",
              address:'宝安中心A地铁口'
            })
          }
        })
      },
      changeTab (e) {
        this.currentTab = e.mp.detail.current;
      },
      tabClick (index) {
        this.currentTab = index
      },
      //话费抵扣
      payDiscon () {
        wx.navigateTo({
          url: '../paydiscon/main'
        })
      }
    }
  }
</script>

<style scoped>
  .mod1{
    padding: 20px 20px 30px 20px;
  }
  .mod1 .header{
    width: 100%;
    height: 48px;
  }
  .mod1 img{
    height: 48px;
    width: 48px;
    vertical-align: middle;
  }
  .headertext{
    vertical-align: middle;
    display: inline-block;
    margin-left: 15px;
  }
  .headertext p{
    color: #4A4A4A;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .mod2{
    width: 100%;
    height: 39px;
    /*background: yellow;*/
    overflow-x: scroll;
    overflow-y: hidden;
    /*overflow-y: scroll;*/
  }
  .mod2::-webkit-scrollbar{
    display: none;
  }
  .mod2 ul{
    width: 800px;
    height: 39px;
  }
  .mod2 ul li{
    width: 110px;
    height: 39px;
    display: inline-block;
    margin-left: 15px;
    position: relative;
  }
  .mod2 ul li .leftdis{
    width: 50%;
    height: 39px;
    font-size: 14px;
    position: absolute;
    top: 0px;
    left: 0px;
    color: #FF0000;
    text-align: center;
    padding-top: 15px;
  }
  .mod2 ul li .rightdis{
    width: 50%;
    height: 39px;
    font-size: 12px;
    position: absolute;
    top: 0px;
    right: 0px;
    color: white;
    text-align: center;
    padding-top: 15px;
  }
  /*.mod2 ul li div:nth-child(1){*/
    /*width: 50%;*/
    /*height: 39px;*/
    /*!*background: #0bb20c;*!*/
    /*font-size: 12px;*/
    /*position: absolute;*/
    /*top: 0px;*/
    /*float: right;*/
  /*}*/
  .mod2 ul li img{
    height: 100%;
    width: 100%;
  }

  /*定位*/
  .mod3{
    padding: 23px 15px 0px 15px;
  }
  .mod3 .location{
    width: 100%;
    height: 51px;
    position: relative;
    line-height: 51px;
  }
  .mod3 .location .bgimg{
    height: 100%;
    width: 100%;
  }
  .logimg{
    position: absolute;
    top: 50%;
    margin-top: -8.5px;
    left: 15px;
    vertical-align: middle;
  }
  .locationText{
    position: absolute;
    width:4rem;
    left: 40px;
    top: 0px;
    color: #393939;
    font-size: 12px;
    vertical-align: middle;
  }
  .locationicons{
    width: 2rem;
    height: 100%;
    /*background: black;*/
    position: absolute;
    top: 0px;
    right: 0px;
  }
  .locationicons img{
    height: 12px;
    width: 12px;
    padding-bottom: 4px;
    vertical-align: middle;
  }
  .locationicons div{
    width: 50%;
    height: 100%;
    text-align: center;
    color: #393939;
  }
  .locationicon{
    position: absolute;
    top: 50%;
    margin-top: -10.5px;
    left: 15px;
  }
  .locationicon div{
    width: 50%;
    height: 100%;
  }
  /*ta切换*/
  .top{
    width: 100%;
    height: 50px;
    line-height: 50px;
    /*text-align: center;*/
    /*line-height: 42px;*/
    background: #fff;
    display: flex;
    border-bottom: 1px solid #F2F2F2;
    color: #393939;
    font-size: 14px;
    /*margin-left: 90px;*/
  }
  .tabbar{
    width: 50%;
    display: inline-block;
    text-align: center;
    position: relative;
  }
  .activeTab{
    color: #F08400!important;
  }
  #swiperContent{
    height: 800px;
    /*padding-left: 10px;*/
    /*padding-right: 10px;*/
    margin-top: 14px;
  }
  .shopcontent{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /*justify-content: center;*/
  }
  .shopcontent li{
    flex:2 1 auto;
    height: 261px;
    width: 45%;
    /*box-shadow: 5px 10px 5px #F3F3F3;*/
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    /*background: #586c94;*/
  }
  .shopcontent li div{
    border-radius: 10px;
    width: 100%;
    box-shadow: 5px 10px 5px #F3F3F3;
  }
  .shopcontent li img{
    height: 182px;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }
  .shopcontent li p.title{
    color: #393939;
    font-size: 12px;
  }
  .shopcontent li p.discon{

  }
  .shopxiangqing{
    padding-left: 14px;
    padding-right: 14px;
  }
  .shopxiangqing div{
    margin-bottom: 20px;
  }
  .titlexiangqing{
    color: #393939;
    font-size: 14px;
    letter-spacing: 1px;
  }
  .text{
    color: #393939;
    font-size: 10px;
    letter-spacing: 1px;
    margin-top: 10px;
  }
  .box{
    width: 100%;
    height: 88px;
    margin-top: 20px;
    overflow-x:scroll;overflow-y:hidden;
  }
  .box::-webkit-scrollbar{
    display: none;
  }
  .box ul{
    width: 800px;
    height: 88px;
  }
  .box li{
    display: inline-block;
    margin-right: 15px;
  }
  .box li img{
    height: 88px;
    width: 114px;
  }
</style>
