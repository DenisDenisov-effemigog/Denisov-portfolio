export default {
    namespaced: true,
    state: {
        works: []
    },
    mutations: {

    },
    actions: {
        async dd(store, work) {
            console.log(work);
            
           await this.$axios.post("/works", {work})
            
            
        }
    }   
}