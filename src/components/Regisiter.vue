<template>
    <div class="reg">
    <Header v-show="nav" :title="title"></Header>
    <div class="pnv">
        <img class="gif" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3208970695,2370938617&fm=26&gp=0.jpg" alt="">
      </div
    <div class="login-box">
      <van-cell-group>
        <van-field
          v-model="phone"
          label="手机号 ："
          placeholder="请输入您的手机号"
          :state = 'phoneState'
          :error-message="msg"
        />
        <van-field
          v-model="password"
          label="密码 ："
          placeholder="请输入您的密码"
          type="password"
          :state = 'passState'
        />
        <van-field
          v-model="password1"
          type="password"
          label="确认密码 ："
          placeholder="再次填写密码"
        />
      </van-cell-group> 
      <van-radio-group v-model="radio" :disabled="rad">
        <van-radio name="1" @click="radi">我已阅读并同意 《用户服务协议》</van-radio>
       </van-radio-group>
      <van-button :disabled="disabled" size="large" :type="type" @click="bian" class="denglu">立即注册</van-button>
      </div>
    </div>
</template>
<script>
import Header from '@/comment/Header';
import axios from 'axios';
import { Field } from 'vant';
import { Toast } from 'vant';
import Vue from 'vue';
Vue.use(Field).use(Toast);
import { Button } from 'vant';
Vue.use(Button);

import { RadioGroup, Radio } from 'vant';
Vue.use(RadioGroup);
Vue.use(Radio);

export default {
    components: {Header},
    data() {
        return {
            title: '注册',
            nav: true,
            phone:'',
            password:'',
            password1:'',
            radio: '1',
            rad: true,
            disabled: true,
            msg: '',
            type: 'info'
        }
    },
    methods: {
      radi() {
        if(this.rad) {
          this.rad = false
          this.disabled = false
        } else {
          this.rad = true
          this.disabled = true
        }
      },
      bian() {
        if(this.rad = true) {
          axios.post('https://www.daxunxun.com/users/register', {
            usename: this.phone,
             password: this.password
          }).then(data => {
            console.log(data.data)
            if(data.data === 2) {
              Toast('该用户已注册！')
              this.$router.push('/login')
            } else if (data.data === 0) {
              Toast('注册失败！')
            } else {
              Toast('注册成功！')
              this.$router.push('/login')
            }
          })
        } 
      }
    },
    computed: {
      phoneState() {
        if(this.password1 === this.password) {
          return 'success'
        } else {
          if (/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.phone)) {
            return ('success',console.log('1'))
          } else {
            return (
              'error'
            )
          }
        }
      },
      passState() {
        if (this.password === '') {
        return 'success'
        } 
        else {
          if (this.password.length > 5 && this.password.length < 12) {
            return 'success'
          } else {
            return 'error'
          }
        }
      },
      disabled() {
      //   if(this.phoneState === 'success' && this.passState === 'success' && this.rad === false) {
      //     return false
      //   } else {
      //     return true
      //   }
      }
    },
}
</script>
<style scoped>
.gif{
  display: block;
  margin:0;
  width: 100%;
  height: 13rem;
}
.reg{
  width:100%;
  height:auto;
  padding-bottom:10rem;
  background:#f2f2f2;
}
.login-box{
  padding:1rem 1rem;
}
.denglu{
  margin-top:1rem;
  /* background:dodgerblue; */
  /* color:#fff; */
  border-radius:0.5rem;
}
.van-cell{
  padding:1rem 0;
}
.van-radio{
    padding-top:1rem;
}
.van-radio__label{font-size:0.8rem;}
</style>
