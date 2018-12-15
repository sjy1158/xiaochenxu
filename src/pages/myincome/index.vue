<template>
    <div class="income">
      <div class="bgimg">
        <image lazy-load="true" src="/static/images/my_bg@3x.png" class="img1"></image>
        <div class="incomeprice">
          <p style="font-size: 26px;">¥ {{userdata.leijishouyi}}</p>
          <p style="font-size: 14px;margin-top: 7px;">累计收益</p>
          <p style="font-size: 14px;margin-top: 20px;">
            账户余额：¥{{userdata.zhanghuyue}}
            <span style="padding: 2px 12px;background: white;font-size: 12px;color: #F08400;margin-left: 18px;border-radius: 20px;">提现</span>
          </p>
        </div>
        <ul class="tabs">
          <li :class="params.type==0?'activebg':''" @click="incomeClick(0)">电商购收益</li>
          <li :class="params.type==1?'activebg':''" @click="incomeClick(1)">联盟商家收益</li>
          <li v-if="usertype=='城市合伙人'" :class="params.type==2?'activebg':''" @click="incomeClick(2)">城市收益</li>
        </ul>
      </div>


      <div class="incomeall">
        <ul class="incometab">
          <li>
            <p class="price">{{userdata.benyueyugu}}</p>
            <p class="prititle">本月预估(元)</p>
          </li>
          <li>
            <p class="price">{{userdata.shangyueyugu}}</p>
            <p class="prititle">上月预估(元)</p>
          </li>
          <li>
            <p class="price">{{userdata.shangyuejiesuan}}</p>
            <p class="prititle">上月结算(元)</p>
          </li>
        </ul>
        <div style="position: absolute;bottom: 15px;text-align: center;color: #717171;letter-spacing: 1px;width: 100%;" class="tishi">每月27号结算上月收入，本月预估收入则在下月27号结算</div>
      </div>

      <div class="timetitle">
        <div @click="alldingdan(params.type)">
          <image lazy-load="true" src="/static/images/my_icon_selected@3x.png" class="img2"></image>
          <span>全部订单明细</span>
        </div>
      </div>

      <div class="timechose">
        <ul class="timetab">
          <li :class="timeactive==0?'activetime':''" @click="chosetimetab(0)">今日</li>
          <li :class="timeactive==1?'activetime':''" @click="chosetimetab(1)">近7日</li>
          <li :class="timeactive==2?'activetime':''" @click="chosetimetab(2)">近30日</li>
          <li :class="timeactive==3?'activetime':''" @click="chosetimetab(3)">全部</li>
        </ul>
        <!--今日-->
        <ul v-if="timeactive==0" class="timetab2">
          <li>
            <p>付款笔数</p>
            <p>{{userdata.jinri.bishu}}</p>
          </li>
          <li>
            <p>预估佣金</p>
            <p>¥{{userdata.jinri.yongjin}}</p>
          </li>
          <li v-if="params.type==0">
            <p>管理津贴</p>
            <p>¥{{userdata.jinri.jintie}}</p>
          </li>
        </ul>
        <!--七日-->
        <ul v-if="timeactive==1" class="timetab2">
          <li>
            <p>付款笔数</p>
            <p>{{userdata.qiri.bishu}}</p>
          </li>
          <li>
            <p>预估佣金</p>
            <p>¥{{userdata.qiri.yongjin}}</p>
          </li>
          <li v-if="params.type==0">
            <p>管理津贴</p>
            <p>¥{{userdata.qiri.jintie}}</p>
          </li>
        </ul>
        <!--近30日-->
        <ul v-if="timeactive==2" class="timetab2">
          <li>
            <p>付款笔数</p>
            <p>{{userdata.sanshiri.bishu}}</p>
          </li>
          <li>
            <p>预估佣金</p>
            <p>¥{{userdata.sanshiri.yongjin}}</p>
          </li>
          <li v-if="params.type==0">
            <p>管理津贴</p>
            <p>¥{{userdata.sanshiri.jintie}}</p>
          </li>
        </ul>
        <!--全部-->
        <ul v-if="timeactive==3" class="timetab2">
          <li>
            <p>付款笔数</p>
            <p>{{userdata.quanbu.bishu}}</p>
          </li>
          <li>
            <p>预估佣金</p>
            <p>¥{{userdata.quanbu.yongjin}}</p>
          </li>
          <li v-if="params.type==0">
            <p>管理津贴</p>
            <p>¥{{userdata.quanbu.jintie}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import getRouter from '../../utils/getOptions'
  export default {
    data () {
      return {
        params: {
          userId: '',
          type: 0
        },
        usertype: '',
        userdata: {},
        timeactive: 0
      }
    },
    methods: {
      incomeClick (type) {
        this.params.type = type
        this.getXinxi(this.params)
      },
      async getXinxi (params) {
        var data = await this.$net.get('http://api.kuayet.com:8080/crossindustry/userPage/incomDetail', params)
        console.log(JSON.stringify(data))
        this.userdata = data
      },
      // 时间选择
      chosetimetab (index) {
        this.timeactive = index
      },
      //调换全部订单
      alldingdan (type) {
        switch (type) {
          case 0 :
            wx.navigateTo({
              url: '../alldingdan/main',
              redirect: false
            })
          case 1 :
            wx.navigateTo({
              url: '../shopincome/main',
              redirect: false
            })
        }
      }
    },
    onLoad () {
      const res = this.$saveToken.getToken()
      this.params.userId = res.token
      this.usertype = getRouter().name
      this.getXinxi(this.params)
    }
  }
</script>

<style scoped>
  .income {
    height: 100%;
    width: 100%;
    position: absolute;
    background: #F2F2F2;
  }
  .bgimg{
    position: relative;
    height: 225px;
    width: 100%;
  }
  .bgimg .img1{
    height: 100%;
    width: 100%;
  }
  .incomeprice{
    width: 100%;
    height: 150px;
    position: absolute;
    top: 50%;
    margin-top: -75px;
    color: white;
  }
  .incomeprice p{
    text-align: center;
    letter-spacing: 1px;
  }
  /*tab选项*/
  .tabs {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 34px;
    display: flex;
  }
  .tabs li{
    flex: 1;
    text-align: center;
    line-height: 32px;
    color: white;
    letter-spacing: 1px;
    font-size: 14px;
    border: 2px solid rgba(255, 255, 255, 0.5);
  }
  .tabs li:first-child{
    border-left: none!important;
  }
  .tabs li:nth-child(2) {
    border-left: none!important;
    border-right: none!important;
  }
  .tabs li:last-child{
    border-right: none!important;
  }
  .activebg{
    background: rgba(255, 255, 255, 0.5)!important;
  }

  /*各种收益*/
  .incomeall{
    height: 107px;
    width: 100%;
    background: white;
    position: relative;
  }
  .incometab{
    height: 41px;
    width: 100%;
    display: flex;
    position: absolute;
    top: 16px;
  }
  .incometab li{
    flex: 1;
    text-align: center;
    letter-spacing: 1px;
  }
  .incometab li .price{
    color: #F08400;
    font-size: 16px;
  }
  .incometab li .prititle{
    color: #393939;
    font-size: 12px;
  }
  @media (max-width: 1500px) {
    .tishi{
      font-size: 12px!important;
    }
  }
  @media (min-width: 700px) and (max-width: 1000px) {
    .tishi{
      font-size: 12px!important;
    }
  }
  @media (min-width: 350px) and (max-width: 700px) {
    .tishi{
      font-size: 12px!important;
    }
  }

  .timetitle{
    padding-left: 15px;
    padding-right: 15px;
    background: white;
    margin-top: 10px;
  }
  .timetitle div{
    width: 100%;
    height: 37px;
    line-height: 37px;
    border-bottom: 1px solid #F2F2F2;
  }
  .timetitle div .img2{
    height: 11px;
    width: 10px;
    vertical-align: middle;
  }
  .timetitle div span{
    margin-left: 8px;
    color: #393939;
    font-size: 12px;
    letter-spacing: 1px;
    vertical-align: middle;
  }
  .timechose{
    padding-left: 25px;
    padding-right: 25px;
    height: auto;
    background: white;
  }
  .timetab{
    width: 100%;
    height: 31px;
    display: flex;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .timetab li{
    flex: 1;
    text-align: center;
    line-height: 30px;
    letter-spacing: 1px;
    color: #F08400;
    border: 1px solid #F08400;
    font-size: 14px;
  }
  .timetab li:first-child{
    border-radius: 30px 0px 0px 30px;
  }
  .timetab li:nth-child(2){
    border-left: none!important;
    border-right: none!important;
  }
  .timetab li:nth-child(3){
    /*border-left: none!important;*/
    border-right: none!important;
  }
  .timetab li:last-child{
    border-radius: 0px 30px 30px 0px;
  }
  .timetab2{
    display: flex;
    padding-top: 5px;
    padding-bottom: 20px;
  }
  .timetab2 li{
    flex: 1;
    text-align: center;
    letter-spacing: 1px;
  }
  .timetab2 li p:first-child{
    color: #717171;
    font-size: 14px;
  }
  .timetab2 li p:nth-child(2){
    color: #393939;
    font-size: 14px;
    padding-top: 7px;
  }
  .activetime{
    background: #F08400;
    color: white!important;
  }
</style>
