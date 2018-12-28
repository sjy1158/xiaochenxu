<template>
  <div>
    <button open-type="contact" style="position: fixed;z-index: 9999999999999999999;top: 70%;right: 20px;">
      <image lazy-load="true" src="/static/images/weixin@3x.png" style="border-radius: 50%;height: 30px;width: 30px;"></image>
    </button>
    <div class="content">
      <div style="position: fixed;left: 0px;z-index: 99999999999999999999;width: 100%;background: white;top: 0px;">
        <div class="mod2">
          <image lazy-load="true" src="/static/images/search@3x.png" alt="" style="width: 18px;height: 18px;position: absolute;left: 20px;top: 50%;margin-top: -9px;" @click="search">
          </image>
          <ul>
            <li @click="showList(1,'京东',2)" v-bind:class="activeIndex==1 ? 'active':''">
              <div v-show="activeIndex==1" style="height: 2px;width: 26px;background: #F08400;position: absolute;bottom: 0px;left: 50%;margin-left: -13px;"></div>
              京东
            </li>
            <li @click="showList(0,'淘宝',1)" v-bind:class="activeIndex==0 ? 'active':''">
              <div v-show="activeIndex==0" style="height: 2px;width: 26px;background: #F08400;position: absolute;bottom: 0px;left: 50%;margin-left: -13px;"></div>
              淘宝
            </li>
            <li @click="showList(2,'拼多多',3)" v-bind:class="activeIndex==2 ? 'active':''">
              <div v-show="activeIndex==2" style="height: 2px;width: 26px;background: #F08400;position: absolute;bottom: 0px;left: 50%;margin-left: -13px;"></div>
              拼多多
            </li>
          </ul>
          <image lazy-load="true" src="/static/images/Shape@3x.png" alt="" style="width: 18px;height: 18px;position: absolute;right: 20px;top: 50%;margin-top: -9px;" @click="shareXiaochengxu">
          </image>
        </div>

        <scroll-view scroll-x="true" class="top" :scroll-left="scrollLeft" :scroll-with-animation="animate">
          <div class="tabbar" :class="{'tabbar-bottom':params.productType==item.typeId}" v-for="(item,index) in tabArr" :key="index" @click="clickTab(item.typeId, index)">
            <div v-show="params.productType==item.typeId" style="height: 1px;width: 28px;background: #F08400;position: absolute;bottom: 0px;left: 50%;margin-left: -14px;"></div>
            {{item.typeName}}
          </div>
        </scroll-view>
      </div>

      <div class="page" style="height: 166px!important;margin-top: 71px;">
        <div class="page__bd page__bd_spacing">
          <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" indicator-color="rgba(255, 255, 255, 1)" indicator-active-color="rgba(143, 143, 143, 1)" :duration="duration" :circular="circular">
            <div v-for="item in bannerArr" :key="index">
              <swiper-item>
                <image v-if="item.advertiseImageUrl" lazy-load="true" :src="item.advertiseImageUrl" class="slide-image">
                </image>
              </swiper-item>
            </div>
          </swiper>
        </div>
      </div>
      <!--搜索框-->
      <!--<div class="mod3">-->
          <!--<input type="search" v-model="value" placeholder="输入淘宝天猫商品名称／宝贝标题搜索" @confirm="confirm($event)">-->
      <!--</div>-->
      <!--tab分类列表-->
      <div class="mod4">
        <ul>
          <li v-for="(item,index) in bigTypearr" @click="openList(item.bigestTypeId)">
            <image v-if="item.typeImageUrl" lazy-load="true" style="width: 25px;height: 25px;" :src="item.typeImageUrl"></image>
            <!--<img class="srtImg" :src="item.typeImageUrl" alt="" :key="index" style="width: 25px;height: 25px;">-->
            <p>{{item.typeName}}</p>
          </li>
        </ul>
      </div>


      <div>
        <image v-if="item" lazy-load="true" v-for="item in adlist" :src="item" alt="" style="width:100%;height: 95px;">
        </image>
      </div>

    </div>
    <!--顶部ending-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
    <!--列表数据-->
    <div style="height: 10px;background: #F2F2F2;width: 100%;"></div>

    <!--精选商品图片-->
    <div style="height: 59px;width: 100%;position: relative">
      <image lazy-load="true" src="/static/images/kuayetong@3x.png" style="width:164px;height: 28px;position: absolute;left: 50%;margin-left: -82px;top: 50%;margin-top: -14px;">
      </image>
    </div>

    <!--数据列表-->
    <div style="padding: 0px 5px;height: auto">
      <div class="contnetList">
        <ul>
          <li v-for="item in imgUrls" @click.stop="openXiangqing(item.id)">
              <image lazy-load="true" src="/static/images/bgre.png" style="" class="img"></image>
              <image v-if="item.imageUrl" lazy-load="true" :src="item.imageUrl" class="img1 srtImg"></image>
              <p style="font-size: 12px;" class="shopname">
                <image v-if="item.source=='京东'" lazy-load="true" src="/static/images/jingdong@3x.png" style=" width: 14px;height: 14px;vertical-align: middle"></image>
                <image v-if="item.source=='淘宝'" lazy-load="true" src="/static/images/taobao@3x.png" style=" width: 14px;height: 14px;vertical-align: middle"></image>
                <image v-if="item.source=='拼多多'" lazy-load="true" src="/static/images/pinduoduo@3x.png" style=" width: 14px;height: 14px;vertical-align: middle"></image>
                <span style="vertical-align: middle;letter-spacing: 1px;margin-left: 6px;">{{item.name}}</span>
              </p>
              <p class="shopname1" style="font-size: 10px;">
                <span>抵后价: <span style="color: #FF0000;font-size: 12px;">¥{{item.price}}</span></span>
                <span style="float: right;color: #717171;font-size: 10px;">销量: {{item.salesVolume}}件</span>
              </p>
              <div class="discon">
                <image lazy-load="true" src="/static/images/deduction_bg@3x.png" class="img2"></image>
                <div style="color: white;height: 20px;position: absolute;left: 0px;font-size: 12px;text-align: center;line-height: 20px;" class="disconmoney">可抵 : {{item.deduction}}</div>
                <button open-type='share' :data-name="item.name" :data-image="item.imageUrl" :data-id="item.id" style="position: absolute;right: 0px;height: 20px;font-size: 12px;line-height: 20px;color: white;background: #F08400;text-align: center" @click.stop="onShareAppMessage">分享</button>
              </div>
          </li>
        </ul>
      </div>
    </div>
    <!--列表ending-->
  </div>
