<template>
  <div class="founding">
    <div class="mod1">
      <p>活动预告</p>
      <div class="scroll">
        <div>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542622818221&di=b9345e6f544a980894eb11a6577b5e96&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F12%2F58%2F15%2F97Q58PICsji.jpg" alt="" @click="activity()">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542622912496&di=c3894b44ad1f04408f7fd4643af76ce8&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140313%2F8144208_123631373000_2.jpg" alt="" @click="activity()">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542622818221&di=b9345e6f544a980894eb11a6577b5e96&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F12%2F58%2F15%2F97Q58PICsji.jpg" alt="" @click="activity()">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542622912496&di=c3894b44ad1f04408f7fd4643af76ce8&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140313%2F8144208_123631373000_2.jpg" alt="" @click="activity()">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542622818221&di=b9345e6f544a980894eb11a6577b5e96&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F12%2F58%2F15%2F97Q58PICsji.jpg" alt="" @click="activity()">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542622912496&di=c3894b44ad1f04408f7fd4643af76ce8&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140313%2F8144208_123631373000_2.jpg" alt="" @click="activity()">
        </div>
      </div>
    </div>

    <div class="mod2">
      <p>活动回顾</p>
      <ul>
        <li @click="activity()">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543218720&di=62af8c373b00a84957cb68336e54c88e&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.tjqtn.com%2Ffile%2Fupload%2F201406%2F10%2F11-20-29-39-312.jpg" alt="">
          <div style="display: inline-block">
            <p class="title">“梦想不死，彩旗不止”全国地面推广接力活动会-4月25日济南站</p>
            <p class="time">2018-04-26 11:46</p>
          </div>
        </li>
        <li @click="activity()">
          <img src="https://goss.veer.com/creative/vcg/veer/800water/veer-158305631.jpg" alt="">
          <div style="display: inline-block">
            <p class="title">“梦想不死，彩旗不止”全国地面推广接力活动会-4月25日济南站</p>
            <p class="time">2018-04-26 11:46</p>
          </div>
        </li>
        <li @click="activity()">
          <img src="https://goss.veer.com/creative/vcg/veer/800water/veer-302497582.jpg" alt="">
          <div style="display: inline-block">
            <p class="title">“梦想不死，彩旗不止”全国地面推广接力活动会-4月25日济南站</p>
            <p class="time">2018-04-26 11:46</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      activity () {
        wx.navigateTo({
          url: '../activity/main',
          redirect: false
        })
      }
    }
  }
</script>

<style scoped>
  .founding{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    /*position: fixed;*/
    position: absolute;
  }
  .founding .mod1{
    height: 148px;
    width: 100%;
    background: white;
    margin-top: 10px;
  }
  .mod2{
    width: 100%;
    height: auto;
    background: white;
    margin-top: 10px;
  }
  .founding .mod1 p,.mod2 p{
    color: #393939;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 16px 10px;
  }
  .mod2 p{
    padding-bottom: 0px!important;
  }
  .scroll div img{
    width: 146px;
    height: 81px;
    margin-left: 10px;
  }
  .scroll{
    width: 100%;
    height: 81px;
    overflow-x:scroll;overflow-y:hidden;
  }
  .scroll::-webkit-scrollbar{
    display: none;
  }
  .scroll div{
    width: 800px;
    height: 81px;
  }
  .mod2 ul li{
    padding: 10px;
    position: relative;
    border-bottom: 1px solid #F2F2F2;
  }
  .mod2 ul li div{
    position: absolute;
    top: 0px;
    vertical-align: middle;
  }
  .mod2 ul li img{
    width: 119px;
    height: 82px;
    border-radius: 10px;
    vertical-align: middle;
  }
  .title{
    color: #393939;font-size: 14px;letter-spacing: 1px;
    margin: 0!important;
  }
  .time{
    color: #717171!important;
    font-size: 12px;
    font-weight: normal!important;
  }
</style>
