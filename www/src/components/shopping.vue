<template>
<div class="shopping">
  <div class="body">
    <div class="tour">
      <a @click="go(-1)" class="tour1">
        <img :src="img[1].img1" alt="" style="height: 26px;width: 20px">
      </a>
      <p>购物车</p>
      <a href="javascript:;" class="tour2"><i class="btn"></i></a>
    </div>
    <div class="spxz" v-for="(item,index) in arr">
      <ul>
        <li class="li1">
          <input type="checkbox" name="box"/>
        </li>
        <li class="li2">
          <a href="javascrip:;">
            <img :src="item.image" alt="" style="width: 60px;height: 60px"/>
          </a>
        </li>
        <li class="li3">
          <span>{{item.title}}</span><br>
          <span style="color: red" >￥</span>
          <span class="one" >{{item.price}}</span>
        </li>
        <li class="li4">
          <div>
            <a class="reduce" @click="jian(index)">-</a>
            <input type="text" v-model="list[index].num" class="num"/>
            <a class="plus" @click="jia(index)">+</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div style="clear: both"></div>
  <div class="footing">
    <ul >
      <li class="li6">合计：
        <span class="red">￥{{price}}</span>
      </li>
      <li class="li7">
        <router-link to="/pay">
          <button type="button" @click="jiesuan">结算</button>
        </router-link>
      </li>
    </ul>
  </div>
  <div class="alert">
    <table class="ta" >
      <tr>
        <td colspan="2">
          <div class="pub">提示</div>
          <div class="pub">确定删除当前商品?</div>
        </td>
      </tr>
      <tr>
        <td>
          <button type="button" class="delete public">确定</button>
        </td>
        <td>
          <button type="button" class="none public"  >取消</button>
        </td>
      </tr>
    </table>
  </div>
  <div class="theme-popover-mask"></div>
</div>
</template>
<style>
@import "../assets/css/shopping.css";
</style>
<script>
  import '../assets/js/jquery-1.12.1';
  export default{
    data(){
      return{
       img:[
         {},
         {img1:'src/assets/img/back.png'},
         {img2:'src/assets/img/u67.png'}
       ],
        arr:[],
        n:1,
        brr:[],
        key:'',
        value:'',
        list:[],
        number:'',
        total:[]
      }
    },

    methods:{
      go(n){
        this.$router.go(n);
      },
      jia(index){
         this.list[index].num++;
          this.brr.splice(index,1,this.list[index].num);
      },
      jian(index){
        if(this.list[index].num > 1){
          this.list[index].num --;
        }else if(this.list[index].num <= 1){
          sessionStorage.removeItem("goods"+ this.arr[index].id);
          this.arr.splice(index,1);
          this.list[index].num = 1;
        }

       this.brr.splice(index,1,this.list[index].num);

      },
      jiesuan(){
        for(let i in this.arr){
          this.total.push({
            id:this.arr[i].id,
            title:this.arr[i].title,
            price:this.arr[i].price,
            img:this.arr[i].image,
            num:this.list[i].num
          })
        }
        this.$root.$data.arr = this.total;
        console.log(this.$root.$data.arr);
      }
    },

   mounted(){
     sessionStorage.setItem("goods" +this.$root.$data.id,JSON.stringify(this.$root.$data));

     var storage = window.sessionStorage;
     for (var i=0, len = storage.length; i  <  len; i++){
       this.key = storage.key(i);
       if(this.key.indexOf('goods') != -1){
         this.value = storage.getItem(this.key);
         this.arr.push(JSON.parse(this.value));
         //console.log(this.key + "=" + this.value);
         //goods1500031081345={"id":10,"title":"百利派对","price":"76","image":"src/assets/img/i10.jpg"}
       }
     }

     for(var i = 0; i < this.arr.length-1;i ++){
       for(var j = i+1; j < this.arr.length;j++){
         if(this.arr[i].id == this.arr[j].id){
           this.arr.splice(j,1);
         }
       }
     }

     for(let index in this.arr){
       this.list.push({num:1})
     }
     for(var i = 0; i <this.list.length; i ++){
       this.brr.push(this.list[i].num);
     }
    },
    computed:{
     price:function(){
       let price=0;
      for(let i in this.arr){
       // console.log(this.arr[i].price);
        //console.log(this.list[i].num)
        if(typeof this.arr[i].price == 'undefined'){
          this.arr[i].price = 0;
        }
         price += this.arr[i].price*this.list[i].num;
      }


       this.$root.$data.total = price;
      return price;
     }
    },
    //为了查看数值变化方便
    watch:{
      arr:function(val,oldVal){
        for(let index in this.arr){
         // console.log(this.arr[index].price);
        }
      },
      //这是input存放数据的数量
      brr:function(val,oldVal){
        //console.log(val);
      }
    },

}
</script>