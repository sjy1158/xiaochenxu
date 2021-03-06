import Vue from 'vue'
import App from './App'
import net from '@/utils/getData.js'
import saveToken from '@/utils/saveToken.js'

Vue.prototype.$net = net
Vue.prototype.$saveToken = saveToken
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
// console.log(Vue.prototype.$getOptions)

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/index/main', 'pages/mine/main', 'pages/phone/main', 'pages/out/main', 'pages/foodday/main',
      'pages/shophome/main', 'pages/login/main', 'pages/setting/main', 'pages/changename/main', 'pages/paycode/main', 'pages/invieterlink/main',
      'pages/paydiscon/main', 'pages/changephone/main', 'pages/changepass/main', 'pages/servicecenter/main', 'pages/accountinformation/main', 'pages/adlogin/main',
      'pages/singlequery/main', 'pages/novice/main', 'pages/feedback/main', 'pages/officialannouncement/main', 'pages/alldingdan/main', 'pages/lookadddingdan/main',
      'pages/shopguanli/main', 'pages/skychongzhi/main', 'pages/changeuserpass/main', 'pages/zifeishuoming/main', 'pages/changjianpro/main', 'pages/aboutus/main',
      'pages/founding/main', 'pages/activity/main', 'pages/allshops/main', 'pages/player/main', 'pages/suredingdan/main', 'pages/waitlisten/main', 'pages/inline/main',
      'pages/searchshop/main', 'pages/myincome/main', 'pages/shopincome/main', 'pages/myteam/main', 'pages/zhanghuxinxi/main', 'pages/yunweiyuan/main', 'pages/changepassword/main',
      'pages/dsgsucai/main', 'pages/rilisucai/main', 'pages/shoplist/main', 'pages/choosesucai/main', 'pages/newnovice/main'],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      enablePullDownRefresh: true
    },
    tabBar: {
      color: "#474747",
      selectedColor: "#F08400",
      backgroundColor: "#F2F2F2",
      borderStyle: "grey",
      list: [
        {
          pagePath: "pages/phone/main",
          text: "电话",
          iconPath: "static/images/control_phone_normal@3x.png",
          selectedIconPath: "static/images/control_phone_select@3x.png"
        },
        {
          pagePath: "pages/logs/main",
          text: "附近商家",
          iconPath: "static/images/control_merchant_normal@3x.png",
          selectedIconPath: "static/images/control_merchant_select@3x.png"
        },
        {
          pagePath: "pages/index/main",
          text: "电商购",
          iconPath: "static/images/control_commerce_normal@3x.png",
          selectedIconPath: "static/images/control_commerce_select@3x.png"
        },
        {
          pagePath: "pages/founding/main",
          text: "发现",
          iconPath: "static/images/control_found_normal@3x.png",
          selectedIconPath: "static/images/control_found_sel@3x.png"
        },
        // {
        //   pagePath: "pages/phone/main",
        //   text: "电话",
        //   iconPath: "static/images/control_phone_normal@3x.png",
        //   selectedIconPath: "static/images/control_phone_select@3x.png"
        // },
        {
          pagePath: "pages/mine/main",
          text: "我的",
          iconPath: "static/images/my_icon_normal@3x.png",
          selectedIconPath: "static/images/my_icon_selected@3x.png"
        }
      ]
    }
  }
}
