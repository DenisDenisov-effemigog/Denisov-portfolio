<template lang="pug">
    div.hero_desc
        headerBlock
        section.section.first__section  
            asideBlock      
            .container.first__container
            .block__about
                .title.about__title Блок &laquo Обо мне &raquo
                .block_about__form
                    .about_left__block
                        inner
                    .about_right__block
                        inner 
</template>
<style lang="postcss" src="../main.pcss" >

</style>
<script>
    import {Validator} from "simple-vue-validator"; 
    import inner from "./inner";
    import headerBlock from "./headerBlock";
    import asideBlock from "./asideBlock";

    export default {
   
        components: {
        inner, headerBlock, asideBlock
        },
        
    }
</script>