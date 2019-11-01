<template lang="pug">
    .inner__item
        .group__name {{group.name}} 
        .group__percent {{group.percent}} 
        .buttons
            button(
                type="button"
                ).edit
            button(
                type="button"
                @click="removeInner"
            ).remove
</template>
<script>
export default {
    props:{
        group: Object,
    },
    methods: {
        removeInner() {
            this.$emit('removeInner', this.group.id);
        }
    },
}
</script>
<style lang="pcss">
    .edit{
        background: svg-load("pencil.svg", fill="#ccc", width="12px", height="12px") center  center no-repeat;
        width: 20px;
    }
    .remove{
        background: svg-load("remove.svg", fill="#ccc", width="12px", height="12px") center  center no-repeat;
        width: 20px;
    }
    .buttons{
        display: flex;
    }
</style>