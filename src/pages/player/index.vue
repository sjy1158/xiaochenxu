<template>
  <div>
    <!--obs推流地址,live-player进行接收-->
    <live-player id="myplay" src="rtmp://live.hkstv.hk.lxdns.com/live/hks" mode="live" autoplay style="width: 100%;height: 225px;" />
    <div class="btns">
      <button @click="playopen()">播放</button>
      <button @click="stopting()">暂停</button>
      <button @click="huifu()">恢复</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        LivePlayerContext: ''
      }
    },
    methods: {
      playopen () {
        this.LivePlayerContext.play()
      },
      stopting () {
        this.LivePlayerContext.stop()
      },
      huifu () {
        this.LivePlayerContext.resume()
      }
    },
    onLoad () {
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
</style>
