import {createRouter, createWebHistory} from 'vue-router'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:
        [
            /*{   //首页相关路由
                path:'/',
                name: 'Home',
                component:() => import('@/views/homePage/HomeFrame.vue'),
                children:[
                    {
                        path:'/',
                        name:'main',
                        component:() => import('@/views/homePage/homeMain.vue')
                    }
                ]
            },*/
            {   //登录路由
                path:'/login',
                name:'Login',
                component:() => import('@/views/AuthPage/Login.vue')
            },
            {   //注册路由
                path:'/register',
                name:'Register',
                component:() => import('@/views/AuthPage/Register.vue')
            },
            {
                //博客页面相关路由
                path:'/',
                name:'Blog',
                component:() => import('@/views/blogPage/BlogFrame.vue'),
            },
            {
                path:'/friend',
                name:'Friend',
                component:() => import('@/views/FriendPage/FriendFrame.vue')
            }
    ]
})

export default router
