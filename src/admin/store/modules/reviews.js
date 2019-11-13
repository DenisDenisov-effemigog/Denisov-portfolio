export default {
    namespaced: true,
    state: {
        reviews: []
    },
    mutations: {
      SET_REV(state, reviews) {
        state.reviews = reviews
      },
      ADD_REV(state, review) {
        state.reviews.unshift(review);
      }, 
      EDIT_REV(state, editedRev) {
        const editRev = review=> {
          category.id = category.id.map(review =>
            review.id === editedRev.id ? editedRev : review
          );
        };
        const findRequiredRev = review => {
          if (review.id === editedReview) {
            editedReview(review);
          }
  
          return review;
        };
        state.reviews = state.reviews.map(review =>
          findRequiredRev(review, editedRev, editRev(category))
        );
      },
      REMOVE_REV(state, deletedReview) {
        state.reviews = state.reviews.map(review => {
            if(review.id === deletedReview.review){
                review = review.filter(
                    review => review !== deletedReview.id
                )
            }
        })
      }  
    },
    actions: {
        async addReview({commit}, review) {
            const formData = new FormData();
      
            Object.keys(review).forEach(key => {
              formData.append(key, review[key]);
            })
      
            try {
            const {data} = await this.$axios.post("/reviews", formData); 
            commit("ADD_REV", data);
            } catch (error) {
              
            }
            
          },
          async fetchRev({commit}) {
            try {
                const {data} = await this.$axios.get("/reviews/203");
                commit("SET_REV", data)
            } catch (error) {
                
            }
        },
        async editRev({commit}, editedRev){
          try {
            const {data} = await this.$axios.post(`/reviews/${editedRev.id}`, editedRev);
            commit("EDIT_REV",data, {root: true})            
        } catch (error) {
            
        }
        },
        async removeRev({commit}, deletedRev){
          try {
              const {data} = await this.$axios.delete(`/reviews/${deletedRev.id}`);
              commit("REMOVE_REV", review, {root: true})              
          } catch (error) {
              
          }
      }
    }
       
}