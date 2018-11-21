<template>
  <div>
    <div class="mod1">
        <input type="text" placeholder="输入淘宝天猫商品名称／宝贝标题搜索">
    </div>
    <scroll-view scroll-x="true" class="top">
      <div class="tabbar" :class="{'tabbar-bottom':params2.productType==item.typeId}" v-for="(item,index) in tabArr" :key="index" @click="clickTab(item.typeId)">
        <div v-show="params2.productType==item.typeId" style="height: 2px;width: 12px;background: #F08400;position: absolute;bottom: 0px;left: 50%;margin-left: -6px;"></div>
        {{item.typeName}}
      </div>
    </scroll-view>
    <div :current="params2.productType" @change="changeTab" id="swiperContent" :style="{height:height*imgUrls.length+'px'}">
      <div class="contentListall">
        <div v-for="item in imgUrls" style="height: 117px;padding: 5px 8px;box-shadow:0px 0px 8px #f2f2f2;" @click="openXiangqing(item.id)">
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
</template>

<script>
  import getRouter from '../../utils/getOptions'
  export default {
    data () {
      return {
        params: {
          source: ''
        },
        params2: {
          pageNum: 1,
          num: 8,
          source: "淘宝",
          bigTypeName: "",
          productType: 1,
          productName: ""
        },
        tabArr: [],
        imgUrls: [],
        height: "127",
      }
    },
    methods: {
      async getList (params) {
        var List = await this.$net.get("http://api.kuayet.com:8080/crossindustry/powerPurchaser/getProductListByType",params);
        this.imgUrls = this.imgUrls.concat(List.list)
      },
      async getTabarr (params) {
        var tabarr = await this.$net.get("http://api.kuayet.com:8080/crossindustry/powerPurchaser/getType", params)
        this.tabArr = tabarr.list
        this.params2.productType = this.tabArr[0].typeId
        this.getList(this.params2)
      },
      clickTab (id) {
        this.params2.productType = id
        this.imgUrls = [];
        this.params2.pageNum = 1;
        this.getList(this.params2);
      },
      changeTab (e) {
        // this.currentTab2 = e.mp.detail.current;
        this.params2.productType = e.mp.detail.current+1;
      }
    },
    onLoad () {
      this.imgUrls = [];
      this.params.source = getRouter().typeId
      this.params2.source = getRouter().typeId
      this.getTabarr(this.params)
      this.getList(this.params2)
    },
    onPullDownRefresh () {
      this.imgUrls = [];
      this.params2.pageNum = 1;
      this.getList(this.params2);
    },
    onReachBottom () {
      this.params2.pageNum+=1;
      this.getList(this.params2);
    }
  }
</script>

<style scoped>
  #swiperContent{
    margin-top: 15px;
  }
  .tabbar-bottom{
    color: #F08400!important;
    /*border-bottom: 2px solid #F08400;*/
  }
  .top{
    width: 100%;
    text-align: center;
    /*line-height: 42px;*/
    white-space: nowrap;
    position: relative;
    background: #fff;
    margin-top: 16px;
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
    font-size: 16px;
    padding-bottom: 3px!important;
    /*height: 42px;*/
    display: inline-block;
    color: #393939;
    letter-spacing: 1px;
    position: relative;
  }
  .mod1{
    padding-left: 48px;
    padding-right: 48px;
    margin-top: 10px;
  }
  .mod1 input{
    width: 100%;
    height: 26px;
    box-shadow:0px 0px 8px #f2f2f2;
    border-radius: 50px;
    font-size: 12px;
    letter-spacing: 1px;
    text-align: center;
  }


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
  .contentListall p:first-child{
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
</style>
