<template>
    <div class="fans">
      <div class="tabs">
        <div @click="sumfans(0)" :class="type==0?'active':''">全部(4000)</div>
        <div @click="sumfans(1)" :class="type==1?'active':''">粉丝(200)</div>
        <div @click="sumfans(2)" :class="type==2?'active':''">创客(200)</div>
        <div @click="sumfans(3)" :class="type==3?'active':''">商家(200)</div>
      </div>

      <!--粉丝列表数据-->
      <div style="margin-top: 36px;">
        <div class="fanslist">
          <div class="fanstab">
            <image lazy-load="true" src="http://tx.haiqq.com/uploads/allimg/150327/211551I17-12.jpg" class="img1"></image>
            <div class="fanstype">
              <p>
                <span style="vertical-align: middle;color: #393939;">昵称昵称昵称</span>
                <img src="/static/images/my_become_partner@3x.png" style="width: 67px;height: 27px;vertical-align: middle;margin-top: -10px;margin-left: 8px;" alt="">
              </p>
              <p style="color: #8F8F8F;font-size: 12px!important;position: absolute;bottom: 0px;">130****0000<span style="margin-left: 25px;">2018年08月07日</span></p>
            </div>
          </div>
        </div>
        <div class="fanslist">
          <div class="fanstab">
            <image lazy-load="true" src="http://tx.haiqq.com/uploads/allimg/150325/12211H320-5.jpg" class="img1"></image>
            <div class="fanstype">
              <p>
                <span style="vertical-align: middle;color: #393939;">昵称昵称昵称</span>
                <img src="/static/images/my_become_partner@3x.png" style="width: 67px;height: 27px;vertical-align: middle;margin-top: -10px;margin-left: 8px;" alt="">
              </p>
              <p style="color: #8F8F8F;font-size: 12px!important;position: absolute;bottom: 0px;">130****0000<span style="margin-left: 25px;">2018年08月07日</span></p>
            </div>
          </div>
        </div>
        <div class="fanslist">
          <div class="fanstab">
            <image lazy-load="true" src="http://img2.imgtn.bdimg.com/it/u=2226459220,4182755798&fm=26&gp=0.jpg" class="img1"></image>
            <div class="fanstype">
              <p>
                <span style="vertical-align: middle;color: #393939;">昵称昵称昵称</span>
                <img src="/static/images/my_become_partner@3x.png" style="width: 67px;height: 27px;vertical-align: middle;margin-top: -10px;margin-left: 8px;" alt="">
              </p>
              <p style="color: #8F8F8F;font-size: 12px!important;position: absolute;bottom: 0px;">130****0000<span style="margin-left: 25px;">2018年08月07日</span></p>
            </div>
          </div>
        </div>
        <div class="fanslist">
          <div class="fanstab">
            <image lazy-load="true" src="http://tx.haiqq.com/uploads/allimg/150327/211551I17-12.jpg" class="img1"></image>
            <div class="fanstype">
              <p>
                <span style="vertical-align: middle;color: #393939;">昵称昵称昵称</span>
                <img src="/static/images/my_become_partner@3x.png" style="width: 67px;height: 27px;vertical-align: middle;margin-top: -10px;margin-left: 8px;" alt="">
              </p>
              <p style="color: #8F8F8F;font-size: 12px!important;position: absolute;bottom: 0px;">130****0000<span style="margin-left: 25px;">2018年08月07日</span></p>
            </div>
          </div>
        </div>
        <div class="fanslist">
          <div class="fanstab">
            <image lazy-load="true" src="http://tx.haiqq.com/uploads/allimg/150325/12211H320-5.jpg" class="img1"></image>
            <div class="fanstype">
              <p>
                <span style="vertical-align: middle;color: #393939;">昵称昵称昵称</span>
                <img src="/static/images/my_become_partner@3x.png" style="width: 67px;height: 27px;vertical-align: middle;margin-top: -10px;margin-left: 8px;" alt="">
              </p>
              <p style="color: #8F8F8F;font-size: 12px!important;position: absolute;bottom: 0px;">130****0000<span style="margin-left: 25px;">2018年08月07日</span></p>
            </div>
          </div>
        </div>
        <div class="fanslist">
          <div class="fanstab">
            <image lazy-load="true" src="http://img2.imgtn.bdimg.com/it/u=2226459220,4182755798&fm=26&gp=0.jpg" class="img1"></image>
            <div class="fanstype">
              <p>
                <span style="vertical-align: middle;color: #393939;">昵称昵称昵称</span>
                <img src="/static/images/my_become_partner@3x.png" style="width: 67px;height: 27px;vertical-align: middle;margin-top: -10px;margin-left: 8px;" alt="">
              </p>
              <p style="color: #8F8F8F;font-size: 12px!important;position: absolute;bottom: 0px;">130****0000<span style="margin-left: 25px;">2018年08月07日</span></p>
            </div>
          </div>
        </div>
        <div class="fanslist">
          <div class="fanstab">
            <image lazy-load="true" src="http://tx.haiqq.com/uploads/allimg/150327/211551I17-12.jpg" class="img1"></image>
            <div class="fanstype">
              <p>
                <span style="vertical-align: middle;color: #393939;">昵称昵称昵称</span>
                <img src="/static/images/my_become_partner@3x.png" style="width: 67px;height: 27px;vertical-align: middle;margin-top: -10px;margin-left: 8px;" alt="">
              </p>
              <p style="color: #8F8F8F;font-size: 12px!important;position: absolute;bottom: 0px;">130****0000<span style="margin-left: 25px;">2018年08月07日</span></p>
            </div>
          </div>
        </div>
        <div class="fanslist">
          <div class="fanstab">
            <image lazy-load="true" src="http://tx.haiqq.com/uploads/allimg/150325/12211H320-5.jpg" class="img1"></image>
            <div class="fanstype">
              <p>
                <span style="vertical-align: middle;color: #393939;">昵称昵称昵称</span>
                <img src="/static/images/my_become_partner@3x.png" style="width: 67px;height: 27px;vertical-align: middle;margin-top: -10px;margin-left: 8px;" alt="">
              </p>
              <p style="color: #8F8F8F;font-size: 12px!important;position: absolute;bottom: 0px;">130****0000<span style="margin-left: 25px;">2018年08月07日</span></p>
            </div>
          </div>
        </div>
        <div class="fanslist">
          <div class="fanstab">
            <image lazy-load="true" src="http://img2.imgtn.bdimg.com/it/u=2226459220,4182755798&fm=26&gp=0.jpg" class="img1"></image>
            <div class="fanstype">
              <p>
                <span style="vertical-align: middle;color: #393939;">昵称昵称昵称</span>
                <img src="/static/images/my_become_partner@3x.png" style="width: 67px;height: 27px;vertical-align: middle;margin-top: -10px;margin-left: 8px;" alt="">
              </p>
              <p style="color: #8F8F8F;font-size: 12px!important;position: absolute;bottom: 0px;">130****0000<span style="margin-left: 25px;">2018年08月07日</span></p>
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
        type: 0
      }
    },
    methods: {
      sumfans (type) {
        this.type = type
      }
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
