<template>
  <div class="cart">
      <Header :title="title" />
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
     
      <van-checkbox
        class="card-goods__item"
        v-for="item in phoneList"
        :key="item.id"
        :name="item.id"
      >
      <div class="list">
        <van-card
          :title="item.title"
          :desc="item.shopname"
          :num="item.num"
          :price="item.price+0"
          :thumb="item.image"
        >
        <!-- <van-stepper class="ji" v-model="value" /> -->
            <div slot="footer">
                <input type="number" min="1" max="10" class="ji" v-model="item.num" />
                <van-button @click="del(index)" class="btns" type="danger" size="mini"><img class="delll" src="../assets/image/del.png" alt=""></van-button>
            </div>
       
        </van-card>
        </div>
      </van-checkbox>
    </van-checkbox-group>
    
    <van-submit-bar
      :price="totalPrice*100"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
    
  </div>
  
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from 'vant';
import { Dialog } from 'vant';
import Header from '@/comment/Header'
import { Stepper } from 'vant';
Vue.use(Dialog).use(Stepper)
export default {
  components: {
      Header,
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
   beforeRouteEnter(to, from ,next) {
        if (localStorage.getItem('isLogin') === 'ok') {
            
            next()
        } else {
            
            next('/login')
            Toast.loading({
            mask: true,
            message: '还没登录呢..'
            });
        }
    },
  data() {
    return {
      phoneList: [],  
      movieList: [],
      checkedGoods: [],
      title: '购物车',
    };
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return '结算' + (count ? `(${count})` : '');
    },
    totalPrice() {
      return this.phoneList.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price*item.num : 0), 0);
    }
  },
  methods: {
    formatPrice(price) {
      return (price);
    },
    onSubmit() {
      Toast('点击结算');
      this.$router.push('/end')
    },
    del(index) {
        Dialog.confirm({
        title: '警告',
        message: '确定要删除宝贝吗'
        }).then(() => {
            if(true) {
                this.phoneList.splice(index, 1)
                let strlist = JSON.stringify(this.phoneList)
                localStorage.setItem('phone', strlist)
                Toast.success('删除成功');
            }
        }).catch(() => {
        // on cancel
        });
        
        console.log('deldel')

    }
  },
  created() {
      this.phoneList = JSON.parse(localStorage.getItem('phone'))
      console.log(this.phoneList)
      this.movieList = JSON.parse(localStorage.getItem('movie'))
      console.log(this.movieList)
  }
};
</script>

<style lang="less">
.ji{
  width: 3rem;
  height: 2rem;
  display: inline-block;
  // background: #f44;
  text-align: center;
  position: absolute; 
  left: 10rem;top: 5rem;
  border: 0;
}
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      font: 1rem/1.5rem '';
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
    .btns{
        width: 30px;
        height: 30px;
        border-radius: 5px;
        background: #fff;
        text-align: center;
        display: inline-block
    }
    .delll{
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>