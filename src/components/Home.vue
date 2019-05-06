<template>
    <div class="home">
        <div class="hsearch">
            <p class="hp">
                <img class="himg"  @click="cit" src="@/assets/image/dibiao.svg" alt="">
            </p>
            <van-search placeholder="请输入搜索关键词" @search="sear" @click="ss" v-model="value" />
        </div>
        

        <!-- Swiper -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" style="background-image:url(img/nature1.jpg)">
                <img class="simg" src="../assets/image/f.jpg" alt="">
            </div>
            <div class="swiper-slide" style="background-image:url(img/nature2.jpg)">
                <img class="simg" src="../assets/image/a.jpg" alt="">
            </div>
            <div class="swiper-slide" style="background-image:url(img/nature3.jpg)">
                 <img class="simg" src="../assets/image/s.jpg" alt="">
            </div>
            <div class="swiper-slide" style="background-image:url(img/nature4.jpg)">
                 <img class="simg" src="../assets/image/z.jpg" alt="">
            </div>
            <div class="swiper-slide" style="background-image:url(img/nature5.jpg)">
                 <img class="simg" src="../assets/image/0.jpg" alt="">
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
            <!-- <van-swipe :autoplay="1500" indicator-color="white">
                <van-swipe-item>
                    <img class="simg" src="../assets/image/f.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img class="simg" src="../assets/image/a.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img class="simg" src="../assets/image/s.jpg" alt="">
                </van-swipe-item>
               <van-swipe-item>
                    <img class="simg" src="../assets/image/z.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img class="simg" src="../assets/image/0.jpg" alt="">
                </van-swipe-item>
            </van-swipe> -->
            <div class="movieList">
                
                <div class="hall">
                    <p class="allp" @click="goMovie">全部影片>></p>
                </div>
                <ul class="mul">
                    <router-link :to="{name: 'detailm', query: {id: item.id}}" tag="li" v-for="item of Mlist" :key="item.id" class="mli">
                        <div class="mdiv">
                            <img class="Mimg" :src="item.images.small" alt="">
                            <p class="mp">
                             <!-- {{item.title}} -->
                             </p>
                        </div>
                        
                    </router-link>
                </ul>
            </div>
            <div class="xuanze">
                <a class="le" @click="vivo">
                    <!-- <img class="huo" src="../assets/image/huo.png" alt=""> -->
                    <img class="img1" src="http://img12.360buyimg.com/n7/jfs/t1/10071/27/8854/586976/5c3be178E6db1144c/d9118f3f2e129d7d.jpg" alt="">
                    <p class="hh">vivo商城做活动</p>
                </a> 
                <div class="ri">
                    <div class="sh">
                        <!-- <img class="img2" src="../assets/image/12.jpg" alt=""> -->
                        
                    </div>    
                    <div class="xia">
                        <img @click="meizu" class="img2" src="http://img13.360buyimg.com/n7/jfs/t1/3169/34/9323/273089/5baca801E346da6f3/ae692ddc8d1f07b0.jpg" alt="">
                        <p class="zii"></p>
                    </div> 
                </div>   
            </div>
            <List :list='list' />

        
    </div>
</template>
<script>

import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import Vue from 'vue'
import List from './List'
import api from '@/api/home'
import { Search } from 'vant';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Search).use(Swipe).use(SwipeItem);
export default {
    components: {List,Swiper,swiperSlide},
    data() {
        return {
            value:'',
            list: [],
            Mlist: []
        }
    },
    methods: {
        vivo() {
            setTimeout(() => {
                this.$router.push('/searchp?name=vivo')
            },200)
        },
        meizu() {
            this.$router.push('/searchp?name=魅族')
        },
        cit() {
            this.$router.push('/city')
        },
        sear() {
            this.$router.push('/search')
            console.log('13')
        },
        ss() {
            this.$router.push('/search')
        },
        goMovie() {
            console.log('gogogogog')
            this.$router.push('/allmovie')
        }
    },
    mounted() {
        api.requestPhoneList().then(data => {
            this.list = data.data;
            console.log(this.list)
        });
        api.requestMovieList().then(data => {
            this.Mlist = data
            console.log(this.Mlist[0].id)
        }).catch(err => console.log(err))
         var swiper = new Swiper('.swiper-container', {
             speed:2500,
             autoplay: {
                delay: 1500,
                stopOnLastSlide: false,
                disableOnInteraction: true,
                },
        pagination: '.swiper-pagination',
        effect: 'cube',
        grabCursor: true,
        cube: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    });
    }
}
</script>
<style>
/* html, body {
        position: relative;
        height: 100%;
    } */
    body {
        background: #fff;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color:#000;
        margin: 0;
        padding: 0;
    }
    .swiper-container {
        width: 300px;
        height: 300px;
        /* position: absolute; */
        left: 50%;
        top: 50%;
        margin-left: -150px;
        margin-top: -150px;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
        height: 100%;
    }
    .swiper-wrapper{
        height: 60%;
    }
.home{
    /* position: relative; */
}







.xuanze{
    width: 100%;
    overflow: hidden;
    margin-top: 0.6rem;
    border-top: 1px solid rgba(171, 231, 218, 0.774)
}
.le{
    width: 48%;
    height: 12rem;
    /* background: #f66; */
    float: left;
    position: relative;
    display: block
}
.hh{
    width: 100%;
    height: 2rem;
    background: rgba(131, 39, 116, 0.678);
    position: absolute;
    font: 1rem/2rem '';
    color: #fff;
    bottom: 0;
    left: 0;
}
.img1{
     width: 100%;
    height: 12rem;
    display: block;
    margin-top: 3rem; 
}
.img1:hover{
    margin-top: 0;
}
.ri{
    width: 40%;
    height: 12rem;
    /* background: #f66; */
    float: right;
    margin-right: 1rem
}
.sh{
    width: 100%;
    height: 5.8rem;
    /* background: #a55; */
    margin-bottom: 0.4rem
}
.img2{
    width: 100%;
    height: 9rem;
    display: block;
    margin-top: -6.2rem
}
.xia{
    width: 100%;
    height: 5.8rem;
    /* background: #a55 */
}
.hall {
    width: 100%;
    height: 2rem;
    border-radius: 0.3rem;
    font: 0.8rem/2rem '';
    color:mediumslateblue;
    background:rgba(35, 9, 182, 0.3);
    opacity: 30%;
}
.allp {
    float: right;
    margin: 0
}
.mul{
    width: 100%;
    display: flex;
    flex-flow: nowrap;
    overflow-x: auto

}
.mp{
    margin: 0;
    position: absolute;
    bottom: 0;left: 0;
    font: 10px/10px ''
}
.Mimg{
    width: 100%;
    height: 7rem;
    display: inline-block;
    border-radius: 1rem
}
.mli{
    width: 25%;
    height: 7rem;
    margin-right:2px ;
    justify-content: space-around;
    overflow: auto;
    position: relative;
}
    .hp{
        float: left;
        margin-bottom: 0 ;
        /* margin-top: 16px */
        /* height: 40px; */
    }
   .simg{
       width: 100%;
       height: 11rem;
       display: block
   }
    .himg{
        display: inline-block;
        width: 40%;
    }
    van-search{
        float: right;
    }
   .home{
       overflow: auto
   }
</style>


