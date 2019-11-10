<template lang="pug">
    form(@submit.prevent="d").download_form
        .download_form__row
            label.download_form__label
                .download_form__title Название
                input(type="text"
                v-model="work.title").download_form__input
        .download_form__row
            label.download_form__label
                .download_form__title Ссылка
                input(
                    type="text"
                    v-model="work.link"
                ).download_form__input
        .download_form__row
            label.download_form__label
                .download_form__title Описание
                textarea(
                    type="text"
                    v-model="work.desc"
                ).download_form__textarea
        .download_form__row
            label.download_form__label
                .download_form__title Добавление тега
                input(
                    type="text"
                    v-model="work.tags"
                ).download_form__input
        .download_form__buttons
            button.download_form__button.cancel__button Отмена
            button(type="submit").button.download_form__button Загрузить
      
</template>
<script>
import {mapActions} from "vuex";

export default{
    data() {
        return {
            work: {
                title: "",
                link: "",
                desc: "",
                tags: "",
            }
        }
    },
    methods: {
        ...mapActions("works", ["dd"]),
        async d() {
           await this.dd(this.work)
        }
    }
}

</script>