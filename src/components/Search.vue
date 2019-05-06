<template>
    <div class="search">
        <van-nav-bar
        title="搜索"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
        @search.native='search'
        v-on:input = 'inputFunc'
        >
        <div slot="action" v-model="value" @search.native='search' @click="onSearch">搜索</div>
        </van-search>
        <div class="sc" v-show="sresult">
            <li class="sli" v-for="(item,index) in searchData" :key="index">
                {{item.name}}
            </li>
        </div>
        <p class="ppp">热门搜索：</p>
        <ul>
                <van-button class="movi" @click="onClick2">千与千寻</van-button>
                <van-dialog
                v-model="isShow2"
                show-cancel-button
                title="千与千寻"
                :beforeClose="beforeClose"
                >
                <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1606727862.webp">
                </van-dialog>
                
                <van-button class="movi" @click="onClick1">阿甘正传</van-button>
                <van-dialog
                v-model="isShow1"
                show-cancel-button
                title="阿甘正传"
                :beforeClose="beforeClose2"
                >
                <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p510876377.webp">
                </van-dialog>

                <van-button class="movi" @click="onClick">教父</van-button>
                <van-dialog
                v-model="isShow"
                show-cancel-button
                title="教父"
                :beforeClose="beforeClose3"
                >
                <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2190556185.webp">
                </van-dialog>
            <!-- <router-link class="movi" tag="li" to='#'>阿甘正传</router-link>
            <router-link class="movi" tag="li" to='#'>教父</router-link> -->
            
        </ul>
        <!-- <van-button class="movi" @click="onClick">登录</van-button> -->
          
    </div>
</template>
<script>
import api from '@/api/search'
import { Dialog } from 'vant';
import { Button } from 'vant';

Vue.use(Button);
Vue.use(Dialog);
import Vue from 'vue'
import { Search } from 'vant';

Vue.use(Search);
export default {
    data() {
        return{

            value: '',
            isShow: false,
            isShow1: false,
            isShow2: false,
            list: [],
            searchm: [
                {name: "肖申克的救赎"},
                {name: "霸王别姬"},
                {name: '大话西游'},
                {name: '阿甘正传'},
                {name: '夏洛特烦恼'},
                {name: '喜剧之王'},
                {name: '低俗喜剧'},
                {name: '这个杀手不太冷'},
                {name: '美丽人生'},
                {name: '泰坦里克号'},
                {name: '千与千寻'},
                {name: '辛德勒的名单'},
                {name: '盗梦空间'},
                {name: '机器人总动员'},
                {name: '忠犬八公的故事'},
                {name: '三傻大闹宝莱坞'},
                {name: '海上钢琴师'},
                {name: '楚门的世界'},
                {name: '教父'},
            ],
            mlist: [],
            sresult: false
        }
    },
    methods: {
        onSearch(value) {
            this.$router.push({path: 'searchp', query: {name: this.value}})
            // api.requestPhoneShopName
            
    //   if (localStorage.getItem('history')) {
    //     this.history = JSON.parse(localStorage.getItem('history'))
    //     console.log(this.history)
    //     // this.history.push(this.value)
    //     // localStorage.setItem('history', JSON.stringify(this.history))
    //   } else {
    //     console.log(this.history)
    //     this.history.push(this.value)
    //     console.log(typeof this.history)
    //     console.log(this.history)
    //     this.history = JSON.stringify(this.history)
    //     console.log(this.history)
    //     console.log(typeof this.history)
    //     localStorage.setItem('history', this.history)
    //   }
        },
        search() {
            this.$router.push({path: 'msearch', query: {name: this.value}})
        },
        beforeClose(action, done) {
            if (action === 'confirm') {
                setTimeout(this.$router.push('/detailm?id=1291561'), 1000);
            } else {
                done();
            }
        },
        beforeClose2(action, done) {
            if (action === 'confirm') {
                setTimeout(this.$router.push('/detailm?id=1292720'), 1000);
            } else {
                done();
            }
        },
        beforeClose3(action, done) {
            if (action === 'confirm') {
                setTimeout(this.$router.push('/detailm?id=1291841'), 1000);
            } else {
                done();
            }
        },
        onClickLeft() {
            this.$router.go(-1)
        },
        inputFunc() {
            if(this.value.length > 0) {
                this.sresult = true
                console.log('yyyyy')
            } else {
                this.sresult = false
            }
        },
        onClick() {
            this.isShow=true
            // this.$router.push('/detailm?id=1291561')
        },
        onClick1() {
            this.isShow1=true
            // this.$router.push('/detailm?id=1291561')
        },
        onClick2() {
            this.isShow2=true
            // this.$router.push('/detailm?id=1291561')
        },
   
    },
    computed: {
        searchData() {
      var value = this.value;
      if (value) {
        return this.searchm.filter(function(product) {
          return Object.keys(product).some(function(key) {
            return String(product[key]).toLowerCase().indexOf(value) > -1
          })
        })
      }
      return this.products;
    }
    },
    mounted() {
        api.requestListAll().then(data => {
            this.mlist = data;
            console.log(this.mlist)
        })
        api.requestList().then(data => {
            // console.log('listd',data.data)
            this.list = data.data
            console.log(this.list,'11111')
        })
        if(localStorage.getItem('history')) {
            this.history = localStorage.getItem('history')
            console.log(this.history)
        }
        // api.requestPhoneBrand().then(data => {
        //     console.log(data.data)
        // })
    }
}
</script>
<style>
.ro{
     width: 4.5rem;
    height: 2rem;
    background: rgba(94, 82, 163, 0.5);
    border-radius: 1rem;
    font: 0.8rem/2rem '';
    color: #fff;
    margin-left: 0.8rem
}
.search{
    position: relative;
}
.sli{
    position: absolute;
    list-style: none;
    font: 1.2rem/2rem "";
    color:cornflowerblue;
    text-align: left;
    margin-left: 20px
}
ul{
    display: flex;
    margin-top: 6rem;
   
}
.van-dialog__header{
    font: 1.2rem/2rem '';
    padding-top: 0.8rem;
    color: rgba(157, 140, 233, 0.596)
}
.ppp{
    text-align: left;
    margin-left: 0.8rem;
    position: fixed;
    top:6.5rem
}
.pp{
    text-align: left;
    margin-left: 0.8rem;
    position: fixed;
    top:11.5rem
}
.movi{
    width: 4.5rem;
    height: 2rem;
    background: rgba(94, 82, 163, 0.5);
    border-radius: 1rem;
    font: 0.8rem/2rem '';
    color: #fff;
    margin-left: 0.8rem
}
img{
    display: block;
    width: 100%;
    height: 100%;
}
.van-button--normal{
    padding: 0
}
</style>


