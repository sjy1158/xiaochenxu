<template>
  <div class="paydiscon">
    <div class="mod1">
      <div class="form">
        <!--输入金额区域-->
        <div class="price">
          <div>
            <label>订单金额(元)</label><input type="text" placeholder="请询问服务员后输入">
          </div>
        </div>
        <div class="price">
          <div style="border-bottom: none!important;">
            <label>抵扣类别(元)</label><input type="text" placeholder="请选择" disabled="disabled">
          </div>
        </div>
        <div class="disconnums">
          <div><span>满100抵10元</span></div>
          <div><span>满100抵10元</span></div>
          <div><span>满100抵10元</span></div>
          <div><span>满100抵10元</span></div>
        </div>
        <!--输入金额ending-->
      </div>
    </div>

    <div class="mod2">
      <button type="button">立即抵扣买单</button>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .paydiscon{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    /*position: fixed;*/
    position: absolute;
  }
  .mod1{
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
  }
  .mod1 .form{
    height: auto;
    width: 100%;
    background: white;
    border-radius: 10px;
  }
  .form .price{
    padding-left: 15px;
    padding-right: 15px;
  }
  .form .price div{
    height: 53px;
    line-height: 53px;
    width: 100%;
    border-bottom: 1px solid #F2F2F2;
  }
  .form .price div label{
    color: #393939;
    float: left;
    font-size: 16px;
    letter-spacing: 1px;
    vertical-align: middle;
  }
  .form .price div input{
    width: 3.5rem;
    height: 100%;
    color: #8F8F8F;
    font-size: 14px;
    letter-spacing: 1px;
    display: inline-block;
    float: right;
    text-align: right;
    vertical-align: middle;
  }
  .disconnums{
    width:100%;
    height: auto;
    display: flex;
    flex-wrap:wrap;
    /*margin: 50px auto;*/
    /*background: green;*/
    font-size: 12px;
    padding-bottom: 12px;
  }
  .disconnums div{
    width: 50%;
    flex: 1;
    min-width: 50%;
    max-width: 50%;
    color: #FF0000;
    font-size: 12px;
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: 15px;
    margin-top: 10px;
  }
  .disconnums div span{
    padding: 5px 8px;
    border: 1px solid #FF0000;
    border-radius: 20px;
  }
  .mod2{
    padding-left: 30px;
    padding-right: 30px;
  }
  .mod2 button{
    height: 40px;
    width: 100%;
    background: #F08400;
    line-height: 40px;
    color: white;
    letter-spacing: 1px;
    font-size: 18px;
    font-weight: bold;
    margin-top: 50px;
  }
</style>
