<template>
  <div>
    <div class="content">
      <div class="page">
        <div class="page__bd page__bd_spacing">
          <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular">
            <div v-for="item in bannerArr" :key="index">
              <swiper-item>
                <image :src="item.advertiseImageUrl" class="slide-image" />
              </swiper-item>
            </div>
          </swiper>
        </div>
      </div>
      <div class="mod2">
        <img v-show="activeIndex==0" src="/static/images/2@3x.png" alt="">
        <img v-show="activeIndex==1" src="/static/images/1@3x.png" alt="">
        <img v-show="activeIndex==2" src="/static/images/chose3.png" alt="">
        <ul>
          <li @click="showList(0,'淘宝',1)" v-bind:class="activeIndex==0 ? 'active':''">淘宝</li>
          <li @click="showList(1,'京东',2)" v-bind:class="activeIndex==1 ? 'active':''">京东</li>
          <li @click="showList(2,'拼多多',3)" v-bind:class="activeIndex==2 ? 'active':''">拼多多</li>
        </ul>
      </div>
      <!--搜索框-->
      <div class="mod3">
          <input type="search" v-model="value" placeholder="输入淘宝天猫商品名称／宝贝标题搜索" @confirm="confirm($event)">
      </div>
      <!--tab分类列表-->
      <div class="mod4">
        <ul>
          <li v-for="(item,index) in bigTypearr" @click="openList(item.bigestTypeId)">
            <img :src="item.typeImageUrl" alt="" :key="index" style="width: 25px;height: 25px;">
            <p>{{item.typeName}}</p>
          </li>
        </ul>
      </div>
    </div>

    <div style="height: 10px;background: #F2F2F2;width: 100%;"></div>
    <div class="contain" style="padding-top: 10px;position: relative">
      <div style="display: inline-block;position: absolute;font-size: 16px;font-weight: bold;letter-spacing: 1px;padding-left: 10px;">全部商品</div>
      <scroll-view scroll-x="true" class="top">
        <div class="tabbar" :class="{'tabbar-bottom':params.productType-1==index}" v-for="(item,index) in tabArr" :key="index" @click="clickTab(index)">
          <div v-show="params.productType-1==index" style="height: 2px;width: 12px;background: #F08400;position: absolute;bottom: 0px;left: 50%;margin-left: -6px;"></div>
          {{item.typeName}}
        </div>
      </scroll-view>
      <div :current="params.productType-1" @change="changeTab" id="swiperContent" style="height: auto;">
        <div class="swiperall">
            <div v-for="item in imgUrls" style="height: 117px;padding: 5px 8px;" @click="openXiangqing(item.id)">
              <img :src="item.imageUrl" alt="" style="width: 117px;height: 117px;float: left;">
              <div style="height: 100%;margin-left: 133px;" class="Listall">
                <p style="font-size: 12px;">
                  <img v-if="item.source=='京东'" src="/static/images/jingdong@3x.png" alt="">
                  <img v-if="item.source=='淘宝'" src="http://pa8vmyrlm.bkt.clouddn.com/taobao@3x.png" alt="">
                  <img v-if="item.source=='拼多多'" src="/static/images/pinduoduo@3x.png" alt="">
                  <span>{{item.name}}</span>
                </p>
                <p>{{item.source}}价:<span style="font-size: 14px;color: #FF0000">{{item.price}}</span>元<span style="float: right">销量：{{item.salesVolume}}件</span></p>
                <p><span>可抵:{{item.deduction}}元</span></p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      params: {
        pageNum: 1,
        num: 8,
        source: "淘宝",
        bigTypeName: "",
        productType: 1,
        productName: ""
      },
      //大分类
      bigTypearr: "",
      params2: {
        bigestTypeId: 1
      },
      //小分类
      tabArr: [],
      params3: {
        source: "淘宝"
      },
      value: "",
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 900,
      circular: true,
      height: "127",
      imgUrls: [],
      bannerArr: [],
      nav: [{
        name: "充值记录"
      }, {
        name: "短信历史"
      }],
      currentTab: 0,
      activeIndex: 0,
      shopActiveindex: 0,
      width: "",
      currentTab2: 0
    };
  },
  computed: {
  },
  methods: {
    showList (index,source,bigType) {
      this.activeIndex = index;
      this.params2.bigestTypeId = bigType;
      this.getBigtype(this.params2);
      this.params3.source = source;
      this.getTabarr(this.params3);
      this.imgUrls = [];
      this.params.pageNum = 1;
      this.params.source = source;
      this.getList(this.params);
    },
    tabActive (index) {
      this.shopActiveindex = index;
    },
    clickTab (e) {
      // this.params.productType = e;
      this.params.productType = e+1;
      this.imgUrls = [];
      this.params.pageNum = 1;
      this.getList(this.params);
    },
    changeTab (e) {
      // this.currentTab2 = e.mp.detail.current;
      this.params.productType = e.mp.detail.current+1;
    },
    async getList (params) {
      var List = await this.$net.get("http://api.kuayet.com:8080/crossindustry/powerPurchaser/getProductListByType",params);
      this.imgUrls = this.imgUrls.concat(List.list)
    },
    async getBanner (params) {
      var bannerArr = await this.$net.get("http://api.kuayet.com:8080/crossindustry/powerPurchaser/getBanner",params);
      this.bannerArr = bannerArr.list;
      // console.log(bannerArr.list);
    },
    async getBigtype (params) {
      var bigTypearr = await this.$net.get("http://api.kuayet.com:8080/crossindustry/powerPurchaser/getPowerPurchaserBigType",params);
      this.bigTypearr = bigTypearr.list;
      console.log(JSON.stringify(this.bigTypearr))
    },
    async getTabarr (params) {
      var tabarr = await this.$net.get("http://api.kuayet.com:8080/crossindustry/powerPurchaser/getType",params);
      this.tabArr = tabarr.list
    },
    // 跳转详情
    openXiangqing (id) {
      console.log(id);
      wx.navigateTo({
        url: '../out/main?id=' + id,
        redirect: false
      })
    },
    //打开商品列表
    openList (id) {
      var name;
      if (id=='1') {
        name = '淘宝'
      } else if (id=='2') {
        name = '京东'
      } else if (id=='3') {
        name = '拼多多'
      }
      wx.navigateTo({
        url: '../allshops/main?typeId=' + name,
        redirect: false
      })
    },
    confirm (e) {
      this.imgUrls = [];
      this.params.pageNum = 1;
      this.params.productName = e.target.value;
      this.value = e.target.value;
      this.getList(this.params);
    }
  },
  watch: {
    value (val) {
      if (val=='') {
        this.imgUrls = [];
        this.params.pageNum = 1;
        this.params.productName = val;
        this.getList(this.params);
      }
    }
  },
  onLoad () {
    var params = {
      source: '电商购'
    }
    this.getBanner(params);
    this.getBigtype(this.params2);
    this.getTabarr(this.params3);
    this.getList(this.params);
  },
  onPullDownRefresh () {
    wx.showNavigationBarLoading();
    this.bannerArr = [];
    this.imgUrls = [];
    this.params.pageNum = 1;
    var params = {
      source: '电商购'
    }
    this.getBanner(params);
    this.getList(this.params);
  },
  onReachBottom () {
    wx.showLoading({
      title:'玩命加载中'
    });
    this.params.pageNum+=1;
    this.getList(this.params);
  }
}
</script>

