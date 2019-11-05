import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const routes =[
    {
        path: '/',
        component: () => import('./components/aboutMe.vue')
},
    {
        path: '/work',
        component: () => import('./components/addingWork.vue')
    },
    {
        path: '/rev',
        component: () => import('./components/addingRev.vue')
    },
    {
        path: '/login',
        component: () => import('./components/login.vue'),
        meta: {
            public: true
          }
    }

];

export default new VueRouter({routes});
    
