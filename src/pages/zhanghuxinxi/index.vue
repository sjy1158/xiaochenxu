<template>
    <div>
      <div style="position: fixed;width: 100%;z-index: 999999999999;background: white">
        <div class="mod1">
          <img src="/static/images/bg@3x.png" alt="">
          <div class="phone">
            {{userInfo.user.phoneId}}
          </div>
          <div class="chongzhi" style="width: 90%">
            <div style="padding-left: 15px;">
              <p style="font-size: 30px;color: #F08400;letter-spacing: 1px;font-weight: bold;">{{userInfo.user.balance}}</p>
              <p style="font-size: 12px;color: #8F8F8F;letter-spacing: 1px;">话费购物金余额</p>
            </div>
            <div class="chongzhibtn" @click="inlinechongzhi">立即充值</div>
          </div>
        </div>
      </div>

      <div class="mod3" style="position: absolute;height: 22px;line-height: 22px;">
        <span style="padding-left: 10px;color: #393939;font-weight: bold;letter-spacing: 1px;">余额明细</span>
      </div>

      <ul style="position: absolute;" class="ullist">
        <li v-for="item in List">
          <div class="lidiv">
            <div class="lidivleft">
              <p style="color: #393939;font-size: 14px;font-weight: bold">{{item.title}}</p>
              <p style="color: #717171;font-size: 10px;padding-top: 3px;">{{item.introduce}}</p>
            </div>
            <div class="lidivright">
              <p style="color: #42D35A;" :class="item.type == 0? 'add': 'cut'">{{item.money}}</p>
              <p style="color: #8F8F8F;font-size: 10px;padding-top: 3px;">{{item.time}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        params: {
          userId: '',
          pageNum: 1,
          num: 10,
          date: ''
        },
        List: [],
        userInfo: {}
      }
    },
    methods: {
      async getXiaofei (params) {
        var data = await this.$net.get('http://api.kuayet.com:8080/crossindustry/userPage/yuemingxiliebiao', params)
        // console.log(JSON.stringify(data))
        for (var i = 0; i < data.list.length; i++) {
          this.List.push(data.list[i])
        }
      },
      async getUserinfo (token) {
        var obj = {userId: token}
        const data = await this.$net.get('http://api.kuayet.com:8080/crossindustry/phonePage/getUserInformation', obj)
        this.userInfo = data
        console.log(JSON.stringify(this.userInfo))
        this.userInfo.user.balance = this.userInfo.user.balance.toFixed(2)
        // console.log(JSON.stringify(this.userInfo))
      },
      // 立即充值
      inlinechongzhi () {
        wx.navigateTo({
          url: '../inline/main?phonenum=' + this.userInfo.user.phoneId,
          redirect: false
        })
      }
    },
    onReachBottom () {
      wx.showLoading({
        title: '玩命加载中'
      })
      this.params.pageNum += 1
      this.getXiaofei(this.params)
    },
    onPullDownRefresh () {
      this.List = []
      this.params.pageNum = 1
      this.getXiaofei(this.params)
    },
    onLoad () {
      this.getUserinfo(this.$saveToken.getToken().token)
      this.params.userId = this.$saveToken.getToken().token
      this.getXiaofei(this.params)
    }
  }
</script>

<style scoped>
  .add{
    color:#42D35A!important;
  }
  .cut{
    color: #F08400!important;
  }
  .mod1{
    padding-left: 10px;
    padding-right: 10px;
  }
  .mod1 img{
    height: 122px;
    width: 100%;
  }
  .mod1{
    position: relative;
  }
  .phone{
    height: 37px;
    width: 80%;
    position: absolute;
    top: 0px;
    padding-left: 15px;
    padding-top: 10px;
    color: #393939;
    letter-spacing: 1px;
    font-size: 26px;
    font-weight: bold;
  }
  .chongzhi{
    height: 55px;
    position: absolute;
  }
  @media (max-width: 1500px) {
    .chongzhi{
      bottom: 30px;
    }
    .mod3{
      top:135px
    }
    .ullist{
      top: 162px;
    }
  }
  @media (min-width: 700px) and (max-width: 1000px) {
    .chongzhi{
      bottom: 30px;
    }
    .mod3{
      top:135px
    }
    .ullist{
      top: 162px;
    }
  }
  @media (min-width: 350px) and (max-width: 700px) {
    .chongzhi{
      bottom: 20px;
    }
    .mod3{
      top:135px
    }
    .ullist{
      top: 162px;
    }
  }
  .chongzhibtn{
    height: 32px;width: 80px;
    background: #F08400;border-radius:5px;
    position: absolute;right: 0px;
    top: 50%;margin-top: -22.5px;
    color: #FFFFFF;font-size: 14px;letter-spacing: 1px;
    font-weight: bold;
    line-height: 32px;
    text-align: center;
  }
  .mod3{
    font-size: 16px;
  }

  .ullist{
    height: auto;
    width: 100%;
  }
  .ullist li{
    width: 100%;
    height: 57px;
    border-bottom: 1px solid #EDEDED;
    position: relative;
  }
  .lidiv{
    height: 37px;width: 100%;
    /*background: red;*/
    position: absolute;
    top: 50%;
    margin-top: -18.5px;
  }
  .lidivleft{
    height: 37px;
    width: 50%;
    position: absolute;
    left: 10px;
    top: 0px;
  }
  .lidivright{
    height: 37px;
    width: 50%;
    position: absolute;
    right: 10px;
    top: 0px;
    text-align: right;
  }
  .price{
    font-size: 14px;
  }
</style>
