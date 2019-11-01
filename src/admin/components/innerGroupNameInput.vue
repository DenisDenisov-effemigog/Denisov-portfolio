<template lang="pug">
     div.about_form__row
        div {{validation.firstError('groupTitle.name')}}
        input(
            @addTitle="addTitle"
            type="text"
            placeholder="Название новой группы"
            autofocus
            v-model="groupTitle.name" 
        ).form__input
        button(@click="addTitle").check_button__check_mark
        button.check_button__check_cross  
</template>
<script>
import {Validator} from 'simple-vue-validator';
let uniqId = 0;

export default {
    mixins: [require('simple-vue-validator').mixin],
    validators: {
        'groupTitle.name'(value) {
           return Validator.value(value).required('Поле не заполнено');
        },
    },
    data() {
        return {
            groupTitle: {
                name: "",
                id: ""
            }
        }
    },
    methods: {
        addTitle() {
            this.$validate().then(success => {
                if(!success) return;
                
                uniqId++;
                this.groupTitle.id=uniqId;
                this.$emit('addTitle', {...this.groupTitle});
                this.groupTitle.name = "";
                this.validation.reset();

                })
            
            }
        
        
    },
}
</script>
<style lang="postcss" scoped>

.check_button__check_mark{
      width:30px;
      height: 30px;
      background: svg-load("tick.svg",  fill="green", width="15px", height="15px") center center no-repeat;
    }
    .check_button__check_cross{
      width:30px;
      height: 30px;
       background: svg-load("remove.svg",  fill="red", width="12px", height="12px") center center no-repeat;
    }
    .form__input{
      border: none;
      border-bottom: 1px solid black;
      width: 70%;
      outline: none;
      color: #ccc;
      padding: 10px;
    }
    button{
      border:none;
      outline: none;
    }
</style>