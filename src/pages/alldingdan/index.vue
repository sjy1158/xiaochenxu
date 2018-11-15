<template>
  <div>
    <scroll-view scroll-x class="top">
      <div class="tabbar">线下订单</div>
      <div class="tabbar">线上订单</div>
      <div class="tabbar">商城订单</div>
    </scroll-view>
    <swiper :current="currentTab" @change="changeTab" id="swiperContent" style="padding-left: 30px;padding-right: 20px;">
      <swiper-item>
        <div style="position: relative;height: 92px;width: 100%;background: #0bb20c">
          <img src="/static/images/head_portraityuan.png" alt="" style="width: 47px;height: 47px;vertical-align: middle">
          <div style="position: absolute;left: 0;top: 0;vertical-align: middle">
            <p style="color: #393939;font-size: 14px;">星巴克Starbucks（新塘路2店）</p>
            <p style="color: #FF0000;font-size: 10px;"><span>抵扣：1999.00元</span><span>抵扣：1999.00元</span><span>抵扣：1999.00元</span></p>
            <p>2018-12-23 12:00</p>
          </div>
        </div>
      </swiper-item>
      <swiper-item>
        2222222222222
      </swiper-item>
      <swiper-item>
        333333333333
      </swiper-item>
    </swiper>
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
      }
    }
  }
</script>

<style scoped>
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
    height: 800px;
    /*padding-left: 10px;*/
    /*padding-right: 10px;*/
    margin-top: 14px;
  }
</style>
