<template lang="pug">
     tr
        td {{skill.title}}
        td {{skill.percent}}
        td
            button(type="button") изменить
            button(type="button" @click="removeExistedSkill") удалить
</template>
<script>
import {mapActions} from "vuex";

export default {
    props: {
        skill: {
           type: Object,
           default: () => ({}),
           required: true
        }
    },
    methods: {
        ...mapActions("skills", ["removeSkill"]),
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