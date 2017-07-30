<template>
  <div class="body spxq">
    <div class="tour">
      <a @click="go(-1)" class="tour1">
        <img :src="img[1].img1" alt="" id="tour1">
      </a>
      <p>商品详情</p>
      <a href="javascript:;" class="tour2">
        <img :src="img[2].img2" alt=""  id="tour2">
      </a>
    </div>
    <figure>
      <div class="addWrap">
        <div class="swipe" id="mySwipe">
          <div class="swipe-wrap">
            <div>
              <a href="javascript:;">
                <img class="img-responsive" v-bind:src="'/'+ arr.img"/>
              </a>
            </div>
            <div>
              <a href="javascript:;">
                <img class="img-responsive" v-bind:src="'/'+ arr.img"/>
              </a>
            </div>
            <div>
              <a href="javascript:;">
                <img class="img-responsive" v-bind:src="'/'+ arr.img"/>
              </a>
            </div>
          </div>
        </div>
        <ul id="position">
          <li class="cur"></li>
          <li class=""></li>
          <li class=""></li>
        </ul>
      </div>
      <p>{{arr.title}}</p>
      <div class="info">
        <em class="sat">￥{{arr.price}}</em>
        <router-link to="/shopping">
          <button type="button" class="btn" @click="goods">加入购物车</button></router-link>
      </div>
    </figure>
    <hr/>
    <div class="sjxx top">
      <p>口感<span>{{arr.taste1}}</span></p>
      <p>口味<span>{{arr.tast2}}</span></p>
      <p>口味基底<span>{{arr.tase3}}</span></p>
      <p>甜味<span>{{arr.sweet}}</span></p>
    </div>
    <hr/>
    <div class="sj">
      <p class="eng">{{msg}}</p>
      <p class="ch">
        {{msg2}}
      </p>
    </div>


  </div>
</template>
<style>
  @import "../assets/css/spxq.css";
  @import "../assets/css/swipe.css";
</style>
<script>
  import '../assets/js/jquery-1.12.1';
  import '../assets/js/swipe';
  import {mapActions,mapGetters} from 'vuex';
export default{
  data(){
    return{
      msg:"une forme de fromage français plus légère, un goût doux et moelleux du lait,dès le moment dans la bouche, comme se baigner dans les nuages.",
      msg2: "赋予法国芝士更加轻盈的形态，绵软的口感搭配醇正的奶香，入口的一刹那，仿佛徜徉在云间。",
      arr:[],
      img:[{},
        {img1:"/src/assets/img/back.png"},
        {img2:"/src/assets/img/u65.png"}
      ]
    }
  },
  methods:{
    go(n){
      this.$router.go(n);
    },
    goods(){
      this.$root.$data.id = this.arr.id;
      this.$root.$data.title = this.arr.title;
      this.$root.$data.price = this.arr.price;
      this.$root.$data.image = this.arr.img;
    },
  },
  mounted(){
    this.$http.get('http://localhost:3000/home/spxq').then((res)=>{
      this.arr = res.data[this.$route.params.aid-1];
    }).catch((res)=>{
      alert(res.status);
    });
    //轮播图
    var bullets = document.getElementById('position').getElementsByTagName('li');
    var banner = Swipe(document.getElementById('mySwipe'), {
      auto: 3000,
      continuous: true,
      disableScroll:false,
      callback: function(pos) {
        var i = bullets.length;
        while (i--) {
          bullets[i].className = ' ';
        }
        bullets[pos].className = 'cur';
      }
    });
  }
}

</script>