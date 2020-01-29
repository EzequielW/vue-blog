import Vue from 'vue'
import VueRouter  from 'vue-router'
import Home from './views/Home'
import Register from './views/Register'
import Login from './views/Login'
import Post from './views/Post'
import Write from './views/Write'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { title: 'Home' }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: { title: 'Register' }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: { title: 'Login' }
        },
        {
            path: '/posts/:id',
            name: 'post',
            component: Post,
            meta: { title: 'Post' }
        },
        {
            path: '/write',
            name: 'write',
            component: Write,
            meta: { title: 'Write' }
        }
    ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default router