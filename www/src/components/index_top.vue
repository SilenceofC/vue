<template>
  <div class="top">
    <header>
      <div>
        <a href="javascript:;" class="index_header">{{arr.title}}</a>
      </div>
    </header>
    <div class="allLogo container">
      <div>
        <img v-bind:src="arr.image" class="logo" alt="logo"/>
      </div>
      <div>
        <img  v-bind:src="brr.image" alt="logo" class="head"/>
      </div>
      <div class="headInfo">
        <a href="javascript:;"> {{brr.title}}</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        arr:[],
        brr:[]
      }
    },
    mounted(){
      this.$http.get('http://localhost:3000/home').then((res)=>{
        this.arr = res.data[0];
        this.brr = res.data[1];
      }).catch((res)=>{
        alert(res.status);
      });
    }
  }
</script>
<style>
  @import "../assets/css/style.css";
</style>