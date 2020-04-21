const COMPANIES = 'companies'
const state = {
    userInfo: {
        name: '购物车',
        num: 1
    }
}
const getters = {
    userInfo: (state:any) => state.userInfo,
    name: (state:any) => state.userInfo.name
}
const mutations = {
    [COMPANIES] (state:any, companies:any) {
        state.userInfo.name = companies
    }
}
const actions = {

}
export default {
    state,
    getters,
    mutations,
    actions
}