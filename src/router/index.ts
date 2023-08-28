import { close, start } from '@/utils/nporgress'
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
const Login = () => import('@/views/login/LoginIndex.vue')
const Home = () => import('@/views/home/HomeIndex.vue')


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },

  {
    path: '/home',
    component: Home,
    // redirect: '/study',
    // children: [
    //   {
    //     path: '/study',
    //     component: Study,
    //     meta: {
    //       page1: '我的课程',
    //       bar: 'study',
    //     },
    //   },
    // ],
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
// 验证token

router.beforeEach((_to, _from, next) => {
  // if (
  //   to.path === '/login' ||
  //   to.path === '/register' ||
  //   to.path === '/forgetPassword'
  // )
  //   return next()
  // else {
  //   const flag = window.localStorage.getItem('token')
  //   console.log(flag)

  //   if (!flag) {
  //     localStorage.setItem('autoChecked', '')
  //     return next('/login')
  //   }
  // }
  start()
  next()
})

router.afterEach(() => {
  close()
})

export default router
