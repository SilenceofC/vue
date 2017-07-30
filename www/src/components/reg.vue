<template>
  <div class="body reg" id="#reg">
    <div class="dlbg">
      <div class="dl">
        <p>注册账号</p>
        <div class="srk">
          <input type="text" class="input1" placeholder="手机号" maxlength="11" id="phone" v-model="username"/>
          <br/>
          <input type="text" placeholder="验证码" class="input2" id="code"/>
          <div  class="input3"   >
            <span v-if="sendMsgDisabled">{{time+'秒后获取'}}</span>
            <span v-if="!sendMsgDisabled" @click="daojishi">获取短信验证码</span>
          </div>
          <br/>
          <input type="password" placeholder="密码" class="input1" maxlength="16" id="word" v-model="password"/><br/>
          <a><button type="button" id="btn" @click="add">确定</button></a>
        </div>
        <div class="beizhu">
          <ul>
            <li>
              点击此处<a href="javascript:" :style='style'>下载XX客户端，可享受更多优惠</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style >
@import "../assets/css/reg.css";
</style>
<script>
  import '../assets/js/jquery-1.12.1';
export default{
  data(){
    return{
      reg:[],
      username:'',
      password:'',
      sendMsgDisabled:false,
      time:60,
      style:[{color: 'green'},{textDecoration: 'underline'}]
    }
  },
  methods:{
    add(){
      var mob=$.trim($("#phone").val());
      if($.trim($("#phone").val())=="")
      {
        $("#phone").val("");
        $("#phone").focus();
        alert("手机号码不能为空！");
        return false;
      }
      if($.trim($("#phone").val())!="")
      {
        var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
        if(!reg.test($.trim($('#phone').val())))
        {
          $("#phone").val("");
          $("#phone").focus();
          alert("手机号码格式不对！");
          return false;
        }
      }
      if($("#code").val() == "" || $("#code").val() == null){
        alert("验证码不能为空");
        $("#code").val("");
        $("#code").focus();
        return false;
      }
      if($.trim($("#code").val())!="")
      {
        var reg = /^\d{6}$/;
        if(!reg.test($.trim($('#code').val())))
        {
          $("#code").val("");
          $("#code").focus();
          alert("验证码只能输入六个数字");
          return false;
        }
      }
      if($("#word").val() == "" || $("#word").val() == null){
        alert("密码不能为空");
        $("#word").val("");
        $("#word").focus();
        return false;
      }
      if($.trim($("#word").val())!="")
      {
        var reg = /^\S{6,}$/;
        if(!reg.test($.trim($('#word').val())))
        {
          $("#word").val("");
          $("#word").focus();
          alert("密码至少6位,除空白以外任何字符");
          return false;
        }
      }
      this.$http.post('http://localhost:3000/home/regist', {
        username: this.username,
        password:this.password
      })
        .then(function (response) {
          alert(response.data);
          if(response.data == '注册成功'){
            window.location.href = 'http://localhost:8080/login';
          }
        })
        .catch(function (error) {
          console.log(error);
        });
     },

     daojishi(){
       let me = this;
       console.log(this);
       me.sendMsgDisabled = true;
       let interval = window.setInterval(function() {
         if ((me.time--) <= 0) {
           me.time = 60;
           me.sendMsgDisabled = false;
           window.clearInterval(interval);
         }
       }, 1000);
     }
  },

}
</script>