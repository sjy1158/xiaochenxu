<template>
  <div class="founding">
    <div class="mod1">
      <p>活动预告</p>
      <div class="scroll">
        <div>
          <image lazy-load="true" class="img1 srtImg" v-for="item in headerList" :src="item.image" alt="" @click="activity(params.type,item.id)"></image>
        </div>
      </div>
    </div>

    <div class="mod2">
      <p>活动回顾</p>
      <ul>
        <li v-for="item in actList" @click="activity(params2.type,item.id)">
          <image lazy-load="true" class="img2 srtImg" :src="item.image" alt=""></image>
          <div style="display: inline-block">
            <p class="title">{{item.title}}</p>
            <p class="time">{{item.time}}</p>
          </div>
        </li>
      </ul>
    </div>
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
        headerList: [],
        actList: []
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
      }
    },
    // onLoad () {
    //   this.getList(this.params)
    //   this.getListact(this.params2)
    // },
    onShow () {
      this.getList(this.params)
      this.getListact(this.params2)
    },
    onPullDownRefresh () {
      this.headerList = []
      this.getList(this.params)
      this.actList = []
      this.params2.pageNum = 1
      this.getListact(this.params2)
    },
    onReachBottom () {
      this.params2.pageNum += 1
      this.getListact(this.params2)
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
    margin-top: 10px;
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
</style>
