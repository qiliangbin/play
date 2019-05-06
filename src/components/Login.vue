<template>
    <div class="login">
     
      <div class="login-top">
        
        <p>登录</p>
        <a @click="aaaa" class="aa">取消</a>    
      </div>
       <div class="pnv">
        <img class="gif" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1402335446,2224018932&fm=26&gp=0.jpg" alt="">
      </div
      <div class="login-box">
      <van-cell-group>
        <van-field
          v-model="phone"
          label="用户名"
          placeholder="请输入用户名/手机号/邮箱"
        />
        <van-field
           type="password"
          v-model="password"
          label="密码"
          placeholder="请输入密码..."
        />
      </van-cell-group> 
      <van-button size="large" @click="login" class="denglu">登录</van-button>
      <div class="login-foote">
        <router-link to="" href="javascript:;" tag="span">忘记密码？</router-link>
        <router-link to="/reg" href="javascript:;" tag="span">新用户注册</router-link>
      </div>
      </div>
    </div>
</template>

<script>
import { Field } from 'vant';
import axios from 'axios';
import Vue from 'vue';
Vue.use(Field);
import { Button } from 'vant';
import { Toast } from 'vant';
Vue.use(Button).use(Toast);

export default {
    data(){
      return{
        password:'',
        phone:'',
        num: '2'
      }
    },
    components:{
    },
    methods: {
      aaaa() {
        console.log('133')
        this.$router.go(-1)
      },
      login() {
        axios.post('https://www.daxunxun.com/users/login', {
          username: this.phone,
          password: this.password
        }).then(data => {
          console.log(data.data)
          console.log(data)
          if(data.data === 2) {
            Toast('没有该用户！')
          } else if(data.data === -1) {
            Toast('该用户不纯在')
          } else if (data.data === 0) {
            Toast('登陆失败！')
          } else if (data.data === 1 & this.phone !== '') {
            let te = 0
            te = setInterval(() => {
               Toast('登陆成功！'+ this.num + 's后跳转')
               this.num --
              if(this.num === 0) {
                var reg = window.localStorage
                reg.setItem('isLogin', 'ok', this.phone)
                this.$router.push('/user')
               clearInterval(te)
               
              }
            },1000)
           
          }
        })
      }
    }
}
</script>

<style scoped>
.gif{
  display: block;
  margin:0;
  width: 100%;
  height: 13rem;
}
.login{
  width:100%;
  height:auto;
  padding-bottom:10rem;
  background:#f2f2f2;
}
p{margin:0 auto;padding-top:8px;}
.login-box{
  padding:0 1rem;
}
.login-top{
  background: #fff;
  width:100%;
  height:36px;
  padding:4.55px 0;
  color: #323233;
  font-size:.97rem;
  font-weight: 500;
  border-bottom: 1px solid aliceblue;
  /* margin-bottom:1rem; */
}
.aa{
  margin-top:-1.2rem;float:right; color: #323233;padding-right:1rem ; 
}
.aa:hover{color:dodgerblue;}
.denglu{
  margin-top:1rem;
  background:dodgerblue;
  color:#fff;
  border-radius:0.5rem;
}
.login-foote{
  display:flex;
  justify-content: space-between ;
}
.login-foote span{
  color:dodgerblue;
  background:none;
  padding:0 0.4rem;
  font-size:1rem;;
  }
.van-cell{
  padding:1rem 0;
}

</style>
