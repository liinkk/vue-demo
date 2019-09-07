import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods/goods'
import comment from '../components/comment/comment'
import merchant from '../components/merchant/merchant'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/goods',component:goods},
    {path:'/comment',component:comment},
    {path:'/merchant',component:merchant},
  ]
})
