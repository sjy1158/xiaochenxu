<template>
  <div>
    <div class="mod1">
      <div>
        <input type="text" v-model="params.phoneId">
        <img src="/static/images/merchant_wrong@3x.png" alt="" @click="cleanValue()">
      </div>
      <p>默认号码</p>
    </div>
    <!--充值卡充值-->
    <div class="mod2">
      <p>充值卡充值</p>
      <div class="cardcontent">
        <ul>
          <li>
            <div>
              <input type="text" v-model="params.cardId" placeholder="请输入充值卡卡号">
            </div>
          </li>
          <li>
            <div>
              <input type="text" v-model="params.password" placeholder="请输入充值卡密码">
            </div>
          </li>
        </ul>
      </div>
      <div class="btn">
        <button @click="cradchongzhi()">充值</button>
      </div>
    </div>
    <!--在线充值-->
    <div class="mod3">
      <p>在线充值</p>
      <div class="inlinecontent">
        <ul>
          <li @click="choseNum(0)">
            <div>
              <image lazy-load="true" class="img" :src="choseIndex==0? '/static/images/bg_sel@3x.png':'/static/images/bg_nor@3x.png'" alt=""></image>
              <div style="position: absolute;width: 100%;height: 45px;text-align: center;left: 50%;margin-left: -50%;top: 50%;margin-top: -22.5px;">
                <p style="color: #717171;font-size: 18px;">30元</p>
                <p style="color: #FF0000;font-size: 12px;">充值100元话费购物金</p>
              </div>
            </div>
          </li>
          <li @click="choseNum(1)">
            <div>
              <image lazy-load="true" class="img" :src="choseIndex==1? '/static/images/bg_sel@3x.png':'/static/images/bg_nor@3x.png'" alt=""></image>
              <div style="position: absolute;width: 100%;height: 45px;text-align: center;left: 50%;margin-left: -50%;top: 50%;margin-top: -22.5px;">
                <p style="color: #717171;font-size: 18px;">30元</p>
                <p style="color: #FF0000;font-size: 12px;">充值100元话费购物金</p>
              </div>
            </div>
          </li>
          <li @click="choseNum(2)">
            <div>
              <image lazy-load="true" class="img" :src="choseIndex==2? '/static/images/bg_sel@3x.png':'/static/images/bg_nor@3x.png'" alt=""></image>
              <div style="position: absolute;width: 100%;height: 45px;text-align: center;left: 50%;margin-left: -50%;top: 50%;margin-top: -22.5px;">
                <p style="color: #717171;font-size: 18px;">30元</p>
                <p style="color: #FF0000;font-size: 12px;">充值100元话费购物金</p>
              </div>
            </div>
          </li>
          <li @click="choseNum(3)">
            <div>
              <image lazy-load="true" class="img" :src="choseIndex==3? '/static/images/bg_sel@3x.png':'/static/images/bg_nor@3x.png'" alt=""></image>
              <div style="position: absolute;width: 100%;height: 45px;text-align: center;left: 50%;margin-left: -50%;top: 50%;margin-top: -22.5px;">
                <p style="color: #717171;font-size: 18px;">30元</p>
                <p style="color: #FF0000;font-size: 12px;">充值100元话费购物金</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!--充值按钮-->
    <div class="mod2">
      <div class="btn">
        <button>充值</button>
      </div>
    </div>

    <div class="mod4">
      <div>
        提示：该充值仅供跨业通平台使用，不可作为手机SIM卡话费与提现使用
      </div>
    </div>
  </div>
</template>

