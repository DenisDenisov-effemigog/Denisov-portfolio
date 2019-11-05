<template lang="pug">
    .skill-container
        h2 {{category.category}}
        hr
        table
          skill-item(
              v-for="skill in category.skills"
              :key="skill.id"
              :skill="skill"
              ) 
        hr
        form(
            @submit.prevent="addNewSkill"
            :class={blocked: formBlocked}
            ).about_form__row
            input(
                type="text"
                placeholder="Новый навык"
                autofocus
                v-model="skill.title"
            ).form__input
            input(
                type="text"
                placeholder="0" + "%"
                v-model="skill.percent"
                autofocus
            ).form__input.form__input_percent
            button(type="submit").about_form__button_add
                svg(viewBox="0 0 100 100").about_form-shape
                    circle(cx="50" cy="50" r="40" ref="color-circle" fill="url(#gradient)").about_form__circle
                    linearGradient(id="gradient" x1="0%" y1="0%" x2="100%" y2="0")
                        stop(offset="0%" stop-color="rgb(63, 53, 203)")
                        stop(offset="100%" stop-color="rgb(0, 106, 237)")
                .about_form-text +          
</template>
<script>
import {mapActions} from "vuex";
export default {
    components: {
        skillItem: () => import("./skill-item")
    },
    data() {
        return {
            formBlocked: false,
            skill: {
                title: "",
                percent: "",
                category: this.category.id
            }
        }
    },
    methods: {
        ...mapActions("skills", ["addSkill"]),
        
        async addNewSkill() {
            this.formBlocked = true;
            try {

                await this.addSkill(this.skill);
                this.skill.title = "";
                this.skill.percent = "";

            } catch (error) {
                
            }finally {
                this.formBlocked = false;
            }
            
            
        },
    },
    props: {
        category: {
            type: Object,
            default: () => ({}),
            required: true
        }
    },
    
}
</script>
<style lang="postcss" scoped>
.form__input{
      border: none;
      border-bottom: 1px solid black;
      width: 50%;
      outline: none;
      color: #000;
      padding: 10px;

      &:focus{
          background: transparent;
      }
    }
    .about_form__row{
        display: flex;
        justify-content: space-around;
    }
    .about_form__row.blocked{
        opacity: 0.5;
        filter: grayscale(100%);
        pointer-events: none;
        user-select: none;
    }
    .form__input_percent{
        width: 10%;
    }
    .about_form-text{
      position: absolute;
      top: 34%;
      right: 25%;
      left: 50%;
      bottom: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-weight: bold;
      font-size: 18px;
    }
     .about_form__button_add{
      position: relative;
      width: 40px;
    }
     .about_form-shape{
      width: 40px;
      
    }
</style>