<template>
    <div class="searchp">
        <Header :title="title"/>
        <ul class="lul">
          <router-link tag="li" :to="{name: 'detail',query: {id: item.id}}" class="llist" v-for="item of plist" :key="item.id">
              <!-- <div class="ldiv">
                  <img class="limgl" :src="item.image" alt="">
                  <span class="hot"><img src="../assets/image/hot1.png" alt=""></span>
              </div>
              <van-button class="lp" type="warning">{{item.shopname}}</van-button>
              <van-button class="lp" type="warning">{{item.brand}}</van-button> -->
              <div class="ldiv">
                 <img class="limgl" :src="item.image" alt="">
               </div>
                 <div class="lr">
                     <h3>{{item.shopname}}</h3>
                     <p class="jie">{{item.brand}}地表最强的手机就选这  真的值得你来拿..</p>
                     <p class="pp">{{item.price}}元</p>
                 </div>
                <div class="rl">
                    <button @click="buy">购买</button>
                </div>
          </router-link>
         
      </ul>
    </div>
</template>
<script>
import api from '@/api/search'
import { Notify } from 'vant';
import Header from '@/comment/Header'
Vue.use(Notify);
export default {
    components: {Header},
    data() {
        return{
            plist: [],
            title: '搜索详情页'
        }
    },
    methods: {
        buy() {
            Notify({
                background: '#5550fa',
                message: '欢迎光临^_^',
                 duration: 1000,
            })
        }
    },
    mounted() {
        const name = this.$route.query.name;
        console.log(name)
        api.requestName(name).then(data => {
            this.plist = data.data
            console.log(this.plist)

        })
    }
}
</script>
<style>
.rl{
    float: right;
    margin-top: 3.4rem; 
    margin-right: 0.5rem
}
button{
    border: 0;
    background: rgba(177, 176, 176, 0.911);
    font: 1rem/1.2rem '';
    color: #fff;
    width: 5rem;
    height: 2rem;
    border-radius: 0.9rem
}
.lul{
   margin-top: 1rem;
   padding: 0
}
.hot{
    position: absolute;
    left: 0rem;
    top: -1.5rem
}
    .llist{
        
        width: 100%;
        height: 8rem;
        list-style: none;
        margin: 0;
        /* background: rgba(93, 243, 248, 0.1) */
    }
    .ldiv{
        width: 5rem;
        height: 6.5rem;
        margin: 0;
        margin-left: 0.5rem;
        border: 1px solid #ccc;
        background: #ccc;
        float: left;
        border-radius: 0.5rem
        /* padding: 0 */
    }
    .limgl{
         width: 5rem;
        height: 6rem;
        display: inline-block;
        
    }
    .lp{
        text-align: center;
        font: 1rem/1.2rem '';
        color: blueviolet;
        font-weight: 700;
        display: block
    }
    .lr{
        float: left;
        width: 10rem;
        height: 6rem;
        border-bottom: 1px solid #ccc;
        margin-left: 1rem
    }
    h3{
        margin: 0;padding: 0;
         white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font: 1rem/1.1rem '';
        color: #000;
        text-align: left;
        /* margin-left: 2rem */
    }
    .pp{
        color:rgba(3, 3, 3, 0.904);
        font: 0.8rem/1.2rem '';
        text-align: left;
        font-weight: 500;
        /* margin-left: 2rem */
    }
    .jie{
        color: darkgray;
        font: 0.7rem/1rem '';
        text-align: left;
    }
</style>
