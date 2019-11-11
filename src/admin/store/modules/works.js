export default {
    namespaced: true,
    state: {
        works: []
    },
    mutations: {
        SET_WORK(state, works) {
            state.works = works
        }
    },
    actions: {
       async addingWork(store, work) {
           const formData = new FormData();

           Object.keys(work).forEach(key => {
            formData.append(key, work[key]);
          })

           try {
        await this.$axios.post("/works", formData)
           } catch (error) {
               
           }
            
            
        },
        async fetchWork({commit}) {
            try {
                const {data} = await this.$axios.get("/works/203");
                commit("SET_WORK", data)
            } catch (error) {
                
            }
        }
    }
       
}