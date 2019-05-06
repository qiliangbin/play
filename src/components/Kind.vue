<template>
    <div class="kind">
        <Header :title="title" />
        <ul>
            <!-- <li ref="gai" class="li" @click="inin" v-for="item of mlist" :key="item.id"> -->
                <router-link class="li" tag="li" to="allmovie" @click="inin" v-for="item of mlist" :key="item.id">
                    <p>{{item.genres[2]}}/{{item.genres[1]}}/{{item.genres[0]}}</p>
                </router-link>
            <!-- </li> -->
                <li @click="phone1" class="li1">vivo</li>
                <li @click="phone2" class="li1">魅族</li>
                <li @click="phone3" class="li1">三星</li>
                <li @click="phone4" class="li1">华为</li>
        </ul>
    </div>
</template>
<script>
import { TreeSelect } from 'vant';
import api from '@/api/home'
import Vue from 'vue'
Vue.use(TreeSelect);
import Header from '@/comment/Header'
export default {
    components: {Header},
    data() {
        return{
            title: '分类',
            mlist: [],
        
        }  
  },
  methods: {
    
    inin() {
        this.$router.push('/allmovie')
    },
    phone1() {
        this.$router.push('/searchp?name=魅族')
    },
    phone2() {
        this.$router.push('/searchp?name=魅族')
    },
    phone3() {
        this.$router.push('/searchp?name=三星')
    },
    phone4() {
        this.$router.push('/searchp?name=华为')
    }
  },
  created() {
      api.requestMovieList().then(data => {
            this.mlist = data;
            console.log(this.mlist)
        })
  }
}
</script>
<style>
ul{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap
}
.li{
    width: 48%;
    /* height: 2rem; */
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#2216638c), to(#8a61ccbe));
    font: 1rem/1.5rem '';
    color: #fff;
    margin-top: 0.2rem;
    padding: 0;
    margin-left: 2%
}
.li1{
    width: 48%;
    height: 56px;
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#2216638c), to(#8a61ccbe));
    font: 18px/56px '';
    color: #fff;
    margin-top: 0.2rem;
    padding: 0;
    margin-left: 2%
}

</style>


