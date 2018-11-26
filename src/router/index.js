import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Login from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'
import Users from '@/components/home/users.vue'
export default new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component:Home  
    },
    {
      path:'/login',
      name:'login',
      component:Login,
      children:[{
        name:'users',
        path:'/users',
        component:Users
      }]
    }

  ]
})
