<template>
<div>
  <div class="up"><a href="Group.html"><img src="src/assets/img/up.png" alt="返回上一层"></a></div>
  <div class="share"><a href=""><img src="src/assets/img/share.png" alt="分享"></a></div>
  <div class="container">
    <header>
      <div id="turn" class="turn">
        <div class="turn-loading"><img src="src/assets/img/loading_comment.gif" alt=""/></div>
        <ul class="turn-pic">
          <li><a href="#"><img src="src/assets/img/1.jpg" title="" alt="" /></a></li>
          <li><a href="#"><img src="src/assets/img/2.jpg" title="" alt="" /></a></li>
          <li><a href="#"><img src="src/assets/img/3.jpg" title="" alt="" /></a></li>
          <li><a href="#"><img src="src/assets/img/4.jpg" title="" alt="" /></a></li>
          <li><a href="#"><img src="src/assets/img/4.jpg" title="" alt="" /></a></li>
        </ul>
      </div>

    </header>
    <section>
      <div class="t_container">
        <p class="p_service"><img src="src/assets/img/shangjia.png" alt="" style="width: 10px;">&nbsp;货品由<span>社区服务•零点店</span>提供，并提供售后服务!</p>
        <p class="p_detail">【预售，3.27】发货东北精品大米/2500G官方正品2500G官方正品</p>
        <div class="bg_hg">
          <p class="new"><span>团购价</span>￥111</p>
          <p class="old">原价￥200</p>
        </div>
        <p class="p_count">已团：100份&nbsp;&nbsp;剩余17份</p>
        <p class="p_time"><span>时间：</span>2016.9.13&nbsp;-&nbsp;2016.9.26</p>
        <p class="p_address">地址：陕西省西安市雁塔区电子社区A座四楼研发部</p>
        <p class="p_phone">电话：029-88888888<span>（点击可拨打）</span></p>
      </div>
      <div class="t_warn">
        <p class="p_warn"><img src="src/assets/img/guize.png" alt="" style="width: 12px;">&nbsp;规则</p>
        <p class="p_payoff">1、支付成功后不能取消，若参团人数不足时，支付金额</p>
        <p class="p_payoff">2、将会退款至宅生活余额里</p>
      </div>
      <div class="t_remark">
        <p class="p_remark"><img src="src/assets/img/xiangqing.png" alt="" style="width: 15px;">&nbsp;详情</p>
        <p class="p_text">从前有个庙，庙里有一个小和尚，有一天小和尚下山去化缘，老和尚有交代。“山下的女人是老虎，你见了千万要躲开。”他说。
          从前有个庙，庙里有一个小和尚，有一天小和尚下山去化缘，老和尚有交代。“山下的女人是老虎，你见了千万要躲开。”他说。
          从前有个庙，庙里有一个小和尚，有一天小和尚下山去化缘，老和尚有交代。“山下的女人是老虎，你见了千万要躲开。”他说。
          从前有个庙，庙里有一个小和尚，有一天小和尚下山去化缘，老和尚有交代。“山下的女人是老虎，你见了千万要躲开。”他说。
          从前有个庙，庙里有一个小和尚，有一天小和尚下山去化缘，老和尚有交代。“山下的女人是老虎，你见了千万要躲开。”他说。</p>
        <img src="src/assets/img/1.jpg" alt="">
        <p class="p_text">从前有个庙，庙里有一个小和尚，有一天小和尚下山去化缘，老和尚有交代。“山下的女人是老虎，你见了千万要躲开。”他说。
          从前有个庙，庙里有一个小和尚，有一天小和尚下山去化缘，老和尚有交代。“山下的女人是老虎，你见了千万要躲开。”他说。
          从前有个庙，庙里有一个小和尚，有一天小和尚下山去化缘，老和尚有交代。“山下的女人是老虎，你见了千万要躲开。”他说。
          从前有个庙，庙里有一个小和尚，有一天小和尚下山去化缘，老和尚有交代。“山下的女人是老虎，你见了千万要躲开。”他说。
          从前有个庙，庙里有一个小和尚，有一天小和尚下山去化缘，老和尚有交代。“山下的女人是老虎，你见了千万要躲开。”他说。</p>
      </div>
    </section>
    <footer>
      <div class="footer">
        <p>没有更多了</p>
      </div>
    </footer>

    <div class="actGotop"><a href="javascript:;" title="返回顶部"></a> <img src="src/assets/img/fanhui.png" alt=""></div>
  </div>
