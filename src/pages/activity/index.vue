<template>
  <div>
    <div class="mod">
      <div class="title">
        梦想不死，彩旗不止，全国地面推广接力活动会-4月25日济南站
      </div>

      <div class="time"><img src="/static/images/servicetime.png" alt=""><span>星期五 2018-05-25 13:44:54</span></div>

      <div class="text">
        <p>银杏叶状的家风牌、酒缸制成的花盆……近日，走进分水镇朝阳村，充满创意与乡村风情的庭院设计，令人眼前一亮。</p>
         <p> 今年来，分水镇以美丽庭院建设为抓手，注重产业、文化、文明、创意四个结合，做好 “美丽庭院+”文章。</p>
          <p>在点位选择上，分水镇围绕产业项目和助力村经济发展，坚持“小庭院大推动，小投入大见效”，把农户庭院变成创意的景区。计划通过美丽庭院创建，建成小源村松田、外范村大湾里、朝阳村竹桐坞等民宿示范点，为全镇美丽庭院打造样本与标杆。</p>
        <img src="https://goss.veer.com/creative/vcg/veer/800water/veer-158305631.jpg" alt="">
        <p style="margin-top: 20px;">在环境改造中，该镇积极将“家庭”文化元素融入庭院建设，把家风家训、家庭和睦文化与“美丽庭院”创建有机结合起来，同时进一步挖掘培育“竹文化”“农耕文化”等，让庭院别有一番韵味。</p>
      </div>
    </div>
  </div>
</template>

<script>
  import getRouter from '../../utils/getOptions'
  export default {
    data () {
      return {
        params: {
          type: '',
          id: ''
        },
        dataobj: {}
      }
    },
    methods: {
      async getActive (params) {
        var data = await this.$net.get('/crossindustry/findPage/FindActivityDetalis', params)
        console.log(data)
        data.activityNotice.time = this.changeTime(data.activityNotice.time)
        data.activityNotice.detalis = JSON.parse(data.activityNotice.detalis)
        this.dataobj = data.activityNotice;
      },
      changeTime (time){
        var weekarry = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
        var time = new Date(time);
        var month = time.getMonth()+1;
        month = month<10?"0"+month:month;
        var hours = time.getHours()<10?"0"+time.getHours():time.getHours();
        var minues = time.getMinutes()<10?"0"+time.getMinutes():time.getMinutes();
        var second = time.getSeconds()<10?"0"+time.getSeconds():time.getSeconds();
        // 星期五 2018-05-25 13:44:54
        //   var date = weekarry[time.getDay()]+time.getFullYear()+'-'+month+'-'+time.getDate()+hours+":"+minues+":"+second;
        this.str = "<span>"+weekarry[time.getDay()]+'&nbsp;'+time.getFullYear()+'-'+month+'-'+time.getDate()+"&nbsp;"+hours+":"+minues+":"+second+"</span>"
        // return date;
      }
    },
    onLoad () {
      this.params.type = getRouter().type
      this.params.id = getRouter().id
      this.getActive(this.params)
      // this.getActive()
    }
  }
</script>

<style scoped>
  .mod{
    margin-top: 15px;
    padding-left: 16px;
    padding-right: 16px;
  }
  .mod .title{
    text-align: left;
    letter-spacing: 1px;
    color: #393939;
    font-size: 20px;
    font-weight: bold;
  }
  .time img{
    width: 12px;
    height: 12px;
    vertical-align: middle;
  }
  .time span{
    color: #393939;
    font-size: 12px;
    vertical-align: middle;
    padding-left: 5px;
  }
  .text{
    margin-top: 20px;
    padding-bottom: 38px;
  }
  .text p{
    text-indent: 2em;
    font-size: 14px;
    color: #393939;
    letter-spacing: 1px;
    padding-bottom: 3px;
  }
  .text img{
    height: 255px;
    width: 100%;
    margin-top: 20px;
  }
</style>
