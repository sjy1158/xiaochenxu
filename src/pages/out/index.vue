<template>
    <div class="adver">
      <div class="mod1" style="position: relative">
        <image lazy-load="true" :src="listdata.product.imageUrl" class="img1"></image>
        <div style="height: 40px;width: 40px;border-radius: 50%;background: rgba(0,0,0,.5);position: absolute;right: 20px;top: 20px;text-align: center;" @click="gohome">
          <image lazy-load="true" src="/static/images/home@3x.png" style="width: 20px;height: 20px;position: absolute;top: 50%;left: 50%;margin-left: -10px;margin-top: -10px;"></image>
        </div>
      </div>

      <div class="mod2">
        <div class="contentprice">
          <p style="height: 20px;line-height: 20px;">
            <span style="color: #393939;font-size: 12px;">{{listdata.product.source}}价</span>
            <span style="margin-left: 4px;color: #FF0000;font-size: 14px;letter-spacing: 1px;font-weight: bold">¥{{listdata.product.price}}元</span>
            <span style="float: right;color: #717171;font-size: 10px;letter-spacing: 1px">销量：{{listdata.product.salesVolume}}件</span>
          </p>
          <p style="color: #393939;font-size: 14px;font-weight: bold;letter-spacing: 1px;margin-top: 13px;">
            {{listdata.product.name}}
          </p>
        </div>
      </div>

      <div class="mod3">
        <div class="contentimg" style="position: relative;line-height: 63px;">
          <image lazy-load="true" src="/static/images/newbg.png" class="img2"></image>
          <div style="position: absolute;top: 0px;left: 21px;font-size: 14px;letter-spacing: 1px;line-height: 30px!important;font-weight: bold">¥</div>
          <div style="position: absolute;top: 0px;left: 38px;font-size: 40px;letter-spacing: 1px;">{{listdata.product.deduction}}</div>
          <div style="position: absolute;top: 0px;left: 120px;font-size: 10px;letter-spacing: 1px;">提交订单时会自动抵扣</div>
          <div style="position: absolute;top: 0px;right: 15px;font-size: 13px;letter-spacing: 1px;font-weight: bold" @click="dikou">立即抵扣</div>
        </div>
      </div>

      <div class="mod4" style="margin-top: 10px;padding-bottom: 50px;">
        <image lazy-load="true" src="/static/images/xihuan.png" style="width: 100%;height: 46px;"></image>
        <div style="padding: 0px 5px;height: auto">
          <div class="contnetList">
            <ul>
              <li v-for="item in listdata.list" @click.stop="getTop(item.id)">
                <image lazy-load="true" src="/static/images/bgre.png" style="" class="img"></image>
                <image lazy-load="true" :src="item.imageUrl" class="img1 srtImg"></image>
                <p style="font-size: 12px;" class="shopname">
                  <image v-if="item.source=='京东'" lazy-load="true" src="/static/images/jingdong@3x.png" style=" width: 14px;height: 14px;vertical-align: middle"></image>
                  <image v-if="item.source=='淘宝'" lazy-load="true" src="/static/images/taobao@3x.png" style=" width: 14px;height: 14px;vertical-align: middle"></image>
                  <image v-if="item.source=='拼多多'" lazy-load="true" src="/static/images/pinduoduo@3x.png" style=" width: 14px;height: 14px;vertical-align: middle"></image>
                  <span style="vertical-align: middle;letter-spacing: 1px;margin-left: 6px;">{{item.name}}</span>
                </p>
                <p class="shopname1" style="font-size: 10px;">
                  <span>抵后价: <span style="color: #FF0000;font-size: 12px;">¥{{item.price}}</span></span>
                  <span style="float: right;color: #717171;font-size: 10px;">销量: {{item.salesVolume}}件</span>
                </p>
                <div class="discon">
                  <image lazy-load="true" src="/static/images/deduction_bg@3x.png" class="img2"></image>
                  <div style="color: white;height: 20px;position: absolute;left: 0px;font-size: 12px;text-align: center;line-height: 20px;" class="disconmoney">可抵 : {{item.deduction}}</div>
                  <button open-type='share' :data-name="item.name" :data-image="item.imageUrl" :data-id="item.id" style="position: absolute;right: 0px;height: 20px;font-size: 12px;line-height: 20px;color: white;background: #F08400;text-align: center" @click.stop="onShareAppMessage">分享</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <footer class="foot">
        <div @click="dikou">立即抵扣购买</div>
      </footer>
      <!--<web-view :src="webUrL"></web-view>-->
    </div>
</template>

