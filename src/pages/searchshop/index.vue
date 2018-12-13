<template>
    <div>
      <div class="search">
        <div style="position: absolute;left: 20px;top: 0px;letter-spacing: 1px;font-size: 16px;color: #393939" @click="quxiao">
          返回
        </div>
        <div class="searchinput">
          <input type="text" placeholder="输入宝贝标题或关键词搜索">
        </div>
        <div style="position: absolute;right: 20px;top: 0px;letter-spacing: 1px;font-size: 16px;color: #393939">搜索</div>
      </div>

      <div class="tabbars">
        <div class="tabbar">京东</div>
        <div class="tabbar">淘宝</div>
        <div class="tabbar">拼多多</div>
      </div>

      <!--历史搜索-->
      <div class="hissearch">
        <div class="histitle">
          <div style="height: 20px;line-height: 20px;">
            <img src="/static/images/record@3x.png" alt="" style="height: 12px;width: 12px;vertical-align: middle">
            <span style="color: #393939;font-size: 14px;letter-spacing: 1px;vertical-align: middle;margin-left: 6px;">历史搜索</span>
            <span style="color: #717171;font-size: 14px;letter-spacing: 1px;float: right;vertical-align: middle">清除</span>
          </div>
          <ul style="height: auto" class="hisshop">
            <li>鞋子</li>
            <li>时尚咖</li>
            <li>鞋子</li>
            <li>时尚咖</li>
            <li>鞋子</li>
            <li>时尚咖</li>
            <li>鞋子</li>
            <li>时尚咖</li>
          </ul>

          <div style="height: 20px;line-height: 20px;">
            <img src="/static/images/hot@3x.png" alt="" style="height: 14px;width: 13px;vertical-align: middle">
            <span style="color: #393939;font-size: 14px;letter-spacing: 1px;vertical-align: middle;margin-left: 6px;">热门搜索</span>
          </div>

          <ul style="height: auto" class="hisshop">
            <li v-for="item in hotarr">{{item}}</li>
          </ul>

        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        hotarr: []
      }
    },
    methods: {
      async getHot () {
        var hotarr = await this.$net.get("http://api.kuayet.com:8080/crossindustry/powerPurchaser/getHotWordByProduct")
        this.hotarr = hotarr.list
      },
      // 点击取消
      quxiao () {
        wx.navigateBack({
          delta: 1
        })
      }
    },
    onLoad () {
      this.getHot()
    }
  }
</script>

<style scoped>
  .search{
    height: 29px;
    width: 100%;
    background: white;
    position: relative;
    top: 10px;
  }
  .searchinput{
    width: 60%;
    height: 100%;
    /*background: #0bb20c;*/
    position: absolute;
    left: 50%;
    margin-left: -30%;
  }
  .searchinput input{
    height: 100%;
    width: 100%;
    background: #F2F2F2;
    text-align: center;
    color: #8F8F8F;
    font-size: 14px;
    border-radius: 50px;
    letter-spacing: 1px;
  }
  /*tab切换*/
  .tabbars{
    display: flex;
    width: 100%;
    height: 35px;
    margin-top: 29px;
    border-bottom: 1px solid #EDEDED;
  }
  .tabbars .tabbar{
    flex: 1;
    text-align: center;
    letter-spacing: 1px;
    font-size: 16px;
    color: #393939;
    font-weight: bold;
    line-height: 29px;
  }
  .histitle{
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 16px;
  }
  .hisshop{
    display: flex;
    margin-top: 19px;
    width: 100%;
    flex-wrap: wrap;
  }
  .hisshop li{
    padding: 2px 9px;
    background: #F2F2F2;
    color: #717171;
    font-size: 12px;
    letter-spacing: 1px;
    border-radius: 50px;
    margin-right: 15px;
    margin-bottom: 15px;
  }
</style>