</div>
</template>
<style>
@import "../assets/css/More.css";
@import "../assets/css/Up.css";
@import "../assets/css/jsdaima.css";
</style>
<script>
  import '../assets/js/jquery-1.12.1';
export default{
  mounted(){
    (function(id,t){
      if(!document.getElementById(id)){return false;}
      var doc = document,
        auto='',
        oId = doc.getElementById(id),
        IE = /msie (\d+\.\d)/i.test(navigator.userAgent),
        num = 0,
        bot = true,
        setOpacity = function(obj, opacity){
          if(IE){
            obj.style.filter = 'Alpha(Opacity=' + (opacity * 100) + ')';
          }
          else{
            obj.style.opacity = opacity;
          };
        },
        setBottom = function(obj, bottom){
          obj.style.bottom = bottom + 'px';
        },
        fideIn = function(obj, timeLimit){
          if(obj.style.display === 'none'){
            obj.style.display = 'block';
          };
          setOpacity(obj, 0);
          obj.style.zIndex = 1;
          if(!timeLimit){
            timeLimit = 200;
          };
          var opacity = 0,
            step = timeLimit / 20;
          clearTimeout(fideInTime);
          var fideInTime = setTimeout(function(){
            bot = false;
            if(opacity >= 1){
              bot = true;
              return;
            };
            opacity += 1 / step;
            setOpacity(obj, opacity);
            fideInTime = setTimeout(arguments.callee, 20);
          },20);
        },
        fideOut = function(obj, timeLimit){
          if(!timeLimit){
            timeLimit = 200;
          };
          setOpacity(obj, 1);
          obj.style.zIndex = 0;
          var opacity = 1,
            step = timeLimit / 20;
          clearTimeout(fideOutTime);
          var fideOutTime = setTimeout(function(){
            if (opacity <= 0) {
              setOpacity(obj, 0);
              return;
            };
            opacity -= 1 / step;
            setOpacity(obj, opacity);
            fideOutTime = setTimeout(arguments.callee, 20);

          },20);
        },
        heightIn = function(obj, timeLimit){
          if(obj.style.display === 'none'){
            obj.style.display = 'block';
          };
          setBottom(obj, -40);
          if(!timeLimit){
            timeLimit = 200;
          };
          var bottom = -40,
            step = timeLimit / 20;
          clearTimeout(heightInTime);
          var heightInTime = setTimeout(function(){
            if(bottom >= 8){
              setBottom(obj, 8);
              return;
            };
            bottom += 28 / step;
            setBottom(obj, bottom);
            heightInTime = setTimeout(arguments.callee, 20);
          },20);
        },
        heightOut = function(obj, timeLimit){
          if(!timeLimit){
            timeLimit = 200;
          };
          setBottom(obj, 8);
          var bottom = 8,
            step = timeLimit / 20;
          clearTimeout(heightOutTime);
          var heightOutTime = setTimeout(function(){
            if(bottom <= -40){
              setBottom(obj, -40);
              return;
            };
            bottom -= 28 / step;
            setBottom(obj, bottom);
            heightOutTime = setTimeout(arguments.callee, 20);
          },20);
        },
        getClass = function(oElem, strTagName, strClassName){
          var arrElements = (strTagName == '*' && oElem.all) ? oElem.all : oElem.getElementsByTagName(strTagName);
          var returnArrElements = new Array();
          var oRegExp =  new RegExp('(^|\\s)' + strClassName + '($|\\s)');
          for(var i=0; i<arrElements.length; i++){
            if(oRegExp.test(arrElements[i].className)){
              returnArrElements.push(arrElements[i]);
            }
          }
          return (returnArrElements);
        },
        createElement = function(tag, id, cla){
          var elem = document.createElement(tag);
          if(id && id !== ""){
            elem.id = id;
          }
          if(cla && cla !== ""){
            elem.className = cla;
          }
          return elem;
        },
        showImg = function(n,b){
          var turnPic = getClass(oId,'ul','turn-pic')[0];
          var oLi = turnPic.getElementsByTagName('li');
          var turnTit = getClass(oId,'ul','turn-tit')[0];
          var oLi2 = turnTit.getElementsByTagName('li');
          var turnBtn = getClass(oId,'div','turn-btn')[0];
          var oSpan = turnBtn.getElementsByTagName('span')[0];
          fideIn(oLi[n],300);
          heightIn(oLi2[n],300);
          oSpan.innerHTML = (n+1)+'/'+oLi.length;
          if(b==true){
            if(n==oLi.length-1){
              fideOut(oLi[0],300);
              heightOut(oLi2[0],300);
            }
            if(n<oLi.length-1){
              fideOut(oLi[n+1],300);
              heightOut(oLi2[n+1],300);
            }
          }
          else{
            if(n>0){
              fideOut(oLi[n-1],300);
              heightOut(oLi2[n-1],300);
            }
            if(n==0){
              fideOut(oLi[oLi.length-1],300);
              heightOut(oLi2[oLi2.length-1],300);
            }
          }
        },
        addHtml = function(){
          var oBg = createElement('div','','turn-bg');
          var oTit = createElement('ul','','turn-tit');
          var oBtn = createElement('div','','turn-btn');
          var turnPic = getClass(oId,'ul','turn-pic')[0];
          var oA = turnPic.getElementsByTagName('a');
          var oImg = turnPic.getElementsByTagName('img');
          for(var i=0,len=oA.length;i<len;i++){
            oTit.innerHTML += '<li><a href="'+ oA[i].href +'">'+ oImg[i].title +'</a></li>';
          }
          oBtn.innerHTML = '<div class="lb"></div><div class="rb"></div><span></span>';
          oId.appendChild(oBg);
          oId.appendChild(oTit);
          oId.appendChild(oBtn);
        },
        init = function(){
          addHtml();
          showImg(0);
          var turnLoading = getClass(oId,'div','turn-loading')[0];
          oId.removeChild(turnLoading);
          oId.onmouseover = function(){
            clearInterval(auto);
          };
          oId.onmouseout = function(){
            auto = setInterval(autoTurn, t*1000);
          };
          var turnPic = getClass(oId,'ul','turn-pic')[0];
          var oLi = turnPic.getElementsByTagName('li');
          var oLb = getClass(oId,'div','lb')[0];
          var oRb = getClass(oId,'div','rb')[0];
          oLb.onmouseover = function(){
            this.style.backgroundPosition = '-12px 0';
          }
          oLb.onmouseout = function(){
            this.style.backgroundPosition = '0 0';
          }
          oLb.onclick = function(){
            if(!bot){ return false; }
            if(num==0){
              num = oLi.length-1;
            }
            else{
              num = num - 1;
            }
            showImg(num,1);
          }
          oRb.onmouseover = function(){
            this.style.backgroundPosition = '-18px 0';
          }
          oRb.onmouseout = function(){
            this.style.backgroundPosition = '-6px 0';
          }
          oRb.onclick = function(){
            if(!bot){ return false; }
            if(num==oLi.length-1){
              num = 0;
            }
            else{
              num = num + 1;
            }
            showImg(num);
          }
        },
        autoTurn=function(){
          var turnPic = getClass(oId,'ul','turn-pic')[0];
          var oLi = turnPic.getElementsByTagName('li');
          if(num==oLi.length-1){
            num = 0;
          }
          else{
            num = num + 1;
          }
          showImg(num);
        };
      init();
      auto = setInterval(autoTurn, t*1000);
    })('turn',3);
  }
}
</script>



