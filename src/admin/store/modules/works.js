export default {
    namespaced: true,
    state: {
        works: []
    },
    mutations: {
        SET_WORK(state, works) {
            state.works = works
        },
        ADD_WORK(state, work) {
            state.works.unshift(work)
        },
        EDIT_WORK(state, editedWork) {
            const editWork = work => {
              work.id = work.id.map(work =>
                work.id === editedWork.id ? editedWork : work
              );
            };
            const findRequiredWork = work => {
                if (work.id === editedWork) {
                  editedWork(work);
                }
        
                return work;
              };
      
            state.works = state.works.map(work =>
              findRequiredWork(work, editedWork, editWork(work))
            );
          },
    },
    actions: {
       async addingWork({commit}, work) {
           const formData = new FormData();

           Object.keys(work).forEach(key => {
            formData.append(key, work[key]);
          })

           try {
                const {data} = await this.$axios.post("/works", formData);
                console.log(data);

                commit("ADD_WORK", data)
           } catch (error) {
               
           }
            
            
        },
        async fetchWork({commit}) {
            try {
                const {data} = await this.$axios.get("/works/203");
                
                commit("SET_WORK", data)
            } catch (error) {
                
            }
        },
        async editWork({commit}, editedWork) {
            try {
                const {data} = await this.$axios.post(`/works/${editedWork.id}`, editedWork);
                commit("EDIT_WORK", work.id, {root:true} )
            } catch (error) {
                
            }
        },
        async removeWork({commit}, deletedWork){
            try {
                const {data} = await this.$axios.delete(`/works/${deletedWork.id}`);
                console.log(data);
                
            } catch (error) {
                
            }
        }
    }
       
}