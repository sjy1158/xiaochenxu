<template>
  <div>
    <!--搜索框-->
    <div style="padding: 23px 20px;">
      <input type="text" class="search" v-model="params2.productName" placeholder="输入商家或商品名称搜索">
    </div>

    <div style=" border-bottom: 1px solid #F2F2F2;width: 100%;">
      <scroll-view scroll-x class="top" :scroll-left="scrollLeft" :scroll-with-animation="animate">
        <div class="tabbar" v-for="(item,index) in headerArr" @click="tabClick(item.id,index)">
          <div v-show="headerIndex == index" style="width: 11px;height: 2px;background: #F08400;position: absolute;bottom: -1px;left: 50%;margin-left: -5.5px;"></div>
          <image v-if="item.imageUrl" lazy-load="true" class="imgcontent srtImg" :src="item.imageUrl" alt="" style="border-radius: 50%;" :class="headerIndex == index?'activeTab':''"></image>
          <p :class="headerIndex == index?'activeName':''">{{item.name}}</p>
        </div>
      </scroll-view>
    </div>

    <div style=" border-bottom: 1px solid #F2F2F2;width: 100%;height: 46px;line-height: 42px;">
      <scroll-view scroll-x class="top2" :scroll-with-animation="animate" style="padding-left: 20px;">
        <div class="tabbar" :class="params2.mark==0?'contentactive':''" @click="contentClick(0)">
          <div v-show="params2.mark==0" style="height: 2px;width: 11px;background: #F08400;position: absolute;bottom: -1px;left: 50%;margin-left: -5.5px;"></div>
          <span>距离最近</span>
        </div>
        <div class="tabbar" :class="params2.mark==1?'contentactive':''" @click="contentClick(1)">
          <div v-show="params2.mark==1" style="height: 2px;width: 11px;background: #F08400;position: absolute;bottom: -1px;left: 50%;margin-left: -5.5px;"></div>
          <span>抵扣最多</span>
        </div>
        <div class="tabbar" :class="params2.mark==2?'contentactive':''" @click="contentClick(2)">
          <div v-show="params2.mark==2" style="height: 2px;width: 11px;background: #F08400;position: absolute;bottom: -1px;left: 50%;margin-left: -5.5px;"></div>
          <span>销量最高</span>
        </div>
      </scroll-view>
    </div>

    <div class="nearList" style="padding: 14px;">
      <div class="nearList_item" v-for="item in contentList">
        <div style="position: relative">
          <image v-if="item.shopHeadImageUrl" lazy-load="true" class="listImg srtImg" :src="item.shopHeadImageUrl" alt=""></image>
        </div>
        <div style="font-size: 12px;position: absolute;left: 5.5rem;" class="itemText">
          <p>{{item.title}}</p>
          <p style="width: 50%;margin-top: 0.2rem;">
            <image lazy-load="true" class="listImg" src="/static/images/businesses_icon@2x.png" alt="" style="width: 12px;height: 12px;"></image>
            <span style="font-size: 10px;color: #393939;padding-left: 6px;">{{item.shopType}}</span>
            <span style="font-size: 10px;color: #393939;padding-left: 17px;">人均消费{{item.averageMoney}}元</span>
            <span style="float: right;font-size: 10px;color: #393939;vertical-align: middle">{{item.distance}}m</span>
          </p>
          <div class="discon" style="margin-top: 0.3rem;">
            <div>
              <span>20抵10</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import getRouter from '../../utils/getOptions'
  export default {
    data () {
      return {
        params: {
          shopTypeId: ''
        },
        params2: {
          lat: '',
          lng: '',
          productName: '',
          shopType: '',
          mark: 0,
          pageNum: 1,
          num: 5
        },
        headerArr: [],
        contentList: [],
        headerIndex: 0,
        contentIndex: 0,
        animate: true,
        scrollLeft: 0
      }
    },
    methods: {
      async getHeaderList (params) {
        var headerArr = await this.$net.get('/crossindustry/shopPage/getShopTypeListByShopType', params)
        this.headerArr = headerArr.list
      },
      // 获取商品列表
      async getShoplist (params) {
        var shopList = await this.$net.get('/crossindustry/shopPage/getShopByShopType', params)
        for (var i = 0; i < shopList.list.length; i++) {
          shopList.list[i].distance = shopList.list[i].distance.toFixed(2)
        }
        this.contentList = this.contentList.concat(shopList.list)
      },
      // 头部切换
      tabClick (id, index) {
        const _this = this
        if (index > 2) {
          var query = wx.createSelectorQuery()
          query.select('.tabbar').boundingClientRect(function (rect) {
            _this.scrollLeft = rect.width * index
          }).exec()
        } else {
          this.scrollLeft = 0
        }
        this.headerIndex = index
        this.contentList = []
        this.params2.pageNum = 1
        this.params2.shopType = id
        this.getShoplist(this.params2)
      },
      // 下部切换
      contentClick (index) {
        this.contentList = []
        this.params2.pageNum = 1
        this.params2.mark = index
        this.getShoplist(this.params2)
      }
    },
    onLoad () {
      this.params2.lat = getRouter().lat
      this.params2.lng = getRouter().lng
      this.params.shopTypeId = getRouter().id
      this.params2.shopType = getRouter().id
      this.getHeaderList(this.params)
      this.headerIndex = 0
      this.mark = 0
      this.contentList = []
      this.getShoplist(this.params2)
    },
    onPullDownRefresh () {
      this.headerArr = []
      this.getHeaderList(this.params)
      this.contentList = []
      this.params2.mark = 0
      this.headerIndex = 0
      this.params2.shopType = getRouter().id
      this.params2.pageNum = 1
      this.getShoplist(this.params2)
    }
  }
</script>

<style scoped>
  .search{
    width: 100%;
    /*background: red;*/
    height: 28px;
    box-shadow:0 0 0 4px #f8f8f8;
    border-radius: 20px;
    color: #8F8F8F;
    font-size: 12px;
    text-align: center;
  }
  .top{
    width:95%;
    /*text-align: center;*/
    /*line-height: 42px;*/
    white-space: nowrap;
    position: relative;
    background: #fff;
    padding-left: 14px;
    overflow-x: scroll;
    /*margin-left: 90px;*/
  }
  .tabbar{
    padding: 0px 12px;
    font-size: 16px;
    padding-bottom: 3px!important;
    display: inline-block;
    position: relative;
    margin-right: 20px;
    text-align: center;
  }
  .tabbar .imgcontent{
    height: 48px;
    width: 48px;
  }
  .tabbar p {
    color: #393939;
    font-size: 12px;
    padding-top: 8px !important;
    padding-bottom: 5px !important;
  }
  .top2 .tabbar{
    font-size: 12px;
    color: #393939;
  }
  /*数据列表*/
  /*数据列表*/
  .nearList_item{
    height: 70px;
    /*background: yellow;*/
  }
  .nearList_item .listImg{
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
  .itemText p:nth-child(2) .listImg{
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
    font-size: 10px;
  }
  .discon{
    width: 500px;
    margin-top: 0.2rem;
    /*overflow-x: hidden;*/
    overflow-x: scroll;
  }
  .discon::-webkit-scrollbar{
    display: none;
  }
  .discon div{
    width: 530px;
  }
  .nearList_item{
    margin-bottom: 25px;
  }
  .nearList_item:last-child{
    margin-bottom: 0px!important;
  }
  .activeTab{
    border: 1px solid #F08400;
  }
  .activeName{
    color: #F08400!important;
  }
  .contentactive{
    color: #F08400!important;
  }
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
