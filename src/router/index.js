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
                component:() => import('@/views/authPage/Login.vue')
            },
            {   //注册路由
                path:'/register',
                name:'Register',
                component:() => import('@/views/authPage/Register.vue')
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
                component:() => import('@/views/friendPage/FriendFrame.vue')
            },
            {
                //标签页相关路由
                path:'/tag',
                name:'Tag',
                component:() => import('@/views/tagPage/TagFrame.vue')
            },
            {
                //文章详情页面相关路由
                path: '/article/:aid',
                name: 'ArticleDetail',
                component:() => import('@/views/articlePage/ArticleFrame.vue'),
            },
            {
                //根据标签获取文章页面相关路由
                path:'/articleList/:tname',
                name:'ArticleListByTag',
                component:()=> import('@/views/getArticlesByTagPage/GetArticlesByTagFrame.vue')
            }
    ]
})

export default router
