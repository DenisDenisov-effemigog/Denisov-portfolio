<template lang="pug">
    div.hero_desc
        headerBlock
        section.section.second__section
            asideBlock      
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
                            form.download_form
                                .download_form__row
                                    label.download_form__label
                                        .download_form__title Название
                                        input.download_form__input
                                .download_form__row
                                    label.download_form__label
                                            .download_form__title Ссылка
                                            input.download_form__input
                                .download_form__row
                                    label.download_form__label
                                            .download_form__title Описание
                                            textarea.download_form__textarea
                                .download_form__row
                                    label.download_form__label
                                        .download_form__title Добавление тега
                                        input.download_form__input
                                .download_form__buttons
                                    button.download_form__button.cancel__button Отмена
                                    button.button.download_form__button Загрузить
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
                        .jobs_right__pic
                            ul.jobs_right__list
                                li.jobs_right__item
                                p.jobs_right__text Html
                                li.jobs_right__item 
                                p.jobs_right__text Html
                                li.jobs_right__item 
                                p.jobs_right__text Html
                        .jobs_right__desc
                            h2.jobs_right__title Новая работа
                            p.jobs_right__work_desc Описание этой работы
                            p.jobs_right__link http://google.com
                        .right__desc_control
                                .control__edit Править
                                .control__del Удалить
</template>
<style lang="postcss" src="../main.pcss" >

</style>
<script>
  import {Validator} from "simple-vue-validator"; 
  import headerBlock from "./headerBlock";
  import asideBlock from "./asideBlock";

  export default {
   
    components: {
      headerBlock, asideBlock
    },
    
  }
</script>