<style scoped>
  .slide-image {
    width: 100%;
    height: 100%;
  }
  .mod2{
    position: relative;
    width: 100%;
    height: 36px;
  }
  .mod2 img{
    width: 100%;
    height: 100%;
  }
  .mod2 ul{
    display: flex;
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .mod2 ul li{
    flex: 1;
    text-align: center;
    font-size: 16px;
    line-height: 36px;
    color: #717171;
  }
  .active{
    background-image: -webkit-gradient(linear, 0 0, 0 bottom, to(rgba(234, 101, 10, 1)), from(rgba(246, 199, 156, 1)));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .mod3{
    padding: 19px 24px;
  }
  .mod3 input{
    width: 95%;
    height: 36px;
    color: #8F8F8F;
    font-size: 12px;
    box-shadow:0px 0px 8px #f2f2f2;
    padding-left: 5%;
    border-radius: 20px;
    line-height: 36px;
  }
  .mod4 ul{
    display: flex;
    padding-bottom: 20px;
  }
  .mod4 ul li{
    flex: 1;
    text-align: center;
    color: #393939;
    font-size: 12px;
    /*padding-bottom: 20px;*/
  }
  .mod5{
    width:100%;
    height: 59px;
    position: relative;
  }
  .mod5 .allTab{
    height: 22px;
    width: 63px;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    margin-top: 20px;
    padding-left: 10px;
    padding-right: 7px;
    border-right: 2px solid #CFCFCF;
    position: fixed;
    left: 0px;
    /*margin-top: ;*/
  }
  .sliderShop li{
    font-size: 12px;
    width: 100%;
    color: #8F8F8F;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .activeshop{
    background: white;
    color: black!important;
  }

  .top{
    width: 90%;
    text-align: center;
    /*line-height: 42px;*/
    white-space: nowrap;
    position: relative;
    background: #fff;
    margin-left: 90px;
  }
  /*::-webkit-scrollbar {*/
    /*width: 6px;*/
    /*height: 6px;*/
    /*background-color: #ffffff;*/
    /*display: none;*/
  /*}*/
  .tabbar{
    padding: 0px 12px;
    font-size: 16px;
    padding-bottom: 3px!important;
    /*height: 42px;*/
    display: inline-block;
    color: #393939;
    position: relative;
  }
  .tabbar-bottom{
    color: #F08400;
    /*border-bottom: 2px solid #F08400;*/
  }
  #swiperContent{
    padding: 10px;
    /*height: 800px;*/
  }

  /*列表样式*/
  .Listall p:first-child img{
    width: 14px;
    height: 14px;
    vertical-align: middle;
  }
  .Listall p:first-child span{
    vertical-align: middle;
    margin-left: 6px;
  }
  .Listall p:nth-child(2){
    padding-top: 15px;
    font-size: 12px;
    width: 100%;
    height: 10px;
    line-height: 10px;
  }
  .Listall p:nth-child(2) span{
    color: #717171;
    font-size: 10px;
  }
  .Listall p:nth-child(3){
    /*padding-top: 18px;*/
    margin-top: 20px;
    font-size: 12px;
  }
  .Listall p:nth-child(3) span{
    padding: 4px 10px;
    background: #FF0000;
    color: white;
    border-radius: 10px;
    /*border: 10px;*/
  }
  .swiperall p:first-child{
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
</style>
