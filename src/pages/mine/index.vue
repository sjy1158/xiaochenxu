<template>
    <div class="centerMine">
      <div v-if="params.userId!=undefined">
      <!--头部-->
      <div class="headertitle">
        <img src="/static/images/my_bg@3x.png" alt="" class="bgtitle">
        <!--设置按钮-->
        <div class="settingicon" @click="shezhi()">
          <img src="/static/images/my_settings@3x.png" alt="">
        </div>
        <!--头像-->
        <div class="headerImg">
          <img :src="userInfo.user.headImage" alt="" class="headertitleImg" style="vertical-align: middle;">
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
          <img src="/static/images/my_become_partner@3x.png" alt="" style="width: 81px;height: 32px;float: right;position: absolute;bottom:0.1rem;right: 18px;">
          <!--按钮组-->
          <div class="btncontent">
            <div style="float: left;">
              <div>余额：{{userInfo.user.balance}}</div>
              <img src="/static/images/my_balance@3x.png" alt="">
            </div>
            <div style="float: right;">
              <div>在线充值</div>
              <img src="/static/images/my_balance@3x.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <!--我的订单-->
      <div class="dingdanTab">
        <div class="item_Tab">
          <div class="itemtitle">
            <span>我的订单</span>
            <span @click="lookmydingdan()">查看更多订单</span>
          </div>
          <div class="tabs">
            <div @click="alldingdan()">
              <img src="/static/images/my_all_icon@3x.png" alt="">
              <p>全部</p>
            </div>
            <div>
              <img src="/static/images/my_paid_icon@3x.png" alt="">
              <p>已付款</p>
            </div>
            <div>
              <img src="/static/images/my_settled_icon@3x.png" alt="">
              <p>已结算</p>
            </div>
            <div>
              <img src="/static/images/my_hasexpired_icon@3x.png" alt="">
              <p>已失效</p>
            </div>
          </div>
        </div>
      </div>
      <!--邀请链接-->
      <div class="linkHref">
        <div class="link_item">
          <img src="/static/images/bg@3x.png" alt="">
          <button class="golink" open-type='share'>分享邀请链接</button>
          <!--<div style="" class="golink" @click="goLink()">获取邀请链接</div>-->
        </div>
      </div>
      <!--管理员登录-->
      <div class="guanliLogin">
        <div class="guanli_item">
          <div class="guanli_item1">
            <div @click="adLogin()">
              <img src="/static/images/mine_administrator@3x.png" alt="">
              <p>管理员登录</p>
            </div>
            <div @click="zhanghu()">
              <img src="/static/images/my_accountinformation@3x.png" alt="">
              <p>账户信息</p>
            </div>
            <div @click="singlEquery()">
              <img src="/static/images/my_orderquery@3x.png" alt="">
              <p>话单查询</p>
            </div>
            <div @click="zifeishuoming()">
              <img src="/static/images/my_feestatement@3x.png" alt="">
              <p>资费说明</p>
            </div>
          </div>
          <div class="guanli_item2">
            <div @click="addnovice()">
              <img src="/static/images/my_beginnerstrategy@3x.png" alt="">
              <p>新手攻略</p>
            </div>
            <div>
              <img src="/static/images/collection@3x.png" alt="">
              <p>我的收藏</p>
            </div>
            <div @click="maneypro()">
              <img src="/static/images/my_common_questions@3x.png" alt="">
              <p>常见问题</p>
            </div>
            <div @click="openService()">
              <img src="/static/images/my_customer_service@3x.png" alt="">
              <p>客服中心</p>
            </div>
          </div>
        </div>
      </div>

      <!--关于我们-->
      <div class="aboutus">
        <div class="aboutus_item">
          <div class="aboutus_item1" style="width: 100%;"><span>关于我们</span></div>
          <div class="aboutus_item2">
            <div @click="aboutUs()">
              <img src="/static/images/my_aboutus@3x.png" alt="">
              <p>关于我们</p>
            </div>
            <div @click="guanfang()">
              <img src="/static/images/my_announcement@3x.png" alt="">
              <p>官方公告</p>
            </div>
            <div>
              <img src="/static/images/my_praise@3x.png" alt="">
              <p>好评鼓励</p>
            </div>
            <div @click="feedback()">
              <img src="/static/images/my_feedback@3x.png" alt="">
              <p>意见反馈</p>
            </div>
          </div>
        </div>
      </div>

      <!--kuayetonglogo-->
      <div style="width: 100%;text-align: center">
        <img src="/static/images/kuayet.com@3x.png" alt="" style="width: 163px;height: 35px;padding-top: 15px;padding-bottom: 20px;">
      </div>
      </div>


      <!--没有token值得时候显示-->
      <div v-else>
        <!--头部-->
        <div class="headertitle">
          <img src="/static/images/my_bg@3x.png" alt="" class="bgtitle">
          <!--设置按钮-->
          <div class="settingicon" @click="openLogin()">
            <img src="/static/images/my_settings@3x.png" alt="">
          </div>
          <!--头像-->
          <div class="headerImg">
            <img src="/static/images/my_head@3x.png" alt="" class="headertitleImg" style="vertical-align: middle" @click="openLogin()">
            <!--昵称不封-->
            <div style="width: 165px;display: inline-block;height: 53px;vertical-align: middle;padding-left: 10px;color: white;line-height: 50px;" @click="openLogin()">
              <p style="font-size: 16px;">
                <span style="vertical-align: middle">立即登录</span>
              </p>
            </div>
            <!--昵称ending-->
            <!--按钮组-->
            <div class="btncontent">
              <div style="float: left;" @click="openLogin()">
                <div>余额：未登录</div>
                <img src="/static/images/my_balance@3x.png" alt="">
              </div>
              <div style="float: right;" @click="openLogin()">
                <div>在线充值</div>
                <img src="/static/images/my_balance@3x.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <!--我的订单-->
        <div class="dingdanTab">
          <div class="item_Tab">
            <div class="itemtitle">
              <span>我的订单</span>
              <span @click="openLogin()">查看更多订单</span>
            </div>
            <div class="tabs">
              <div @click="openLogin()">
                <img src="/static/images/my_all_icon@3x.png" alt="">
                <p>全部</p>
              </div>
              <div @click="openLogin()">
                <img src="/static/images/my_paid_icon@3x.png" alt="">
                <p>已付款</p>
              </div>
              <div @click="openLogin()">
                <img src="/static/images/my_settled_icon@3x.png" alt="">
                <p>已结算</p>
              </div>
              <div @click="openLogin()">
                <img src="/static/images/my_hasexpired_icon@3x.png" alt="">
                <p>已失效</p>
              </div>
            </div>
          </div>
        </div>
        <!--邀请链接-->
        <div class="linkHref">
          <div class="link_item">
            <img src="/static/images/bg@3x.png" alt="">
            <button class="golink" @click="openLogin()">分享邀请链接</button>
            <!--<div style="" class="golink" @click="goLink()">获取邀请链接</div>-->
          </div>
        </div>
        <!--管理员登录-->
        <div class="guanliLogin">
          <div class="guanli_item">
            <div class="guanli_item1">
              <div @click="openLogin()">
                <img src="/static/images/mine_administrator@3x.png" alt="">
                <p>管理员登录</p>
              </div>
              <div @click="openLogin()">
                <img src="/static/images/my_accountinformation@3x.png" alt="">
                <p>账户信息</p>
              </div>
              <div @click="openLogin()">
                <img src="/static/images/my_orderquery@3x.png" alt="">
                <p>话单查询</p>
              </div>
              <div @click="openLogin()">
                <img src="/static/images/my_feestatement@3x.png" alt="">
                <p>资费说明</p>
              </div>
            </div>
            <div class="guanli_item2">
              <div @click="openLogin()">
                <img src="/static/images/my_beginnerstrategy@3x.png" alt="">
                <p>新手攻略</p>
              </div>
              <div @click="openLogin()">
                <img src="/static/images/collection@3x.png" alt="">
                <p>我的收藏</p>
              </div>
              <div @click="openLogin()">
                <img src="/static/images/my_common_questions@3x.png" alt="">
                <p>常见问题</p>
              </div>
              <div @click="openLogin()">
                <img src="/static/images/my_customer_service@3x.png" alt="">
                <p>客服中心</p>
              </div>
            </div>
          </div>
        </div>

        <!--关于我们-->
        <div class="aboutus">
          <div class="aboutus_item">
            <div class="aboutus_item1" style="width: 100%;"><span>关于我们</span></div>
            <div class="aboutus_item2">
              <div @click="openLogin()">
                <img src="/static/images/my_aboutus@3x.png" alt="">
                <p>关于我们</p>
              </div>
              <div @click="openLogin()">
                <img src="/static/images/my_announcement@3x.png" alt="">
                <p>官方公告</p>
              </div>
              <div @click="openLogin()">
                <img src="/static/images/my_praise@3x.png" alt="">
                <p>好评鼓励</p>
              </div>
              <div @click="openLogin()">
                <img src="/static/images/my_feedback@3x.png" alt="">
                <p>意见反馈</p>
              </div>
            </div>
          </div>
        </div>

        <!--kuayetonglogo-->
        <div style="width: 100%;text-align: center">
          <img src="/static/images/kuayet.com@3x.png" alt="" style="width: 163px;height: 35px;padding-top: 15px;padding-bottom: 20px;">
        </div>
      </div>

      <button @click="pay()">支付</button>
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
        userInfo: ''
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
      pay () {
        wx.login({
          success: function (res) {
            if (res.code) {
              wx.requestPayment({
                timeStamp: '1490840662',
                nonceStr: '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
                package: 'prepay_id=wx2017033010242291fcfe0db70013231072',
                signType: 'MD5',
                paySign: '22D9B4E54AB1950F51E0649E8810ACD6',
                success: function (res) {
                  console.log(res)
                }
              })
            }
          }
        })
        // wx.requestPayment({
        //   timeStamp: '',
        //   nonceStr: '',
        //   package: '',
        //   signType: 'MD5',
        //   paySign: '',
        //   success: function (res) {
        //     console.log(res)
        //   }
        // })
      },
      hasToken () {
        const res = this.$saveToken.getToken()
        this.params.userId = res.token
        if (res.token == undefined) {
          wx.navigateTo({
            url: '../login/main',
            redirect: false
          })
        } else {
          this.getUserinfo(this.params)
        }
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
    onLoad () {
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
  .settingicon img{
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
    padding-left: 18px;
    height: 53px;
    width: 53px;
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
  .btncontent div img{
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .dingdanTab{
    height: 125px;
    padding: 0px 12px;
    margin-top: -44px;
    position: relative;
  }
  .dingdanTab .item_Tab{
    height: 100%;
    width: 100%;
    background: white;
    border-radius: 14px;
  }
  .itemtitle{
    height: 44px;
    width: 100%;
    /*background: black;*/
    border-radius: 14px 14px 0px 0px;
    border-bottom: 1px solid #F2F2F2;
    line-height: 44px;
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
  .tabs div img{
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
  .linkHref .link_item img{
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
    height: 163px;
    /*width: 100%;*/
    margin-top: 10px;
    padding: 0 12px;
  }
  .guanliLogin .guanli_item{
    width: 100%;
    height: 163px;
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
  .guanli_item1 img,.guanli_item2 img,.aboutus_item2 img{
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
</style>
