import {createRouter,createWebHistory } from 'vue-router'
import dashboard from '../components/dashboard.vue'

const routes = [
    {
        path:"/",
        name:"dashboard",
        component:dashboard,
        children:[
            {
                path:"",     // /
                name:"home",
                component:()=> import("../components/dashboard/main.vue")
    },
    {
                path:"/new-job",   // /new-job
                name:"new-job",
                component:()=> import("../components/job/newJob.vue")
            },
            {
                path:"/job/:id",   // /job/:id
                name:"job-details",
                component:()=> import("../components/job/jobDetails.vue")
            }
        ]

    },
    {
        path:"/login",
        name:"login",
        component:() => import('../components/login.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router