<template>
    <div class="detail">
        <Header :title="title" />
        <div class="content">
            <div class="dimg">
                <img class="" :src="dlist[0].image" alt="">
            </div>
            
        </div>
        <van-tabs v-model="active">
        <van-tab title="简介">
          <div class="intro">
              
              <van-panel title="品牌" :desc="dlist[0].shopname" :status="dlist[0].sales">
                <div></div>
              </van-panel>
                
               <van-panel title="价格" :desc="dlist[0].price" :status="dlist[0].kucun">
                <div></div>
              </van-panel>
                <van-panel title="颜色" desc="白色/黑色" status="缺货">
                <div></div>
              </van-panel>
              <van-panel title="介绍" :desc="dlist[0].title" status="夸就完事了">
                <div></div>
              </van-panel>
             
          </div>
      </van-tab>
      <van-tab title="讨论">
          <img class="ttt" src="../assets/image/t1.png" alt="">
      </van-tab>
      <van-tab title="点评">
        <img class="ttt" src="../assets/image/t2.png" alt="">
      </van-tab>
      <van-tab title="更多">
        <img class="ttt" src="../assets/image/t3.png" alt="">
      </van-tab>
    </van-tabs>
        <div class="dfo">
            <van-goods-action>
  <van-goods-action-mini-btn
    icon="chat-o"
    text="客服"
    @click="onClickMiniBtn"
  />
  <van-goods-action-mini-btn
    icon="cart-o"
    text="购物车"
    @click="car"
  />
  <van-goods-action-big-btn
    text="加入购物车"
    @click="join"
  />
  <van-goods-action-big-btn
    primary
    text="立即购买"
    @click="buy"
  />
</van-goods-action>
        </div>
    </div>
</template>
<script>
import Header from '@/comment/Header'
import api from '@/api/home'
import { Tab, Tabs} from 'vant'
import { Panel } from 'vant';

Vue.use(Panel);
Vue.use(Tab).use(Tabs)
import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Toast
} from 'vant';
import Vue from 'vue'
Vue
  .use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(Toast)
  .use(GoodsActionMiniBtn);
export default {
    components: {Header},
    props: ['list'],
    data() {
        return{
            title: '商品详情页',
            dlist: [],
            // id : ''
        }
    },
    methods: {
        buy() {
            console.log(this.dlist)
            let pho = {
              id: this.dlist[0]._id,
              price: this.dlist[0].price*1,
              shopname: this.dlist[0].shopname,
              image: this.dlist[0].image
            }
            if(localStorage.getItem('phone')) {
              let all = []
              all = JSON.parse(localStorage.getItem('phone'))
              all.push(pho)
              all = JSON.stringify(all)
              localStorage.setItem('phone', all)
              console.log(all)
            } else {
              localStorage.setItem('phone', p)
              let p = []
              p.push(pho)
              p = JSON.stringify(p)
              localStorage.setItem('phone', p)
              console.log(p)
              
            }
              // this.p = JSON.parse(p)
              this.$router.push('/cart')
        },
        join() {
          
            console.log('ss')
            const id = this.id
            console.log(id)
            api.requestPhoneDetail(id).then(data => {
              let msg = data.data.data    
              console.log(msg)
              let strcarmsg = localStorage.getItem('phone')
              let carmsg = JSON.parse(strcarmsg)
              if(carmsg == null) {
                carmsg = []
              }
              var isNew = true
              var arr = {
                id: msg[0].id,
                brand: msg[0].brand,
                price: msg[0].price,
                shopname: msg[0].shopname,
                title: msg[0].title,
                image: msg[0].image,
                priceSum: 0,
                num: 1
              }
              console.log(arr)
              if (carmsg !== []) {
                for(var i=0; i<carmsg.length; i++) {
                  if(id === carmsg[i].id) {
                    carmsg[i].num++
                    isNew = false
                  }
                }
              }
              if(isNew) {
                carmsg.push(arr)
              }
              let strmsg = JSON.stringify(carmsg)
              localStorage.setItem('phone',strmsg)
              Toast('添加成功')
            }).catch(err => console.log(err))
        },
        car() {
            this.$router.push('/cart')
        },
        onClickMiniBtn() {

        }
    },
    mounted() {
      const id = this.$route.query.id
      console.log(id)
      api.requestPhoneDetail(id).then(data => {
        this.dlist = data.data.data
        this.id = id
        // console.log(this.dlist)
      }).catch(err => console.log(err))
    }
}
</script>
<style>
.dimg{
    width: 100%;
    height: 16rem;
    /* background: #a55 */
}
.ttt{
  width: 100%;
  height: 100%;
}
</style>

