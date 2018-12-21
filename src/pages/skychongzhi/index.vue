<template>
  <div class="skychongzhi">
    <div class="mod">
      <div><input type="text" v-model="params.phoneId" placeholder="请输入手机号码"></div>
      <div><input type="text" v-model="params.money" placeholder="请输入金额（元）"></div>
      <div><input type="text" v-model="params.days" placeholder="请输入有效期（天）"></div>
      <p>当前可用余额：{{price}}元</p>
      <button type="button" @click="chongzhi">充值</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        params: {
          money: '',
          phoneId: '',
          days: '',
          account: ''
        },
        price: ''
      }
    },
    methods: {
      async skychongzhi (params) {
        var data = await this.$net.get('/crossindustry/userPage/directRecharge', params)
        console.log(JSON.stringify(data))
        if (data.code == 400) {
          wx.showToast({
            title: data.msg,
            icon: 'none',
            duration: 2000
          })
        } else {
          wx.showToast({
            title: '充值成功',
            icon: 'none',
            duration: 2000
          })
        }
      },
      chongzhi () {
        if (this.params.money!=''&&this.params.phoneId!=''&&this.params.days) {
          this.skychongzhi(this.params)
        } else {
          wx.showToast({
            title: '输入有误',
            icon: 'none',
            duration: 2000
          })
        }
      },
      async getUserinfo (token) {
        var params = {userId: token}
        const data = await this.$net.get('/crossindustry/phonePage/getUserInformation', params)
        console.log(JSON.stringify(data))
        this.price = data.user.balance
      }
    },
    onLoad () {
      const token = this.$saveToken.getToken().token
      this.getUserinfo(token)
      this.params.account = wx.getStorageSync('adphone')
    }
  }
</script>

<style scoped>
  .skychongzhi{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    /*position: fixed;*/
    position: absolute;
  }
  .mod{
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 41px;
  }
  .mod div input{
    width: 94%;
    height: 45px;
    background: white;
    border-radius: 50px;
    margin-bottom: 10px;
    letter-spacing: 2px;
    font-size: 16px;
    padding-left: 6%;
  }
  .mod p{
    color: #8F8F8F;
    font-size: 14px;
    /*padding-top: 10px;*/
    padding-left: 20px;
    letter-spacing: 2px;
  }
  button[type=button]{
    color: white;
    letter-spacing: 1px;
    width: 228px;
    height: 37px;
    border-radius: 50px;
    background: #F08400;
    text-align: center;
    font-size: 18px;
    line-height: 37px;
    margin-top: 24px!important;
    margin: 0 auto;
  }
</style>
