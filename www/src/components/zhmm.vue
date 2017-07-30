<template>
  <div class="body zhmm">
    <div class="dlbg">
      <div class="dl">
        <p>找回账号密码</p>
        <div class="srk">
          <input type="text" class="input1" placeholder="手机号" maxlength="11" id="phone" v-model="username"/>
          <br/>
          <input type="password" placeholder="密码" class="input1" maxlength="16" id="word" v-model="password"/>
          <br/>
          <a href="javascript:">
            <button type="button" id="btn" @click="login">确定</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import "../assets/css/zhmm.css";
</style>
<script>
  import '../assets/js/jquery-1.12.1';
 export default{
    data(){
      return{
        username:'',
        password:'',
        msg:''
      }
    },
   methods:{
     login(){
       this.$http.post('http://localhost:3000/home/zhmm', {
         username:this.username,
         password:this.password
       })
         .then(function (response) {
           console.log(response.data);
           if(response.data == 'error'){
             alert('用户名不存在,即将跳转到注册页面');
             window.location.href = 'http://localhost:8080/reg';
           }else if(response.data.indexOf('success') != -1){
             this.msg = response.data.slice(7);
             alert(this.msg);
             alert('成功登录,跳转到用户页面');
             window.location.href = 'http://localhost:8080/user'+'/'+this.msg;
           } else {
             alert('密码是'+":"+ response.data);
           }

         }.bind(this))
         .catch(function (error) {
           console.log(error);
         });
     }
   }
 }

</script>