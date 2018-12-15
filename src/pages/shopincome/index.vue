<template>
    <div class="shopincome">
      <div class="bgimg">
        <image lazy-load="true" src="/static/images/my_bg@3x.png" class="imgtitle"></image>
        <ul class="tabs">
          <li>
            <p>99</p>
            <p>商家数量(家)</p>
          </li>
          <li>
            <p>99</p>
            <p>商家订单(笔)</p>
          </li>
          <li>
            <p>99.00</p>
            <p>商家收益(元)</p>
          </li>
        </ul>
      </div>

      <!--列表-->
      <div class="shoplist">
        <ul class="shoplist2">
          <li>
            <image lazy-load="true" src="/static/images/appcode.png" class="shopimg"></image>
            <div class="name" style="border-bottom: 1px solid #EDEDED">
              <span style="float: right;line-height: 47px;font-size: 14px;letter-spacing: 1px;color: #FF0000">+5.15元</span>
              <p style="color: #393939;font-size: 14px;position: absolute;top: 0px;font-weight: bold">星巴克Starbucks（新塘路2店）</p>
              <p style="color: #717171;font-size: 12px;position: absolute;bottom:5px;">订单已完成<span style="margin-left: 0.5rem">2018-12-23 12:00</span></p>
            </div>
          </li>
          <li>
            <image lazy-load="true" src="/static/images/appcode.png" class="shopimg"></image>
            <div class="name" style="border-bottom: 1px solid #EDEDED">
              <span style="float: right;line-height: 47px;font-size: 14px;letter-spacing: 1px;color: #FF0000">+5.15元</span>
              <p style="color: #393939;font-size: 14px;position: absolute;top: 0px;font-weight: bold">星巴克Starbucks（新塘路2店）</p>
              <p style="color: #717171;font-size: 12px;position: absolute;bottom:5px;">订单已完成<span style="margin-left: 0.5rem">2018-12-23 12:00</span></p>
            </div>
          </li>
          <li>
            <image lazy-load="true" src="/static/images/appcode.png" class="shopimg"></image>
            <div class="name" style="border-bottom: 1px solid #EDEDED">
              <span style="float: right;line-height: 47px;font-size: 14px;letter-spacing: 1px;color: #FF0000">+5.15元</span>
              <p style="color: #393939;font-size: 14px;position: absolute;top: 0px;font-weight: bold">星巴克Starbucks（新塘路2店）</p>
              <p style="color: #717171;font-size: 12px;position: absolute;bottom:5px;">订单已完成<span style="margin-left: 0.5rem">2018-12-23 12:00</span></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .shopincome{
    width: 100%;
    height: 100%;
    background-color: #F1F0F0;
    /*position: fixed;*/
    position:absolute;
  }
  .bgimg{
    height: 155px;
    width: 100%;
    position: relative;
  }
  .bgimg .imgtitle{
    height: 100%;
    width: 100%;
  }
  .tabs{
    width: 100%;
    height: 50px;
    display: flex;
    /*background: white;*/
    position: absolute;
    top: 20px;
  }
  .tabs li{
    flex: 1;
    text-align: center;
    color: white;
  }
  .tabs li:last-child{
    color: #FDFF70!important;
  }
  .tabs li p{
    letter-spacing: 1px;
  }
  .tabs li p:first-child{
    font-size: 16px;
  }
  .tabs li p:nth-child(2){
    font-size: 14px;
  }
  .shoplist{
    padding-left: 10px;
    padding-right: 10px;
  }
  .shoplist2{
    height: auto;
    padding-left: 10px;
    padding-right: 15px;
    background: white;
    position: relative;
    top: -60px;
    border-radius: 10px;
  }
  .shoplist2 li{
    width: 100%;
    height: 70px;
    position: relative;
  }
  .shopimg{
    height: 47px;
    width: 47px;
    position: absolute;
    top: 50%;
    margin-top: -23.5px;
  }
  .name{
    height: 52px;
    width: 84%;
    /*background: red;*/
    position: absolute;
    left: 57px;
    top: 50%;
    margin-top: -23.5px;
    /*border-bottom: 1px solid #EDEDED;*/
  }
  .name p{
    letter-spacing: 1px;
  }
</style>
