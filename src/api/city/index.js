import axios from 'axios';

const api = {
    requestCity() {
        return new Promise((resolve, reject) => {
            axios.get('https://www.daxunxun.com/city')
            .then(data => resolve(data))
            .catch(error => reject(error)) 
        })
    }
}
export default api