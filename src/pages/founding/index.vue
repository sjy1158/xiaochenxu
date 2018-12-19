<template>
  <div class="founding">
    <div style="width: 100%;height: 39px;line-height: 38.5px;border-bottom: 1px solid #EDEDED;background: white;position: fixed;z-index: 999999999">
      <div class="titletab">
        <div :class="type==0?'coloractive':''" @click="tabClick(0)">
          <div v-show="type==0" style="height: 2px;width: 26px;background: #F08400;position: absolute;bottom: 0px;left: 50%;margin-left: -13px;"></div>
          活动
        </div>
        <div :class="type==1?'coloractive':''" @click="tabClick(1)">
          <div v-show="type==1" style="height: 2px;width: 26px;background: #F08400;position: absolute;bottom: 0px;left: 50%;margin-left: -13px;"></div>
          宣传素材
        </div>
      </div>
    </div>
    <!--活动-->
    <div style="position: absolute;top: 40px;width: 100%;">
      <div v-show="type==0">
        <div class="mod1">
          <p>活动预告</p>
          <div class="scroll">
            <div>
              <image v-if="item.image" lazy-load="true" class="img1 srtImg" v-for="item in headerList" :src="item.image" alt="" @click="activity(params.type,item.id)"></image>
            </div>
          </div>
        </div>

        <div class="mod2">
          <p>活动回顾</p>
          <ul>
            <li v-for="item in actList" @click="activity(params2.type,item.id)">
              <image v-if="item.image" lazy-load="true" class="img2 srtImg" :src="item.image" alt=""></image>
              <div style="display: inline-block">
                <p class="title">{{item.title}}</p>
                <p class="time">{{item.time}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--活动素材-->
      <div v-show="type==1">
        <div class="tabtype" style="height: auto;background: white;position: fixed;top: 40px;z-index: 9999999">
        <div class="tabitem" style="margin-left: 10px;background: white;">
          <span :class="params3.type==1?'activefont':''" @click="fontClick(1)">电商购</span>
          <span :class="params3.type==2?'activefont':''" @click="fontClick(2)">商家</span>
          <span :class="params3.type==3?'activefont':''" @click="fontClick(3)">日历</span>
        </div>
        </div>
        <!--活动素材列表-->
        <div class="contentlist" style="position: absolute;top: 47px;">
          <!--单个开始&#45;&#45;&#45;&#45;&#45;&#45;-->
          <div class="content_item" v-for="item in activetylist">
            <div style="padding-left: 10px;padding-right: 10px;">
              <image lazy-load="true" :src="item.headImage" class="titleImg"></image>
              <div class="content_item1">
                <p>{{item.name}}</p>
                <p>{{item.time}}</p>
                <div class="zhuanfa" @click="shareUrl(item.shareUrl)">
                  <img src="/static/images/merchant_notice@2x.png" style="height: 11px;width: 11px;vertical-align: middle" alt="">
                  <span style="font-size: 12px;color: #F08400;vertical-align: middle;margin-left: 3px;">{{item.shareNum}}</span>
                </div>
              </div>
              <p style="width: 100%;padding-bottom: 10px;font-size: 12px;letter-spacing: 1px;color: #393939">{{item.content}}<span style="color: #F08400">查看详情</span></p>
              <div class="imgtab">
                <div v-for="(itemname,idx) in item.image" :key="idx" :data-index="idx">
                  <image lazy-load="true" class="srtImg" :src="itemname" @click="priImg"></image>
                </div>
              </div>
            </div>
            <div style="width: 100%;height: 10px;background:#F2F2F2;padding: 0px!important;"></div>
          </div>
          <!--单个tabend&#45;&#45;&#45;&#45;&#45;&#45;-->
        </div>
        <!--<canvas style="width: 600px; height: 900px;" canvas-id="firstCanvas"></canvas>-->
        <!--<img :src="canvasUrl" alt="">-->
        <!--<canvas canvas-id="shareCanvas" style="width:600px;height:900px"></canvas>-->
        <!--<img src="http://api.kuayet.com/pc/qrcode.jpg" @click="getPri('http://api.kuayet.com/pc/qrcode.jpg')" style="width: 50px;height: 50px;position: absolute;z-index: 99999999999999999" alt="">-->
      </div>
      <!--活动素材end-->
    </div>
    <!--<image :src="'data:image/png;base64,' + src" style="margin-top: 400px;height: 200px;width: 200px;"></image>-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        params: {
          type: 0,
          pageNum: 1,
          num: 5
        },
        params2: {
          type: 1,
          pageNum: 1,
          num: 5
        },
        params3: {
          type: 1,
          pageNum: 1,
          num: 5
        },
        headerList: [],
        actList: [],
        // 头部选择
        type: 0,
        fonttype: 0,
        src: '',
        canvasUrl: '',
        activetylist: [],
        imgList: []
      }
    },
    methods: {
      activity (type,id) {
        wx.navigateTo({
          url: '../activity/main?id=' + id + '&type=' + type,
          redirect: false
        })
      },
      async getList (params) {
        var headerList = await this.$net.get('http://api.kuayet.com:8080/crossindustry/findPage/activityNotice', params)
        this.headerList = this.headerList.concat(headerList)
      },
      async getListact (params) {
        var actList = await this.$net.get('http://api.kuayet.com:8080/crossindustry/findPage/activityNotice', params)
        this.actList = this.actList.concat(actList.list)
        // console.log(JSON.stringify(this.actList))
      },
      // 获取宣传素材
      async getXuanchuan (params) {
        var data = await this.$net.get('http://api.kuayet.com:8080/crossindustry/findPage/FindPublicityMaterial', params)
        // console.log(JSON.stringify(data))
        for (var i = 0; i < data.list.length; i++) {
          data.list[i].image = data.list[i].image.split(',')
          this.activetylist.push(data.list[i])
        }
      },
      getqrcode () {
        wx.navigateTo({
          url: '../qrcode/main',
          redirect: false
        })
      },
      tabClick (type) {
        this.type = type
        if (this.type==0) {
          this.headerList = []
          this.getList(this.params)
          this.actList = []
          this.params2.pageNum = 1
          this.getListact(this.params2)
        } else {
          // this.activetylist = []
          this.params3.type = type
          this.getXuanchuan(this.params3)
        }
        // this.type = type
      },
      fontClick (type) {
        this.activetylist = []
        this.params3.pageNum = 1
        this.params3.type = type
        this.getXuanchuan(this.params3)
      },
      //分享
      shareUrl (url) {
        wx.previewImage({
          current: url,
          urls: [url]
        })
      }
    },
    // onLoad () {
    //   this.getList(this.params)
    //   this.getListact(this.params2)
    // },
    onReady () {
    },
    onLoad () {
      this.type = 0
      this.getList(this.params)
      this.getListact(this.params2)
    },
    onPullDownRefresh () {
      if (this.type==0) {
        this.headerList = []
        this.getList(this.params)
        this.actList = []
        this.params2.pageNum = 1
        this.getListact(this.params2)
      } else {
        this.activetylist = []
        this.params3.pageNum = 1
        this.getXuanchuan(this.params3)
      }
    },
    onReachBottom () {
      if (this.type==0) {
        this.params2.pageNum += 1
        this.getListact(this.params2)
      } else {
        this.params3.pageNum += 1
        this.getXuanchuan(this.params3)
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
    /*margin-top: 10px;*/
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
  .scroll div .img1{
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
    /*width: 800px;*/
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
  .mod2 ul li .img2{
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

  .srtImg{
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    opacity: 0;
    animation: fadeIn 1s forwards 1s;
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }



  /*头部*/
  .titletab{
    position:absolute;
    left: 50%;
    margin-left: -100px;
    width: 200px;
    display: flex;
  }
  .titletab div{
    position: relative;
    flex: 1;
    text-align: center;
    color: #717171;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .coloractive{
    color: #393939!important;
    font-size: 16px!important;
  }

  .tabitem{
    /*display: flex;*/
    height: 49px;
    width: 200px;
  }
  .tabitem span{
    /*flex: 1;*/
    line-height: 49px;
    /*text-align: center;*/
    color: #393939;
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 1px;
    margin-right: 20px;
  }
  .tabtype{
    height: auto;
    width: 100%;
    /*background: white;*/
  }
  .tabtype ul{
    width: 100%;
    height: auto;
    background: white;
  }
  .tabtype ul li{
    width: 100%;
    background: white;
  }
  .content_item{
    height: auto;
    background: white;
    /*padding-left: 10px;*/
    /*padding-right: 10px;*/
    position: relative;
    /*margin-bottom: 10px;*/
  }
  .content_item .content_item1{
    height: 38px;
    width: 80%;
    /*background: red;*/
    position: absolute;
    left: 58px;
    top: 10px;
  }
  .content_item .content_item1 p{
    letter-spacing: 1px;
  }
  .content_item .content_item1 p:first-child{
    color: #393939;
    font-size: 14px;
    position: absolute;
    top: 0px;
    font-weight: bold;
  }
  .content_item .content_item1 p:nth-child(2){
    color: #717171;
    font-size: 12px;
    position: absolute;
    bottom: 0px;
  }
  .content_item .titleImg{
    height: 38px;
    width: 38px;
    border-radius: 50%;
    margin-top: 10px;
  }
  .zhuanfa{
    height: 19px;
    width: 61px;
    text-align: center;
    line-height: 15px;
    background: #FDF4E9;
    position: absolute;
    right: 0px;
    top: 50%;
    margin-top: -9.5px;
    border-radius: 20px;
  }
  .imgtab{
    /*display: flex;*/
  }
  .imgtab div{
    /*flex: 1;*/
    /*text-align: center;*/
  }
  .imgtab div .srtImg{
    height: 112px;
    width: 112px;
  }
  .activefont{
    color: #F08400!important;
    font-size: 14px!important;
  }
</style>
