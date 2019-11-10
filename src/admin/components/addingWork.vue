<template lang="pug">
        section.section.second__section
            .container.second-section__container
            .jobs_block 
                h2.title.jobs__title Добавление Работы  
                .adding_jobs
                    .adding_jobs__left
                        .jobs__download_block
                            .download_block__desc Перетащите либо загрузите изображение
                            button.button.download_block__button загрузить
                    .adding_jobs__right
                        .jobs__download_form
                            adding-work-form   
            .jobs
                ul.jobs__list
                    li.jobs__item.jobs_left__block 
                        .jobs_left__circle
                            svg(viewBox="0 0 100 100").jobs_left-shape
                                circle(cx="50" cy="50" r="40" ref="color-circle" fill="transparent" stroke="#fff").about_circle
                            .jobs_left__circle-text +
                        .jobs_left__desc
                        .jobs_left__text Добавить работу 
                    li.jobs__item.jobs_right__block    
                        adding-work-desc(
                            v-for="item in 3"
                            :key="item.id"
                        )
</template>

<script>
  import {Validator} from "simple-vue-validator"; 
  
  export default{
      components:{
          addingWorkForm: () => import("./addingWorkForm"),
          addingWorkDesc: () => import("./addingWorkDesc")
      },
  }
</script>