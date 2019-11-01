<template lang="pug">
    div.about_form__row
        div {{validation.firstError('group.name')}}
        input(
            type="text"
            placeholder="Новый навык"
            autofocus
            v-model="group.name"
        ).form__input
        div {{validation.firstError('group.percent')}}
        input(
            type="text"
            placeholder="0" + "%"
            v-model="group.percent"
            autofocus
        ).form__input.form__input_percent
        .about_form__button_add(@click="addInner")
            svg(viewBox="0 0 100 100").about_form-shape
                circle(cx="50" cy="50" r="40" ref="color-circle" fill="url(#gradient)").about_form__circle
                linearGradient(id="gradient" x1="0%" y1="0%" x2="100%" y2="0")
                    stop(offset="0%" stop-color="rgb(63, 53, 203)")
                    stop(offset="100%" stop-color="rgb(0, 106, 237)")
            .about_form-text +
                  
</template>


<script>
import {Validator} from 'simple-vue-validator';
let uniqId = 0;
export default {
    mixins: [require('simple-vue-validator').mixin],
    validators: {
        'group.name'(value) {
           return Validator.value(value).required('Поле не заполнено');
        },
        'group.percent'(value) {
           return Validator.value(value).required('Должна быть цифра');
        }
    },
    data() {
        return {
            group: {
                id: 0,
                name: "",
                percent: "" 
            },
            percent: {
                id: 0,
                name: "" ,
            }
        }
    },
    methods: {
        addInner() {
            this.$validate().then(success => {
                if(!success) return;

                uniqId++;
                this.group.id=uniqId;
                this.$emit('addInner', {...this.group});
                this.group.name = "";
                this.$emit('addInnerPercent', {...this.percent});
                this.group.percent = "";
                this.validation.reset();
            })
            
        },
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