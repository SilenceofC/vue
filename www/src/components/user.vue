<template>
<div class="user">
  <div class="top">
    <img class="photo" :src="img">
    <span class="number">欢迎您,{{get}}</span>
  </div>
  <ul class="mesge">
    <li>
      <router-link to="/home">返回首页</router-link>
    </li>
    <li>
      <router-link to="/mygroup">我的团购</router-link>
    </li>
    <li>
      <router-link to="/spdd">我的订单</router-link>
    </li>
    <li>系统通知</li>
    <li>会员卡</li>
    <li>优惠卷</li>
    <li>积分</li>
    <li>联系我们</li>
  </ul>
</div>
</template>
<style>
 @import "../assets/css/user.css";
</style>
<script>
  export default{
    data(){
      return{
        img:'/src/assets/img/icon2.jpg',
        msg:'',
        count:0
      }
    },
    computed:{
      get(){
        this.msg = location.href;
        for(var i = 0; i < this.msg.length;i ++){
          if(this.msg.charAt(i) == '/'){
            this.count = i;
          }
        }
        return this.msg.substring(this.count+1);
      }
    }
  }
</script>
