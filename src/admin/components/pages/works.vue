<template lang="pug">
  .works-section
    .container
      h1.page-title Блок "Мои работы"

    .works-container
      .container.card
        .card__title
          .card__title-text Добавить работу
        form(@submit.prevent="addWork").card__content
          .works__form   
            .works__form-content
              .works__form-userpic
                label.works__form-avatar-upload
                  input(
                    type="file"
                    @change="appendFileAndRenderPhoto"
                  ).works__form-file-input
                  .works__form-pic
                    .works__form-avatar-empty(
                      :class="{filled: renderedPhoto.length}"
                      :style="{'backgroundImage' : `url(${renderedPhoto})`}"
                    ) Перетащите или загрузите изображение
                  appButton(
                    text="Загрузить"
                  ).works__form-addphoto 
              .works__form-col
                .works__form-row
                  .works__form-block
                    app-input(
                      title="Название"
                      v-model="work.title"
                    )
                  .works__form-block
                    app-input(
                      title="Ссылка"
                      v-model="work.link"
                    )
                .works__form-row
                  .works__form-block
                    app-input(
                      title="Описание"
                      field-type="textarea"
                      v-model="work.description"
                    )
                .works__form-block
                    app-input(
                      title="Добавление тега"
                      v-model="work.techs"
                    )
      
          .edit-form__buttons
            .edit-form__buttons-item
              app-button(
                text="Отмена"
                class="plain"
                type="reset"
              )
            .edit-form__buttons-item
              app-button(
                text="Загрузить"
                type="submit"
              )
    .jobs
      ul.jobs_list
        li.jobs_item(v-for="work in works" :key="work.id")
          adding-work

</template>
<script>
import { mapActions, mapState } from "vuex";
import { file } from 'babel-types';
  

export default {
  data() {
    return {
      renderedPhoto: "",
      work: {
        title: "",
        techs: "",
        link: "",
        description: "",
        photo: "", 
      }
    }
  },
  created() {
    this.fetchWork();
  },
  computed: {
    ...mapState("works",{
      works: state => state.works
    })
  },
  methods: {
    ...mapActions("works", ["addingWork", "fetchWork"]),
    async addWork() {
      try {
        
      await this.addingWork(this.work)
      } catch (error) {
        
      }
    },
    appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.work.photo = file;

      const reader = new FileReader();

      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
        this.renderedPhoto = reader.result;
        };
      } catch (error) {
        //=(
      }
    }
  },
  components: {
    appInput: () => import("../input"),
    appButton: () => import("../button.vue"),
    addingWork: () => import("../addingWork")
  }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.card {
  background: #fff;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  padding: 0 20px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;

  &_plain {
    padding: 0;
  }
}

.card__title {
  padding: 30px 2%;
  border-bottom: 1px solid rgba(#1f232d, 0.15);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
}

.card__content {
  padding: 0 2%;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.container__works {
  background: #fff;
}

.works__form {
  margin-bottom: 30px;
}

.works__form-content {
  display: flex;

  @include tablets {
    padding-right: 0;
  }

  @include phones {
    flex-direction: column;
  }
}

.works__form-addphoto {
  text-align: center;
}

.works__form-row {
  
  margin-bottom: 40px;
  
}
.works__form-col {
  flex: 1;
}

.works__form-block {
  flex: 1;
  

  @include tablets {
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &:last-child {
    margin-right: 0;
  }
}
.works__form-addphoto {
  color: #383bcf;
  font-weight: 600;
}
.works__form-userpic {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  width: 40%;

  @include phones {
    margin-right: 0;
    margin-bottom: 30px;
  }
}

.works__form-avatar-empty {
  width: 200px;
  height: 200px;
  background: #dee4ed;
  position: relative;

  &:before {
    content: "";
    height: 115px;
    width: 85px;
    background: svg-load("filled-user.svg", fill=#fff) center center no-repeat;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.filled {
    background: center center no-repeat / cover;
    &:before {
      display: none;
    }
  }
}

.reviews__form-avatar-upload {
  position: relative;
  background: #dee4ed;

  &.error {
    .reviews__avatar-error {
      display: block;
    }
  }
}

.works__avatar-error {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: none;
}

.works__form-file-input {
  position: absolute;
  top: 0;
  left: -9999px;
}

.edit-form__buttons {
  display: flex;
  justify-content: flex-end;

  @include tablets {
    padding: 0 !important;
  }
}

.edit-form__buttons-item {
  margin-right: 20px;

  &:last-child {
    margin-right: 0px;
  }
}
</style>