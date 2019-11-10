<template lang="pug">
     div
      headerBlock
      asideBlock
      div.hero_desc
          router-view
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  components: {
    headerBlock: () => import("./components/headerBlock"),
    asideBlock: () => import("./components/asideBlock")
  }
};
</script>