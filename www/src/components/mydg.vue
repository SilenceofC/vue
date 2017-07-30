<template>
<div class="mydg">
  <div class="body">
    <div class="tour">
      <a @click="go(-1)" class="tour1"><img :src="img[1].img1" alt="" style="height: 26px;width: 20px"></a>
      <p>奶油蛋糕<i class="xlmenu"></i></p>
      <a href="javascript:;" class="tour2"><img :src="img[2].img2" alt="" style="width: 35px;height: 35px"></a>
    </div>
    <div class="ycmenu">
      <ul>
        <li><a href="javascript:;" class="a">全部商品</a></li>
        <li><a href="javascript:;">奶油蛋糕</a></li>
        <li><a href="javascript:;">奶油蛋糕</a></li>
        <li><a href="javascript:;">奶油蛋糕</a></li>
        <li><a href="javascript:;">奶油蛋糕</a></li>
        <li><a href="javascript:;">奶油蛋糕</a></li>
        <li><a href="javascript:;">奶油蛋糕</a></li>
      </ul>
    </div>
    <div class="allsp">
      <figure v-for="(item,index) in arr">
        <img :src="item.img" alt="商品" class="xqtp"/>
        <p>{{item.title}}</p>
        <div class="info">
          <em class="sat">￥{{item.price}}</em>
          <img :src="img[3].img3" alt="购物车" style="width: 38px;height: 35px" align="right"/>
        </div>
      </figure>
      <div style="clear: both"></div>
    </div>
    <div class="zshlogo">
      <p style="color: #b2b2b2">由XXX提供技术支持</p>
    </div>
  </div>
  <div class="actGotop">
    <a href="javascript:;" title="返回顶部"></a>
    <img :src="img[4].img4" alt=""></div>
  <div class="theme-popover-mask"></div>
</div>
</template>
<style>
@import "../assets/css/nydg.css";
@import "../assets/css/Up.css";
</style>
<script>
  import '../assets/js/jquery-1.12.1';
  export default{
    data(){
      return {
        arr: [],
        img:[
          {},
          {img1:"src/assets/img/back.png"},
          {img2:"src/assets/img/u65.png"},
          {img3:"src/assets/img/u20.png"},
          {img4:"src/assets/img/fanhui.png"}
        ]
      }
    },
    methods: {
      go(n){
        this.$router.go(n);
      }
    },
    mounted(){
      this.$http.get('http://localhost:3000/home/mydg').then((res) => {
        this.arr = res.data;
        console.log(this.arr);
      }).catch((res) => {
        alert(res.status);
      });
      $(function () {
        $(".xlmenu").click(function () {
          $(".ycmenu").slideDown();
          $(".theme-popover-mask").show();
        });
        $(".theme-popover-mask").click(function () {
          $(".ycmenu").slideUp();
          $(".theme-popover-mask").hide();
        });
      });
    }
  }
</script>




