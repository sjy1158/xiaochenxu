<template>
    <div class="centerMine">
      <div>
      <!--头部-->
      <div class="headertitle">
        <image lazy-load="true" src="/static/images/my_bg@3x.png" alt="" class="bgtitle"></image>
        <!--设置按钮-->
        <div class="settingicon">
          <!--<image  lazy-load="true" class="img1" src="/static/images/Shape_w@3x.png" style="margin-right: 46px;" alt=""></image>-->
          <image  lazy-load="true" class="img1" src="/static/images/my_settings@3x.png" alt="" @click="shezhi()"></image>
          <image  lazy-load="true" class="img1" src="/static/images/Shape_w@3x.png" style="" alt="" @click="shareXiaochengxu()"></image>
        </div>
        <!--头像-->
        <div class="headerImg">
          <image  lazy-load="true" :src="userInfo.user.headImage" alt="" class="headertitleImg" style="vertical-align: middle;"></image>
          <!--昵称不封-->
          <div style="width: 165px;display: inline-block;height: 53px;vertical-align: middle;padding-top: 0.2rem;padding-left: 10px;color: white">
            <p style="font-size: 16px;">
              <div style="vertical-align: middle;display: inline-block;width: 5rem;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{userInfo.user.nickName}}</div>
              <span style="font-size: 10px;padding: 1px 6px;background: #8F8F8F;border-radius: 10px;vertical-align: middle;margin-left: 9px;">{{userInfo.user.userType}}</span>
            </p>
            <p style="font-size: 12px;margin-top: 0.2rem;">
              <span style="vertical-align: middle">邀请码：{{code}}</span>
              <span style="font-size: 10px;padding: 1px 6px;border: 1px solid white;border-radius: 10px;vertical-align: middle;margin-left: 9px;" @click="fuzhi">复制</span>
            </p>
          </div>
          <!--昵称ending-->
          <image lazy-load="true" src="/static/images/my_become_partner@3x.png" alt="" style="width: 81px;height: 32px;float: right;position: absolute;bottom:0.1rem;right: 18px;"></image>
          <!--按钮组-->
          <div class="btncontent">
            <div style="float: left;">
              <div>余额：{{userInfo.user.balance}}</div>
              <image lazy-load="true" class="img2" src="/static/images/my_balance@3x.png" alt=""></image>
            </div>
            <div style="float: right;">
              <div @click="inlinechongzhi()">在线充值</div>
              <image lazy-load="true" class="img2" src="/static/images/my_balance@3x.png" alt=""></image>
            </div>
          </div>
        </div>
      </div>

      </div>
      <!--我的订单-->
      <div class="dingdanTab" style="position: relative;z-index: 99999999999999">
        <div class="item_Tab">
          <div class="itemtitle tabs">
            <div @click="openIncome">
              <p style="color: #393939;font-size: 14px;letter-spacing: 1px;margin-top: 13px;">今日预估(元)</p>
              <p style="color: #393939;font-size: 20px;font-weight: bold;letter-spacing: 1px;">{{userInfo.jinriyugu}}</p>
            </div>
            <div @click="openIncome">
              <p style="color: #393939;font-size: 14px;letter-spacing: 1px;margin-top: 13px;">累计收益(元)</p>
              <p style="color: #393939;font-size: 20px;font-weight: bold;letter-spacing: 1px;">{{userInfo.leijishouyi}}</p>
            </div>
            <!--<span>我的订单</span>-->
            <!--<span @click="lookmydingdan()">查看更多订单</span>-->
          </div>
          <div class="tabs">
            <div @click="openIncome">
              <p style="color: #393939;font-size: 14px;letter-spacing: 1px;font-weight: bold;margin-top: 0.9rem;">{{userInfo.ketixian}}</p>
              <p style="color: #8F8F8F;font-size: 10px;letter-spacing: 1px;">可提现额(元)</p>
            </div>
            <div @click="openIncome">
              <p style="color: #393939;font-size: 14px;letter-spacing: 1px;font-weight: bold;margin-top: 0.9rem;">{{userInfo.benyueyugu}}</p>
              <p style="color: #8F8F8F;font-size: 10px;letter-spacing: 1px;">本月预估(元)</p>
            </div>
            <div @click="openIncome">
              <p style="color: #393939;font-size: 14px;letter-spacing: 1px;font-weight: bold;margin-top: 0.9rem;">{{userInfo.shangyueyugu}}</p>
              <p style="color: #8F8F8F;font-size: 10px;letter-spacing: 1px;">上月预估(元)</p>
            </div>
            <div @click="openIncome">
              <p style="color: #393939;font-size: 14px;letter-spacing: 1px;font-weight: bold;margin-top: 0.9rem;">{{userInfo.shangyuejiesuan}}</p>
              <p style="color: #8F8F8F;font-size: 10px;letter-spacing: 1px;">上月结算(元)</p>
            </div>
          </div>
        </div>
      </div>

      <div style="position: relative">
        <div class="newTab" style="width: 100%;height: 187px;background: white;margin-top: -101px;">
          <div style="height: 88px;width: 100%;position: absolute;bottom: 0px;" class="newTabdis">
            <div style="position: relative;line-height: 0px;" @click="openTonghua()">
              <image lazy-load="true" class="img5" src="/static/images/my_phone@3x.png" alt=""></image>
              <p style="position: absolute;height: 1.4rem;line-height: 1.4rem;text-align: center;width: 100%;left: 0px;padding-top: 6px;">通话管理</p>
            </div>
            <div style="position: relative;line-height: 0" @click="openMyteam()">
              <image lazy-load="true" class="img5" src="/static/images/my_team@3x.png" alt=""></image>
              <p style="position: absolute;height: 1.4rem;line-height: 1.4rem;text-align: center;width: 100%;padding-top: 6px;">我的团队</p>
            </div>
            <div @click="alldingdan()" style="position: relative;line-height: 0">
              <image lazy-load="true" class="img5" src="/static/images/my_order@3x.png" alt=""></image>
              <p style="position: absolute;height: 1.4rem;line-height: 1.4rem;text-align: center;width: 100%;padding-top: 6px;">我的订单</p>
            </div>
            <div @click="shareImage()" style="position: relative;line-height: 0">
              <image lazy-load="true" class="img5" src="/static/images/my_friends@3x.png" alt=""></image>
              <p style="position: absolute;height: 1.4rem;line-height: 1.4rem;text-align: center;width: 100%;padding-top: 6px;">邀请好友</p>
            </div>
            <!--<div style="position: relative">-->
                <!--<image lazy-load="true" class="img5" src="/static/images/my_friends@3x.png" alt=""></image>-->
                <!--<p style="position: absolute;height: 1.4rem;line-height: 1.4rem;text-align: center;width: 100%;left: 0px;padding-top: 6px;">邀请好友</p>-->
                <!--&lt;!&ndash;<image lazy-load="true" class="img5" src="/static/images/my_friends@3x.png" alt=""></image>&ndash;&gt;-->
                <!--&lt;!&ndash;<p>邀请好友</p>&ndash;&gt;-->
            <!--</div>-->
          </div>
        </div>
      </div>
      <!--邀请链接-->
      <!--<div class="linkHref">-->
        <!--<div class="link_item">-->
          <!--<image lazy-load="true" class="img4" src="/static/images/bg@3x.png" alt=""></image>-->
          <!--<button class="golink" open-type='share'>分享邀请链接</button>-->
          <!--&lt;!&ndash;<div style="" class="golink" @click="goLink()">获取邀请链接</div>&ndash;&gt;-->
        <!--</div>-->
      <!--</div>-->
      <!--管理员登录-->
      <div class="guanliLogin">
        <div class="guanli_item">
          <div class="aboutus_item1" style="width: 100%;"><span style="font-weight: bold">常用工具</span></div>
          <!--<div class="guanli_item1">-->
            <!--<div @click="adLogin()">-->
              <!--<image lazy-load="true" class="img5" src="/static/images/mine_administrator@3x.png" alt=""></image>-->
              <!--<p>管理员登录</p>-->
            <!--</div>-->
            <!--<div @click="zhanghu()">-->
              <!--<image lazy-load="true" class="img5" src="/static/images/my_accountinformation@3x.png" alt=""></image>-->
              <!--<p>账户信息</p>-->
            <!--</div>-->
            <!--<div @click="singlEquery()">-->
              <!--<image lazy-load="true" class="img5" src="/static/images/my_orderquery@3x.png" alt=""></image>-->
              <!--<p>话单查询</p>-->
            <!--</div>-->
            <!--<div @click="zifeishuoming()">-->
              <!--<image lazy-load="true" class="img5" src="/static/images/my_feestatement@3x.png" alt=""></image>-->
              <!--<p>资费说明</p>-->
            <!--</div>-->
          <!--</div>-->
          <div class="guanli_item2">
            <div @click="addnovice()">
              <image lazy-load="true" class="img5" src="/static/images/my_beginnerstrategy@3x.png" alt=""></image>
              <p>新手攻略</p>
            </div>
            <div @click="shareImage()">
              <image lazy-load="true" class="img5" src="/static/images/collection@3x.png" alt=""></image>
              <p>我的收藏</p>
            </div>
            <div @click="maneypro()">
              <image lazy-load="true" class="img5" src="/static/images/my_common_questions@3x.png" alt=""></image>
              <p>常见问题</p>
            </div>
            <div @click="openService()">
              <image lazy-load="true" class="img5" src="/static/images/my_customer_service@3x.png" alt=""></image>
              <p>客服中心</p>
            </div>
          </div>
        </div>
      </div>

      <!--关于我们-->
      <div class="aboutus">
        <div class="aboutus_item">
          <div class="aboutus_item1" style="width: 100%;"><span style="font-weight: bold">关于我们</span></div>
          <div class="aboutus_item2">
            <div @click="aboutUs()">
              <image lazy-load="true" class="img5" src="/static/images/my_aboutus@3x.png" alt=""></image>
              <p>关于我们</p>
            </div>
            <div @click="guanfang()">
              <image lazy-load="true" class="img5" src="/static/images/my_announcement@3x.png" alt=""></image>
              <p>官方公告</p>
            </div>
            <div>
              <image lazy-load="true" class="img5" src="/static/images/my_praise@3x.png" alt=""></image>
              <p>好评鼓励</p>
            </div>
            <div @click="feedback()">
              <image lazy-load="true" class="img5" src="/static/images/my_feedback@3x.png" alt=""></image>
              <p>意见反馈</p>
            </div>
          </div>
        </div>
      </div>

      <!--kuayetonglogo-->
      <div style="width: 100%;text-align: center">
        <image lazy-load="true" src="/static/images/kuayet.com@3x.png" alt="" style="width: 163px;height: 35px;padding-top: 15px;padding-bottom: 20px;"></image>
      </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        code: '',
        params: {
          userId: ''
        },
        userInfo: '',
        player: ''
      }
    },
    methods: {
      goLink () {
        wx.showShareMenu({
          withShareTicket: true
        })
      },
      fuzhi () {
        const _this = this;
        wx.setClipboardData({
          data: _this.code,
          success: function (res) {
          }
        })
      },
      // 跳转登录
      openLogin () {
        wx.navigateTo({
          url: '../login/main',
          redirect: false
        })
      },
      // 设置按钮
      shezhi () {
        wx.navigateTo({
          url: '../setting/main',
          redirect: false
        })
      },
      //跳转客服中心
      openService () {
        wx.navigateTo({
          url: '../servicecenter/main',
          redirect: false
        })
      },
      //跳转账户信息
      zhanghu () {
        wx.navigateTo({
          url: '../accountinformation/main',
          redirect: false
        })
      },
      //管理员登录
      adLogin () {
        wx.navigateTo({
          url: '../adlogin/main',
          redirect: false
        })
      },
      //话单查询
      singlEquery () {
        wx.navigateTo({
          url: '../singlequery/main',
          redirect: false
        })
      },
      //跳转新手攻略
      addnovice () {
        wx.navigateTo({
          url: '../novice/main',
          redirect: false
        })
      },
      feedback () {
        wx.navigateTo({
          url: '../feedback/main',
          redirect: false
        })
      },
      //跳转官方工改
      guanfang () {
        wx.navigateTo({
          url: '../officialannouncement/main',
          redirect: false
        })
      },
      //跳转全部订单
      alldingdan () {
        wx.navigateTo({
          url: '../alldingdan/main',
          redirect: false
        })
      },
      //跳转更多订单
      lookmydingdan () {
        wx.navigateTo({
          url: '../lookadddingdan/main',
          redirect: false
        })
      },
      //跳转资费说明
      zifeishuoming () {
        wx.navigateTo({
          url: '../zifeishuoming/main',
          redirect: false
        })
      },
      maneypro () {
        wx.navigateTo({
          url: '../changjianpro/main',
          redirect: false
        })
      },
      // 跳转关于我们
      aboutUs () {
        wx.navigateTo({
          url: '../aboutus/main',
          redirect: false
        })
      },
      // 在线充值
      inlinechongzhi () {
        wx.navigateTo({
          url: '../inline/main?phonenum=' + this.userInfo.user.phoneId,
          redirect: false
        })
      },
      //跳转我的收益
      openIncome () {
        wx.navigateTo({
          url: '../myincome/main?name=' + this.userInfo.user.userType,
          redirect: false
        })
      },
      //跳转我的好友邀请
      shareImage () {
        wx.navigateTo({
          url: '../shareimg/main',
          redirect: false
        })
      },
      hasToken () {
        const res = this.$saveToken.getToken()
        this.params.userId = res.token
        if (res.token == undefined) {
          wx.navigateTo({
            url: '../login/main?url=' + '../mine/main',
            redirect: false
          })
        } else {
          this.getUserinfo(this.params)
        }
      },
      //跳转我的团队
      openMyteam () {
        wx.navigateTo({
          url: '../myteam/main',
          redirect: false
        })
      },
      //跳转通话管理
      openTonghua () {
        wx.navigateTo({
          url: '../shopguanli/main',
          redirect: false
        })
      },
      //小程序吗转发
      shareXiaochengxu () {
        wx.previewImage({
          current: 'http://image.kuayet.com/FsPmo8U1_89Ytinmr20Xy-UFdXE0',
          urls: ['http://image.kuayet.com/FsPmo8U1_89Ytinmr20Xy-UFdXE0']
        })
      },
      async getUserinfo (params) {
        const data = await this.$net.get('http://api.kuayet.com:8080/crossindustry/phonePage/getUserInformation', params)
        this.userInfo = data
        this.userInfo.user.balance = this.userInfo.user.balance.toFixed(2)
        this.code = this.userInfo.user.invitationCode
      }
    },
    onShareAppMessage (res) {
      const link = 'http://api.kuayet.com/pc/#/Sharepage?userId=' + this.params.userId
      if (res.from === 'button') {
        console.log('来自页面内转发按钮')
      } else {
        console.log('来自右上角转发菜单')
      }
      return {
        title: '邀请链接',
        path: link,
        imageUrl: '/static/images/my_head@3x.png',
        success: function (res) {
          console.log('转发成功')
        },
        fail: function (res) {
          console.log('转发失败')
        }
      }
    },
    onPullDownRefresh () {
      this.hasToken()
    },
    onShow () {
      this.hasToken()
    }
  }
