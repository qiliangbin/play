<template>
    <div class="detail">
        <Header :title="title" />
        <div class="content">
            <div class="fu">
              
            </div>
            <img class="dddimg" :src="mlist.images.small" alt="">
            <div class="dimg">
                <img class="ddimg" :src="mlist.images.small" alt="">
            </div>
            <div class="dmsg">
                
            </div>
            <van-tabs v-model="active">
        <van-tab title="简介">
          <div class="intro">
              20世纪40年代末，小有成就的青年银行家安迪（蒂姆·罗宾斯 Tim Robbins 饰）因涉嫌杀害妻子及她的情人而锒铛入狱。在这座名为肖申克的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生。未过多久，安迪尝试接近囚犯中颇有声望的瑞德（摩根·弗里曼 Morgan Freeman 饰），请求对方帮自己搞来小锤子。以此为契机，二人逐渐熟稔，安迪也仿佛在鱼龙混杂、罪恶横生、黑白混淆的牢狱中找到属于自己的求生之道。他利用自身的专业知识，帮助监狱管理层逃税、洗黑钱，同时凭借与瑞德的交往在犯人中间也渐渐受到礼遇。表面看来，他已如瑞德那样对那堵高墙从憎恨转变为处之泰然，但是对自由的渴望仍促使他朝着心中的希望和目标前进。而关于其罪行的真相，似乎更使这一切朝前推进了一步…… （ 本片根据著名作家斯蒂芬·金（Stephen Edwin King）的原著改编。）
          </div>
      </van-tab>
      <van-tab title="讨论">
          <img class="ttt" src="../assets/image/t1.png" alt="">
      </van-tab>
      <van-tab title="点评">
        <img class="ttt" src="../assets/image/t2.png" alt="">
      </van-tab>
      <van-tab title="更多">
        <img class="ttt" src="../assets/image/t3.png" alt="">
      </van-tab>
    </van-tabs>
        </div>
        <div class="dfo">
            <van-goods-action>
              <van-goods-action-mini-btn
    icon="cart-o"
    text="购物车"
    @click="car"
  />
  <van-goods-action-big-btn
    text="加入收藏"
    @click="join"
  />
  <van-goods-action-big-btn
    primary
    text="立即收藏"
    @click="buy"
  />
</van-goods-action>
        </div>
    </div>
</template>
<script>
import Header from '@/comment/Header'
import api from '@/api/home'
import { Tab, Tabs, Toast } from 'vant'
Vue.use(Tab).use(Tabs).use(Toast)

import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant';
import Vue from 'vue'
Vue
  .use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(GoodsActionMiniBtn);
export default {
    components: {Header},
    data() {
        return{
            title: '电影详情页',
            mlist: [],
            alll: []
        }
    },
    methods: {
     
        buy() {
            console.log('222')
            console.log(this.mlist)
            let obj = {
              id: this.mlist.id,
              image: this.mlist.images.small,
              title: this.mlist.title,
              genres: this.mlist.genres,
              num: 1
            }
            if(localStorage.getItem('movie')) {
              let asd = []
              asd = JSON.parse(localStorage.getItem('movie'))
              console.log(asd)
              asd.push(obj)
              asd = JSON.stringify(asd)
              localStorage.setItem('movie',asd)
            } else {
              let m = []
              m.push(obj)
              m = JSON.stringify(m)
              localStorage.setItem('goods', m)
            }
            this.$router.push('/cartm')
        },
        join() {
            console.log('ss');
            const id = this.id
            // console.log(id,'1111')
            api.requestMovieData(id).then(data => {
              let mov = data
              console.log(mov)
              let movall = localStorage.getItem('movie')
              console.log(movall)
              let carmov = JSON.parse(movall)
              console.log(carmov)
              if(carmov === null) {
                carmov = []
              } 
              var isNew = true
              var arr = {
                id: mov[0].id,
                geners: mov[0].genres,
                image: mov[0].images.small,
                title: mov[0].title,
                num: 1
              }
              // console.log(arr)
              if(carmov !== []) {
                for(var i=0; i<carmov.length; i++) {
                  if(id === carmov[i].id) {
                    carmov[i].num++
                    isNew === false
                  }
                }
              }
              if(isNew===true) {
                carmov.push(arr)
              }
              let strmov = JSON.stringify(carmov)
              localStorage.setItem('movie',strmov)
              Toast('添加成功')
            })
        },
        car() {
            this.$router.push('/cartm')
        },
        onClickMiniBtn() {

        }
    },
    mounted() {
      const id = this.$route.query.id
      console.log(id)
      api.requestMovieData(id).then(data => {
        this.mlist = data[0]
        this.id = id
        console.log(this.mlist)
      }).catch(err => console.log(err))
     
    },
    
}
</script>
<style>
.ttt{
  width:100%;
  height: 100%;
}
.dimg{
    width: 100%;
    height: 20rem;
    position:absolute;
  top: 2rem;left: 1rem
}
.ddimg{
  display: block;
  width: 90%;
  height: 100%;
  border-radius: 1rem;
  
}
.dddimg{
  width: 100%;
  height: 20rem;
  display: block;
  position:absolute;
  left: 0;
  top: 2rem;
  z-index: -100;
 
}
.fu:hover{
transform: scale(2)
}
.fu{
   widows: 100%;
  height: 18rem;
  position: relative;
  background: rgba(71, 70, 70, 0.2);
   transform: all 0.6s;
   overflow: hidden;
}
</style>