<script>
  import getRouter from '../../utils/getOptions'
  export default {
    data () {
      return {
        choseIndex: 0,
        params: {
          cardId: '',
          password: '',
          phoneId: ''
        }
      }
    },
    methods: {
      choseNum (num) {
        this.choseIndex = num
      },
      //清空
      cleanValue () {
        this.params.phoneId = ''
      },
      async cradchongzhi () {
        var data = await this.$net.get('http://api.kuayet.com:8080/crossindustry/userPage/phoneRecharge', this.params)
        if (this.params.cardId!=''&&this.params.password!='') {
          if (data.code == 400) {
            wx.showToast({
              title: data.msg,
              icon: 'none'
            })
          } else {
            wx.showToast({
              title: '充值成功',
              icon: 'none'
            })
          }
        } else {
          wx.showToast({
            title: '请输入正确卡号和密码',
            icon: 'none'
          })
        }
      }
    },
    onShow () {
      this.params.phoneId = getRouter().phonenum
    }
  }
</script>

<style scoped>
.mod1{
  padding-left: 10px;
  padding-right: 10px;
  border-top: 1px solid #F2F2F2;
}
  .mod1 div{
    width: 100%;
    height: 50px;
    background: white;
    position: relative;
  }
  .mod1 div input{
    float: left;
    height: 100%;
    width: 90%;
    line-height: 50px;
    font-size: 34px;
    letter-spacing: 1px;
    color: #393939;
  }
.mod1 div img{
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0px;
  top: 50%;
  margin-top: -10px;
}
  .mod1 p{
    color: #717171;
    font-size: 12px;
    letter-spacing: 1px;
  }
  .mod2{
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 18px;
  }
  .mod2 p{
    color: #393939;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
  }
.btn{
  padding-left: 44px;
  padding-right: 44px;
}
.btn button{
  width: 100%;
  height: 37px;
  line-height: 37px;
  background: #F08400;
  letter-spacing: 1px;
  margin-top: 22px;
  color: white;
  font-size: 18px;
  border-radius: 50px;
}
/*在线充值*/
.mod3{
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 30px;
}
.mod3 p{
  color: #393939;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
}
.inlinecontent,.cardcontent{
  padding-left: 20px;
  padding-right: 20px;
}
.cardcontent{
  margin-top: 15px;
}
.cardcontent ul{
  width: 100%;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.cardcontent ul li{
  width: 50%;
  position: relative;
}
.cardcontent ul li div{
  width: 95%;
  height: 40px;
  position: absolute;
  left: 50%;
  margin-left: -45%;
}
.cardcontent ul li div input{
  width: 100%;
  height: 100%;
  color: #8F8F8F;
  font-size: 14px;
  text-align: center;
  letter-spacing: 1px;
  border: 1px solid #CFCFCF;
  border-radius: 5px;
  background: #F2F2F2;
}
.mod3 ul{
  margin-top: 17px;
  width: 100%;
  height: 150px;
  display: flex;
  flex-flow:wrap;
  justify-content: space-between;
}
.mod3 ul li{
  width: 50%;
  text-align: center;
  position: relative;
}
.mod3 ul li div{
  width: 95%;
  height: 60px;
  position: absolute;
  left: 50%;
  margin-left: -45%;
  top: 0px;
}
.mod3 ul li div .img{
  height: 100%;
  width: 100%;
}
.mod4{
  padding-left: 10px;
  padding-right: 10px;
}
.mod4 div{
  width: 100%;
  height: 24px;
  background: #FDF4E9;
  color: #F08400;
  font-size: 10px;
  letter-spacing: 1px;
  line-height: 24px;
  border-radius: 50px;
  text-align: center;
  margin-top: 32px;
}
  /*.inputcard{*/
    /*display: flex;*/
    /*padding-left: 20px;*/
    /*padding-right: 20px;*/
    /*margin-top: 15px;*/
    /*height: 38px;*/
    /*background: #0bb20c;*/
  /*}*/
  /*.inputcard div{*/
    /*flex: 1;*/
  /*}*/
/*.inputcard div input{*/
  /*background: #CFCFCF;*/
  /*color: #8F8F8F;*/
  /*font-size: 14px;*/
  /*border: 1px solid #CFCFCF;*/
  /*border-radius: 5px;*/
  /*!*letter-spacing: 2px;*!*/
  /*height: 38px;*/
  /*line-height: 38px;*/
  /*position: absolute;*/
  /*text-align: center;*/
/*}*/
</style>
