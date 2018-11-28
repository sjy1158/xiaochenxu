<template>
  <div>
    <div class="header">
      直播间
    </div>
    <!--obs推流地址,live-player进行接收-->
    <!--<live-player id="myplay" src="rtmp://37212.livepush.myqcloud.com/live/37212_b62800f771?bizid=37212&txSecret=0f6d90ad8c732127929ac988644cb6ef&txTime=5BFC187F" autoplay="true" mode="live" style="height: 225px;width: 100%;" />-->
    <live-pusher id="mypush" url="rtmp://37212.livepush.myqcloud.com/live/37212_192e1d8f7e?bizid=37212&txSecret=254bd468340b0ff1e737e3d3f21bdb0c&txTime=5BFD69FF" mode="RTC" autopush="false" style="width: 100%;height: 225px;"/>
    <div class="btns">
      <button @click="playopen()">开始推流</button>
      <button @click="stopting()">停止推流</button>
      <button @click="pauseliu()">暂停推流</button>
      <button @click="huifu()">恢复推流</button>
      <button @click="getTabcre()">切换前后摄像头</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        LivePusherContent: '',
        LivePlayerContext: ''
      }
    },
    methods: {
      playopen () {
        this.LivePusherContent.start()
      },
      stopting () {
        this.LivePusherContent.stop()
      },
      pauseliu () {
        this.LivePusherContent.pause()
      },
      huifu () {
        this.LivePusherContent.resume()
      },
      getTabcre () {
        this.LivePusherContent.switchCamera()
      }
    },
    onLoad () {
    },
    onReady () {
      this.LivePusherContent = wx.createLivePusherContext('mypush')
      this.LivePlayerContext = wx.createLivePlayerContext('myplay')
    }
  }
</script>

<style scoped>
  .btns{
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 15px;
  }
  .btns button{
    width: 100%;
    height: 50px;
    letter-spacing: 1px;
    color: white;
    border: none;
    background: #0bb20c;
    line-height: 50px;
    margin-top: 15px;
  }
  .header{
    height: 50px;
    width: 100%;
    background: pink;
    text-align: center;
    font-size: 16px;
    color: white;
    line-height: 50px;
    letter-spacing: 1px;
  }
</style>
