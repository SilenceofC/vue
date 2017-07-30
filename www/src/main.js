import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import axios from 'axios';//数据交互，不需要use，全局使用，可以配置

Vue.prototype.$http = axios;  //绑定到原型身上,这样和resource一样


Vue.use(VueRouter);//这个要挂在下面


import routes from "./routes.config.js";

const router = new VueRouter({
  routes,
  mode:'history'//默认是hash模式
});

//引入状态管理
import store from './store/index.js';

import loading from './components/loading';
Vue.use(loading);


//配置axios,读取数据的时候和返回数据时，可以自定义一段代码（loading显示隐藏）
//虚拟环境下数据回来太快
axios.interceptors.request.use(function(config){
  //显示loading
  // this是空对象
  store.dispatch('showLoading');
  return config;//什么都没干，相当于什么都没配置
},function(error){
  return Promise.reject(error);
});
axios.interceptors.response.use(function(response){
  //隐藏loading
  store.dispatch('hideLoading');
  return response;
},function(error){
  return Promise.reject(error);
});

//导入 animate.css
import 'animate.css';



new Vue({
  el: '#app',
  // data:{
  //   goods:[{id:''},{title:''},{price:''},{img:''}]
  // },
  render: h => h(App),
  router,
  store
});
