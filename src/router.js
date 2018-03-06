import VueRouter from "vue-router"
import Main from "./view/main.vue"

const routes = [
    {path: '/', component: Main}
]

const router = new VueRouter({ routes })

export { router }