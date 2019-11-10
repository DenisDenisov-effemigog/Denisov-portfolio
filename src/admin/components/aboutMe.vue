<template lang="pug">
        section.section.first__section  
            .container.first__container
                .block
                    .block__about
                        h1.title.about__title Блок &laquo Обо мне &raquo
                        button.circle__button
                            svg(viewBox="0 0 100 100").about_form-shape
                                circle(cx="50" cy="50" r="40" ref="color-circle" fill="url(#gradient)").about_form__circle
                                linearGradient(id="gradient" x1="0%" y1="0%" x2="100%" y2="0")
                                    stop(offset="0%" stop-color="rgb(63, 53, 203)")
                                    stop(offset="100%" stop-color="rgb(0, 106, 237)")
                            .about_form-text +
                        .about__add-new Добавить группу
                    form(@submit.prevent="addNewCategory")
                        input(type="text" v-model="title" placeholder="Имя категории")    
                        input(type="submit" placeholder="Добавить")  
                .block__content
                    ul.skill-list
                        li.skill-list__item(v-for="category in categories" :key="category.id")
                            skillGroup(
                                :category="category"
                            )
</template>

<script>
    import {mapActions, mapState} from "vuex";
   

    export default {
        
        components: {
            skillGroup: () =>  import('./skill-group')
        },
        data: () => ({
           
                title: ""
            
        }),
        created(){
            this.fetchCategories();
        },
        computed: {
            ...mapState("categories", {
                categories: state => state.categories
            })
        },
        methods: {
            ...mapActions("categories", ["addCategory", "fetchCategories"]),
            async addNewCategory() {
                try{
                await this.addCategory(this.title)

                }catch (error) {
                    alert(error.message);
                }
            }
        },
        
    }
</script>
<style lang="postcss" scoped>
.block__about{
    display: flex;
    padding: 25px;
    padding-top: 25px;;

}
.about__add-new{
    align-self: center;
    padding-left: 25px;
}

</style>