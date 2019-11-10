<template lang="pug">
    table
        tr
            td.jobs_right__pic
        tr   
            td.jobs_right__item(v-for="td in 3" :key="td.id") 
                .jobs_right__text Html
        tr
            td.jobs_right__title Новая работа
        tr 
            td.jobs_right__work_desc Описание этой работы
        tr 
            td.jobs_right__link http://google.com
        tr
            td.right__desc_control
                .control__edit Править
                .control__del Удалить
</template>