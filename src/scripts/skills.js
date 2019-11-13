
import Vue from 'vue';
import axios from "axios";


const skill = {
  template: "#skill",
  props: ["skillName", "skillPercent"],
  mounted() {
      const circle = this.$refs["color-circle"];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      const percent = (dashArray / 100) * (100 - this.skillPercent);
      circle.style.strokeDashoffset = percent;
      
  },
};


const skillsRow = {
  template: "#skills-row",
  components:{ skill },
  props: ["skill"]

};

new Vue({
  el:"#skills-component",
  template: "#sl",
  data: () => ({
    skills: []
  }),
  components: { skillsRow },
  async  created() {   
      let userId = 203;
      const responseSkill = await axios.get('/https://webdev-api.loftschool.com/categories/' + userId);
      
      
      const categories = responseSkill.data;
      this.skills = categories;
    }
})