<template>
  <div class="sucai">
    <div class="mod1">
        <textarea rows="3" cols="20" class="inputText" v-model="params.content" placeholder="在这里填写内容…">
        </textarea>
      <div style="color: #B2B2B2;font-size: 12px;letter-spacing: 1px;">{{params.content.length}}/800</div>
    </div>
    <!--图片上传-->
    <div class="mod2">
      <ul style="background: white">
        <li>
          <img :src="params.image" alt="">
        </li>
      </ul>
    </div>
    <!--发布按钮-->
    <div class="mod3">
      <button type="button" @click="fabubtn">确认发布</button>
    </div>
  </div>
</template>

<script>
  import getRouter from '../../utils/getOptions'
  export default {
    data () {
      return {
        params: {
          account: '',
          content: '',
          image: '',
          proId: '',
          type: 1
        },
        imgList: []
      }
    },
    methods: {
      async fabu (params) {
        var data = await this.$net.get('/crossindustry/userPage/addPublicity', params)
        wx.showToast({
          title: '发布成功',
          icon: 'none',
          duration: 2000
        })
        setTimeout(function () {
          wx.switchTab({
            url: '../founding/main'
          })
        }, 2000)
      },
      fabubtn () {
        if (this.params.content!= '') {
          if (this.params.image!= '') {
            this.fabu(this.params)
          } else {
            wx.showToast({
              title: '请选择图片',
              icon: 'none'
            })
          }
        } else {
          wx.showToast({
            title: '请输入内容',
            icon: 'none'
          })
        }
      }
    },
    onLoad () {
      this.params.account = wx.getStorageSync('adphone')
      this.params.content = getRouter().name
      this.params.image = getRouter().imgurl
      this.params.proId = getRouter().proid
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
