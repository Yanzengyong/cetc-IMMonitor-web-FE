import Vue from 'vue'
import Router from 'vue-router'

const IndexVue = () => import('../views/IndexPage/index.vue')
const Layout = () => import('../views/LayoutPage/index.vue')

const Login = () => import('../views/Login')

const NotFound = () => import('../views/404.vue')
const NoLogin = () => import('../views/403.vue')

Vue.use(Router)
const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      // redirect: '/main',
      component: Layout,
      children: [
        {
          path: '/main',
          name: 'IndexVue',
          component: IndexVue
        }
      ]
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