</script>

<style scoped>
  .centerMine{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    /*position: fixed;*/
    position: relative;
  }
  /*头部*/
  .headertitle{
    height: 225px;
    width: 100%;
    position: relative;
  }
  .bgtitle{
    height: 100%;
    width: 100%;
  }
  .settingicon{
    height: 20px;
    width: 100%;
    /*background: white;*/
    position: absolute;
    left: 0px;
    top: 10px;
  }
  .settingicon .img1{
    height: 20px;
    width: 20px;
    float: right;
    margin-right: 18px;
  }
  .headerImg{
    height: 53px;
    width: 100%;
    /*background: white;*/
    position: absolute;
    top: 30px;
  }
  .headerImg .headertitleImg{
    margin-left: 18px;
    height: 53px;
    width: 53px;
    border-radius: 50%;
  }
  .btncontent{
    width: 244px;
    height: 35px;
    /*background: white;*/
    position: absolute;
    top: 95px;
    left: 50%;
    margin-left: -122px;
  }
  .btncontent div{
    height: 100%;
    /*color: white;*/
    width: 115px;
    position: relative;
    line-height: 32px;
    text-align: center;
    border-radius: 15px;
  }
  /*.btncontent div div{*/
    /*height: 27px;*/
  /*}*/
  .btncontent div div{
    z-index: 999;
    height: 35px;
    width: 100px;
    line-height: 32px;
    /*background: #0bb20c;*/
    font-size: 14px;
    color: white;
    text-align: center;
    top: 0px;
    left: 50%;
    margin-left: -50px;
  }
  /*.btncontent div div{*/
    /*position: absolute;*/
    /*height: 100%;*/
    /*width: 100px;*/
    /*font-size: 14px;*/
    /*color: white;*/
    /*line-height: 27px;*/
    /*text-align: center;*/
    /*left: 50%;*/
    /*margin-left: -50px;*/
    /*z-index: 99999999;*/
  /*}*/
  .btncontent div .img2{
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .dingdanTab{
    height: 145px;
    padding: 0px 12px;
    margin-top: -44px;
    position: relative;
  }
  .dingdanTab .item_Tab{
    height: 100%;
    width: 100%;
    background: white;
    border-radius: 14px;
    box-shadow: 2px 2px 2px 2px #F3F3F3;
  }
  .itemtitle{
    height: 72.5px;
    width: 100%;
    /*background: black;*/
    border-radius: 14px 14px 0px 0px;
    border-bottom: 1px solid #F2F2F2;
    display: flex;
  }
  .itemtitle div{
    flex: 1;
    text-align: center;
  }
  .itemtitle span:first-child{
    font-size: 14px;
    color: #393939;
    padding-left: 15px;
  }
  .itemtitle span:nth-child(2){
    float: right;
    font-size: 12px;
    color: #717171;
    padding-right: 15px;
  }
  .tabs{
    width: 100%;
    height: 80px;
    /*background: #0bb20c;*/
    border-radius: 0px 0px 14px 14px;
    display: flex;
  }
  .tabs div{
    flex: 1;
    text-align:center;
    font-size: 12px;
    color: #393939;
  }
  .tabs div .img3{
    width: 25px;
    height: 25px;
    padding-top: 16px;
  }
  /*链家*/
  .linkHref{
    padding: 0px 12px;
    height: 65px;
    margin-top: 10px;
    /*background: white;*/
  }
  .linkHref .link_item{
    height:65px;
    width: 100%;
    border-radius: 14px;
    position: relative;
  }
  .linkHref .link_item .img4{
    height: 100%;
    width: 100%;
  }
  .golink{
    padding: 5px 12px;background: #F08400;width: 96px;height: 26px;color: white;
    font-size: 12px;line-height: 17px;position: absolute;right:13px;
    text-align: center;
    top: 50%;
    margin-top: -13px;
    border-radius: 20px;
  }
  /*管理员登录*/
  .guanliLogin{
    height: 116px;
    /*width: 100%;*/
    margin-top: 10px;
    padding: 0 12px;
  }
  .guanliLogin .guanli_item{
    width: 100%;
    height: 116px;
    background: white;
    border-radius: 14px;
  }
  .guanli_item1,.guanli_item2,.aboutus_item2{
    height: 81px;
    display: flex;
    color: #393939;
    font-size: 12px;
    border-bottom: 1px solid #F2F2F2;
  }
  .guanli_item2,.aboutus_item2{
    border-bottom: 0px!important;
  }
  .guanli_item1 div,.guanli_item2 div,.aboutus_item2 div{
    flex: 1;
    text-align: center;
  }
  .aboutus_item2 div p{
    padding-top: 6px;
  }
  .guanli_item2 div p{
    padding-top: 6px;
  }
  .guanli_item1 .img5,.guanli_item2 .img5,.aboutus_item2 .img5{
    height: 25px;
    width: 25px;
    padding-top: 15px;
  }
  /*关于我们*/
  .aboutus{
    height: 116px;
    /*width: 100%;*/
    margin-top: 10px;
    padding: 0 12px;
  }
  .aboutus .aboutus_item{
    width: 100%;
    height: 116px;
    background: white;
    border-radius: 14px;
  }
  .aboutus_item1 span{
    font-size: 14px;
    color: #393939;
    padding: 15px;
  }

  /*新tab*/
  .bottomTab{
    display: flex;
    height: 88px;
    position: absolute;
    bottom: 0px;
    width: 100%;
  }
  .bottomTab div{
    flex: 1;
    text-align: center;
    line-height: 88px;
  }
  .newTabdis{
    display: flex;
  }
  .newTabdis div,.newTabdis button{
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #FF0000;
  }
  .newTabdis button::after{
    border: none;
  }
  .newTabdis div .img5,.newTabdis button .img5{
    width: 25px;
    height: 25px;
    margin-top: 21px;
  }
  .newTabdis div p,.newTabdis button p{
    /*padding-top: 6px;*/
  }
</style>
