import Vue from 'vue';
import Flickity from 'vue-flickity';
 
new Vue({
  el: "#sliderRev",
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        initialIndex: 2,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
        
        // any options from Flickity can be used
      }
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }
});