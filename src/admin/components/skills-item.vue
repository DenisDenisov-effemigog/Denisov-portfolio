<template lang="pug">
  tr.table__row(v-if="editMode === false")
    td {{skill.title}}
    td {{skill.percent}}
    td 
      button.remove_button(type="button" @click="removeExistedSkill") 
      button.edit_button(type="button" @click="editMode = true") 
  
  tr.table__row(v-else)
    td 
      input(type="text" v-model="editedSkill.title")
    td 
      input(type="text" v-model="editedSkill.percent")
    td 
      button.save_button(type="button" @click="editExistedSkill") 
      button.cancel_button(type="button" @click="editMode = false") 

</template>
<style lang="postcss" scoped>
.remove_button{
    background: svg-load("remove.svg", fill="#414c63", width="12px", height="12px") center  center no-repeat;
    
}
.edit_button{
    background: svg-load("pencil.svg", fill="#414c63", width="12px", height="12px") center  center no-repeat;
    padding-right: 20px;
}
.remove_button, .edit_button, .save_button, .cancel_button{
    height: 20px;
    border: none;
}
.save_button{
    background: svg-load("pencil.svg", fill="blue", width="12px", height="12px") center  center no-repeat;

}
.cancel_button{
    background: svg-load("remove.svg", fill="red", width="12px", height="12px") center  center no-repeat;

}
.table__row{
  display: grid;
  grid-template: "title per edit remove" 1fr
  / 5fr 1fr 1fr;
}
</style>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    skill: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  data() {
    return {
      editMode: false,
      editedSkill: {...this.skill}
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async editExistedSkill() {
      try {
        await this.editSkill(this.editedSkill); 
        this.editMode = false;
      } catch (error) {
        
      }
    },
    async removeExistedSkill() {
      try {
        await this.removeSkill({
          id: this.skill.id,
          category: this.skill.category
        });
      } catch (error) {}
    }
  }
};
</script>
