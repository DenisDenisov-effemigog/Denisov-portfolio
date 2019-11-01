<template lang="pug">
    div
        .inner__list
            ul.list
                li.item(v-for="group in groups")
                    inner-item(
                        :group="group"
                        @removeInner="removeInner"
                        
                    )
       
</template>
<style lang="pcss">
    
    .inner__item{
        display: flex;
        justify-content: space-between;
    }
    
</style>
<script>
import innerItem from './innerItem';
export default {
    props: {
        groups: Array,
        percents: Array
    },
    components:{
        innerItem
    },
    methods: {
        removeInner(groupId) {
            this.$emit('removeInner', groupId);
        }
    },
}
</script>