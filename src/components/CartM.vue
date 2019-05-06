<template>
    <div class="cartm">
        <Header :title="title" />
       <ul class="list">
        <li v-for="item of movieList" :key="item.id">
          <div class="small"  style="margin-bottom: 0.2rem">
            <van-card
            :num="item.num"
            :tag="item.genres"
            :desc="item.genres"
            :title="item.title"
            :thumb="item.image"
          />

          <img @click="delll" class="i" src="../assets/image/del.png" alt="">
          <van-stepper class="ji" v-model="item.num" />
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
import { Card } from 'vant';
import { Stepper } from 'vant';
import { Toast } from 'vant';

Vue.use(Toast);
import Vue from 'vue'
Vue.use(Card).use(Stepper);
import Header from '@/comment/Header'
export default {
    components: {Header},
    data() {
        return{
            title: '电影收藏夹',
            movieList: [],
            tag: ''
        }
    },
    methods: {
        delll(index) {
            this.movieList.splice(index,1)
            let movlist = JSON.stringify(this.movieList)
            localStorage.setItem('movie', movlist)
            Toast.success('删除成功');
            console.log('1111')
        }
    },
    created() {
        this.movieList = JSON.parse(localStorage.getItem('movie'))
        console.log(this.movieList)
        
    }
}
</script>
<style>
.cartm{
    width: 100%;
    height: 100%;
}
.small{
    position: relative;
}
.van-card__header{
    background: #f7f1f1

}
.i {
    width: 2rem;
    height: 2rem;
    display: inline-block;
    position: absolute;
    top: 4rem;
    right: 1rem;
}
.ji{
position: absolute; 
left: 12rem;top: 4rem
}
</style>
