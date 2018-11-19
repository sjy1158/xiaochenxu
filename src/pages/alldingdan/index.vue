<template>
  <div class="alldingdan">
    <scroll-view scroll-x class="top">
      <div class="tabbar" :class="currentTab==0?'activeTab':''" @click="tabClick(0)">
        <div v-show="currentTab==0" style="width: 10px;height: 2px;background: #F08400;position: absolute;left: 50%;margin-left: -5px;bottom: 0px;"></div>
        线下订单
      </div>
      <div class="tabbar" :class="currentTab==1?'activeTab':''" @click="tabClick(1)">
        <div v-show="currentTab==1" style="width: 10px;height: 2px;background: #F08400;position: absolute;left: 50%;margin-left: -5px;bottom: 0px;"></div>
        线上订单
      </div>
      <div class="tabbar" :class="currentTab==2?'activeTab':''" @click="tabClick(2)">
        <div v-show="currentTab==2" style="width: 10px;height: 2px;background: #F08400;position: absolute;left: 50%;margin-left: -5px;bottom: 0px;"></div>
        商城订单
      </div>
    </scroll-view>
    <swiper :current="currentTab" @change="changeTab" id="swiperContent" style="padding-left: 30px;padding-right: 20px;background: white">
      <swiper-item>
        <div class="tabcontent">
          <img src="/static/images/my_head@3x.png" alt="">
          <div class="titlecon">
            <p class="title">星巴克Starbucks（新塘路2店）</p>
            <p class="discon"><span>消费:1999.00元</span><span>抵扣:1999.00元</span><span style="margin-right: 0px!important;">实付:1999.00元</span></p>
            <p class="time">2018-12-23 12:00</p>
          </div>
        </div>
        <div class="tabcontent">
          <img src="/static/images/my_head@3x.png" alt="">
          <div class="titlecon">
            <p class="title">星巴克Starbucks（新塘路2店）</p>
            <p class="discon"><span>消费:1999.00元</span><span>抵扣:1999.00元</span><span style="margin-right: 0px!important;">实付:1999.00元</span></p>
            <p class="time">2018-12-23 12:00</p>
          </div>
        </div>
        <div class="tabcontent">
          <img src="/static/images/my_head@3x.png" alt="">
          <div class="titlecon">
            <p class="title">星巴克Starbucks（新塘路2店）</p>
            <p class="discon"><span>消费:1999.00元</span><span>抵扣:1999.00元</span><span style="margin-right: 0px!important;">实付:1999.00元</span></p>
            <p class="time">2018-12-23 12:00</p>
          </div>
        </div>
        <div class="tabcontent">
          <img src="/static/images/my_head@3x.png" alt="">
          <div class="titlecon">
            <p class="title">星巴克Starbucks（新塘路2店）</p>
            <p class="discon"><span>消费:1999.00元</span><span>抵扣:1999.00元</span><span style="margin-right: 0px!important;">实付:1999.00元</span></p>
            <p class="time">2018-12-23 12:00</p>
          </div>
        </div>
      </swiper-item>
      <swiper-item>
        <div class="tabcontent">
          <img src="/static/images/my_head@3x.png" alt="">
          <div class="titlecon">
            <p class="title">星巴克Starbucks（新塘路2店）</p>
            <p class="discon"><span>消费:1999.00元</span><span>抵扣:1999.00元</span><span style="margin-right: 0px!important;">实付:1999.00元</span></p>
            <p class="time">2018-12-23 12:00</p>
          </div>
        </div>
        <div class="tabcontent">
          <img src="/static/images/my_head@3x.png" alt="">
          <div class="titlecon">
            <p class="title">星巴克Starbucks（新塘路2店）</p>
            <p class="discon"><span>消费:1999.00元</span><span>抵扣:1999.00元</span><span style="margin-right: 0px!important;">实付:1999.00元</span></p>
            <p class="time">2018-12-23 12:00</p>
          </div>
        </div>
        <div class="tabcontent">
          <img src="/static/images/my_head@3x.png" alt="">
          <div class="titlecon">
            <p class="title">星巴克Starbucks（新塘路2店）</p>
            <p class="discon"><span>消费:1999.00元</span><span>抵扣:1999.00元</span><span style="margin-right: 0px!important;">实付:1999.00元</span></p>
            <p class="time">2018-12-23 12:00</p>
          </div>
        </div>
        <div class="tabcontent">
          <img src="/static/images/my_head@3x.png" alt="">
          <div class="titlecon">
            <p class="title">星巴克Starbucks（新塘路2店）</p>
            <p class="discon"><span>消费:1999.00元</span><span>抵扣:1999.00元</span><span style="margin-right: 0px!important;">实付:1999.00元</span></p>
            <p class="time">2018-12-23 12:00</p>
          </div>
        </div>
      </swiper-item>
      <swiper-item>
        <div class="tabcontent">
          <img src="/static/images/my_head@3x.png" alt="">
          <div class="titlecon">
            <p class="title">星巴克Starbucks（新塘路2店）</p>
            <p class="discon"><span>消费:1999.00元</span><span>抵扣:1999.00元</span><span style="margin-right: 0px!important;">实付:1999.00元</span></p>
            <p class="time">2018-12-23 12:00</p>
          </div>
        </div>
        <div class="tabcontent">
          <img src="/static/images/my_head@3x.png" alt="">
          <div class="titlecon">
            <p class="title">星巴克Starbucks（新塘路2店）</p>
            <p class="discon"><span>消费:1999.00元</span><span>抵扣:1999.00元</span><span style="margin-right: 0px!important;">实付:1999.00元</span></p>
            <p class="time">2018-12-23 12:00</p>
          </div>
        </div>
        <div class="tabcontent">
          <img src="/static/images/my_head@3x.png" alt="">
          <div class="titlecon">
            <p class="title">星巴克Starbucks（新塘路2店）</p>
            <p class="discon"><span>消费:1999.00元</span><span>抵扣:1999.00元</span><span style="margin-right: 0px!important;">实付:1999.00元</span></p>
            <p class="time">2018-12-23 12:00</p>
          </div>
        </div>
        <div class="tabcontent">
          <img src="/static/images/my_head@3x.png" alt="">
          <div class="titlecon">
            <p class="title">星巴克Starbucks（新塘路2店）</p>
            <p class="discon"><span>消费:1999.00元</span><span>抵扣:1999.00元</span><span style="margin-right: 0px!important;">实付:1999.00元</span></p>
            <p class="time">2018-12-23 12:00</p>
          </div>
        </div>
      </swiper-item>
    </swiper>
    <p style="color: #8F8F8F;font-size: 12px;text-align: center;letter-spacing: 1px;">已显示全部内容</p>
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
      changeTab (e) {
        this.currentTab = e.mp.detail.current
      },
      tabClick (index) {
        this.currentTab = index
      }
    }
  }
</script>

<style scoped>
  .alldingdan{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    /*position: fixed;*/
    position:absolute;
  }
  .activeTab{
    color: #F08400!important;
  }
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
    width: 33.33%;
    display: inline-block;
    text-align: center;
    position: relative;
  }
  .activeTab{
    color: #F08400!important;
  }
  #swiperContent{
    height: 400px;
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
</style>
