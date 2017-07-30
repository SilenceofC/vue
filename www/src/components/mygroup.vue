<template>
<div class="mygroup">
  <div class="up">
    <a @click="go(-1)"><img :src="img[1].img1" alt="返回上一层"></a>
  </div>
  <div class="share">
    <a href="javascript:;"><img :src="img[2].img2" alt="分享"></a>
  </div>
  <div class="container">
    <figure v-for="(item,index) in arr">
      <img :src="item.img" alt="商品" class="have"/>
      <div class="info">
        <p class="p_specialty">【{{item.title1}}】{{item.title2}}
        </p>
        <p class="p_count">数量:{{item.number}}&nbsp;&nbsp;&nbsp;已支付：￥{{item.price}}</p>
      </div>
      <div class="payon" :style="{backgroundImage:'url(' + img[7].img7 + ')'}">
        <p class="p_payon">已支付</p>
      </div>
    </figure>
    <figure>
      <img :src="brr.img" alt="商品" class="null" @click="cancel"/>
      <div class="info">
        <p class="p_specialty">【{{brr.title1}}】{{brr.title2}}
        </p>
        <p class="p_count">数量:{{brr.number}}&nbsp;&nbsp;&nbsp;已支付：￥{{brr.price}}</p>
      </div>
      <div class="payoff" :style="{backgroundImage:'url(' + img[8].img8 + ')'}">
        <p class="p_payoff">已取消</p>
      </div>
    </figure>
  </div>
  <footer class="ff">
    <div class="footer">
      <p>没有更多了</p>
    </div>
  </footer>
  <div class="actGotop" @click="top">
    <a href="javascript:;" title="返回顶部" ></a>
    <img :src="img[3].img3" alt="">
  </div>
  <div class="cancel" @click="sure">
    <div class="alert">
      <a href="#">
        <img :src="img[4].img4" alt="" class="img1"
        ></a>
      <div  class="text">
        <p class="over">此次活动已结束</p>
        <p class="next">期待下次吧！</p>
      </div>
      <a href="#">
        <img :src="img[5].img5" alt="" class="img2">
      </a>
      <a href="#" class="btn">
        <img :src="img[6].img6" alt="" class="img3">
      </a>
    </div>
  </div>
  <div class="theme-popover-mask"></div>
</div>
</template>
<style scoped>
@import "../assets/css/Mgroup.css";
@import "../assets/css/Up.css";
</style>
<script>
  import '../assets/js/jquery-1.12.1';
  export default{
    data(){
      return{
        arr:[],
        img:[
          {},
          {img1:"src/assets/img/up.png" },
          {img2:"src/assets/img/share.png"},
          {img3:"src/assets/img/fanhui.png"},
          {img4:"src/assets/img/xq.jpg"},
          {img5:"src/assets/img/final.png"},
          {img6:"src/assets/img/X.png"},
          {img7:"src/assets/img/payon.png"},
          {img8:"src/assets/img/payoff.png"}
        ],
        brr:[]
      }
    },
    methods:{
      go(n){
        this.$router.go(n);
      },
      top(){
        $('html,body').animate({scrollTop: '0px'}, 300);
      },
      cancel(){
        $(".cancel").show();
        $(".theme-popover-mask").show();
      },
      sure(){
        $(".cancel").hide();
        $(".theme-popover-mask").hide();
      }
    },
    mounted(){
      $(window).scroll(function() {
        if($(window).scrollTop() >= 200){
          $('.actGotop').fadeIn(300);
        }else{
          $('.actGotop').fadeOut(300);
        }
      });
      this.$http.get('http://localhost:3000/home/mygroup').then((res)=>{
        this.arr = res.data;
        this.brr = this.arr[1];
        console.log(this.brr);
      }).catch((res)=>{
        alert(res.status);
      });
    }
  }
</script>

