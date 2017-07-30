<template>
<div class="index">
  <div class="container">
    <div class="store">
      <ul>
        <li class="li1"><a href="#">商品</a></li>
        <li class="li2">
          <a href="javascript:;" class="xlmenu" @click="dropdown">全部&nbsp;
            <img :src='img1' id="jian" ></a>&nbsp;共
          <span :style="style">40</span>件
        </li>
      </ul>
      <div class="ycmenu">
        <ul>
          <li><router-link to="/allGoods">>全部商品</router-link></li>
          <li><router-link to="/mydg">奶油蛋糕</router-link></li>
          <li><router-link to="/mydg">水果蛋糕</router-link></li>
          <li><router-link to="/mydg">慕斯蛋糕</router-link></li>
          <li><router-link to="/mydg">冰淇淋蛋糕</router-link></li>
          <li><router-link to="/mydg">芝士蛋糕</router-link></li>
          <li><router-link to="/mydg">翻堂蛋糕</router-link></li>
        </ul>
      </div>
    </div>
    <div class="clear"></div>
    <div class="border">
    </div>
    <div class="allsp">
      <figure v-for="(item,index) in arr">
        <router-link :to="'/spxq/' + item.id">
          <img :src="item.img" alt="商品"/>
        </router-link>
        <p>{{item.title}}</p>
        <div class="info">
          <em class="sat">￥{{item.price}}&nbsp;<small>￥{{item.discount}}</small></em>
          <img :src="adress" alt="购物车" id="cart"/>
        </div>
      </figure>
      <div class="clear"></div>
    </div>
  </div>
  <footer>
    <div class="footer">
      <p>没有更多了</p>
    </div>
  </footer>
  <div class="actGotop" @click="top">
    <a href="javascript:;" title="返回顶部"></a>
    <img :src="img2" alt="">
  </div>
  <div class="theme-popover-mask" @click="dissolve"></div>
</div>
</template>
<style>
  @import "../assets/css/Up.css";
  @import "../assets/css/style.css";
</style>
<script>
  import '../assets/js/jquery-1.12.1';
export default{

  data(){
    return {
      img1:"src/assets/img/donw.png",
      img2:"src/assets/img/fanhui.png",
      adress:"src/assets/img/u20.png",
      arr:[],
      style:[{color: '#e4393c'},{fontSize: '1.8rem'}]

    }
  },
  methods:{
    top(){
      $('html,body').animate({scrollTop: '0px'}, 300);
    },
    dropdown(){
      $(".ycmenu").slideDown();
      $(".theme-popover-mask").show();
    },
    dissolve(){
      $(".ycmenu").slideUp();
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
    this.$http.get('http://localhost:3000/home/index_bottom').then((res)=>{
      this.arr = res.data;
    }).catch((res)=>{
      alert(res.status);
    });
  }
}
</script>
