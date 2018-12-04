<template>
  <section class="tabBar-wrap">
    <article class="tabBar-box">
      <ul class="tabBar-nav">
        <li>
          电商购
        </li>
        <li>
          附近商家
        </li>
        <li>
          电话
        </li>
        <li>
          发现
        </li>
        <li>
          我的
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
    }
  }
</script>

<style scoped>
  .tabBar-wrap{
    height: 50px;
    font-size: 12px;
    width: 100%;
    line-height: 50px;
    background: #9b9b9b;
    position: fixed;
    bottom: 0px;
    left: 0px;
  }
  .tabBar-nav{
    height: 100%;
    width: 100%;
    display: flex;
  }
  .tabBar-nav li{
    flex: 1;
  }
</style>
