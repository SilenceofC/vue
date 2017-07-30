<template>
<div class="group">
  <div class="up">
    <a @click="go(-1)">
    <img :src='img[3].img3' alt="返回上一层">
      </a>
  </div>
  <div class="container">
    <header>
      <div class="turn">
        <ul class="turn-pic">
          <img v-bind:src="'/'+ arr.img" title="" alt="" />
        </ul>
      </div>
    </header>
    <section>
      <div class="t_container">
        <p class="p_service"><img :src="img[2].img2" alt="" id="group_shop">&nbsp;货品由<span>{{arr.area}}</span>提供，并提供售后服务!</p>
        <p class="p_detail">【{{arr.font}}】{{arr.font2}}</p>
        <div class="bg_hg" :style="{backgroundImage:'url(' + img[1].img1 + ')'}">
          <p class="new"><span>团购价</span>￥{{arr.dissolve}}</p>
          <p class="old">原价￥{{arr.price}}</p>
        </div>
        <p class="p_count">已团：{{arr.total}}份&nbsp;&nbsp;剩余{{arr.over}}份</p>
        <p class="p_time"><span>时间：</span>{{arr.date1}}&nbsp;-&nbsp;{{arr.date2}}</p>
      </div>
    </section>
  </div>
  <div class="cancel" >
    <div class="alert">
      <a href="#"><img :src="img[4].img4" alt="" class="img1"></a>
      <div  class="text">
        <p class="G500">预售商品，请耐心等待</p>
        <hr>
        <table>
          <tr>
            <td class="same">单价</td>
            <td class="one">￥{{arr.dissolve}}</td>
          </tr>
          <tr>
            <td class="same">数量</td>
            <td class="many">
              <a class="reduce" id="reduce" @click="reduce">-</a>
              <input type="text" value="1" class="num" disabled="disabled"/>
              <a class="plus" id="plus" @click="plus">+</a>
            </td>
          </tr>
          <tr>
            <td class="same">合计</td>
            <td class="red" id="red"></td>
          </tr>
        </table>
      </div>
      <div class="WeChat">
        <p><a href="#" id="apply" @click="apply"><i></i> 微信支付</a></p>
      </div>
      <div class="t_warn">
        <p><i></i> 支付成功后不能取消，若参团人数不足时，活动有可能被取消；取消后，支付金额将会退款至账户余额里；</p>
      </div>
      <a href="#" class="btn" @click="cancel"><img :src="img[5].img5" alt="" class="img3"></a>
    </div>
  </div>
  <div class="false">
    <img :src="img[6].img6" alt="">
    <p>支付失败!</p>
  </div>
  <div class="theme-popover-mask"></div>
  <div class="indexd">
    <span>
      <router-link to="/home"><img :src="img[7].img7" alt="" style="max-width: 20px;display: block">首页
        </router-link>
    </span>
  </div>
  <div class="footer_bg">
    <img :src="img[8].img8" alt="">
    <div class="button">
      <a class="Apply" @click="goon">立即报名</a>
    </div>
  </div>
</div>
</template>
<style>
  @import "../assets/css/Group.css";
</style>
<script>
  import '../assets/js/jquery-1.12.1';
  export default{
    data(){
      return{
         img:[
                {},
              {img1:'/src/assets/img/hg.png'},
              {img2:'/src/assets/img/shangjia.png'},
              {img3:"/src/assets/img/up.png"},
              {img4:'/src/assets/img/xq.jpg'},
              {img5:'/src/assets/img/X.png'},
              {img6:"/src/assets/img/false.png"},
              {img7:"/src/assets/img/6.png"},
              {img8:"/src/assets/img/color.png"}
              ],
        arr:[],
      }
    },
    methods:{
      go(n){
        this.$router.go(n);
      },
      goon(){
        $(".cancel").show();
        $(".theme-popover-mask").show();
      },
      cancel(){
          $(".cancel").hide();
          $(".theme-popover-mask").hide();
      },
      apply(){
        $(".cancel").hide();
        $(".theme-popover-mask").hide();
        $('.false').show().delay(3000).hide(0);
      },
      reduce(){
        if (parseInt($(".num").val()) > 1) {
          $(".num").val(parseInt($(".num").val()) - 1);
          this.setTotal();
        }
      },
      plus(){
        $(".num").val(parseInt($(".num").val()) + 1);
        if (parseInt($('.num').val()) != 1) {
          $('#reduce').attr('disabled', false);
        }
        this.setTotal();
      },
      setTotal(){

          $("#red").html("<a style='color: red'>￥</a>"+(parseInt($(".num").val()) *99).toFixed(2));

      }
    },
    mounted(){
      this.$http.get('http://localhost:3000/home/block').then((res)=>{
        this.arr = res.data[this.$route.params.aid-1];
      }).catch((res)=>{
        alert(res.status);
      })
    }
  }
</script>
