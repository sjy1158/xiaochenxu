<template>
    <div>
      <web-view :src="webUrL"></web-view>
    </div>
</template>

<script>
  import getRouter from '../../utils/getOptions'
  export default {
    data () {
      return {
        webUrL: ''
      }
    },
    methods: {
    },
    mounted () {
      var id = getRouter().id;
      this.webUrL = 'https://www.kuayet.com/pc/#/advertisingDetails?id=' + id + '&userId=57246fd6'
      // this.webUrL = this.$getOptions.getRouter()
      // this.getRouter();
    },
    onLoad () {
      var id = getRouter().id;
    }
  }
</script>

<style scoped>

</style>
