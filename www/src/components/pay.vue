<template>
<div class="pay">
  <div class="body">
    <div class="tour">
      <a @click="go(-1)" class="tour1"><img :src="img[1].img1" alt="" style="height: 26px;width: 20px"></a>
      <p>订单确认</p>
    </div>
    <div class="header3">
      <a href="javascript:;" class="shsm">
        <button type="button" id="btn1"  class="btn1" @click="goods">送货上门</button>
      </a>
      <a href="javascript:;" class="ddzq">
        <button type="button" id="btn2" class="btn2" @click="come">到店自取</button>
      </a>
    </div>
    <div class="address" id="address2" @click="address">
      <a href="javascript:;" class="daohang">
        <img :src="img[2].img2" alt="" style="width: 40px;display: inline-block" />
      </a>
      <div class="caizhu">
        <p class="person" id="span1">收货人：XX先生/女士&nbsp;&nbsp;电话：12312341323</p><br/>
        <p class="diqiu" id="span2">收货地址：XX市XX区</p>
      </div>
      <a href="javascript:;" class="xdz">&gt;</a>
    </div>
    <div class="address2" id="zt">
      <a href="javascript:;" class="daohang">
        <img :src="img[2].img2" alt="" style="width: 40px;display: inline-block" /></a>
      <div class="caizhu">
        <p class="store" id="span3">店铺电话：12345678</p>
        <br/>
        <p class="saddress" id="span4">店铺地址：XX市XX区</p>
      </div>
      <a href="javascript:;" class="xdz">&gt;</a>
    </div>
    <div class="hbt" style="width: 100%;height: 1rem;background-color:lightgrey"></div>
    <div class="zfdd">
      <ul v-for="(item,index) in arr">
        <li class="li1">
          <a href="javascript:;">
          <img :src="item.img" alt="" style="width: 60px;height: 60px"/>
          </a>
        </li>
        <li class="li2"><span>{{item.title}}</span></li>
        <li class="li3">
          <span>×{{item.num}}</span><br/>
          <span style="color: red">￥{{item.price}}</span>
        </li>
      </ul>
    </div>
    <!--<div class="zfdd">-->
      <!--<ul>-->
        <!--<li class="li1"><a href="spxq.html">-->
          <!--<img :src="img[3].img3" alt="" style="width: 60px;height: 60px"/></a></li>-->
        <!--<li class="li2"><span>商品名称</span></li>-->
        <!--<li class="li3"><span>×1</span>-->
          <!--<br/>-->
          <!--<span style="color: red">￥100.00</span>-->
        <!--</li>-->
      <!--</ul>-->
      <!--<div style="clear: both"></div>-->
    <!--</div>-->
    <div class="yunfei" id="yunfei">
      <ul>
        <li class="yunli">运费</li>
        <li class="qianli">￥{{yunfei}}</li>
      </ul>
    </div>
    <div class="sjly">
      <input type="text" placeholder="给商家留言"/>
    </div>
    <div class="zjfy">
      <div class="fy">
        <p><span style="color: #000000">合计：</span>￥{{this.total + yunfei}}</p>
      </div>
    </div>
    <div class="menu" id="zfym">
      <ul>
        <li>
          <router-link to="/sucess"><a href="javascript:;" class="aclass" >微信支付</a>
          </router-link>
        </li>
        <li><a href="javascript:;">支付宝支付</a></li>
        <li><a href="javascript:;">银联卡支付</a></li>
        <li><a href="javascript:;">招行卡支付</a></li>
      </ul>
    </div>
    <div class="changeadd">
      <div class="shdz">
        <p>选择收货地址</p>
        <div class="gbdd">
          <span id="btn4" @click="cancel">×</span>
        </div>
      </div>
      <div class="dzlb">
        <div class="harvest">
          <p class="person">收货人：李四&nbsp;&nbsp;电话：12312341323</p><br/>
          <p class="diqiu">收货地址：1111111111111111111111</p>
        </div>
        <div style="clear: both"></div>
      </div>
      <hr/>
      <div class="dzlb">
        <div class="harvest">
          <p class="person">收货人：张三&nbsp;&nbsp;电话：12312341323</p><br/>
          <p class="diqiu">收货地址：111111111111111</p>
        </div>
        <div style="clear: both"></div>
      </div>
      <hr/>
      <div class="gldz">
        <ul>
          <li class="li10">
            <a href="javascript:">+</a>
          </li>
          <li class="li11">新增地址</li>
          <li class="li12">
            <button type="button" id="btn5" @click="select" >&gt;</button>
          </li>
        </ul>
        <div style="clear: both"></div>
      </div>
    </div>
    <div class="zjdd">
      <div class="shdz">
        <p>收货地址</p>
        <div class="gbdd">
          <span id="btn6" @click="quxiao">×</span>
      </div>
      </div>
      <div class="sfxx">
        <table class="paytable">
          <tr>
            <td class="td1">收货人</td>
            <td class="td2"><input type="text" placeholder="姓名"/></td>
          </tr>
          <tr>
            <td class="td1">联系电话</td>
            <td class="td2"><input type="text" placeholder="手机或固话"/></td>
          </tr>
          <tr>
            <td class="td1">详细住址</td>
            <td class="td2"><input type="text" placeholder="仔细填写"/></td>
          </tr>
        </table>
      </div>
      <div class="bc">
        <button type="button">保存</button>
      </div>
    </div>
  </div>
  <div class="footing">
    <ul>
      <li class="li7"><a href="javascript:;">
        <button type="button" id="btn3" @click="pay">去支付</button>
      </a>
      </li>
    </ul>
  </div>
  <div class="theme-popover-mask" @click="theme"></div>
