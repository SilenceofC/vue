<template>
  <div class="middle">
    <div class="SeckillOne" >
      <div>
        <img v-bind:src="arr.img" alt="">
      </div>
      <div id="CountMsg" class="HotDate"
           :style="{backgroundImage:'url(' + img1 + ')'}">
        <br><a>倒计时</a><br>
        <span class="t_d">天</span><br>
        <span class="t_h">00:</span>
        <span class="t_m">00:</span>
        <span class="t_s">00</span>
      </div>
      <div class="hurry">
        <router-link :to="'/group/'+ arr.id ">
        <!--<router-link to="/group">-->
          <button>立即参团
            <img :src="img2">
          </button>
        </router-link>
      </div>
      <div class="number">
        <p>已抢 <span>{{arr.total}}</span> 份 剩余 <span>{{arr.over}}</span> 份</p>
      </div>
    </div>
    <div class="SeckillTwo" >
      <div>
        <img v-bind:src="brr.img" alt="">
      </div>
      <div  class="HotDate" :style="{backgroundImage:'url(' + img1 + ')'}">
        <br><a>倒计时</a><br>
        <span class="t_d">00天</span><br>
        <span class="t_h">00:</span>
        <span class="t_m">00:</span>
        <span class="t_s">00</span>
      </div>
      <div class="hurry">
        <router-link :to="'/group/'+ brr.id ">
          <button>立即参团
            <img :src="img2">
          </button>
        </router-link>
      </div>
      <div class="number">
        <p>已抢 <span>{{brr.total}}</span> 份 剩余<span>{{brr.over}}</span>份</p>
      </div>
    </div>
  </div>
</template>

<style>
  @import "../assets/css/style.css";
</style>
<script>
  import '../assets/js/jquery-1.12.1';
  import '../assets/js/jquery-1.7.1.min';
  export default{
    data(){
      return {
        img1:'src/assets/img/daojishi.png',
        img2:'src/assets/img/jian.png',
        arr:[],
        brr:[]
      }
    },


//    filters:{
//      day:function(input){
//      function get(){
//        let endTime=new Date();
//        endTime.setTime(input*1000+10000000000);
//        console.log(endTime);
//        let nowTime = new Date();
//        var month = endTime.getMonth() - nowTime.getMonth();
//        var day = endTime.getDate() - nowTime.getDate();
//        var hours = endTime.getHours() - nowTime.getHours();
//        var minutes = endTime.getMinutes() - nowTime.getMinutes();
//        var seconds = endTime.getSeconds() - nowTime.getSeconds();
//        return month*30 + day;
//      }
//      }
//      setInterval(get,1000);
//    },
//


    mounted(){
      this.$http.get('http://localhost:3000/home/index_middle').then((res)=>{
        this.arr = res.data[0];
        this.brr = res.data[1];
      }).catch((res)=>{
        alert(res.status);
      });
      function getRTime(){
        var EndTime= new Date('2017/7/23 10:00:00'); //截止时间
        var NowTime = new Date();
        var t =EndTime.getTime() - NowTime.getTime();
        var d=Math.floor(t/1000/60/60/24);
        t-=d*(1000*60*60*24);
        var h=Math.floor(t/1000/60/60);
        t-=h*60*60*1000;
        var m=Math.floor(t/1000/60);
        t-=m*60*1000;
        var s=Math.floor(t/1000);

        function fnW(str){
          var num;
          str>9?num=str:num="0"+str;
          return num;
        }
        $(".t_d").html(d + "天");
        $(".t_h").html(h + ":");
        $(".t_m").html(fnW(m) + ":");
        $(".t_s").html(fnW(s)+ "");
      }
      setInterval(getRTime,1000);
    }
  }



</script>

