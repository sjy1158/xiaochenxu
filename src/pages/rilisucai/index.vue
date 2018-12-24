<template>
  <div class="sucai">
    <div class="mod1">
        <textarea rows="3" cols="20" class="inputText" v-model="text" placeholder="在这里填写内容…">
        </textarea>
      <div style="color: #B2B2B2;font-size: 12px;letter-spacing: 1px;">{{text.length}}/800</div>
    </div>
    <!--图片上传-->
    <div class="mod2">
      <ul style="background: white">
        <li v-for="item in imgList">
          <img :src="item" alt="">
        </li>
        <li v-show="imgList.length!=3"><img src="/static/images/add_figure@3x.png" alt="" @click="actionopen"></li>
      </ul>
    </div>
    <!--发布按钮-->
    <div class="mod3">
      <button type="button">确认发布</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        text: '',
        imgList: []
      }
    },
    methods: {
      actionopen () {
        const _this = this
        wx.chooseImage({
          count: 1, // 最多可以选择的图片张数，默认9
          sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
          sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
          success: function (res) {
            // success
            console.log(res)
            _this.imgList.push(res.tempFilePaths)
            // _this.setData({
            //   src:res.tempFilePaths
            // })
          },
          fail: function () {
            // fail
          },
          complete: function () {
            // complete
          }
        })
      }
    },
    onPullDownRefresh () {
      this.imgList = []
      if (this.imgList == []) {
        wx.stopPullDownRefresh()
      }
    }
  }
</script>

<style scoped>
  .sucai{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    position: absolute;
  }
  .mod1{
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 20px;
    border-bottom: 1px solid #EDEDED;
    position: relative;
    background: white;
  }
  .mod1 div{
    position: absolute;
    bottom: 18px;
    right: 20px;
  }
  .inputText{
    width: 100%;
    height: 177px;
    font-size: 14px;
    color: #393939;
    letter-spacing: 2px;
  }
  .mod2{
    height: 149px;
    width: 100%;
    background: white;
  }
  .mod2 ul {
    width: 100%;
    height: auto;
    background: white;
  }
  .mod2 ul li img {
    height: 112px;
    width: 112px;
    position: absolute;
    top: 50%;
    margin-top: -56px;
    left: 50%;
    margin-left: -56px;
  }
  .mod2 ul li{
    height: 149px;
    width: 33.33%;
    float: left;
    text-align: center;
    position: relative;
  }
  .mod3 button{
    height: 33px;
    width: 90%;
    /*width: 100%;*/
    background: #F08400;
    letter-spacing: 1px;
    font-size: 16px;
    color: white;
    line-height: 33px;
    border: none;
    border-radius: 50px;
    position: absolute;
    bottom: 40px;
    left: 50%;
    margin-left: -45%;
  }
</style>
