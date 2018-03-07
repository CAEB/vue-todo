import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { Input, Button, Checkbox, Message } from 'element-ui'
import {
    router
} from './router'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Input)
Vue.use(Button)
Vue.use(Checkbox)

Vue.prototype.$message = Message

const app = new Vue({
    el: "#app",
    router,
    template: `
    <div id="app">
        <router-view></router-view>
    </div>
    `,
    created () {
        
    }
})