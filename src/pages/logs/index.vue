<template>
  <div>
    <div class="titlelocation" style="display: none;">
      <span>{{city}}</span>
      <image lazy-load="true" src="/static/images/down.png" alt="" class="downicon"></image>
      <image lazy-load="true" src="/static/images/scan.png" alt="" style="width: 16px;height: 16px;" @click="openScan"></image>
    </div>

    <div class="bannerSlider">
      <div style="position: absolute;top: 20px;z-index: 99999999999999999;width: 92%;padding-left: 4%;padding-right: 4%;height: 35px;">
        <div style="width: 100px;height: 35px;float: left" class="location">
          <image lazy-load="true" class="img1" src="/static/images/positioning.png" style="width: 10px;height: 15px;" alt=""></image><span>{{city}}</span>
        </div>
        <div style="height: 35px;float: right;display: flex">
          <div style="flex: 1;color: #ffffff;text-align: center;line-height: 12px;">
            <p style="font-size: 16px;">34</p>
            <p style="font-size: 8px;">晴夜</p>
          </div>
          <div style="flex: 1;padding-left: 7px;">
            <image lazy-load="true" src="/static/images/business_weather@2x.png" alt="" style="width: 18px;height: 20px;"></image>
          </div>
        </div>
      </div>
      <div style="position: absolute;top: 52px;z-index: 99999999999999999;width: 92%;padding-left: 4%;padding-right: 4%;">
        <input type="text" style="height: 28px;" placeholder="输入商品名称／宝贝标题搜索">
      </div>
      <div style="padding-left: 7%;padding-right: 7%;">
        <div style="width: 86%;height: 30px;position: absolute;top: 75px;z-index: 99999999999999;" class="hotall">
          <ul :style="{width:width*hotarr.length+'px'}">
            <li v-for="item in hotarr">{{item}}</li>
          </ul>
        </div>
      </div>
      <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" indicator-color="rgba(255, 255, 255, 1)" indicator-active-color="rgba(143, 143, 143, 1)" style="width: 100%;height: 200px!important;">
        <div v-for="item in bannerArr" :key="index">
          <swiper-item>
            <image v-if="item.advertiseImageUrl" lazy-load="true" :src="item.advertiseImageUrl" class="slide-image"></image>
          </swiper-item>
        </div>
      </swiper>
    </div>
    <!--商家分类-->
    <div class="menulist" style="">
      <ul>
        <li v-for = "item in tabArr" @click = "openFood(item.id)">
          <image v-if="item.imageUrl" lazy-load="true" :src="item.imageUrl" alt="" class="tabimg"></image>
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>

    <!--商家头条-->
    <div class="shoptitle" style="padding-left: 20px;padding-right: 20px;padding-top: 11px;padding-bottom: 11px;">
      <div style="width: 100%;">
        <image lazy-load="true" class="img6" src="/static/images/business_business_headlines@2x.png" alt="" style="width: 27px;height: 28px;"></image>
        <image lazy-load="true" class="img6" src="/static/images/head_portraityuan.png" alt="" style="width:34px;height: 34px;padding-left: 7px;"></image>
        <swiper class="swiper_container" vertical="true" autoplay="true" circular="true" interval="2000">
          <swiper-item class="swiper-item" v-for="item in headerList">
            <p style="font-size: 0.7rem;">{{item.headline}}</p>
            <p style="font-size: 0.7rem;color: #393939">@{{item.headline}}</p>
          </swiper-item>
        </swiper>
        <image lazy-load="true" class="img6" src="/static/images/merchant_notice@2x.png" alt="" style="width: 16px;height: 14px;margin-left: 0.8rem;"></image>
        <span style="color: #717171;font-size: 12px;float: right;line-height: 2.2rem;">{{date}}</span>
      </div>
    </div>

    <!--灰色线条-->
    <div style="width: 100%;height:10px;background: #F2F2F2"></div>
    <!--附近商家-->
    <div style="background: white;width: 100%;text-align: center">
      <image lazy-load="true" src="/static/images/merchants_nearby_merchants@3x.png" alt="" style="width: 106px;height: 15px;padding: 15px 0px 10px 0px;"></image>
    </div>
    <!--附近商家列表-->
    <div class="nearbyShops">
      <div scroll-x class="top">
        <div class="tabbar" :class="params.mark==0?'tabactive':''" @click="tabIndex(0)">
          <div v-show="params.mark==0" style="height: 1px;width:35px;background:#F08400;position: absolute;bottom: -1px;left: 50%;margin-left: -17.5px;"></div>
          距离最近
        </div>
        <div class="tabbar" :class="params.mark==1?'tabactive':''" @click="tabIndex(1)">
          <div v-show="params.mark==1" style="height: 1px;width:35px;background:#F08400;position: absolute;bottom:-1px;left: 50%;margin-left: -17.5px;"></div>
          折扣最多
        </div>
        <div class="tabbar" :class="params.mark==2?'tabactive':''" @click="tabIndex(2)">
          <div v-show="params.mark==2" style="height: 1px;width:35px;background:#F08400;position: absolute;bottom: -1px;left: 50%;margin-left: -17.5px;"></div>
          销量最高
        </div>
      </div>
    </div>
    <!--列表数据-->
    <div class="nearList" style="padding: 14px;">
      <div class="nearList_item" v-for="(item,index) in nearList" :index="index" :key="index" :data-index="index" @click="openShophome(item.shopId)">
        <div style="">
          <image v-if="item.shopHeadImageUrl" lazy-load="true" :src="item.shopHeadImageUrl" class="itemimg srtImg" alt=""></image>
        </div>
        <div style="font-size: 12px;position: absolute;border-bottom: 1px solid #F2F2F2;width: 70%;height: 70px;" class="itemText">
          <p>{{item.title}}</p>
          <p class="centerItem">
            <image lazy-load="true" class="itemimg" src="/static/images/businesses_icon@2x.png" alt="" style="width: 12px;height: 12px;"></image>
            <span style="font-size: 10px;color: #393939;padding-left: 6px;">{{item.shopType}}</span>
            <span style="font-size: 10px;color: #393939;padding-left: 17px;">人均消费{{item.averageMoney}}元</span>
            <span style="float: right;font-size: 10px;color: #393939;vertical-align: middle">{{item.distance}}m</span>
          </p>
          <scroll-view scroll-x="true" class="top2">
            <div class="tabbar2" v-for="(itemName, idx) in item.deductionList" :key="idx" :data-index="idx" style="font-size: 10px!important;">
              {{itemName.requireValue}}抵{{itemName.value}}
            </div>
          </scroll-view>
          <!--<div class="discon" style="margin-top: 0.3rem;">-->
            <!--<div style="font-size: 10px;">-->
              <!--<span v-for="(itemName, idx) in item.deductionList" :key="idx" :data-index="idx" style="font-size: 10px!important;">{{itemName.requireValue}}抵{{itemName.value}}</span>-->
            <!--</div>-->
          <!--</div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      params: {
        productName: '',
        latitude: '',
        longitude: '',
        pageNum: 1,
        num: 5,
        mark: 0
      },
      nearList: [],
      // 商家列表ending
      headerList: [],
      // 新闻滚动ending
      city: '定位中...',
      str: '',
      //banner
      bannerArr: [],
      hotarr: [],
      width: '40',
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 900,
      circular: true,
      //bannerending
      // 分类数据
      tabArr: [],
      //获取当前时间
      date: '',
      // tab切换
      activeIndex: 0
    }
  },
  methods: {
    //获取banner
    async getBanner (params) {
      var bannerArr = await this.$net.get("/crossindustry/shopPage/getShopAdvertiseImage",params);
      this.bannerArr = bannerArr.list;
      // console.log(bannerArr.list);
    },
    async getTabtype () {
      var tabarr = await this.$net.get("/crossindustry/shopPage/getShopTypeByLevel?level=1",{});
      this.tabArr = tabarr.list.slice(0,10);
    },
    async getHot () {
      var hotarr = await this.$net.get("/crossindustry/shopPage/getHotWord",{});
      this.hotarr = hotarr.list
    },
    getDate () {
      var date = new Date().getMonth() + 1 + '月' + new Date().getDate() + '日';
      return date;
    },
    tabIndex (index) {
      this.params.mark = index;
      this.nearList = [];
      this.params.pageNum = 1;
      this.getNearList(this.params);
    },
    async getNearList (params) {
      var nearList = await this.$net.get("/crossindustry/shopPage/nearbyShops",params);
      for (var i = 0;i<nearList.list.length;i++) {
        nearList.list[i].distance = nearList.list[i].distance.toFixed(2);
      }
      this.nearList = this.nearList.concat(nearList.list);
    },
    async getHeaderLine () {
      var headerList = await this.$net.get("/crossindustry/shopPage/getHeadLine",{});
      this.headerList = headerList.list;
    },
    getlocation () {
      const _this = this;
      wx.getLocation({
        type: 'gcj02',
        altitude:true,
        success: function (res) {
          _this.nearList = [];
          _this.params = {
            productName: '',
            latitude: res.latitude,
            longitude: res.longitude,
            pageNum: 1,
            num: 5,
            mark: 0
          };
          _this.getPlace(_this.params.latitude,_this.params.longitude);
          _this.getNearList(_this.params);
        },
        fail: function (error) {
          console.log(error)
        }
      })
    },
    getPlace(lat,lng) {
      const _this = this;
      wx.request({
        header: {
          'Content-Type': 'application/text'
        },
        url: 'http://apis.map.qq.com/ws/geocoder/v1/?location='+lat+','+lng+'&key=MVGBZ-R2U3U-W5CVY-2PQID-AT4VZ-PDF35',
        success: function (res) {
          if (res.statusCode==200) {
            console.log(res.data.result.address_component);
            _this.city = res.data.result.address_component.city
            // console.log(res.data.result.address_component.city)
          }else{
            _this.city = '定位失败'
          }
        }
      })
    },
    openFood (id) {
      console.log(id)
      wx.navigateTo({
        url: '../foodday/main?id=' + id + '&lat=' + this.params.latitude + '&lng=' + this.params.longitude,
        redirect: false
      })
    },
    //打开商家主页
    openShophome (id) {
      wx.navigateTo({
        url: '../shophome/main?shopId=' + id,
        redirect: false
      })
    }
  },
  created () {
  },
  mounted () {
  },
  onLoad () {
    this.getlocation();
    var params = {
      source: '电商购'
    }
    this.getBanner(params)
    this.getHot()
    this.getTabtype()
    this.getHeaderLine()
    this.date = this.getDate()
  },
  onPullDownRefresh () {
    wx.showNavigationBarLoading()
    this.getlocation()
    this.bannerArr = []
    var params = {
      source: '电商购'
    }
    this.getBanner(params)
    this.hotarr = []
    this.getHot()
    this.tabArr = []
    this.getTabtype()
    this.getHeaderLine()
  },
  //上拉加载
  onReachBottom () {
    wx.showLoading({
      title: '玩命加载中'
    })
    this.params.pageNum += 1
    this.getNearList(this.params)
  }
}
</script>

