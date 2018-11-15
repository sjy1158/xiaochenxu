<template>
  <div class="xinxi">
    <div class="mod1">
      <div class="form">
        <div>
          <label>开始时间</label>
          <picker mode="date" v-model="startDate" :start="pickerStart" end="2217-09-01" @change="bindDateChangeStart($event)">
            <input type="text" value="2018-05-25" disabled=disabled placeholder="手机号／昵称">
          </picker>
        </div>
        <div style="border: none">
          <label>结束时间</label>
          <picker mode="date" v-model="startDate" :start="pickerStart" end="2217-09-01" @change="bindDateChangeStart($event)">
            <input type="text" value="2018-05-25" disabled=disabled placeholder="手机号／昵称">
          </picker>
        </div>
      </div>
    </div>

    <div class="mod2">
      <button type="button">快速查询</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        startDate: '2018-05-9',
        endDate: '2018-02-21',
        pickerStart: '2018-05-6'
      }
    },
    mounted () {
      // 设置时间
      let today = this.getToday()
      this.startDate = today
      this.endDate = today
      this.pickerStart = today
    },
    methods: {
      getToday () {
        let myDate = new Date()
        let myMonth = myDate.getMonth() + 1
        if (myMonth < 10) {
          myMonth = '0' + myMonth  //补齐
        }
        let mydate = myDate.getDate()
        if (myDate.getDate() < 10) {
          mydate = '0' + myDate.getDate()  //补齐
        }
        let today = myDate.getFullYear() + '-' + myMonth + '-' + mydate
        return today
      }
    }
  }
</script>

<style scoped>
  .xinxi{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    /*position: fixed;*/
    position: absolute;
  }
  .mod1{
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 10px;
  }
  .form{
    width: 100%;
    height: auto;
    background: white;
    border-radius: 20px;
  }
  .form div{
    height: 49px;
    width: 100%;
    line-height: 49px;
    border-bottom: 1px solid #F2F2F2;
  }
  .form div label{
    vertical-align: middle;
    padding-left: 20px;
    color: #393939;
    font-size: 14px;
    letter-spacing: 1px;
    float: left;
  }
  .form div input{
    width: 4rem;
    height: 49px;
    vertical-align: middle;
    color: #8F8F8F;
    font-size: 14px;
    letter-spacing: 1px;
    padding-left: 20px;
  }
  .mod2{
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 25px;
  }
  .mod2 button{
    width: 100%;
    height: 33px;
    line-height: 33px;
    background: #F08400;
    color: white;
    font-size: 16px;
    letter-spacing: 1px;
    border-radius: 20px;
  }
</style>
