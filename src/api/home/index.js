import axios from 'axios'

const api = {
    //手机详情页跳转
    requestPhoneDetail(_id) {
        return new Promise((resolve, reject) => {
            axios.get('http://47.94.88.61:3000/api/product/search?id=' + _id)
            .then(data => resolve(data))
            .catch(err => reject(err)) 
        })
    },
    //电影详情页跳转
    requestMovieData (id) {
        return new Promise((resolve, reject) => {
          axios.get('https://www.daxunxun.com/detail?id=' + id)
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
      },
      //电影列表
    requestListAll () {
        return new Promise((resolve, reject) => {
          axios.get('https://www.daxunxun.com/douban')
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    //每页电影列表  一页17 条    'https://www.daxunxun.com/douban/search_g?geners=' + id
    loadMore(pageCode) {
        return new Promise((resolve, reject) => {
        axios.get('https://www.daxunxun.com/douban?start='+ pageCode * 17 +'&count=17')
            .then(res => {
                resolve(res.data)
            }).catch(err => reject(err))
        })
    },
    //手机列表
    requestPhoneList() {
        return new Promise((resolve, reject) => {
            axios.get('http://47.94.88.61:3000/api/product')
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    //电影列表 前五条
    requestMovieList (res) {
        return new Promise((resolve, reject) => {
          axios.get('https://www.daxunxun.com/douban?start=' + res * 5 + '&count=5')
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
      },

    requestMovie1 (id) {
        return new Promise((resolve, reject) => {
            axios.get('https://www.daxunxun.com/douban/search_g?geners=' + id)
              .then(data => resolve(data.data))
              .catch(err => reject(err))
          })
    }

}

export default api