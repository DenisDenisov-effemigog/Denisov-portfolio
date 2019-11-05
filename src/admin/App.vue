<template lang="pug">
     div
      headerBlock
      asideBlock
      div.hero_desc
          router-view
</template>
<script>
import headerBlock from "./components/headerBlock";
import asideBlock from "./components/asideBlock";

  export default {
   
    components: {
      headerBlock, asideBlock
    },
    
  }


</script>