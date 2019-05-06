<template>
    <div class="end">
        <Header :title="title" />
            <van-address-list
            v-model="chosenAddressId"
            :list="list"
            select
            @add="onAdd"
            @edit="onEdit"
            add-button-text='立即支付'
            />
            <ul>
                <li class="ll" v-for="(item,index) of msgs" :key="index">
                    <span style="float: left; font: 15px/20px '';margin-left: 2rem">{{item}}</span>
                </li>
            </ul>
            <div id="newPro" @click="crePro">
            <div class="zuo">
                <span class="jian"><img class="jihao" src="../assets/image/jian.png" alt=""></span>
                <span class="zi">添加联系人</span>
            </div>
            <div class="you">
                <span class="you1" @click="tanchu"> > </span>
            </div>
            <div>
                <van-address-edit
                    v-show= 'change'
                    show-delete
                    show-set-default
                />
            </div>
         
         </div>
        
        
    </div>
</template>
<style lang = 'less'>
    #newPro{
        width: 100%;
        height: 3rem;
        background: #fff;
        .zuo{
            box-sizing: border-box;
            float: left;
            position: relative;
            .jian{
                display: inline-block;
                position: absolute;
                width: 1.8rem;
                height: 1.8rem;
                background: blue;
                top:0;bottom: 0;left: 0.5rem;
                border-radius: 0.3rem;
                margin: auto;
                .jihao{
                    display: inline-block;
                    width: 1.2rem;
                    height: 1.2rem;
                    position: absolute;
                    top:0;bottom: 0;left: 0;right:0;
                    margin:auto;
                }
            }
            .zi{
                font: 0.8rem/3rem '';
                color: #00000a;
                margin-left: 3rem;
            }
        }
        .you{
            float: right;
            width: 1.5rem;
            height: 3rem;
            .you1{
               font: 1.4rem/3rem ''; 
               margin-right: 0.8rem;
               color: #838383;
            }
        }
    }
    .van-address-list{
        padding: 0
    }
    .ll{
        overflow: hidden;
    }
</style>

<script>
import Header from '@/comment/Header'
import { Toast } from 'vant';

Vue.use(Toast)
import Vue from 'vue'
import { AddressEdit } from 'vant';
import { AddressList } from 'vant';

Vue.use(AddressList);
Vue.use(AddressEdit);
import { ContactCard, ContactList, ContactEdit } from 'vant';
import { PasswordInput, NumberKeyboard } from 'vant';

Vue.use(PasswordInput).use(NumberKeyboard);
Vue
  .use(ContactCard)
  .use(ContactList)
  .use(ContactEdit);
export default {
    components: {Header},
    data() {
        return{
            value: '',
            msgs: [],
             showKeyboard: true,
            title: '信息填写',
            change: false,
            chosenAddressId: '1',
             list: [
               
              ]
        }
    },
    methods: {
        
        crePro() {
            const newPro = document.getElementById('newPro')
            // console.log(newPro)
            newPro.style.background = '#fff'
            
           if(this.change) {
               return (this.change = true,console.log('1111'))
           } else {
               return this.change = false
           }
           
        },
        tanchu() {
            console.log('11')
            this.$router.push('/newmap')
        },
        onAdd() {
            console.log('addaddaad')
            Toast.loading({
               mask: true,
               message: '支付中...'
            });
            setTimeout(() => {
                this.$router.push('/pay')
            },3000)
        },
        onEdit() {
            console.log('1111')
        }
    },
    mounted() {
       this.msgs = JSON.parse(localStorage.getItem('msg'))
       console.log(this.msgs)
    }
}
</script>
