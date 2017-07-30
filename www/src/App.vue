<template>
  <div id="app">
    <loading v-show="getLoading"></loading>
    <transition
      enter-active-class="animated fadeIn"
    >
      <!--数据发生改变就提取,network显示请求数据,内空一致，无需加载-->
      <!--<keep-alive>-->
        <router-view></router-view>
      <!--</keep-alive>-->
    </transition>
    <footers v-show="getFoot"></footers>
  </div>
</template>

<script>
  import footers from './components/footer.vue';
  import home from './components/home.vue';

  import {mapActions,mapGetters} from 'vuex';

export default {
  name: 'app',
  data () {
    return {
      msg: 'We'
    }
  },
  watch:{
    //路由变化了就能测出,第一次监测不出来
    $route(to){
      this.changeRoute(to.path);
    }
  },
  mounted(){
//这个是为了解决第一次调取不到路由状态
    this.changeRoute(this.$route.path);
  },
  methods:{
    changeRoute(path){
      path = path.substring(1);
      if(path == 'home' || path.indexOf('spxq')!=-1  || path == 'allGoods' || path == 'mydg' || path == 'sucess'){
        this.$store.dispatch('showFoot');
      }
      if(path == 'login' || path == 'shopping' || path == 'zhmm' || path == 'address' || path.indexOf('group')!=-1 || path == 'mygroup' || path == 'pay' || path == 'reg' || path == 'spdd' || path.indexOf('user') != -1){
        this.$store.dispatch('hideFoot');
      }
    },
  },
  components:{
    footers,home
  },
  computed:mapGetters(
    ['getFoot','getLoading']
  )
}
</script>
