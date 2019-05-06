import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home.vue'
const Home = () => import('@/components/Home')
const Kind = () => import('@/components/Kind')
const KindP = () => import('@/components/KindP')
const User = () => import('@/components/User')
const Cart = () => import('@/components/Cart')
const CartM = () => import('@/components/CartM')
const AllMovie = () => import('@/components/AllMovie')
const City = () => import('@/components/City')
const Pay = () => import('@/components/Pay')
const List = () => import('@/components/List')
const Search = () => import('@/components/Search')
const MSearch = () => import('@/components/MSearch')
const SearchP = () => import('@/components/SearchP')
const Detail = () => import('@/components/Detail')
const DetailM = () => import('@/components/DetailM')
const Login = () => import('@/components/Login')
const End = () => import('@/components/End')
const NewMap = () => import('@/components/NewMap')
const Reg = () => import('@/components/Regisiter')
const Error = () => import('@/comment/Error')
const Footer = () => import('@/comment/Footer')
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      name: 'error',
      components: {
        default: Error
      }
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: Home,
        footer: Footer
      }
    },
    {
      path: '/detail',
      name: 'detail',
      components: {
        default: Detail,
      }
    },
    {
      path: '/end',
      name: 'end',
      components: {
        default: End,
      }
    },
    {
      path: '/pay',
      name: 'pay',
      components: {
        default: Pay,
      }
    },
    {
      path: '/newmap',
      name: 'newmap',
      components: {
        default: NewMap,
      }
    },
    {
      path: '/allmovie',
      name: 'allmovie',
      components: {
        default: AllMovie,
      }
    },
    {
      path: '/detailm',
      name: 'detailm',
      components: {
        default: DetailM,
      }
    },
    {
      path: '/search',
      name: 'search',
      components: {
        default: Search,
      }
    },
    {
      path: '/msearch',
      name: 'msearch',
      components: {
        default: MSearch,
      }
    },
    {
      path: '/searchp',
      name: 'searchp',
      components: {
        default: SearchP,
      }
    },
    {
      path: '/list',
      name: 'list',
      components: {
        default: List
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: Login,
      }
    },
    {
      path: '/reg',
      name: 'reg',
      components: {
        default: Reg,
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        default: Cart,
        footer: Footer
      }
    },
    {
      path: '/cartm',
      name: 'cartm',
      components: {
        default: CartM
      }
    },
    {
      path: '/city',
      name: 'city',
      components: {
        default: City,
      }
    },
    {
      path: '/kind',
      name: 'kind',
      components: {
        default: Kind,
        footer: Footer
      }
    },
    {
      path: '/kindp',
      name: 'kindp',
      components: {
        default: KindP
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: User,
        footer: Footer
      }
    },
    
  ]
})
