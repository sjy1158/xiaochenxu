<template>
  <div class="cjwenti">
    <div class="mod">
        <div class="mod_item">
          <div class="left">
            <img src="/static/images/my_question_order_1@3x.png" alt="">
            <p>关于订单</p>
          </div>
          <div class="right">
            <p>已确认收货的订单失效了？</p>
            <p style="border: none">有订单笔数却没有佣金显示？</p>
          </div>
        </div>
      <div class="mod_item">
        <div class="left">
          <img src="/static/images/my_question_order_2@3x.png" alt="">
          <p>关于订单</p>
        </div>
        <div class="right">
          <p>已确认收货的订单失效了？</p>
          <p style="border: none">有订单笔数却没有佣金显示？</p>
        </div>
      </div>
      <div class="mod_item">
        <div class="left">
          <img src="/static/images/my_question_order_3@3x.png" alt="">
          <p>关于订单</p>
        </div>
        <div class="right">
          <p>已确认收货的订单失效了？</p>
          <p style="border: none">有订单笔数却没有佣金显示？</p>
        </div>
      </div>
      <div class="mod_item">
        <div class="left">
          <img src="/static/images/my_question_order_4@3x.png" alt="">
          <p>关于订单</p>
        </div>
        <div class="right">
          <p>已确认收货的订单失效了？</p>
          <p style="border: none">有订单笔数却没有佣金显示？</p>
        </div>
      </div>
      <div class="mod_item" style="border: none">
        <div class="left">
          <img src="/static/images/my_question_order_5@3x.png" alt="">
          <p>关于订单</p>
        </div>
        <div class="right">
          <p>已确认收货的订单失效了？</p>
          <p style="border: none">有订单笔数却没有佣金显示？</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .cjwenti{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    /*position: fixed;*/
    position: absolute;
  }
  .mod{
    width: 100%;
    height: 105px;
    background: white;
  }
  .mod_item{
    padding: 15px;
    background: white;
    border-bottom: 1px solid #F2F2F2;
  }
  .mod_item div{
    display: inline-block;
    vertical-align: middle;
  }
  .mod_item div.left{
    width: 74px;
    height: 100%;
    text-align: center;
    border-right: 1px solid #F2F2F2;
  }
  .mod_item div.right{
    height: 100%;
    margin-left: 12px;
  }
  .mod_item div img{
    width: 30px;
    height: 30px;
  }
  .mod_item div.left p{
    color: #393939;
    font-size: 12px;
    padding-top: 10px;
  }
  .mod_item div.right p{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #F2F2F2;
    color: #393939;
    font-size: 14px;
  }
</style>
