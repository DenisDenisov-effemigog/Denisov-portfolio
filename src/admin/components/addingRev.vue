<template lang="pug">
    .container(v-if="editMode === false")
            .user_block
                .user_pic 
                    .image(
                    :class="{filled: renderedPhoto.length}"
                    :style="{'backgroundImage' : `url(${renderedPhoto})`}"
                ) 
                .user_info    
                    .user_info__full_name
                            .user_info__first_name {{review.author}}
                    .user_info__title
                            .user_profession {{review.occ}}
            .user_desc
                p.user_desc {{review.text}}
            .user__desc_control        
                button(@click="editMode=true").control__edit Править
                button(@click="deleteRev").control__del Удалить
    .container(v-else)
        .user_block
            .user_pic 
                input(
                    type="file"
                    @change="appendFileAndRenderPhoto"
                    ) 
            .user_info__full_name
                    input(type="text" v-model="editedReview.author")
            .user_info__title
                    input(type="text" v-model="editedReview.occ")
        
        .user_desc
            textarea(type="text" v-model="editedReview.text")
        .user__desc_control       
            button(@click="editExistedRev").control__edit Сохранить
            button(@click="editMode=false").control__del Отмена           
</template>
<script>
import { mapActions } from "vuex";



export default {
    data() {
        return {
            renderedPhoto: "",
            editMode: false,
            editedReview: {...this.review}

        }
    },
    props: {
        review: {
            type: Object,
            photo: "",
            default: () => ({}),
            required: true
     }
    },
    methods: {
        ...mapActions("reviews", ["editRev", "removeRev"]),
        async editExistedRev() {
            try {
                await this.editRev(this.editedReview); 
                this.editMode = false;
      }     catch (error) {
        
      }
      },
      async deleteRev() {
        try {
          await this.removeRev({
            id: this.review.id
          })
        } catch (error) {
          
        }
      },
      appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.review.photo = file;

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
}
</script>
<style lang="postcss" scoped>

.container{
  background-color: #fff;
  padding: 15px;
  margin-bottom: 20px;
}
button{
border: none;

}
.user_pic {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
}
.user_block{
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid rgba(#000, 0.3);
    padding-bottom: 20px;
}
.user_info{
    padding-left: 30px;

}

.image{
    max-width: 100%;
    height: 100%;
    background-color: green;

}
.user__desc_control{
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
  textarea{
      resize: none;
  }
</style>