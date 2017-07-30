<template>
<div class="succ">
  <div class="body">
    <div class="tour">
      <a @click="go(-1)" class="tour1">
        <img :src="img[1].img1" style="height: 26px;width: 20px">
      </a>
      <p>支付成功</p>
    </div>
    <div class="header3">
      <div class="succeed">
        <li>
          <img :src="img[2].img2" alt="支付成功" style="width: 80px;margin-left:90px;"/>
          <p>支付成功!</p>
        </li>
      </div>
    </div>
    <div :style="yang"></div>
  </div>
  <div class="spmc">
    <p>商品名称：一生一客</p>
  </div>
  <div class="spmc">
    <p>订单金额：{{price}}</p>
  </div>
  <div class="ewm">
    <ul>
      <li class="li1">消费码：{{code}}</li>
      <li class="li2">
        <a href="javascript:;" class="tcewm" @click="big">
          <img class="tcewm" :src="img[3].img3" alt="二维码" style="width: 40px;height: 40px" @click="big"/>
        </a>
      </li>
    </ul>
  </div>
  <div class="ckdd">
    <div style="width:11rem;margin:0 auto">
      <a href="javascript:;">
        <button type="button">查看订单</button>
      </a>
    </div>
  </div>
  <div class="wxts">
    <div class="neirong">
      <p style="color: #ff0000">!温馨提示</p>
      <p>{{msg1}}</p>
      <p>{{msg2}}</p>
    </div>
  </div>
  <div class="kefu">
    <p>{{msg3}}</p>
    <p style="color: green">400-666-4022</p>
    <div class="zshlogo">
    </div>
    <div class="dewm">
      <div>
        <img :src="img[3].img3" alt="消费二维码" style="margin: 0 auto;">
      </div>
    </div>
    <div class="theme-popover-mask"></div>
  </div>
</div>
</template>
<style>
  @import "../assets/css/successful.css";
</style>
<script>
  import '../assets/js/jquery-1.12.1';
export default{
data(){
  return{
    msg1:'1. 商家发货后7天，平台会自动确认收货，若7天后未收到您购买的商品，请及时联系宅生活平台客服。',
    msg2:'2. 由于网络延迟会出现订单已支付成功，但返回查看订单为“待支付”状态，此种情况无需再次支付，请您耐心等待几分钟，平台会自动更新数据到“已支付“状态。',
    msg3:'如有其他问题请拨打客服电话',
      yang:[{width: '100%'},{height: '2rem'},{borderBottom: '1px solid #000000'}],
    img:[
      {},
      {img1:'src/assets/img/back.png'},
      {img2:'src/assets/img/zhifu.jpg'},
      {img3:'src/assets/img/erweima.jpg'}
    ],
    price:0,
    code:''
  }
},
  methods:{
    go(n){
      this.$router.go(n)
    },
    big(){
      $(".dewm").slideDown();
    }
  },
  mounted(){
      $(document).bind("click",function(e){
        var target  = $(e.target);
        if(target.closest(".dewm,.tcewm").length == 0){/*.closest()沿 DOM 树向上遍历，直到找到已应用选择器的一个匹配为止，返回包含零个或一个元素的 jQuery 对象。*/
          $(".dewm").slideUp();
        };
        e.stopPropagation();
      });
    this.price=this.$root.$data.total;
//随机生成消费码
    for(let i = 0; i < 12;i ++){
      this.code += Math.ceil(Math.random()*10);
    }
  },

}
</script>