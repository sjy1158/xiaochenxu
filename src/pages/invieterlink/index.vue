<template>
  <div>
    <web-view :src="src"></web-view>
  </div>
</template>

<script>
  import getRouter from '../../utils/getOptions'
  export default {
    data () {
      return {
        src: ''
      }
    },
    methods: {},
    onLoad () {
      this.src = getRouter().src
    }
  }
</script>

<style scoped>

</style>
