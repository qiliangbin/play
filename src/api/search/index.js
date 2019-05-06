import axios from 'axios'

const api = {
    requestListAll () {
        return new Promise((resolve, reject) => {
          axios.get('https://www.daxunxun.com/douban')
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestPhoneShopName(shopname) {
        return new Promise((resolve, reject) => {
            axios.get('http://47.94.88.61:3000/api/product/search_s?shopname=' + shopname)
            .then(data => {resolve(data)})
            .catch(err => {reject(err)})
        })
    },
    requestList () {
        return new Promise((resolve, reject) => {
            axios.get('http://47.94.88.61:3000/api/product')
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestName(_id) {
        return new Promise((resolve,reject) => {
      axios.get('http://47.94.88.61:3000/api/product/search_s?shopname=' + _id)
      .then(data => resolve(data.data))
      .catch(err => reject(err))
        })
    }
}

export default api