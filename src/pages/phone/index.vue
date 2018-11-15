<template>
  <div>
    <div>
      <button @click="callPhone()">拨打电话</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      callPhone () {
        wx.makePhoneCall({
          phoneNumber: '15189763158',
          success: function () {
            console.log('电话拨打成功')
          },
          fail: function () {
            console.log('电话拨打失败')
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
