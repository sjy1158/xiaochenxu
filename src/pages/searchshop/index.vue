<template>
    <div>
      <div style="position: fixed;width: 100%;z-index: 999999999999999999;top: 0px;background: white;">
        <div class="search">
          <div style="position: absolute;left: 20px;top: 0px;letter-spacing: 1px;font-size: 16px;color: #393939" @click="quxiao">
            返回
          </div>
          <div class="searchinput">
            <input type="text" v-model="params.productName" placeholder="输入宝贝标题或关键词搜索">
          </div>
          <div style="position: absolute;right: 20px;top: 0px;letter-spacing: 1px;font-size: 16px;color: #393939" @click="searchshopall(params.productName)">搜索</div>
        </div>

        <div class="tabbars">
          <div class="tabbar" :class="params.source=='京东'?'colorActive':''" @click="tabClick('京东')">
            <div v-show="params.source=='京东'" style="height: 2px;width: 26px;background: #F08400;position: absolute;bottom: 0px;left: 50%;margin-left: -13px;"></div>
            京东
          </div>
          <div class="tabbar" :class="params.source=='淘宝'?'colorActive':''" @click="tabClick('淘宝')">
            <div v-show="params.source=='淘宝'" style="height: 2px;width: 26px;background: #F08400;position: absolute;bottom: 0px;left: 50%;margin-left: -13px;"></div>
            淘宝
          </div>
          <div class="tabbar" :class="params.source=='拼多多'?'colorActive':''" @click="tabClick('拼多多')">
            <div v-show="params.source=='拼多多'" style="height: 2px;width: 26px;background: #F08400;position: absolute;bottom: 0px;left: 50%;margin-left: -13px;"></div>
            拼多多
          </div>
        </div>
      </div>

      <!--历史搜索-->
      <div style="position: absolute;top: 88px;width: 100%">
        <div v-if="params.productName==''" class="hissearch">
          <div class="histitle">
            <div style="height: 20px;line-height: 20px;">
              <img src="/static/images/record@3x.png" alt="" style="height: 12px;width: 12px;vertical-align: middle">
              <span style="color: #393939;font-size: 14px;letter-spacing: 1px;vertical-align: middle;margin-left: 6px;">历史搜索</span>
              <span style="color: #717171;font-size: 14px;letter-spacing: 1px;float: right;vertical-align: middle" @click="clear()">清除</span>
            </div>
            <ul style="height: auto" class="hisshop">
              <li v-for="item in hisArr" @click="clickLi(item)">{{item}}</li>
            </ul>

            <div style="height: 20px;line-height: 20px;">
              <img src="/static/images/hot@3x.png" alt="" style="height: 14px;width: 13px;vertical-align: middle">
              <span style="color: #393939;font-size: 14px;letter-spacing: 1px;vertical-align: middle;margin-left: 6px;">热门搜索</span>
            </div>

            <ul style="height: auto" class="hisshop">
              <li v-for="item in hotarr" @click="clickLi(item)">{{item}}</li>
            </ul>

          </div>
        </div>


        <div v-else style="padding: 0px 5px;height: auto;margin-top: 14px;">
          <div class="contnetList">
            <ul>
              <li v-for="item in list">
                <image lazy-load="true" src="/static/images/bgre.png" style="" class="img"></image>
                <image lazy-load="true" :src="item.imageUrl" class="img1 srtImg"></image>
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
                  <div style="color: white;height: 20px;position: absolute;left: 0px;font-size: 12px;text-align: center" class="disconmoney">可抵 : {{item.deduction}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        hotarr: [],
        params: {
          pageNum: 1,
          num: 8,
          source: "淘宝",
          bigTypeName: "",
          productType: 0,
          productName: ""
        },
        list: [],
        hisArr: []
      }
    },
    methods: {
      async getHot () {
        var hotarr = await this.$net.get("/crossindustry/powerPurchaser/getHotWordByProduct")
        this.hotarr = hotarr.list
      },
      // 获取列表
      async getList (params) {
        var List = await this.$net.get("/crossindustry/powerPurchaser/getProductListByType",params)
        for (var i = 0; i<List.list.length;i++) {
          this.list.push(List.list[i])
        }
      },
      // 点击取消
      quxiao () {
        this.list = []
        this.params.source = '淘宝'
        this.params.pageNum = 1
        this.params.productName = ''
        wx.navigateBack({
          delta: 1
        })
      },
      // tab选择
      tabClick (source) {
        this.list = []
        this.params.source = source
        this.getList(this.params)
      },
      searchshopall (productname) {
        if (productname!='') {
          this.hisArr.push(productname)
        }
        this.list = []
        this.getList(this.params)
      },
      // 点击热门搜索
      clickLi (productname) {
        this.params.productName = productname
        this.getList(this.params)
      },
      // 清除历史搜索
      clear () {
        this.hisArr = []
      }
    },
    onPullDownRefresh () {
      this.list = []
      this.params.pageNum = 1
      this.getList(this.params)
    },
    // 加载更多
    onReachBottom () {
      wx.showLoading({
        title:'玩命加载中'
      });
      this.params.pageNum+=1;
      this.getList(this.params);
    },
    onLoad () {
      this.getHot()
      this.list = []
      // this.getList(this.params)
    }
  }
</script>

<style scoped>
  .search{
    height: 29px;
    width: 100%;
    background: white;
    position: relative;
    top: 10px;
  }
  .searchinput{
    width: 60%;
    height: 100%;
    /*background: #0bb20c;*/
    position: absolute;
    left: 50%;
    margin-left: -30%;
  }
  .searchinput input{
    height: 100%;
    width: 100%;
    background: #F2F2F2;
    text-align: center;
    color: #8F8F8F;
    font-size: 14px;
    border-radius: 50px;
    letter-spacing: 1px;
  }
  /*tab切换*/
  .tabbars{
    display: flex;
    width: 100%;
    height: 35px;
    margin-top: 29px;
    border-bottom: 1px solid #EDEDED;
  }
  .colorActive{
    color: #F08400!important;
  }
  .tabbars .tabbar{
    flex: 1;
    text-align: center;
    letter-spacing: 1px;
    font-size: 16px;
    color: #393939;
    font-weight: bold;
    line-height: 29px;
    position: relative;
  }
  .histitle{
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 16px;
  }
  .hisshop{
    display: flex;
    margin-top: 19px;
    width: 100%;
    flex-wrap: wrap;
  }
  .hisshop li{
    padding: 2px 9px;
    background: #F2F2F2;
    color: #717171;
    font-size: 12px;
    letter-spacing: 1px;
    border-radius: 50px;
    margin-right: 15px;
    margin-bottom: 15px;
  }
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
    width: 50%;
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
