<template>
  <div class="body login">
    <div class="dlbg">
      <div class="dl">
        <p>登录</p>
        <div class="srk">
          <input type="text" placeholder="手机号" maxlength="11" id="phone"  name="phone" v-model="username">
          <br/>
          <input type="password" placeholder="密码" maxlength="16"  id="word" name="passWord" v-model="password">
          <br/>
           <a href="javascript:;">
             <button type="button" id="btn" @click="login">确定
             </button>
           </a>
        </div>
        <div class="beizhu">
          <ul>
            <li>
              若忘记密码，<router-link to="/zhmm">
              <span :style="style" >点击此处找回密码</span>
            </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import '../assets/js/jquery-1.12.1';
  export default{
    data(){
      return {
        username:'',
        password:'',
        style:[{color: 'green'},{textDecoration: 'underline'}],
        arr:['aa']
      }
    },
    methods:{
      login(){
        this.$http.post('http://localhost:3000/home/login', {
            username:this.username,
            password:this.password
        })
          .then(function (response) {
            console.log(response.data);
              if(response.data == 'error'){
                alert('用户名不存在,即将跳转到注册页面');
                window.location.href = 'http://localhost:8080/reg';
              }
              if(response.data == 'forget'){
                alert('密码错误，可点击进行找回密码页面，或重新输入');
              }
              if(response.data.indexOf('success') != -1){
                this.msg = response.data.slice(7);
                alert('成功登录,跳转到用户页面');
                window.location.href = 'http://localhost:8080/user'+'/'+this.msg ;
              }

          }.bind(this))
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    mouthed:{

    }
  }

</script>
<style>
  @import "../assets/css/login.css";
</style>