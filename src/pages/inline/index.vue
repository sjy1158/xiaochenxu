<template>
  <div>
    <div class="mod1">
      <div>
        <input type="text" value="13024135878" disabled="true">
        <img src="/static/images/merchant_wrong@3x.png" alt="">
      </div>
      <p>默认号码</p>
    </div>
    <!--充值卡充值-->
    <div class="mod2">
      <p>充值卡充值</p>
      <div class="btn">
        <button>充值</button>
      </div>
    </div>
    <!--在线充值-->
    <div class="mod3">
      <p>在线充值</p>
      <div class="inlinecontent">
        <ul>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
.mod1{
  padding-left: 10px;
  padding-right: 10px;
  border-top: 1px solid #F2F2F2;
}
  .mod1 div{
    width: 100%;
    height: 50px;
    background: white;
    position: relative;
  }
  .mod1 div input{
    float: left;
    height: 100%;
    width: 90%;
    line-height: 50px;
    font-size: 34px;
    letter-spacing: 1px;
    color: #393939;
  }
.mod1 div img{
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0px;
  top: 50%;
  margin-top: -10px;
}
  .mod1 p{
    color: #717171;
    font-size: 12px;
    letter-spacing: 1px;
  }
  .mod2{
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 18px;
  }
  .mod2 p{
    color: #393939;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
  }
.btn{
  padding-left: 44px;
  padding-right: 44px;
}
.btn button{
  width: 100%;
  height: 37px;
  line-height: 37px;
  background: #F08400;
  letter-spacing: 1px;
  margin-top: 22px;
  color: white;
  font-size: 18px;
  border-radius: 50px;
}
/*在线充值*/
.mod3{
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 30px;
}
.mod3 p{
  color: #393939;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
}
.inlinecontent{
  padding-left: 20px;
  padding-right: 20px;
}
.mod3 ul{
  margin-top: 17px;
  width: 100%;
  display: flex;
  flex-flow:wrap;
  justify-content: space-between;
}
.mod3 ul li{
  width: 50%;
  text-align: center;
}
  /*.inputcard{*/
    /*display: flex;*/
    /*padding-left: 20px;*/
    /*padding-right: 20px;*/
    /*margin-top: 15px;*/
    /*height: 38px;*/
    /*background: #0bb20c;*/
  /*}*/
  /*.inputcard div{*/
    /*flex: 1;*/
  /*}*/
/*.inputcard div input{*/
  /*background: #CFCFCF;*/
  /*color: #8F8F8F;*/
  /*font-size: 14px;*/
  /*border: 1px solid #CFCFCF;*/
  /*border-radius: 5px;*/
  /*!*letter-spacing: 2px;*!*/
  /*height: 38px;*/
  /*line-height: 38px;*/
  /*position: absolute;*/
  /*text-align: center;*/
/*}*/
</style>
