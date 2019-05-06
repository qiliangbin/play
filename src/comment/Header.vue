<template>
    <div id="header">
        <van-nav-bar
            :title="title"
            left-arrow
            right-text="..."
            @click-right="onClickRight"
            @click-left="onClickLeft"
        />
    </div>
</template>
<style>
#header{
    width: 100%;
}
</style>
<script>
import { NavBar } from 'vant';
import Vue from 'vue';
Vue.use(NavBar);
export default {
    props: ['title'],
    data() {
        return{
         
        }
    },
    methods: {
    onClickLeft() {
        this.$router.go(-1)
    },
    onClickRight() {
        this.$router.push('/cartm')
    }
    }
}
</script>

