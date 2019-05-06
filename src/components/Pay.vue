<template>
    <div class="rxlc-step">
        <Header :title="title" />
        <van-circle
        v-model="currentRate"
        size='160px'
        :rate="100"
        :speed="500"
        :text="text"
        
      />
        <van-steps :active="active">
          <van-step>买家下单</van-step>
          <van-step>商家接单</van-step>
          <van-step>买家提货</van-step>
          <van-step>交易完成</van-step>
        </van-steps>
        <van-button style="margin-top: 30px" @click="btn" :disabled='dis' :type="type">{{msg}}</van-button>
        <div style="margin-top: 30px"  v-show="tu">
             <p>亲！给个五星好啊！！！</p>
           
             <van-rate v-model="value1" :count="count" color="#f44" />
        </div>
       
</div>
</template>
<script>
import { Circle } from 'vant';

Vue.use(Circle);
import { Step, Steps } from 'vant';
import { Button } from 'vant';
import { Rate } from 'vant';
import Vue from 'vue';
Vue.use(Rate);
import Header from '@/comment/Header'
Vue.use(Step).use(Steps).use(Button);
export default {
    components: {Header},
  data() {
    return {
      count: 5,
      dis: false,
      msg:'点击加速',
      type: 'primary',
        title: '支付页面',
       value1: 0,
        active: 0,
        tu: false,
        currentRate: 0,
        text: '支付成功',
        rate: 0
    };
  },
  methods: {
    btn() {
          this.active++
         if(this.active === 4) {
            this.tu = true
            this.dis = true
            this.msg = '回到首页'
            this.type = 'info'
              if(this.value1 = 5) {
                this.dis = false
                setTimeout(() => {
                    this.$router.push('/user')
                }, 3000);
              } 
          }
    },

  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + '%'
    }
  }

}
</script>
<style lang='less'>
  van-circle{
    margin-top: 30px
  }
</style>
