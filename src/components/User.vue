<template>
    <div class="user">
        <Header :title="title" />
        <div class="uhea">
                <img class="uimg" src="../assets/image/0.jpg" alt="" v-if="phone">
                <img class="uimg" src="../assets/image/my.png" alt="" v-else>                
                <div class="zi" v-if="phone">
                    <p class="msg1">{{msg1}}</p>
                     <!-- <button class="shan1" @click="dell"></button> -->
                     <van-button class="btn" size="normal" @click="dell" type="danger">{{del1}}</van-button>
                </div>
            <div class="zi" v-else>
                <router-link class="ua" tag="a" to="/login">登录</router-link> |
                <router-link class="ua" tag="a" to="/reg">注册</router-link>
            </div>
            <div class="fo" v-if="phone">
                <van-cell-group class="user-group">
                   <van-cell icon="records" @click="init" title="全部订单" is-link />
                </van-cell-group>
                <van-cell-group>
                    <van-cell icon="points" title="我的积分" is-link />
                    <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
                    <van-cell icon="gift-o" title="我收到的礼物" is-link />
                </van-cell-group>
            </div>
        </div>
    </div>
</template>
<style>

.btn{
    position: fixed;
    bottom: 3rem;
    left: 24%;
    width: 12rem;
    font: 1rem/2.4rem "";
    height: 2.4rem;
}
.dingd{
    width: 100%;
    height: 2rem;
    background: rgba(202, 199, 199, 0.5);
    margin-top: 32px
}
.my{
    float: left;
    font: 1rem/2rem '';
    color: black;
    font-weight: 700
}
.my1{
    float: right;
    font: 0.8rem/2rem '';
    color: #555353;
}
.fo{
    width: 100%;
    /* background:aquamarine; */
    height: 24rem;
    margin-top: 0.5rem
}
.shan1{
    color:crimson;
    font:14px/24px '';
    display: block;
    margin: 0 auto;
}
.msg1{
    color:rgba(62, 183, 240, 0.925);
    font:20px/24px '';
    padding: 0;
    margin: 0
}
.uhea{
    width: 100%;
    height: 16rem;
    /* margin-top: 2rem */
    /* position: relative; */
    /* z-index: -1 */
}
.uimg{
    width: 6rem;
    height:6rem;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    top: 6rem;left:0;right: 0;margin: auto;
    /* background: url(../assets/image/0.jpg) */
}
.zi {
    padding-top: 11rem
}
.ua{
    color:#000;
}
.user{
    width: 100%;
    height: 100%;
    background: url('https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4215637325,861698539&fm=26&gp=0.jpg') no-repeat;
    
    background-size: 100% 90%;
}
</style>

<script>
import { Toast } from 'vant';
import { Dialog, Cell, CellGroup } from 'vant';

Vue.use(Dialog);
import Vue from 'vue'
Vue.use(Toast).use(Cell).use(CellGroup);
import Header from '@/comment/Header'
export default {
    components: {Header},
   
    data() {
        return{
            title: '我的',
            phone: '',
            msg1: '177****7577',
            del1: '退出登录'
        }
    },
    methods: {
        init() {
            this.$router.push('/cart')
            
        },
        dell() {
            console.log('1111')
            localStorage.removeItem('isLogin');
           Dialog.confirm({
            title: '警告',
            message: '确定要退出吗'
            }).then(() => {
                localStorage.removeItem('isLogin');
                this.$router.go(0)
            }).catch(() => {
            // on cancel
            });
        }
    },
    created() {
        if(localStorage.getItem('isLogin', 'ok')) {
            this.phone = localStorage.getItem('isLogin')
            console.log(this.phone)
        }
    }
}
</script>