<style>
  .hotall{
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .hotall::-webkit-scrollbar{
    display: none;
  }
  .hotall ul{
    width: auto;
    height: 30px;
  }
  .hotall ul li{
    height: 30px;
    display: inline-block;
    /*margin-left: 15px;*/
    line-height: 30px;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 1px;
    text-align: center;
    margin-right: 10px;
    /*position: relative;*/
  }
  /*热词语*/
  .titlelocation{
    width: 100%;
    height: 40px;
    background: white;
    line-height: 40px;
    font-size: 14px;
    color: black;
    position: relative;
  }
  .titlelocation span{
    padding-left: 10px;
  }
  .titlelocation img{
    position: absolute;
    right: 10px;
    top:45%;
    margin-top: -8px;
  }
  .oneline{
    height: 10px;
    background: #F2F2F2;
    text-align: left;
  }
  .downicon{
    width: 14px;
    height: 10px;
    position: absolute;
    left: 1.1rem;
    top:50%;
    margin-top: -5px;
  }
  .loveshop{
    position: relative;
    height: 20px;
    font-size: 14px;
    color: black;
    line-height: 20px;
  }
  .loveshop .title{
    height: 20px;
    width: 100%;
    line-height: 20px;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .title span:first-child{
    float: left;
    padding-left: 10px;
    padding-top: 10px;
  }
  .title span:nth-child(2){
    float: right;
    padding-right: 10px;
    padding-top: 10px;
    font-size: 12px!important;
    color: grey;
  }
  .slide{
    margin-top: 20px;
    width: 100%;
    height: auto;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .slide::-webkit-scrollbar{
    display: none;
  }
  .slide ul{
    display: flex;
  }
  .slide ul li{
    /*flex: 1;*/
    width: 2rem;
    font-size: 14px;
    margin-left: 10px;
  }
  .slide ul li:last-child{
    padding-right: 10px;
  }
  .slide ul li img{
    width: 2rem;
    height: 2rem;
  }
  /*banner样式*/
  .bannerSlider{
    position: relative;
  }
  .bannerSlider input{
    width: 100%;
    text-align: center;
    background: rgba(255, 255, 255, 0.5);
    /*padding-left: 13px;*/
    font-size: 12px;
    color: #8F8F8F;
    border-radius: 20px;
  }
  .slide-image {
    width: 100%;
    height: 100%;
  }
  /*商家类型分类*/
  .menulist{
    padding-left: 10px!important;padding-right: 10px!important;
    background: white;
  }
  .menulist ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 9px;
  }
  .menulist ul li{
    text-align: center;
    flex: 1;
    width: 20%;
    height: 49px;
    min-width: 20%;
    max-width: 20%;
    font-size: 12px;
    padding: 0px!important;
    padding-top: 20px!important;
    /*padding-top: 0.5rem!important;*/
  }
  .menulist ul li p{
    margin: 0px!important;
    padding-top: 5px;
    color: #393910;
    font-weight: normal;
  }
  .menulist ul li .tabimg{
    height: 25px!important;
    width: 25px!important;
  }
  /*定位样式*/
  .location span{
    color: #ffffff;
    font-size: 16px;
    padding-left: 7px;
    vertical-align: middle;
    letter-spacing: 2px;
  }
  .location .img1{
    vertical-align: middle;
  }
  /*商家头条英文*/
  .shoptitle .img6{
    vertical-align: middle;
  }
  .swiper_container{
    height: 40px;
    width: 3.2rem;
    display: inline-block;
    vertical-align: middle;
    margin-left: 0.2rem;
  }
  .swiper_container .swiper-item{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    letter-spacing: 2px;
  }
  /*tabbar*/
  .top{
    display: flex;
    text-align: center;
    /*line-height: 42px;*/
    white-space: nowrap;
    background: #fff;
    border-bottom: 1px solid #F2F2F2;
  }
  .top2{
    display: flex;
    /*text-align: center;*/
    /*line-height: 42px;*/
    white-space: nowrap;
    background: #fff;
    position: absolute;
    padding-bottom: 13px;
    /*bottom: 0px;*/
    /*border-bottom: 1px solid #F2F2F2;*/
  }
  @media (max-width: 1500px) {
    .top2{
      bottom: 0px;
    }
    .itemText{
      left: 84px;
    }
    .centerItem{
      margin-top: 4px;
    }
  }
  @media (min-width: 700px) and (max-width: 1000px) {
    .top2{
      bottom: 0px;
    }
    .itemText{
      left: 84px;
    }
    .centerItem{
      margin-top: 4px;
    }
  }
  @media (min-width: 350px) and (max-width: 700px) {
    .top2{
      bottom: -10px;
    }
    .itemText{
      left: 94px;
    }
    .centerItem{
      margin-top: 7px;
    }
  }
  .tabbar{
    font-size: 12px;
    padding-bottom: 10px!important;
    /*height: 42px;*/
    color: #393939;
    flex: 1;
    position: relative;
  }
  .tabbar2{
    font-size: 10px;
    margin-right: 10px;
    padding: 0px 5px;
    border: 1px solid #F08400;
    border-radius: 5px;
    /*padding-bottom: 10px!important;*/
    /*height: 42px;*/
    color: #FF0000;
    flex: 1;
    position: relative;
  }
  .tabactive{
    color: #F08400;
  }

  /*数据列表*/
  .nearList_item{
    height: 70px;
    position: relative;
    /*background: yellow;*/
  }
  .nearList_item .itemimg{
    height: 70px;
    width: 70px;
    border-radius: 10px;
  }
  .nearList_item div{
    display: inline-block;
  }
  .itemText p:first-child{
    font-size: 14px;
    font-weight: bold;
  }
  .itemText p:nth-child(2) .itemimg{
    vertical-align: middle;
  }
  .itemText p:nth-child(2) span{
    vertical-align: middle;
  }
  .discon span{
    color: #FF0000;
    padding: 1px 2px;
    border-radius: 5px;
    border:1px solid #F08400;
    margin-right: 10px;
  }
  .discon{
    width: 90%;
    margin-top: 0.2rem;
    /*overflow-x: hidden;*/
    overflow-x: scroll;
  }
  .discon::-webkit-scrollbar{
    display: none;
  }
  .discon div{
    font-size: 10px;
  }
  .nearList_item{
    margin-bottom: 25px;
  }
  .nearList_item:last-child{
    margin-bottom: 0px!important;
  }

  /*懒加载*/
  .srtImg{
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    opacity: 0;
    animation: fadeIn 1s forwards 1s;
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
