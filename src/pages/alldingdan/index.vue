<template>
  <div class="alldingdan">
    <div style="height:20px;width: 100%;background: white;padding-bottom: 10px;padding-top: 10px;position: fixed;z-index: 999999999">
      <div class="tabcut">
        <div :class="tabcurrentTab==0?'tabcut2':''" @click="tabCut(0)">电商购</div>
        <div style="border-radius: 0px 20px 20px 0px;" :class="tabcurrentTab==1?'tabcut2':''" @click="tabCut(1)">商家</div>
      </div>
    </div>
    <div v-show="tabcurrentTab==0">
    <scroll-view scroll-x class="top" style="position: fixed;width: 100%;z-index: 9999999;top: 40px;">
      <div class="tabbar" :class="params.type==0?'activeTab':''" @click="tabClick(0)">
        <div v-show="params.type==0" style="width: 28px;height: 2px;background: #F08400;position: absolute;left: 50%;margin-left: -14px;bottom: 0px;"></div>
        全部
      </div>
      <div class="tabbar" :class="params.type==1?'activeTab':''" @click="tabClick(1)">
        <div v-show="params.type==1" style="width: 28px;height: 2px;background: #F08400;position: absolute;left: 50%;margin-left:-14px;bottom: 0px;"></div>
        已付款
      </div>
      <div class="tabbar" :class="params.type==2?'activeTab':''" @click="tabClick(2)">
        <div v-show="params.type==2" style="width: 28px;height: 2px;background: #F08400;position: absolute;left: 50%;margin-left: -14px;bottom: 0px;"></div>
        已结算
      </div>
      <div class="tabbar" :class="params.type==3?'activeTab':''" @click="tabClick(3)">
        <div v-show="params.type==3" style="width: 28px;height: 2px;background: #F08400;position: absolute;left: 50%;margin-left: -14px;bottom: 0px;"></div>
        已失效
      </div>
    </scroll-view>
    <div :current="params.type" @change="changeTab" id="swiperContent" style="margin-top: 80px;">
      <div style="height: auto">
        <div class="swiperItem" v-for="(item, index) in list" :key="index" :data-index="index">
          <div class="swipercontent">
            <div class="swiperleft">
              <image class="img1" lazy-load="true" :src="item.image" alt="">
              </image>
            </div>
            <div class="swiperright">
              <p style="color: #393939;font-size: 12px;letter-spacing: 1px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{item.leixing}}{{item.name}}</p>
              <p style="color: #8F8F8F;font-size: 10px;margin-top: 0.2rem;">创建日<span style="padding-left: 5px;">{{item.time}}</span></p>
              <p style="color: #8F8F8F;font-size: 10px;margin-top: 0.2rem">
                订单号<span style="padding-left: 5px;">{{item.orderId}}</span>
                <span style="margin-left: 6px;padding-left: 10px;padding-right: 10px;padding-top: 1px;padding-bottom: 1px;border: 1px solid #8F8F8F;border-radius: 10px;" @click="fuzhi(item.orderId)">复制</span>
              </p>
              <div style="color: #393939;font-size: 10px;margin-top: 0.3rem;display: flex">
                <div style="flex: 1">消费：￥{{item.xiaofei}}</div>
                <div style="flex: 1">抵扣：￥{{item.dikou}}</div>
                <div style="flex: 1;color: #FF0000">预估佣金：￥{{item.yongjin}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="sum==0" style="width: 100%;height: 100%;background: #F1F0F0;position: fixed;">
        <img src="/static/images/zanwushuju@3x.png" alt="" style="height: 82px;width: 100px;position: absolute;left: 50%;margin-left: -50px;top: 40%;margin-top: -41px;">
      </div>
    </div>
    </div>

    <div v-show="tabcurrentTab==1" style="margin-top: 40px;">
      <div class="tabcontent2">
        <div class="tabcontentitem">
          <div class="tabcontentleft">
            <image class="img2" lazy-load="true" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544418451567&di=dfd939939c234c6364fc9a09a6d3b3cd&imgtype=0&src=http%3A%2F%2Fpic39.photophoto.cn%2F20160528%2F1155115744471988_b.jpg" alt="">
            </image>
          </div>
          <div class="tabcontentright">
            <p style="font-size: 12px;color: #393939">店铺名店铺名<span style="color: #393939;font-size: 10px;float: right">10-31 20:08</span></p>
            <p style="color: #393939;font-size: 10px;" class="disconall"><span>消费：￥12.3</span><span>抵扣：￥2.0</span><span>实付：￥10.3</span></p>
            <p style="color: #FF0000;font-size: 10px;">(奖励) 结算佣金：￥3.2</p>
          </div>
        </div>
      </div>

      <div class="tabcontent2">
        <div class="tabcontentitem">
          <div class="tabcontentleft">
            <image class="img2" lazy-load="true" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544418451567&di=dfd939939c234c6364fc9a09a6d3b3cd&imgtype=0&src=http%3A%2F%2Fpic39.photophoto.cn%2F20160528%2F1155115744471988_b.jpg" alt="">
            </image>
          </div>
          <div class="tabcontentright">
            <p style="font-size: 12px;color: #393939">店铺名店铺名<span style="color: #393939;font-size: 10px;float: right">10-31 20:08</span></p>
            <p style="color: #393939;font-size: 10px;" class="disconall"><span>消费：￥12.3</span><span>抵扣：￥2.0</span><span>实付：￥10.3</span></p>
            <p style="color: #FF0000;font-size: 10px;">(奖励) 结算佣金：￥3.2</p>
          </div>
        </div>
      </div>

      <div class="tabcontent2">
        <div class="tabcontentitem">
          <div class="tabcontentleft">
            <image class="img2" lazy-load="true" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544418451567&di=dfd939939c234c6364fc9a09a6d3b3cd&imgtype=0&src=http%3A%2F%2Fpic39.photophoto.cn%2F20160528%2F1155115744471988_b.jpg" alt="">
            </image>
          </div>
          <div class="tabcontentright">
            <p style="font-size: 12px;color: #393939">店铺名店铺名<span style="color: #393939;font-size: 10px;float: right">10-31 20:08</span></p>
            <p style="color: #393939;font-size: 10px;" class="disconall"><span>消费：￥12.3</span><span>抵扣：￥2.0</span><span>实付：￥10.3</span></p>
            <p style="color: #FF0000;font-size: 10px;">(奖励) 结算佣金：￥3.2</p>
          </div>
        </div>
      </div>

      <div class="tabcontent2">
        <div class="tabcontentitem">
          <div class="tabcontentleft">
            <image class="img2" lazy-load="true" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544418451567&di=dfd939939c234c6364fc9a09a6d3b3cd&imgtype=0&src=http%3A%2F%2Fpic39.photophoto.cn%2F20160528%2F1155115744471988_b.jpg" alt="">
            </image>
          </div>
          <div class="tabcontentright">
            <p style="font-size: 12px;color: #393939">店铺名店铺名<span style="color: #393939;font-size: 10px;float: right">10-31 20:08</span></p>
            <p style="color: #393939;font-size: 10px;" class="disconall"><span>消费：￥12.3</span><span>抵扣：￥2.0</span><span>实付：￥10.3</span></p>
            <p style="color: #FF0000;font-size: 10px;">(奖励) 结算佣金：￥3.2</p>
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
        currentTab: 0,
        tabcurrentTab: 0,
        params: {
          userId: '',
          pageNum: 1,
          num: 5,
          type: 0
        },
        height: '',
        sum: '',
        list: []
      }
    },
    methods: {
      async getList (params) {
        var data = await this.$net.get('http://api.kuayet.com:8080/crossindustry/userPage/allOrder', params)
        this.sum = data.sum
        for (var i = 0; i < data.list.length; i++) {
          this.list.push(data.list[i])
        }
      },
      // changeTab (e) {
      //   this.params.type = e.mp.detail.current
      //   this.getList(this.params)
      // },
      tabClick (index) {
        this.list = []
        this.params.pageNum = 1
        this.params.type = index
        this.getList(this.params)
      },
      tabCut (index) {
        this.tabcurrentTab = index
      },
      //复制订单号
      fuzhi (code) {
        const _this = this;
        wx.setClipboardData({
          data: code,
          success: function (res) {
          }
        })
      }
    },
    onLoad () {
      this.params.userId = this.$saveToken.getToken().token
      this.getList(this.params)
    },
    //刷新
    onPullDownRefresh () {
      this.list = []
      this.params.pageNum = 1
      this.getList(this.params)
    },
    onReachBottom () {
      wx.showLoading({
        title: '玩命加载中'
      })
      this.params.pageNum += 1
      this.getList(this.params)
    }
  }