</template>

<script>
export default {
  data () {
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
      adlist: [],
      nav: [{
        name: "充值记录"
      }, {
        name: "短信历史"
      }],
      currentTab: 0,
      activeIndex: 0,
      shopActiveindex: 0,
      width: "",
      currentTab2: 0,
      animate: true,
      scrollLeft: 0
    };
  },
  computed: {
  },
  methods: {
    showList (index,source,bigType) {
      this.scrollLeft = 0
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
    clickTab (id, index) {
      const _this = this
      if (index > 3) {
        var query = wx.createSelectorQuery()
        query.select('.tabbar').boundingClientRect(function (rect) {
          _this.scrollLeft = 45 * index
        }).exec()
      } else {
        this.scrollLeft = 0
      }
      // this.params.productType = e;
      this.params.productType = id;
      this.imgUrls = [];
      this.params.pageNum = 1;
      this.getList(this.params);
    },
    changeTab (e) {
      // this.currentTab2 = e.mp.detail.current;
      this.params.productType = e.mp.detail.current+1;
    },
    async getList (params) {
      var List = await this.$net.get("/crossindustry/powerPurchaser/getProductListByType",params)
      for (var i = 0; i<List.list.length;i++) {
        this.imgUrls.push(List.list[i])
      }
    },
    async getBanner (params) {
      var bannerArr = await this.$net.get("/crossindustry/powerPurchaser/getBanner",params)
      console.log(JSON.stringify(bannerArr))
      let adlist = []
      adlist.push(bannerArr.advertiseList[0].image)
      this.adlist = adlist
      this.bannerArr = bannerArr.list
      // console.log(bannerArr.list);
    },
    async getBigtype (params) {
      var bigTypearr = await this.$net.get("/crossindustry/powerPurchaser/getPowerPurchaserBigType",params)
      this.bigTypearr = bigTypearr.list;
    },
    async getTabarr (params) {
      var tabarr = await this.$net.get("/crossindustry/powerPurchaser/getType",params)
      this.tabArr = tabarr.list
      this.params.productType = this.tabArr[0].typeId
      this.getList(this.params)
    },
    // 跳转详情
    openXiangqing (id) {
      console.log(id);
      wx.navigateTo({
        url: '../out/main?id=' + id,
        redirect: false
      })
    },
    //跳转搜做
    search () {
      wx.navigateTo({
        url: '../searchshop/main',
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
    },
    //分享小程序吗
    shareXiaochengxu () {
      wx.previewImage({
        current: 'http://image.kuayet.com/FsPmo8U1_89Ytinmr20Xy-UFdXE0',
        urls: ['http://image.kuayet.com/FsPmo8U1_89Ytinmr20Xy-UFdXE0']
      })
    }
  },
  //分享
  onShareAppMessage (res) {
    var name = res.target.dataset.name
    var image = res.target.dataset.image
    var id = res.target.dataset.id
    return {
      title: name,
      path: '/pages/out/main?id=' + id,
      imageUrl: image,
      success: function (res) {
        console.log('转发成功')
      }
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
    /*height: 100%;*/
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
    width: 200px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: 0px;
  }
  .mod2 ul li{
    flex: 1;
    text-align: center;
    font-size: 16px;
    line-height: 36px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #717171;
    position: relative;
  }
  .active{
    color: #393939!important;
    -webkit-background-clip: text;
    /*-webkit-text-fill-color: transparent;*/
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
    margin-top: 10px;
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
    width: 100%;
    text-align: center;
    /*line-height: 42px;*/
    white-space: nowrap;
    background: #fff;
    margin-top: 9px;
    /*margin-left: 90px;*/
  }
  /*::-webkit-scrollbar {*/
    /*width: 6px;*/
    /*height: 6px;*/
    /*background-color: #ffffff;*/
    /*display: none;*/
  /*}*/
  .tabbar{
    padding: 0px 12px;
    height: 26px;
    font-size: 14px;
    line-height: 27px;
    padding-bottom: 3px!important;
    /*height: 42px;*/
    display: inline-block;
    color: #717171;
    position: relative;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .tabbar-bottom{
    font-size: 16px;
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

  /*列表*/
  .contnetList{
    width: 100%;
    height: auto;
    /*background: red;*/
  }
  .contnetList ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /*justify-content: space-between;*/
    /*flex-direction:column;*/
  }
  .contnetList ul li{
    position: relative;
    /*float: left;*/
    /*flex: 1;*/
    width: 50%;
  }
  .contnetList ul li .img1{
    position: absolute;
    left: 50%;
    margin-left: -45%;
    top: 0px;
    width: 90%;
    height: 182px;
    border-radius: 5px 5px 0px 0px;
  }
  .shopname{
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    position: absolute;
    width: 84%;
    left: 50%;
    margin-left: -42%;
    top: 191px;
  }
  .shopname1{
    position: absolute;
    width: 84%;
    left: 50%;
    /*top: 235px;*/
    margin-left: -42%;
  }
  .discon{
    position: absolute;
    width: 84%;
    /*width: 76px;*/
    height: 20px;
    left: 8%;
    /*background: #0bb20c;*/
    font-size: 12px;
    color: white;
    letter-spacing: 1px;
    text-align: center;
    /*width: 84%;*/
  }
  .discon .img2{
    width: 76px;
    height: 20px;
    position: absolute;
    left: 0px;
    /*left:8%;*/
  }
  .img{
    width: 100%;
  }
  @media (max-width: 1500px) {
    .shopname1{
      top: 245px;
    }
    .discon{
      top: 277px;
    }
    .img{
      height: 320px;
    }
    .disconmoney{
      width: 76px;
    }
    /*.disconmoney{*/
      /*width: 100px;*/
    /*}*/
  }
  @media (min-width: 700px) and (max-width: 1000px) {
    .shopname1{
      top: 227px;
    }
    .discon{
      top: 277px;
    }
    .img{
      height: 320px;
    }
    .disconmoney{
      width: 76px;
    }
    /*.disconmoney{*/
      /*width: 100px;*/
    /*}*/
  }
  @media (min-width: 350px) and (max-width: 700px) {
    .shopname1{
      top: 235px;
    }
    .discon{
      top: 260px;
    }
    .img{
      height: 300px;
    }
    .disconmoney{
      width: 76px;
    }
    /*.img2{*/
      /*width: 76px;*/
    /*}*/
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
