import Vue from 'vue'
import Router from 'vue-router'

const Layout = () => import('../views/LayoutPage/index.vue')
const Login = () => import('../views/Login')
const NotFound = () => import('../views/404.vue')
const NoLogin = () => import('../views/403.vue')
const IndexVue = () => import('../views/IndexPage/index.vue')
const GroupPage = () => import('../views/GroupPage/index.vue')
const UserPage = () => import('../views/UserPage/index.vue')
const HomePage = () => import('../views/HomePage/index.vue')

Vue.use(Router)
const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/monitor',
      component: Layout,
      children: [
        {
          path: '/monitor',
          name: 'IndexVue',
          component: IndexVue
        },
        {
          path: '/group',
          name: 'GroupPage',
          component: GroupPage
        },
        {
          path: '/user',
          name: 'UserPage',
          component: UserPage
        }
      ]
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/403',
      name: 'noLogin',
      component: NoLogin
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

// const mustLogin = [
//   'MineVue',
//   'InfoSetVue',
//   'InputInfos',
//   'ImgUploader',
//   'SellInfoVue',
//   'BuyInfoVue',
//   'ReleaseVue',
//   'CollectVue',
//   'subSuccess',
//   'MyWallet',
//   'Bill',
//   'AddList',
//   'AddWrite',
//   'idCard',
//   'Order',
//   'OrderSuccess',
//   'HowPay',
//   'BindBank',
//   'OrderDetail'
// ]

// router.beforeEach((to, from, next) => {
//   let token = getToken()
//   if (!token) {
//     let index = mustLogin.findIndex(val => val == to.name)
//     if (index >= 0) {
//       next('/403')
//       return
//     }
//   }
//   next()
// })

export default router
