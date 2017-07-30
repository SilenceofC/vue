<template>
  <div class="home">
    <index_top></index_top>
    <index_middle></index_middle>
    <index_bottom></index_bottom>
  </div>
</template>
<script>
  import index_top from './index_top.vue';
  import index_middle from './index_middle.vue';
  import index_bottom from './index_bottom.vue';
  export default{
    components: {
      index_top, index_middle, index_bottom
    },
  }
</script>
<style>
body{
  background:white;
}
</style>