<script>
  import getRouter from '../../utils/getOptions'
  export default {
    data () {
      return {
        params: {
          id: '',
          userId: '',
          version: '1.0.0'
        },
        listdata: {}
        // webUrL: ''
      }
    },
    methods: {
      async getPro (params) {
        var data = await this.$net.get('/crossindustry/powerPurchaser/getpro', params)
        console.log(JSON.stringify(data))
        this.listdata = data
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
          this.params.id = getRouter().id
          this.getPro(this.params)
        }
      },
      getTop (id) {
        wx.pageScrollTo({
          scrollTop: 0
        })
        this.params.id = id
        this.getPro(this.params)
      },
      gohome () {
        wx.switchTab({
          url: '../index/main',
          redirect: false
        })
      },
      //抵扣
      dikou () {
        wx.setClipboardData({
          data: this.listdata.product.name,
          success: function () {
            wx.showToast({
              title: '商品名字已复制',
              icon: 'none'
            })
            setTimeout(function () {
              wx.showModal({
                title: '提示',
                content: '商品名字已复制,请前往跨业通app搜索此商品进行领券抵扣',
                success: function (res) {
                  if (res.confirm) {
                    return
                  } else {
                    return
                  }
                }
              })
            }, 2000)
          }
        })
        // wx.showModal({
        //   title: '提示',
        //   content: '请前往跨业通app使用此功能',
        //   success: function (res) {
        //     if (res.confirm) {
        //       return
        //     } else {
        //       return
        //     }
        //   }
        // })
      }
    },
    mounted () {
      // var id = getRouter().id;
      // this.webUrL = 'https://www.kuayet.com/pc/#/advertisingDetails?id=' + id + '&userId=57246fd6'
    },
    onShareAppMessage (res) {
      var name = res.target.dataset.name
      var image = res.target.dataset.image
      var id = res.target.dataset.id
      return {
        title: name,
        path: '/pages/out/main?id=' + id,
        imageUrl: image,
        success: function (res) {
          console.log('转发成功')
        }
      }
    },
    onShow () {
      this.hasToken()
    },
    onLoad () {
      // var id = getRouter().id;
    }
  }
</script>

<style scoped>
  .adver{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    /*position: fixed;*/
    position: absolute;
  }
  .mod1{
    width: 100%;
    height: 375px;
  }
  .mod1 .img1{
    width: 100%;
    height: 100%;
  }
  .mod2{
    padding: 15px 10px;
    background: white;
  }
  .mod2 .contentprice{
    height: auto;
    width: 100%;
  }
  .mod3{
    padding: 15px;
    background: white;
    margin-top: 10px;
  }
  .contentimg{
    width: 100%;
    height: 63px;
    position: relative;
    color: white;
  }
  .contentimg .img2{
    height: 100%;
    width: 100%;
  }



  .contnetList{
    width: 100%;
    height: auto;
    /*background: red;*/
  }
  .contnetList ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /*justify-content: space-between;*/
    /*flex-direction:column;*/
  }
  .contnetList ul li{
    position: relative;
    /*float: left;*/
    /*flex: 1;*/
    width: 50%;
  }
  .contnetList ul li .img1{
    position: absolute;
    left: 50%;
    margin-left: -45%;
    top: 0px;
    width: 90%;
    height: 182px;
    border-radius: 5px 5px 0px 0px;
  }
  .shopname{
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    position: absolute;
    width: 84%;
    left: 50%;
    margin-left: -42%;
    top: 191px;
  }
  .shopname1{
    position: absolute;
    width: 84%;
    left: 50%;
    /*top: 235px;*/
    margin-left: -42%;
  }
  .discon{
    position: absolute;
    width: 84%;
    /*width: 76px;*/
    height: 20px;
    left: 8%;
    /*background: #0bb20c;*/
    font-size: 12px;
    color: white;
    letter-spacing: 1px;
    text-align: center;
    /*width: 84%;*/
  }
  .discon .img2{
    width: 76px;
    height: 20px;
    position: absolute;
    left: 0px;
    /*left:8%;*/
  }
  .img{
    width: 100%;
  }
  @media (max-width: 1500px) {
    .shopname1{
      top: 245px;
    }
    .discon{
      top: 277px;
    }
    .img{
      height: 320px;
    }
    .disconmoney{
      width: 76px;
    }
    /*.disconmoney{*/
    /*width: 100px;*/
    /*}*/
  }
  @media (min-width: 700px) and (max-width: 1000px) {
    .shopname1{
      top: 227px;
    }
    .discon{
      top: 277px;
    }
    .img{
      height: 320px;
    }
    .disconmoney{
      width: 76px;
    }
    /*.disconmoney{*/
    /*width: 100px;*/
    /*}*/
  }
  @media (min-width: 350px) and (max-width: 700px) {
    .shopname1{
      top: 235px;
    }
    .discon{
      top: 260px;
    }
    .img{
      height: 300px;
    }
    .disconmoney{
      width: 76px;
    }
    /*.img2{*/
    /*width: 76px;*/
    /*}*/
  }

  .foot div{
    width: 100%;height: 46px;background: #F67419;line-height: 46px;font-size: 16px;text-align: center;letter-spacing: 1px;color: white;position: fixed;bottom: 0px;
  }
</style>
