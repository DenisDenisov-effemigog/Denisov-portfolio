<template lang="pug">
    div
      header.header
          .container.header__container
            .admin__info
              .info__foto
                img(src='../images/content/foto.jpg').info__img
              .info__name
                p.name Денисов Денис
            .admin__panel
              p.panel__desc Панель администрирования
              p.panel__exit Выйти
      section.section.first__section        
          .container.first__container
            aside.sidebar
              nav.sidebar__nav
               ul.nav__list
                 li.nav__item
                   a(href='#').nav__link Обо мне
                 li.nav__item
                   a(href='#').nav__link Работы
                 li.nav__item
                   a(href='#').nav__link Отзывы    
            .block__about
                .title.about__title Блок &laquo Обо мне &raquo
                .block_about__form
                  .about_left__block
                    form.about__form
                      .about_form__column
                        .about_form__row
                          label.about_form__label(for="")
                            .about_form__title Название новой группы
                            input.about_form__input
                          .about__form__check_button
                            .check_button__check_mark
                            .check_button__check_cross
                        .about_form__row
                          label.about_form__label_skills(for="")
                            .about_form__title_skills Новый навык
                            input.about_form__input_new_skills 
                          label.about_form__label_skills(for="")
                            .about_form__title_skills 0
                            input.about_form__input_percent_skills 
                          .about_form__button_add
                            svg(viewBox="0 0 100 100").about_form-shape
                              circle(cx="50" cy="50" r="40" ref="color-circle" fill="url(#gradient)" transform="rotate(180 50 50)").about_form__circle
                              linearGradient(id="gradient" x1="0%" y1="0%" x2="100%" y2="0")
                                  stop(offset="0%" stop-color="rgb(63, 53, 203)")
                                  stop(offset="100%" stop-color="rgb(0, 106, 237)")
                            .about_form-text +
                  .about_right__block
                    form.about__form
                      .about_form__column
                        .about_form__row
                          label.about_form__label(for="")
                            .about_form__title Название новой группы
                            input.about_form__input
                          .about__form__check_button
                            .check_button__check_mark
                            .check_button__check_cross
                        .about_form__row
                          label.about_form__label_skills(for="")
                            .about_form__title_skills Новый навык
                            input.about_form__input_new_skills 
                          label.about_form__label_skills(for="")
                            .about_form__title_skills 0
                            input.about_form__input_percent_skills 
                          .about_form__button_add
                            svg(viewBox="0 0 100 100").about_form-shape
                              circle(cx="50" cy="50" r="40" ref="color-circle" fill="url(#gradient)" transform="rotate(180 50 50)").about_form__circle
                              linearGradient(id="gradient" x1="0%" y1="0%" x2="100%" y2="0")
                                  stop(offset="0%" stop-color="#5500f2")
                                  stop(offset="100%" stop-color="#8f00ef")
                            .about_form-text +
      section.section.second__section
        .container.second-section__container
          .jobs 
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
      section.section.third__section
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
              li.jobs__item.jobs_left__block 
                .jobs_left__circle
                  svg(viewBox="0 0 100 100").jobs_left-shape
                    circle(cx="50" cy="50" r="40" ref="color-circle" fill="transparent" stroke="#fff").about_circle
                  .jobs_left__circle-text +
                .jobs_left__desc
                  .jobs_left__text Добавить работу 
              li.reviews_block__item     
                .reviews_user__desc
                  .user__desc_pic
                    img(src='../images/content/foto.jpg').user__desc_img
                  .user__desc_name
                    .user__name Имя Фамилия
                    .user__prof Программист  
                .reviews_right__desc
                  p.right__desc_text loremloremloremloremloremloremloremloremloremloremlorem 
                  .right__desc_control
                    .control__edit Править
                    .control__del Удалить
       
</template>
<style lang="postcss" src="./main.pcss" >

</style>
<script>
  import inner from "./components/inner"

  export default {
    
    components: {
      inner
    },
    
  }
</script>