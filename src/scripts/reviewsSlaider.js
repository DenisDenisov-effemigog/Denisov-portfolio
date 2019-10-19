import Vue from 'vue';
import Flickity from 'vue-flickity';
 
new Vue({
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
        
        // any options from Flickity can be used
      }
    }
  },
  
  methods: {
    next() {
      this.$refs["next"].flickity.next();
    },
    
    previous() {
      this.$refs["prev"].flickity.previous();
    }
  }
});