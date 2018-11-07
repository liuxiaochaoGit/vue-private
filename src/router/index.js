import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main'
import List from '@/components/list'
import Login from '@/views/login'
import About from '@/views/about'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/main',
            name: 'main',
            component: Main,
            redirect: '/list',
            children: [
                {
                    path: '/list',
                    name: 'list',
                    component: List,
                }
            ]
        }
    ]
})