</script>

<style scoped>
  .alldingdan{
    width: 100%;
    height: 100%;
    background-color: #F1F0F0;
    /*position: fixed;*/
    position:absolute;
  }
  .activeTab{
    color: #F08400!important;
  }
  .top{
    width: 100%;
    height: 40px;
    line-height: 40px;
    /*text-align: center;*/
    /*line-height: 42px;*/
    background: #fff;
    display: flex;
    border-bottom: 1px solid #F2F2F2;
    color: #393939;
    font-size: 14px;
    letter-spacing: 1px;
    /*margin-left: 90px;*/
  }
  .tabbar{
    flex: 1;
    width: 25%;
    display: inline-block;
    text-align: center;
    position: relative;
  }
  .activeTab{
    color: #F08400!important;
  }
  #swiperContent{
    background-color: #F1F0F0;
    /*padding-left: 10px;*/
    /*padding-right: 10px;*/
  }

  .tabcontent{
    height: 92px;
    width: 100%;
    padding-bottom: 0.1rem;
    /*margin-bottom: 15px;*/
    /*background: grey;*/
    position: relative;
    background: white;
    border-bottom: 1px solid #EDEDED;
  }
  .tabcontent img{
    height: 47px;
    width: 47px;
    padding-top: 15px;
  }
  .titlecon{
    position: absolute;
    left: 67px;
    top: 0;
    padding-top: 15px;
  }
  .titlecon .title{
    color: #393939;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .titlecon .discon{
    color: #FF0000;
    font-size: 10px;
    margin-top: 11px;
    display: flex;
  }
  .titlecon .discon span{
    flex: 1;
    padding: 1px 3px;
    border: 1px solid #F08400;
    margin-right: 10px;
    /*margin-right: 8px;*/
    border-radius: 2px;
    /*flex: 1;*/
  }
  .time{
    color: #8F8F8F;
    font-size: 10px;
    float: right;
    margin-top: 10px;
  }

  .swiperItem{
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 6px;
    padding-bottom: 10px;
    background: white;
    margin-bottom: 10px;
  }
  .swiperItem .swipercontent{
    height: 106px;
    width: 100%;
    /*background: #0bb20c;*/
    position: relative;
    /*margin-bottom: 10px;*/
    /*background: red;*/
  }
  .swiperleft{
    height: 90px;
    width: 90px;
  }
  .swiperleft .img1{
    height: 100%;
    width: 100%;
    margin-top: 8px;
  }
  .swiperright{
    height: 79px;
    width: 70%;
    position: absolute;
    left: 100px;
    margin-top: -39.5px;
  }
  @media (max-width: 1500px) {
    .swiperright{
      top: 43%;
    }
    .disconall span{
      margin-right: 30px;
    }
    .tabcontentright p{
      margin-bottom:0px;
    }
  }
  @media (min-width: 700px) and (max-width: 1000px) {
    .swiperright{
      top: 43%;
    }
    .disconall span{
      margin-right: 30px;
    }
    .tabcontentright p{
      margin-bottom:0px;
    }
  }
  @media (min-width: 350px) and (max-width: 700px) {
    .swiperright{
      top: 50%;
    }
    .disconall span{
      margin-right: 33px;
    }
    .tabcontentright p{
      margin-bottom:4px;
    }
  }
  .tabcut{
    display: flex;
    width: 110px;
    margin:  0 auto;
    font-size: 12px;
    letter-spacing: 1px;
    border: 2px solid #F08400;
    border-radius: 20px;
    color: #F08400;
  }
  .tabcut div{
    flex: 1;
    width: 50%;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 20px 0px 0px 20px;
  }

  .tabcut2{
    color: white;background: #F08400
  }

  /*商家tab*/
  .tabcontent2{
    padding-left: 10px;
    padding-right: 10px;
    background: white;
  }
  .tabcontent2:first-child{
    border-top: 1px solid #EDEDED;
  }
  .tabcontentitem{
    height: 70px;
    width: 100%;
    /*background: red;*/
    position: relative;
    margin-bottom: 10px;
  }
  .tabcontentleft{
    height: 55px;
    width: 55px;
  }
  .tabcontentleft .img2{
    width: 100%;
    height: 100%;
    margin-top: 5px;
  }
  .tabcontentright{
    height: 55px;
    position: absolute;
    top: 5px;
    left: 75px;
  }
  .tabcontentright p{
    letter-spacing: 1px;
  }
</style>
