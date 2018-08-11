import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import home from './modules/home'
import skill from './modules/skill'
import special from './modules/special'

Vue.use(Vuex);

export default new Vuex.Store({
    getters,
    actions,
    modules:{
        //业务模块
        home,
        skill,
        special
    }
})
