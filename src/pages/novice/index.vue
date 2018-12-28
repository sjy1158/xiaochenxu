<template>
  <div class="novice">
    <div class="mod1" v-for="item in imgList" @click="addNovice(item.imageIcon)">
      <div>
        <image lazy-load="true" :src="item.imageUrl" class="img srtImg"></image>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        imgList: []
      }
    },
    methods: {
      async getImagelist () {
        var data = await this.$net.get('/crossindustry/userPage/getNewStratege', {})
        console.log(JSON.stringify(data))
        this.imgList = data.list
      },
      addNovice (image) {
        wx.previewImage({
          current: image,
          urls: [image]
        })
      }
    },
    onLoad () {
      this.getImagelist()
    }
  }
</script>

<style scoped>
  .novice{
    width: 100%;
    height: 100%;
    /*background-color: #F2F2F2;*/
    /*position: fixed;*/
    position: absolute;
  }
  .mod1,.mod2,.mod3{
    /*padding:10px;*/
  }
  .mod2,.mod3{
    padding-top: 0px!important;
  }
  .mod1 div{
    width: 100%;
    height: 95px;
    /*background: #A444FD;*/
    border-radius: 5px;
  }
  .mod2 div{
    width: 100%;
    height: 95px;
    /*background: #30CC79;*/
    border-radius: 5px;
  }
  .mod3 div{
    width: 100%;
    height: 95px;
    /*background: #FD6B44;*/
    border-radius: 5px;
  }
  .img{
    height: 100%;
    width: 100%;
  }
  .srtImg{
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    opacity: 0;
    animation: fadeIn 1s forwards 1s;
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
