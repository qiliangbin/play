<template>
    <div class="city">
        <Header :title="title"/>
        <ul>
            <li class="cli" v-for="item of citySelect" :key="item.id">
                <div>
                    <a class="ca">{{item.letter}}</a>
                    <ul>
                        <li class="cchild" v-for="im of item.cities" :key="im.id">
                            <router-link to="#">{{im.name}}</router-link>
                        </li>
                    </ul>
                </div>
                
            </li>
        </ul>
       
    </div>
</template>
<style>
.cli{
    text-align: left;
    margin: 0.5rem 0.3rem;
    
}
.cchild {
    display: inline-block;
    margin-right: 1rem 
}
    .ca{
        display: inline-block;
        width: 4rem;
        height: 1.5rem;
        background: #eee;
        text-align: center;
        font: 0.8rem/1.5rem ''
    }
</style>
<script>
import api from '@/api/city'
import Header from '@/comment/Header'
import axios from 'axios'

import Vue from 'vue';

export default {
    components: {Header},
    data() {
        return{
            title: '城市选择',
            citySelect: [],
        }
    },
    methods: {
        onNavClick() {},
        onItemClick() {}
    },
    mounted() {
        api.requestCity().then(data => {
            this.citySelect = data.data
            console.log(this.citySelect)
        }).catch(error => console.log(error))
    }
}
</script>



