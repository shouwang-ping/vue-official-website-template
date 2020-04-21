const GET_INFO = 'get_info'
const EDIT_ADDRESS = 'enit_address'
const state = {
    info: null,
    addressList: [],
    lists: {
        name: '产品列表'
    }
}
const getters = {
    // lists: (state) => state.lists,
    // name1: (state) => state.lists.name
}
const mutations = {
    // [GET_INFO](state, info) {
    //     state.info = info
    // },
    // [EDIT_ADDRESS](state, address) {
    //     for (let i = 0; i < state.addressList.length; i++) { // 逻辑 操作state
    //         if (state.addressList[i].id === address.id) {
    //             state.addressList.splice(i, 1, address)
    //             break
    //         }
    //     }
    // },
}
const actions = {
    // getInfo({ commit }, cb) {
    //     setTimeout(() => { // 接口逻辑
    //         let value = {}
    //         commit(GET_INFO, value)
    //         cb(value)
    //     })
    // },
    // updateAddress({ commit }, { address, success, fail }) {
    //     // service.update(address).then((response) => {
    //     //     if (response.isSuccess) {
    //     //         commit(EDIT_ADDRESS, address)
    //     //         success()
    //     //     } else {
    //     //         fail(response.msg)
    //     //     }
    //     // })
    // },
}
export default {
    state,
    getters,
    mutations,
    actions
}