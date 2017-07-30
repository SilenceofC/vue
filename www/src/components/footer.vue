<template>
<div >
  <ul class="footer_aa" >
    <li class="nav_index" :style="{backgroundImage:'url(' + img1 + ')'}" >
      <router-link to="/home" >首页</router-link>
    </li>
    <li class="nav_me" :style="{backgroundImage:'url(' + img1 + ')'}">
      <router-link to="/login" >用户</router-link>
    </li>
    <li class="nav_shop"  :style="{backgroundImage:'url(' + img1 + ')'}">
      <router-link to="shopping">购物车</router-link>
    </li>
  </ul>
</div>
</template>
<style>
  @import '../assets/css/footer.css';
</style>
<script>
  export default{
    data(){
      return{
        img1:'src/assets/img/opcity.png',
      }
    }
  }
</script>