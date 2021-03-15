import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    //初始化时使用sessionStore.getItem('user),这样刷新页面就无需重新登陆
    user : window.sessionStorage.getItem('user'),
}
const mutations = {
    GET_USER:(state , data)=> {
        // 把用户名存起来
        state.user = data
        window.sessionStorage.setItem('user', data)
    },
    LOGOUT:(state)=>{
        // 登出的时候要清除用户名
        state.user = null
        window.sessionStorage.removeItem('user')
    }
}

// const actions = {
//     StoreOptions : { user: '2222' }
// }
export default new Vuex.Store({
    state,
    mutations,
    // actions,
})