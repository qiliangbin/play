<template>
     <div class="newmap">
         <Header :title="title" />
        <van-cell-group>
            <van-field
                v-model="name"
                label="姓名"
                type="textarea"
                placeholder="请输入您的姓名"
                rows="1"
                autosize
            />
             <van-field
                v-model="tel"
                label="电话"
                type="textarea"
                placeholder="请输入您的电话"
                rows="1"
                autosize
            />
             <van-field
                v-model="address"
                label="地址"
                type="textarea"
                placeholder="请输入您的详情地址"
                rows="1"
                autosize
            />
        </van-cell-group>
            <van-button size="normal" @click="bao" class="btn" plain type="info">保存</van-button>
            <van-button size="normal" @click="del" class="btn" plain type="danger">删除</van-button>
    
    </div>
</template>
<script>
import Header from '@/comment/Header'
import { Button } from 'vant';

Vue.use(Button);
import Vue from 'vue'
import { Field } from 'vant';

Vue.use(Field);
export default {
    components: {Header},
    data() {
        return{
            title: '添加地址',
            name: '',
            tel: '',
            address: ''
        }
    },
    methods: {
       bao() {
           var content = {id: this.id, name: this.name, tel: this.tel, address: this.address}
           localStorage.setItem('msg',JSON.stringify(content))
           this.id=this.name = this.tel = this.address = ''
           
               this.$router.push('/end')
           
       },
       del() {

       }
    }
}
</script>
<style>

.btn{
    display: block;
    margin: 1rem auto;
    width: 12rem;

}
</style>


