<template>
  <div class="lookdingdan">
    <scroll-view scroll-x class="top">
      <div class="tabbar">线下订单</div>
      <div class="tabbar">线上订单</div>
    </scroll-view>
    <scroll-view scroll-x class="top2">
      <div class="allbar">
        <div class="tabbar"><span :class="currentTab==0?'activeTab':''"  @click="tabClick(0)">全部</span></div>
        <div class="tabbar"><span :class="currentTab==1?'activeTab':''"  @click="tabClick(1)">待收货</span></div>
        <div class="tabbar"><span :class="currentTab==2?'activeTab':''"  @click="tabClick(2)">已完成</span></div>
      </div>
    </scroll-view>
    <swiper :current="currentTab" @change="changeTab" id="swiperContent" style="padding-left: 11px;padding-right: 19px;background: white;margin-top: 10px;">
      <swiper-item>
        <div class="itemcontent">
          <div class="title">
            <img src="/static/images/businesses_icon@2x.png" alt="">
            <span style="padding-left: 8px;color: #393939">枸杞之乡旗舰店</span>
            <span style="float: right;color: #F08400">待收货</span>
          </div>
          <div class="contentall">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542362626348&di=5b576b7db99d0bceb1459bb7ca13b9e7&imgtype=0&src=http%3A%2F%2Fpic40.photophoto.cn%2F20160728%2F1155115737252533_b.jpg" alt="">
            <div class="titlediscon">
              <p class="title1" style="width: 173px;">杞利元枸杞子宁夏特级500g新货构杞正宗中宁苟杞子罐装</p>
            </div>
            <div class="allsize">
              <p>重量：500克</p>
              <p>数量：1件</p>
              <p>数量：1件</p>
            </div>
            <div class="discons">
              <div>原价:113.80元</div>
              <div>抵扣:100.00元</div>
              <div>实付:13.80元</div>
            </div>
          </div>
          <div class="dingdancode">
            <span style="color: #393939;font-size: 10px;">订单号：12345678910</span>
            <span style="color: #393939;font-size: 9px;margin-left: 0.2rem;padding: 1px 2px;border: 1px solid #393939">复制</span>
            <span style="color: #393939;font-size: 12px;margin-left: 0.3rem;">共1件</span>
            <span style="color: #393939;font-size: 12px;float: right">合计:13.80(含运费0.00)</span>
          </div>
          <div class="button">
            <div class="sure"><span>确认收货</span></div>
          </div>
        </div>
        <div class="itemcontent">
          <div class="title">
            <img src="/static/images/businesses_icon@2x.png" alt="">
            <span style="padding-left: 8px;color: #393939">枸杞之乡旗舰店</span>
            <span style="float: right;color: #F08400">待收货</span>
          </div>
          <div class="contentall">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542362626348&di=5b576b7db99d0bceb1459bb7ca13b9e7&imgtype=0&src=http%3A%2F%2Fpic40.photophoto.cn%2F20160728%2F1155115737252533_b.jpg" alt="">
            <div class="titlediscon">
              <p class="title1" style="width: 173px;">杞利元枸杞子宁夏特级500g新货构杞正宗中宁苟杞子罐装</p>
            </div>
            <div class="allsize">
              <p>重量：500克</p>
              <p>数量：1件</p>
              <p>数量：1件</p>
            </div>
            <div class="discons">
              <div>原价:113.80元</div>
              <div>抵扣:100.00元</div>
              <div>实付:13.80元</div>
            </div>
          </div>
          <div class="dingdancode">
            <span style="color: #393939;font-size: 10px;">订单号：12345678910</span>
            <span style="color: #393939;font-size: 9px;margin-left: 0.2rem;padding: 1px 2px;border: 1px solid #393939">复制</span>
            <span style="color: #393939;font-size: 12px;margin-left: 0.3rem;">共1件</span>
            <span style="color: #393939;font-size: 12px;float: right">合计:13.80(含运费0.00)</span>
          </div>
          <div class="button">
            <div class="sure"><span>确认收货</span></div>
          </div>
        </div>

      </swiper-item>
      <swiper-item>
        <div class="itemcontent">
          <div class="title">
            <img src="/static/images/businesses_icon@2x.png" alt="">
            <span style="padding-left: 8px;color: #393939">枸杞之乡旗舰店</span>
            <span style="float: right;color: #F08400">待收货</span>
          </div>
          <div class="contentall">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542362626348&di=5b576b7db99d0bceb1459bb7ca13b9e7&imgtype=0&src=http%3A%2F%2Fpic40.photophoto.cn%2F20160728%2F1155115737252533_b.jpg" alt="">
            <div class="titlediscon">
              <p class="title1" style="width: 173px;">杞利元枸杞子宁夏特级500g新货构杞正宗中宁苟杞子罐装</p>
            </div>
            <div class="allsize">
              <p>重量：500克</p>
              <p>数量：1件</p>
              <p>数量：1件</p>
            </div>
            <div class="discons">
              <div>原价:113.80元</div>
              <div>抵扣:100.00元</div>
              <div>实付:13.80元</div>
            </div>
          </div>
          <div class="dingdancode">
            <span style="color: #393939;font-size: 10px;">订单号：12345678910</span>
            <span style="color: #393939;font-size: 9px;margin-left: 0.2rem;padding: 1px 2px;border: 1px solid #393939">复制</span>
            <span style="color: #393939;font-size: 12px;margin-left: 0.3rem;">共1件</span>
            <span style="color: #393939;font-size: 12px;float: right">合计:13.80(含运费0.00)</span>
          </div>
          <div class="button">
            <div class="sure"><span>确认收货</span></div>
          </div>
        </div>
        <div class="itemcontent">
          <div class="title">
            <img src="/static/images/businesses_icon@2x.png" alt="">
            <span style="padding-left: 8px;color: #393939">枸杞之乡旗舰店</span>
            <span style="float: right;color: #F08400">待收货</span>
          </div>
          <div class="contentall">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542362626348&di=5b576b7db99d0bceb1459bb7ca13b9e7&imgtype=0&src=http%3A%2F%2Fpic40.photophoto.cn%2F20160728%2F1155115737252533_b.jpg" alt="">
            <div class="titlediscon">
              <p class="title1" style="width: 173px;">杞利元枸杞子宁夏特级500g新货构杞正宗中宁苟杞子罐装</p>
            </div>
            <div class="allsize">
              <p>重量：500克</p>
              <p>数量：1件</p>
              <p>数量：1件</p>
            </div>
            <div class="discons">
              <div>原价:113.80元</div>
              <div>抵扣:100.00元</div>
              <div>实付:13.80元</div>
            </div>
          </div>
          <div class="dingdancode">
            <span style="color: #393939;font-size: 10px;">订单号：12345678910</span>
            <span style="color: #393939;font-size: 9px;margin-left: 0.2rem;padding: 1px 2px;border: 1px solid #393939">复制</span>
            <span style="color: #393939;font-size: 12px;margin-left: 0.3rem;">共1件</span>
            <span style="color: #393939;font-size: 12px;float: right">合计:13.80(含运费0.00)</span>
          </div>
          <div class="button">
            <div class="sure"><span>确认收货</span></div>
          </div>
        </div>
      </swiper-item>
      <swiper-item>
        <div class="itemcontent">
          <div class="title">
            <img src="/static/images/businesses_icon@2x.png" alt="">
            <span style="padding-left: 8px;color: #393939">枸杞之乡旗舰店</span>
            <span style="float: right;color: #F08400">待收货</span>
          </div>
          <div class="contentall">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542362626348&di=5b576b7db99d0bceb1459bb7ca13b9e7&imgtype=0&src=http%3A%2F%2Fpic40.photophoto.cn%2F20160728%2F1155115737252533_b.jpg" alt="">
            <div class="titlediscon">
              <p class="title1" style="width: 173px;">杞利元枸杞子宁夏特级500g新货构杞正宗中宁苟杞子罐装</p>
            </div>
            <div class="allsize">
              <p>重量：500克</p>
              <p>数量：1件</p>
              <p>数量：1件</p>
            </div>
            <div class="discons">
              <div>原价:113.80元</div>
              <div>抵扣:100.00元</div>
              <div>实付:13.80元</div>
            </div>
          </div>
          <div class="dingdancode">
            <span style="color: #393939;font-size: 10px;">订单号：12345678910</span>
            <span style="color: #393939;font-size: 9px;margin-left: 0.2rem;padding: 1px 2px;border: 1px solid #393939">复制</span>
            <span style="color: #393939;font-size: 12px;margin-left: 0.3rem;">共1件</span>
            <span style="color: #393939;font-size: 12px;float: right">合计:13.80(含运费0.00)</span>
          </div>
          <div class="button">
            <div class="sure"><span>确认收货</span></div>
          </div>
        </div>
        <div class="itemcontent">
          <div class="title">
            <img src="/static/images/businesses_icon@2x.png" alt="">
            <span style="padding-left: 8px;color: #393939">枸杞之乡旗舰店</span>
            <span style="float: right;color: #F08400">待收货</span>
          </div>
          <div class="contentall">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542362626348&di=5b576b7db99d0bceb1459bb7ca13b9e7&imgtype=0&src=http%3A%2F%2Fpic40.photophoto.cn%2F20160728%2F1155115737252533_b.jpg" alt="">
            <div class="titlediscon">
              <p class="title1" style="width: 173px;">杞利元枸杞子宁夏特级500g新货构杞正宗中宁苟杞子罐装</p>
            </div>
            <div class="allsize">
              <p>重量：500克</p>
              <p>数量：1件</p>
              <p>数量：1件</p>
            </div>
            <div class="discons">
              <div>原价:113.80元</div>
              <div>抵扣:100.00元</div>
              <div>实付:13.80元</div>
            </div>
          </div>
          <div class="dingdancode">
            <span style="color: #393939;font-size: 10px;">订单号：12345678910</span>
            <span style="color: #393939;font-size: 9px;margin-left: 0.2rem;padding: 1px 2px;border: 1px solid #393939">复制</span>
            <span style="color: #393939;font-size: 12px;margin-left: 0.3rem;">共1件</span>
            <span style="color: #393939;font-size: 12px;float: right">合计:13.80(含运费0.00)</span>
          </div>
          <div class="button">
            <div class="sure"><span>确认收货</span></div>
          </div>
        </div>
      </swiper-item>
    </swiper>
    <p style="text-align: center;margin-top: 20px;font-size: 12px;color: #8F8F8F">已显示全部内容</p>
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
  .activeTab{
    color: #F08400;
    border: 1px solid #F08400!important;
  }
  .lookdingdan{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
  /*position: fixed;*/
    position: absolute;
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
    width: 50%;
    display: inline-block;
    text-align: center;
    position: relative;
  }
  .top2{
    width: 100%;
    height: 53px;
    background: white;
  }
  .allbar{
    display: flex;
    width: 70%;
    margin: 0 auto;
    line-height: 53px;
  }
  .allbar div{
    flex: 1;
    font-size: 12px;
  }
  .allbar div span{
    padding: 3px 13px;
    border: 1px solid #393939;
    border-radius: 5px;
    letter-spacing: 1px;
  }
  /*列表架子*/
  .itemcontent{
    width: 100%;
    height: 225px;
    background: white;
  }
  .itemcontent .title{
    height: 43px;
    width: 100%;
    line-height: 43px;
    font-size: 12px;
  }
  .itemcontent .title img{
    width: 12px;
    height: 12px;
    vertical-align: middle;
  }
  .itemcontent .title span{
    vertical-align: middle;
  }
  .contentall{
    height: 93px;
    width: 100%;
    background: #FAFAFA;
    position: relative;
  }
  .contentall img{
    height: 70px;
    width: 70px;
    margin-top: 15px;
  }
  .titlediscon{
    position: absolute;
    height: 70px;
    top: 15px;
    left: 79px;
  }
  .titlediscon p.title1{
    color: #393939;
    font-size: 12px;
  }
  .allsize{
    position: absolute;
    right: 0;
    top: 15px;
  }
  .allsize p{
    color: #717171;
    font-size: 10px;
  }
  .discons{
    display: flex;
    position: absolute;
    left: 79px;
    bottom: 10px;
  }
  .discons div{
    flex: 1;
    width: 67px;
    height: 15px;
    line-height: 15px;
    border-radius: 5px;
    border: 1px solid #F08400;
    text-align: center;
    color: #FF0000;
    font-size: 10px;
    margin-right: 10px;
  }
  .dingdancode{
    height: 34px;
    width: 100%;
    line-height: 34px;
    border-bottom: 1px solid #F2F2F2;
  }
  .dingdancode span{
    vertical-align: middle;
    letter-spacing: 1px;
  }

  #swiperContent{
    height: 400px;
  }
  .button{
    height: 52px;
    width: 100%;
    position: relative;
  }
  .sure{
    color: #F08400;
    font-size: 12px;
    line-height: 52px;
    position: absolute;
    right: 0;
  }
  .sure span{
    padding: 4px 9px;
    border: 1px solid #F08400;
    border-radius: 30px;
  }
</style>
