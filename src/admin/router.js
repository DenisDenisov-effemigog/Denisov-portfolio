import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import aboutMe from './components/aboutMe.vue'
import addingWork from './components/addingWork.vue'
import addingRev from './components/addingRev.vue'


const routes =[
    {
        path: '/',
        component: aboutMe
    },
    {
        path: '/work',
        component: addingWork
    },
    {
        path: '/rev',
        component: addingRev
    }
];

export default new VueRouter({routes});
    
