<template>
  <div class="body">
    <div class="tour">
      <a @click="go(-1)" class="tour1">
        <img :src="img[1].img1" alt="" style="height:26px;width: 20px">
      </a>
      <p>商品订单</p>
    </div>
    <div class="ewm">
      <ul>
        <li class="lif">
          <ul>
            <li>订单状态：待发货</li>
            <li>消费密码：1234 1234 1234</li>
          </ul>
        </li>
        <li class="lim">
          <a href="javascript:" class="erweima" @click="dian">
          <img class="erweima" :src="img[2].img2" alt="二维码" style="width: 40px;height: 40px" @click="dian"/>
        </a>
        </li>
      </ul>
    </div>
    <div class="address" id="address2">
      <a href="javascript:;" class="daohang">
        <img :src="img[3].img3" alt="" style="width: 40px;display: inline-block" />
      </a>
      <div class="caizhu">
        <span class="person" id="span1">收货人：爱美丽&nbsp;&nbsp;电话：12312341323</span>
        <br/>
        <span class="diqiu" id="span2">收货地址：拉拉啦啦啦啦阿拉啦啦拉啊</span>
      </div>
      <a href="javascript:;" class="xdz">&gt;</a>
    </div>
    <div class="hbt" style="width: 100%;height: 1rem;background-color: #eaeaea">

    </div>
    <div class="zfdd">
      <ul>
        <li class="li1"><a href="javascript:;">
          <img :src="img[4].img4" alt="" style="width: 60px;height: 60px"/>
        </a>
        </li>
        <li class="li2"><span>商品名称</span></li>
        <li class="li3">
          <span>×1</span><br/>
          <span style="color: red">￥100</span>
        </li>
      </ul>
      <div style="clear: both"></div>
    </div>
    <div class="zfdd">
      <ul>
        <li class="li1">
          <a href="javascript:;">
          <img :src="img[4].img4" alt="" style="width: 60px;height: 60px"/>
        </a>
        </li>
        <li class="li2"><span>商品名称</span></li>
        <li class="li3"><span>×1</span><br/>
          <span style="color: red">￥100.00</span>
        </li>
      </ul>
      <div class="clean"></div>
    </div>
    <div class="yunfei">
      <ul>
        <li class="yunli">运费:</li>
        <li class="qianli">￥8.00</li>
      </ul>
    </div>
    <div class="yunfei">
      <ul>
        <li class="yunli">留言:</li>
        <li class="qianli">无</li>
      </ul>
    </div>
    <div class="zjfy">
      <div class="fy">
        <p><span style="color: #000000">合计：</span>￥208</p>
      </div>
    </div>
    <div class="qxdd">
      <div style="width:11rem;margin:0 auto">
        <a href="javascript:;">
        <button type="button">取消订单</button>
        </a>
      </div>
    </div>
    <div class="zshlogo">
    </div>
    <div class="dewm">
      <div>
        <div class="xiaofei">消费码:1234 4567 8901</div>
        <img :src="img[2].img2" alt="消费二维码" style="width: 200px;height: 200px;margin: 0 auto;background-color:red"/>
        <div class="erweima">请出示订单二维码，给商家扫描</div>
      </div>

    </div>
    <div class="theme-popover-mask" @click="xiaoshi"></div>
  </div>
</template>
<style>
  @import "../assets/css/spdd.css";
</style>
<script>
  import '../assets/js/jquery-1.12.1';
  export default{
    data(){
      return{
        img:[
          {},
          {img1:'src/assets/img/back.png'},
          {img2:'src/assets/img/erweima.jpg'},
          {img3:'src/assets/img/timg.jpg'},
          {img4:'src/assets/img/u67.png'}
        ]
      }
    },
    methods:{
      go(n){
        this.$router.go(n);
      },
      dian(){
        $(".dewm").slideDown();
        $(".theme-popover-mask").show();
      },
      xiaoshi(){
        $(".dewm").slideUp();
        $(".theme-popover-mask").hide();
      }
    },
    mounted(){
    }
  }
</script>