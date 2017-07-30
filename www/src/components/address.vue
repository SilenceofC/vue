<template>
<div class="address">
  <header data-am-widget="header" class="am-header am-header-default header">
    <div class="am-header-left am-header-nav">
      <a @click="go(-1)">
        <i class="am-header-icon am-icon-angle-left"></i>
      </a>
    </div>
    <h1 class="am-header-title"> <a href="#title-link" class="" style="color: #333;">收货地址</a></h1>
    <div class="am-header-right am-header-nav">
      <a href="#right-link" class=""> </a>
    </div>
  </header>
  <ul class="address-list">
    <li class="curr">
      <p>收货人：安女士&nbsp;&nbsp;153********</p>
      <p class="order-add1">收货地址：河北省廊坊市 青云谱区解放西路258号河北省廊坊市 青云谱区解放西路258号</p>
      <hr>
      <div class="address-cz">
        <label class="am-radio am-warning">
          <input type="radio" name="radio3" value="" data-am-ucheck="" checked="" class="am-ucheck-radio"><span class="am-ucheck-icons"><i class="am-icon-unchecked"></i><i class="am-icon-checked"></i></span> 设为默认
        </label>
        <a href=""><img src="src/assets/img/bj.png" style="width: 18px;">&nbsp;编辑</a>
        <a href="">删除</a>
      </div>
    </li>
    <li>
      <p>收货人：安女士&nbsp;&nbsp;182********</p>
      <p class="order-add1">收货地址：河北省廊坊市 青云谱区解放西路258号河北省廊坊市 青云谱区解放西路258号</p>
      <hr>
      <div class="address-cz">
        <label class="am-radio am-warning">
          <input type="radio" name="radio3" value="" data-am-ucheck="" class="am-ucheck-radio"><span class="am-ucheck-icons"><i class="am-icon-unchecked"></i><i class="am-icon-checked"></i></span> 设为默认
        </label>
        <a href=""><img src="src/assets/img/bj.png" style="width: 18px;">&nbsp;编辑</a>
        <a href="">删除</a>
      </div>
    </li>
    <li>
      <p>收货人：安女士&nbsp;&nbsp;182********</p>
      <p class="order-add1">收货地址：河北省廊坊市 青云谱区解放西路258号河北省廊坊市 青云谱区解放西路258号</p>
      <hr>
      <div class="address-cz">
        <label class="am-radio am-warning">
          <input type="radio" name="radio3" value="" data-am-ucheck="" class="am-ucheck-radio"><span class="am-ucheck-icons"><i class="am-icon-unchecked"></i><i class="am-icon-checked"></i></span> 设为默认
        </label>
        <a href=""><img src="src/assets/img/bj.png" style="width: 18px;">&nbsp;编辑</a>
        <a href="">删除</a>
      </div>
    </li>
    <li>
      <p>收货人：安女士&nbsp;&nbsp;182********</p>
      <p class="order-add1">收货地址：河北省廊坊市 青云谱区解放西路258号河北省廊坊市 青云谱区解放西路258号</p>
      <hr>
      <div class="address-cz">
        <label class="am-radio am-warning">
          <input type="radio" name="radio3" value="" data-am-ucheck="" class="am-ucheck-radio"><span class="am-ucheck-icons"><i class="am-icon-unchecked"></i><i class="am-icon-checked"></i></span> 设为默认
        </label>
        <a href=""><img src="src/assets/img/bj.png" style="width: 18px;">&nbsp;编辑</a>
        <a href="">删除</a>
      </div>
    </li>
  </ul>
</div>
</template>
<style>

  /*@import '../assets/css/amazeui.min.css';*/
  @import "../assets/css/address.css";
</style>
<script>
  import '../assets/js/jquery-1.12.1';
  export default{
    methods:{
      go(n){
        this.$router.go(n);
      }
    },
  }
</script>