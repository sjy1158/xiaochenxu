<template>
  <div class="callnum">
    <div class="content">
      <div class="dot">
        <img src="/static/images/my_head@3x.png" alt="" style="width: 100%;height: 100%;">
      </div>
      <div class="pulse"></div>
      <div class="pulse1"></div>
    </div>

    <div class="name">
      跨业通专线
    </div>
    <div class="phonenum" style="margin-top: 10px;font-size: 18px;color: #FFFFFF;text-align: center;letter-spacing: 1px;">
      {{phoneNumber}}
    </div>
    <div class="success" style="margin-top: 10px;font-size: 16px;color: white;text-align: center;letter-spacing: 1px;">
      呼叫成功 正在接通 请稍后
      <div class="threedot">
        <div class="point one"></div>
        <div class="point two"></div>
        <div class="point three"></div>
      </div>
    </div>

    <button style="font-size: 16px;letter-spacing: 1px;color: white;height: 50px;width: 165px;background: red;position:absolute;line-height: 50px;border-radius: 50px;bottom: 59px;left: 50%;margin-left: -82.5px;">返回等待接听</button>
  </div>
</template>

<script>
  import getRouter from '../../utils/getOptions'
  export default {
    data () {
      return {
        phoneNumber: ''
      }
    },
    onLoad () {
      this.phoneNumber = getRouter().phonenum
    }
  }
</script>

<style scoped>
.callnum{
  width: 100%;
  height: 100%;
  background: #2E2822;
  position: fixed;
}
  .titleheader{
    width: 114px;
    height: 114px;
    margin: 0 auto;
    margin-top: 48px!important;
  }
  .titleheader img{
    height: 114px;
    width: 114px;
  }

  /*动画效果*/
@keyframes warn {
  0% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0.0;
  }
  25% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0.1;
  }
  50% {
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    opacity: 0.3;
  }
  75% {
    transform: scale(0.8);
    -webkit-transform: scale(0.8);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    opacity: 0.0;
  }
}
@keyframes warn1 {
  0% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0.0;
  }
  25% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0.1;
  }
  50% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0.3;
  }
  75% {
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(0.8);
    -webkit-transform: scale(0.8);
    opacity: 0.0;
  }
}
.content{
  width: 100%;
  height: 165px;
  margin-top: 48px;
}
/* 保持大小不变的小圆点 */
.dot {
  position: absolute;
  width: 114px;
  height: 114px;
  top: 73.5px;
  left: 50%;
  margin-left: -57px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border: 1px solid white;
  border-radius: 50%;
  background-color:#33ccff; /* 实心圆 ，如果没有这个就是一个小圆圈 */
  z-index: 2;
}
/* 产生动画（向外扩散变大）的圆圈 第一个圆 */
.pulse {
  width: 165px;
  height: 165px;
  position: absolute;
  left: 50%;
  margin-left: -82.5px;
  border: 3px solid white;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  z-index: 1;
  opacity: 0;
  -webkit-animation: warn 2s ease-out;
  -moz-animation: warn 2s ease-out;
  animation: warn 2s ease-out;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
/* 产生动画（向外扩散变大）的圆圈 第二个圆 */
.pulse1 {
  width: 165px;
  height: 165px;
  position: absolute;
  left: 50%;
  margin-left: -82.5px;
  border: 3px solid white;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  z-index: 1;
  opacity: 0;
  -webkit-animation: warn1 2s ease-out;
  -moz-animation: warn1 2s ease-out;
  animation: warn1 2s ease-out;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
  .name{
    width: 100%;
    text-align: center;
    color: white;
    font-size: 34px;
    margin-top: 20px;
  }

.threedot{
  display: inline-block;
}
.point{
  width:5px;
  height:5px;
  background:white;
  border-radius:50%;
  float:left;
  margin-right:5px;
  animation:myAnima 1.2s ease-in-out infinite;
}
.two{
  animation-delay: 200ms;
}
.three{
  animation-delay: 400ms;
}
@keyframes myAnima{
  from {opacity: 0.8}
  to{opacity: 0}
}
</style>
