<template>
  <div>
    <div style="position: fixed;width: 100%;z-index: 9999999999;background: white;left: 0px;top: 0px;">
      <div class="mod1">
        <input type="text" placeholder="输入淘宝天猫商品名称／宝贝标题搜索">
      </div>
      <scroll-view scroll-x="true" class="top" @scroll="scroll" :scroll-left="scrollLeft" :scroll-with-animation="animate">
        <div class="tabbar" :class="{'tabbar-bottom':params2.productType==item.typeId}" v-for="(item,index) in tabArr" :key="index" @click="clickTab(item.typeId, index)">
          <div v-show="params2.productType==item.typeId" style="height: 2px;width: 12px;background: #F08400;position: absolute;bottom: 0px;left: 50%;margin-left: -6px;"></div>
          {{item.typeName}}
        </div>
      </scroll-view>
    </div>
    <div :current="params2.productType" @change="changeTab" id="swiperContent" :style="{height:height*imgUrls.length+'px'}">
      <div class="contentListall">
        <div v-for="item in imgUrls" style="height: 117px;padding: 5px 8px;box-shadow:0px 0px 8px #f2f2f2;" @click="openXiangqing(item.id)">
          <image v-if="item.imageUrl" lazy-load="true" class="srtImg" :src="item.imageUrl" alt="" style="width: 117px;height: 117px;float: left;"></image>
          <div style="height: 100%;margin-left: 133px;" class="Listall">
            <p style="font-size: 12px;">
              <img v-if="item.source=='京东'" src="/static/images/jingdong@3x.png" alt="">
              <img v-if="item.source=='淘宝'" src="/static/images/taobao@3x.png" alt="">
              <img v-if="item.source=='拼多多'" src="/static/images/pinduoduo@3x.png" alt="">
              <span>{{item.name}}</span>
            </p>
            <p>{{item.source}}价:<span style="font-size: 14px;color: #FF0000">{{item.price}}</span>元<span style="float: right">销量：{{item.salesVolume}}件</span></p>
            <p>
              <span style="vertical-align: middle">可抵:{{item.deduction}}元</span>
              <span style="float: right;background: #F08400;letter-spacing: 1px;vertical-align: middle" @click="chooseshangchuan(item.imageUrl, item.name)">选择</span>
            </p>
          </div>
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
          source: ''
        },
        params2: {
          pageNum: 1,
          num: 8,
          source: '淘宝',
          bigTypeName: '',
          productType: 1,
          productName: ''
        },
        tabArr: [],
        imgUrls: [],
        height: '127',
        scrollLeft: 0,
        animate: true
      }
    },
    methods: {
      async getList (params) {
        var List = await this.$net.get("/crossindustry/powerPurchaser/getProductListByType",params);
        for (var i = 0; i<List.list.length;i++) {
          this.imgUrls.push(List.list[i])
        }
      },
      async getTabarr (params) {
        var tabarr = await this.$net.get("/crossindustry/powerPurchaser/getType", params)
        this.tabArr = tabarr.list
        this.params2.productType = this.tabArr[0].typeId
        this.getList(this.params2)
      },
      clickTab (id, index) {
        const _this = this
        if (index > 5) {
          var query = wx.createSelectorQuery()
          query.select('.tabbar').boundingClientRect(function (rect) {
            _this.scrollLeft = rect.width * index
          }).exec()
        } else {
          this.scrollLeft = 0
        }
        // var cur = e.target.dataset.current
        // console.log(cur)
        this.params2.productType = id
        this.imgUrls = [];
        this.params2.pageNum = 1;
        this.getList(this.params2);
      },
      changeTab (e) {
        // this.currentTab2 = e.mp.detail.current;
        this.params2.productType = e.mp.detail.current+1;
      },
      //跳转电商购素材
      chooseshangchuan (url, name) {
        wx.navigateTo({
          url: '../choosesucai/main?imgurl=' + url + '&name=' + name,
          redirect: false
        })
      }
    },
    onLoad () {
      this.imgUrls = []
      this.scrollLeft = 0
      this.params.source = '淘宝'
      this.params2.source = '淘宝'
      this.getTabarr(this.params)
      // this.getList(this.params2)
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
    /*margin-top: 15px;*/
    position: absolute;
    top: 1.7rem;
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
