<template lang="pug">
    div.hero_desc
        headerBlock
        section.section.third__section
            asideBlock
            .container.third_section__continer
            .review
                h2.review__title.title Добавить Отзывы
                .review__block
                    .adding__review
                        .adding__foto
                            .adding__foto_pic
                            .adding__foto_button Добавить фото
                    .adding__review_form
                        form.review_block__form
                            .review_form__row
                                label.review_form__label
                                    .review_form__title Имя автора
                                    input.review_form__input
                                label.review_form__label
                                    .review_form__title Титул автора
                                    input.review_form__input
                            .review_form__row  
                                label.review_form__label_textarea
                                    .review_form__title Отзыв
                                    textarea.review_form__textarea
                            .review_form__buttons
                                button.review_form__button.cancel__button Отмена
                                button.button.review_form__button Загрузить
            .adding__reviews_block
                ul.reviews_block__list
                    li.block__item.jobs_left__block 
                        .jobs_left__circle
                            svg(viewBox="0 0 100 100").jobs_left-shape
                                circle(cx="50" cy="50" r="40" ref="color-circle" fill="transparent" stroke="#fff").about_circle
                            .jobs_left__circle-text +
                        .jobs_left__desc
                            .jobs_left__text Добавить работу 
                    li.reviews_block__item.block__item     
                        .reviews_user__desc
                            .user__desc_pic
                                img(src='../../images/content/foto.jpg').user__desc_img
                            .user__desc_name
                                .user__name Имя Фамилия
                                .user__prof Программист  
                        .reviews_right__desc
                        p.right__desc_text loremloremloremloremloremlorem loremloremloremloremlorem 
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