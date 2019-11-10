<template lang="pug">
     tr.table__row(v-if="editMode === false")
        td.table__title {{skill.title}}
        td.table__percent {{skill.percent}}
        td.table__buttons
            button.edit_button(type="button" @click = "editMode = true") 
            button.remove_button(type="button" @click = "removeExistedSkill")
     tr(v-else)
        td
            input(type="text" v-model = "editedSkill.title")
        td 
            input(type="text" v-model = "editedSkill.percent")
        td
            button.save_button(type="button" @click="editExistedSkill") 
            button.cancel_button(type="button" @click="editMode = false") 
</template>
<script>
import {mapActions} from "vuex";

export default {
    data() {
        return {
            editMode: false,
            editedSkill: {...this.skill}
        }
    },
    props: {
        skill: {
           type: Object,
           default: () => ({}),
           required: true
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
                })
            } catch (error) {
                
            }
        },
        
    },
}
</script>
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
</style>