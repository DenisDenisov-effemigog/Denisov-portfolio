<template lang="pug">
    .container(v-if="editMode === false")
      .jobs_right__pic(
        :class="{filled: renderedPhoto.length}"
        :style="{'backgroundImage' : `url(${renderedPhoto})`}"
        ) 
        ul.jobs_right__list
          li(
          v-for="item in work.techs" :key="item.id"
          ).jobs_right__item 
            p.jobs_right__text {{work.techs}}
      .jobs_right__title {{work.title}}
      .jobs_right__work_desc {{work.description}}
      .jobs_right__link {{work.link}}
      .right__desc_control
        button(
          @click="editMode=true"
          ).control__edit Править
        button(
          @click="deleteWork"
          ).control__del Удалить
    .container(v-else)
      .jobs_right__pic
        input(
          type="file"
        )
        .jobs_right__item
          ul.jobs_right__list
          li(
          v-for="item in work.techs" 
          :key="item.id"
          ).jobs_right__list
      .jobs_right__title 
            input(type="text" v-model="editedWork.title")
      .jobs_right__title 
            input(type="text" v-model="editedWork.techs")
      .jobs_right__desc
            textarea(type="text" v-model="editedWork.description")
      .jobs_right__link
            input(type="text" v-model="editedWork.link")
      .right__desc_control
                button(
                  @click="editExistedWork"
                ).control__edit Сохранить
                button(
                  @click="editMode=false"
                ).control__del Отменить
</template>
<script>
import { mapActions } from "vuex";



export default {
    data() {
      return {
        renderedPhoto: "",
        editMode: false,
        editedWork: {...this.work}
      }
    },
    props: {
      work: {
        type: Object,
        default: () => ({}),
        required: true,
        photo: ""
      }
    },
    methods: {
      ...mapActions("works", ["editWork", "removeWork"]),
      async editExistedWork() {
        try {
        await this.editWork(this.editedWork); 
        this.editMode = false;
      } catch (error) {
        
      }
      },
      async deleteWork() {
        try {
          await this.removeWork({
            id: this.work.id
          })
        } catch (error) {
          
        }
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

}
</script>
<style lang="postcss" scoped>
.container{
  background-color: #fff;
  padding: 15px;
}
.jobs_right__pic{
    width: 100%;
    height: 250px;
    background-color: green;
  }
  .jobs_right__text{
    padding: 5px 15px;
    background-color: #fff;
    border-radius: 50px;
    color: #414c63;
  }
  .jobs_right__list{
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .jobs_right__item{
    padding: 5px;
  }
  .jobs_right__title{
    font-size: 18px;
    font-weight: bold;
    color: #414c63;
  }
  .jobs_right__desc{
    padding: 15px;
  }
  .jobs_right__work_desc{
    font-size: 18px;
    font-weight: bold;
    color:rgba(#414c63, 0.5);
    padding-top: 10px;
  }
  .jobs_right__link{
    font-size: 18px;
    font-weight: bold;
    color:#4a00ed;
    padding-top: 10px;
  }
  .right__desc_control{
    padding-top: 10px;
    display: flex;
    justify-content: space-around;
  }
  .control__edit, .control__del{
    width: 80px;
    height: 25px;
    padding-right: 100px;
  }
  .control__edit{
    background: svg-load("pencil.svg", fill="#4a00ed", width="12px", height="12px") right  center no-repeat;
  }
  .control__del{
    background: svg-load("remove.svg", fill="red", width="12px", height="12px") right  center no-repeat;
  }
  button{
    border: none;
  }
  textarea{
    resize: none;
  }
</style>