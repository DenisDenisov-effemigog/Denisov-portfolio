<template lang="pug">
    div.block
      inner-group-name-input(
        @addTitle="addTitle"
      )
      inner-list(
        :groups="groups"
        @removeInner="removeInner"
      )
      inner-input(
            @addInner="addInner",
            @addInnerPercent="addInnerPercent"
        )     
        
</template>
<script>
  
  import {Validator} from 'simple-vue-validator';
  import innerList from "./innerList"
  import innerInput from "./innerInput"
  import innerGroupNameInput from "./innerGroupNameInput"

  export default {
     
    data() {
      return {
        groupTitles: [],
        groups: [],
        percents: []
      }
    },
   
    components: {
      innerList,  innerInput, innerGroupNameInput
    },
    
    methods: {
        addTitle(groupTitel) {
          this.groupTitles.push(groupTitel)
        },
        addInner(group){
            this.groups.push(group)
        },
        addInnerPercent(percent){
            this.percents.push(percent)
        },
        removeInner(groupId) {
          this.groups = this.groups.filter(item => item.id !== groupId);
        }
    },
  }
</script>  
<style lang="pcss">
  .block{
    background-color: #fff;
  }
  
</style>