import * as types from '../mutation-type'
const state = {
    str:'123123123',
};
const mutations = {
    [types.SETTEST] (state,data) {
        state.str = data
    }
};
export default {
    state,
    mutations
}