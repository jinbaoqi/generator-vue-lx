/**
 * Created by guojian on 16/12/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as actions from './actions'
import * as getters from './getters'
import Test from './modules/test.js'

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';
Vue.use(Vuex);
Vue.config.debug = debug;
const store = new Vuex.Store({
    getters,
    actions,
    modules:{
        Test
    },
    strict: false,
    plugins: debug ? [createLogger()] : []
});
export default store