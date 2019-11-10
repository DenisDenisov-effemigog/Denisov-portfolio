
export default [
    {
        path: '/',
        component: () => import('../components/aboutMe.vue'),
        meta: {
            title: "Блок Обо мне"
        }
},
    {
        path: '/work',
        component: () => import('../components/addingWork.vue'),
        meta: {
            title: "Блок Работы"
        }
    },
    {
        path: '/rev',
        component: () => import('../components/addingRev.vue'),
        meta: {
            title: "Блок Отзывы"
        }
    },
    {
        path: '/login',
        component: () => import('../components/login.vue'),
        meta: {
            public: true
          }
    }

];


    
