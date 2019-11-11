export default {
    namespaced: true,
    state: {
        reviews: []
    },
    mutations: {
    },
    actions: {
        async addReview(store, review) {
            const formData = new FormData();
      
            Object.keys(review).forEach(key => {
              formData.append(key, review[key]);
            })
      
            try {
            await this.$axios.post("/reviews", formData); 
              
            } catch (error) {
              
            }
            
          }
    }
       
}