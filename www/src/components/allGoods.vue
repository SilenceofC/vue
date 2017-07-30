<template>
  <div class="all">
    <div class="tour">
      <a @click="go(-1)" class="tour1">
        <img :src="img[1].img1" alt=""  id="tour1">
      </a>
      <p>全部商品<i class="xlmenu"></i></p>
      <router-link to="/shopping" class="tour2" id="tour2">
        <img :src="img[2].img2">
      </router-link>
    </div>
    <div class="ycmenu">
      <ul>
        <li>
          <a href="javascript:;" class="a">全部商品</a>
        </li>
      </ul>
    </div>
    <div class="allsp">
      <figure v-for="(item,index) in arr">
        <router-link :to="'/spxq/' + item.id">
          <img :src="item.img" alt="商品" class="xqtp"/>
        </router-link>
        <p>{{item.title}}</p>
        <div class="info">
          <em class="sat">￥{{item.price}}</em>
          <a href="javascript:;"><img :src="img[3].img3" alt="购物车" id="allcart"/></a>
        </div>
      </figure>

      <div style="clear: both"></div>
    </div>
    <div class="empty">
      <span class="em">没有更多了！</span>
    </div>
  </div>

</template>
<style>
  @import "../assets/css/allGoods.css";
</style>
<script>
  import '../assets/js/jquery-1.12.1';
export default{
  data(){
    return {
      arr:[],
      img:[
        {},
        {img1:"src/assets/img/back.png"},
        {img2:"src/assets/img/u65.png"},
        {img3:"src/assets/img/u20.png"}
      ]
    }
  },
  methods:{
    go(n){
      this.$router.go(n);
    }
  },
  mounted(){
    this.$http.get('http://localhost:3000/home/allgoods').then((res)=>{
      this.arr = res.data;
    }).catch((res)=>{
      alert(res.status);
    });
  }
}
</script>