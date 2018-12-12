<template>
  <div class="changename">
    <div class="mod2">
      <div class="name"><label>昵称：</label><input type="text" v-model="params.nickName"><span>修改</span></div>
    </div>

    <div class="mod3">
      <button type="button" @click="changeName">确认修改</button>
    </div>
  </div>
</template>

<script>
  import getRouter from '../../utils/getOptions'
  export default {
    data () {
      return {
        params: {
          nickName: '',
          userId: ''
        }
      }
    },
    methods: {
      async changeName () {
        if (this.params.nickName != '') {
          const data = await this.$net.get('http://api.kuayet.com:8080/crossindustry/userPage/changeUserNickName', this.params)
          if (data.code == 400) {
            wx.showToast({
              title: data.msg,
              icon: 'none',
              duration: 2000
            })
          } else {
            wx.showToast({
              title: '修改成功',
              icon: 'none',
              duration: 2000,
              success: function (res) {
                setTimeout(function () {
                  let pages = getCurrentPages()
                  let prevPage = pages[pages.length - 2]
                  prevPage.onLoad()
                  wx.navigateBack({
                    delta: 1
                  })
                }, 2000)
              }
            })
          }
        } else {
          wx.showToast({
            title: '请输入修改的用户名',
            icon: 'none',
            duration: 2000
          })
        }
      }
    },
    onLoad () {
      const data = this.$saveToken.getToken()
      this.params.userId = data.token
      this.params.nickName = getRouter().name
    }
  }
</script>

<style scoped>
  .changename{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    /*position: fixed;*/
    position: absolute;
  }
  .name{
    height: 50px;
    width: 100%;
    background: white;
    line-height: 50px;
    border-top: 1px solid #F2F2F2;
  }
  .mod2 div label{
    float: left;
    color: #393939;
    font-size: 14px;
    padding-left: 15px;
    vertical-align: middle;
  }
  .mod2 div input{
    width: 3rem;
    height: 50px;
    float: left;
    color: #8F8F8F;
    font-size: 14px;
    padding-left: 14px;
    vertical-align: middle;
  }
  .mod2 div span{
    vertical-align: middle;
    float: right;
    padding-right: 29px;
    color:#8F8F8F;
    font-size: 14px;
  }

  .mod3{
    padding-left: 24px;
    padding-right: 24px;
  }
  .mod3 button{
    height: 33px;
    width: 100%;
    background: #F08400;
    border-radius: 30px;
    line-height: 33px;
    font-size: 16px;
    color: white;
    margin-top: 31px;
  }
</style>
