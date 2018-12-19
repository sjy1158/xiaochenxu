<template>
    <div class="fans">
      <div class="tabs">
        <div @click="sumfans(0)" :class="params.type==0?'active':''">全部({{data.quanbushuliang}})</div>
        <div @click="sumfans(1)" :class="params.type==1?'active':''">粉丝({{data.fensiquanbu}})</div>
        <div @click="sumfans(4)" :class="params.type==4?'active':''">创客({{data.chuangkequanbu}})</div>
        <div @click="sumfans(7)" :class="params.type==7?'active':''">商家({{data.shangjiaquanbu}})</div>
      </div>

      <!--粉丝列表数据-->
      <div style="margin-top: 36px;">
        <div class="fanslist" v-for="item in fanslist">
          <div class="fanstab">
            <image lazy-load="true" :src="item.image" class="img1"></image>
            <div class="fanstype">
              <p>
                <span style="vertical-align: middle;color: #393939;">{{item.nickName}}</span>
                <img v-if="item.type==3" src="/static/images/my_become_partner@3x.png" style="width: 67px;height: 27px;vertical-align: middle;margin-top: -10px;margin-left: 8px;" alt="">
                <img v-if="item.type==0" src="/static/images/my_become_partner copy 3@3x.png" style="width: 67px;height: 18px;vertical-align: middle;margin-left: 8px;" alt="">
              </p>
              <p style="color: #8F8F8F;font-size: 12px!important;position: absolute;bottom: 0px;">{{item.phone}}<span style="margin-left: 25px;">{{item.date}}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        params: {
          userId: '',
          type: 0,
          pageNum: 1,
          num: 10
        },
        fanslist: [],
        data: {}
      }
    },
    methods: {
      async getfanslist (params) {
        var data = await this.$net.get('http://api.kuayet.com:8080/crossindustry/userPage/newFans', params)
        this.data = data
        console.log(JSON.stringify(data))
        for (var i = 0; i < data.list.length; i++) {
          this.fanslist.push(data.list[i])
        }
      },
      sumfans (type) {
        this.fanslist = []
        this.params.type = type
        this.params.pageNum = 1
        this.getfanslist(this.params)
      }
    },
    onLoad () {
      this.params.userId = this.$saveToken.getToken().token
      this.fanslist = []
      this.getfanslist(this.params)
    },
    onPullDownRefresh () {
      this.fanslist = []
      this.params.pageNum = 1
      this.getfanslist(this.params)
    },
    onReachBottom () {
      wx.showLoading({
        title: '玩命加载中'
      })
      this.params.pageNum+=1
      this.getfanslist(this.params)
    }
  }
</script>

<style scoped>
  .active{
    color: #F08400!important;
  }
  .fans{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    /*position: fixed;*/
    position: absolute;
  }
  .tabs{
    height: 36px;
    display: flex;
    background: white;
    position: fixed;
    width: 100%;
    z-index: 9999999;
  }
  .tabs div{
    flex: 1;
    color: #717171;
    font-size: 14px;
    letter-spacing: 1px;
    text-align: center;
    line-height: 36px;
  }
  .fanslist{
    background: white;
    padding-left: 15px;
    padding-right: 15px;
    border-bottom: 1px solid #F2F2F2;
    position: relative;
  }
  .fanslist .fanstab{
    height: 62px;
    width: 100%;
  }
  .fanstab .img1{
    height: 46px;
    width: 46px;
    position: absolute;
    top: 50%;
    margin-top: -23px;
    border-radius: 50%;
  }
  .fanstype{
    width: 80%;
    height: 46px;
    margin-left: 56px;
    font-size: 14px;
    position: absolute;
    top: 50%;
    margin-top: -23px;
  }
  .fanstype p{
    letter-spacing: 1px;
  }
</style>
