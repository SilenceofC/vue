import home from './components/home.vue';
import allGoods from './components/allGoods.vue';
import user from './components/user.vue';
import spxq from './components/spxq.vue';
import mydg from "./components/mydg.vue";
import mygroup from "./components/mygroup.vue";
import group from "./components/group.vue";
import login from "./components/login.vue";
import shopping from "./components/shopping.vue";
import pay from "./components/pay.vue";
import zhmm from "./components/zhmm.vue";
import reg from "./components/reg.vue";
import address from "./components/address.vue";
import sucess from "./components/sucess.vue";
import spdd from "./components/spdd.vue";
const routes = [
  {path:'/home',component:home},
  {path:'/allGoods',component:allGoods},
  {path:'/user/:aid',component:user},
  {path:'/spxq/:aid',component:spxq},
  {path:'/mydg',component:mydg},
  {path:'/mygroup',component:mygroup},
  {path:'/group/:aid',component:group},
  {path:'/shopping',component:shopping},
  {path:'/login',component:login},
  {path:'/pay',component:pay},
  {path:'/zhmm',component:zhmm},
  {path:'/reg',component:reg},
  {path:'/address',component:address},
  {path:'/sucess',component:sucess},
  {path:'/spdd',component:spdd},
  {path:'/',redirect:'/home'},
];
export default  routes;