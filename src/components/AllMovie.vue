<template>
    <div class="allMovie">
       <Header :title="title" />
        <mt-loadmore :top-method="loadTop" ref="loadmore">
             <ul>
                 <router-link tag="li" :to="{name:'detailm',query: {id: item.id}}" v-for="item of allList" :key="item.id">
                    <div class="lall">
                        <img class="allimg" :src="item.images.small" alt="">
                        
                    </div> 
                         <div class="rall">
                        <p>电影名：<span class="mc">{{item.title}}</span></p>
                        <p>类型：<span class="mc">{{item.genres}}</span></p>
                        <p>导演：<span class="mc">{{item.directors[0].name}}</span></p>
                        <p>演员：{{item.casts[0].name}},{{item.casts[1].name}}</p>
                        <van-button class="btn" type="primary">加入收藏</van-button>
                        </div>     
                 </router-link>
             </ul>
        </mt-loadmore>
       
    </div>
</template>
<style>
.btn{
    width: 4.5em;
    height: 1.8rem;
    background: rgba(72, 151, 151, 0.699);
    display: inline-block;
    font: 1rem/1.8rem;
    border-radius: 0.5rem;
    margin-left: 9rem;
    text-align: center;
    color: #fff
}
.mint-search {
    height: 3.4rem;
}
.mc{
    color:darkblue
}
.lall{
        float: left;
        width: 8rem;
        height: 10rem;
        /* background: #f22 */
    }
    .rall{
        float: left;
        font: 1rem/2rem '';
        text-align: left
        
    }
    li{
        list-style: none;
        width: 100%;
        border-bottom: 1px solid #ccc; 
        height: 10rem;
        margin-bottom: 3px
    }
    .allimg{
        width: 8rem;
        height: 10rem;
        /* display: inline-block; */
        border-radius: 0.8rem
    }
    p{
        width: 12rem;
        margin: 0;
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow: hidden;
    }
    ul{
        margin: 0;
        padding: 0
    }
    
</style>

<script>
import Vue from 'vue'
import Header from '@/comment/Header'
import { Loadmore } from 'mint-ui';
import { Toast } from 'mint-ui';
import { Search } from 'mint-ui';
import api from '@/api/home'
Vue.component(Search.name, Search,Toast);
Vue.component(Loadmore.name, Loadmore);
export default {
    components: {Header},
    data() {
        return {
            value: '',
            allList: [],
            alll: [],
            allLoaded: false,
            pageCode: 1,
            title:'全部电影'
        }
    },
    methods: {
        Msearch() {
            console.log('1111')
            
        },
        loadTop() {
            api.loadMore(this.pageCode).then(data => {
                if(data.length === 0) {
                    this.allLoaded = true
                    Toast({
                    message: '加载完成',
                    position: 'bottom',
                    duration: 1500
                    });
                } else {
                    // this.list = [...this.list, ...data]
                    this.list = this.alll
                    this.pageCode += 1
                }
                this.$refs.loadmore.onTopLoaded()
            })
        },
        
    },
    mounted() {
        api.requestListAll().then(data => {
            // console.log(data);
            this.allList = data
            // console.log(this.allList[0])
        }).catch(err => console.log(err))
         api.loadMore().then(res => {
        this.alll = res.data
      })
    }
}
</script>