</div>
</template>
<style>
@import "../assets/css/pay.css";
</style>
<script>
  import "../assets/js/zftc.js";
  import '../assets/js/jquery-1.12.1';
  export default{
    data(){
      return{
        img:[{},
          {img1:'src/assets/img/back.png'},
          {img2:'src/assets/img/timg.jpg'},
          {img3:'src/assets/img/u67.png'}
        ],
        arr:[],
        yunfei:8,
        total:0
      }
    },
    methods:{
      go(n){
        this.$router.go(n);
      },
      //支付弹窗
      pay(){
        $(".menu").slideDown();
        $(".theme-popover-mask").show();
      },
      theme(){
        $(".menu").slideUp();
        $(".theme-popover-mask").hide();
      },
      goods(){
        $("#btn2").removeClass("btn1").addClass("btn2");
        $("#btn1").removeClass("btn2").addClass("btn1");
        $("#yunfei").show();
        $("#zt").hide();
        $("#address2").show();
      },
      come(){
        $("#btn1").removeClass("btn1").addClass("btn2");
        $("#btn2").removeClass("btn2").addClass("btn1");
        $("#yunfei").hide();
        $("#address2").hide();
        $("#zt").show();
      },
      //地址弹窗
      address(){
        $(".changeadd").slideDown();
        $(".theme-popover-mask").show();
      },
      select(){
        $(".zjdd").slideDown();
        $(".zjdd").slideDown();
        $(".changeadd");
      },
      cancel(){
        $(".changeadd").slideUp();
        $(".theme-popover-mask").hide();
      },
      quxiao(){
        $(".zjdd").slideUp();
        $(".theme-popover-mask").hide();
      }
    },

    mounted(){
        $(document).bind("click",function(e){
          var target  = $(e.target);
          if(target.closest("#btn5,.zjdd").length == 0){/*.closest()沿 DOM 树向上遍历，直到找到已应用选择器的一个匹配为止，返回包含零个或一个元素的 jQuery 对象。*/
            $(".zjdd").slideUp();
          };
          e.stopPropagation();
        });
      this.arr= this.$root.$data.arr;
      this.total = this.$root.$data.total;

    }
  }

</script>