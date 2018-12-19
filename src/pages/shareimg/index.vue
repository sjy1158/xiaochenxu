<template>
    <div class="slideimg">
      <swiper :current="activeindex" style="height: 450px;margin-top: 15px;" @change="changeTab">
        <div v-for="item in bannerArr" :key="index" style="width: 282px;height:450px;position:absolute;float: left;left: 50%;margin-left: -141px;top: 15px;">
          <swiper-item style="width: 270px;position: absolute;left: 50%;margin-left: -135px">
            <image v-if="item" lazy-load="true" :src="item" style="position: absolute;width: 270px;top: 50%;" :class="activeindex==index?'hideimg':'openimg'" @click="priImg(item)">
            </image>
          </swiper-item>
        </div>
      </swiper>

      <div class="mod1">
        <div>
          <p>推广规则</p>
          <p>1.自动生成的专属二维码海报已经包含您的邀请码信息。</p>
          <p>2.好友通过您的二维码海报注册并下载跨业通APP成为跨业通用户后，Ta即成为直接粉丝；之后经Ta邀请下载跨业通APP并注册成跨业通用户的人将成为您的间接粉丝。</p>
          <p>3.您的直接粉丝和间接粉丝升级跨业通的创客，您将获得高额佣金，计入您的跨业通账户。</p>
          <p>4.直接粉丝升级创客赚60%，间接粉丝升级创客赚20%，直接粉丝线上购物赚总返利的60%，间接粉丝线上购物赚总返利的20%，直接粉丝线下全国商家消费赚总返利的20%。</p>
        </div>
      </div>

      <div class="btns">
        <div style="background: #F5A003" @click="priImg">直接邀请</div>
        <div style="background: #F56302" @click="priImg">分享海报</div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        params: {
          userId: ''
        },
        bannerArr: [],
        activeindex: 1
      }
    },
    methods: {
      async getShare (params) {
        var data = await this.$net.get('http://api.kuayet.com:8080/crossindustry/userPage/invitePoster', params)
        for (var i = 0; i < data.list.length; i++) {
          this.bannerArr.push(data.list[i].url)
        }
      },
      changeTab (e) {
        console.log(e.mp.detail.current)
        this.activeindex = e.mp.detail.current
      },
      priImg (item) {
        wx.previewImage({
          current: item,
          urls: this.bannerArr
        })
      }
    },
    onLoad () {
      this.params.userId = this.$saveToken.getToken().token
      this.bannerArr = []
      this.getShare(this.params)
    }
  }
</script>

<style scoped>
  .hideimg{
    height: 450px!important;
    opacity: 1!important;
    position: absolute;
    margin-top: -225px!important;
    /*height: 500px;*/
  }
  .openimg{
    height: 300px!important;
    opacity: .5!important;
    position: absolute;
    margin-top: -150px!important;
  }
  .slideimg{
    width: 100%;
    height: 100%;
    background: #F7F7F7;
    position: relative;
  }
  .mod1{
    padding-left: 46px;
    padding-right: 46px;
  }
  .mod1 div p{
    margin-top: 15px;
    letter-spacing: 1px;
    color: #717171;
    font-size: 12px;
  }
  .mod1 div p:first-child{
    color: #393939!important;
    font-size: 14px!important;
  }
  .mod1 div p:last-child{
    padding-bottom: 61px;
  }
  .btns{
    height: 41px;
    position: fixed;
    bottom: 0px;
    width: 100%;
    display: flex;
  }
  .btns div{
    flex: 1;
    letter-spacing: 1px;
    font-size: 16px;
    color: #FFFFFF;
    text-align: center;
    line-height: 41px;
  }
</style>
