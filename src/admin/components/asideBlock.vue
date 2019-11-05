<template lang="pug">
    aside.sidebar
          .container.sidebar__container
              nav.sidebar__nav
               ul.nav__list
                 li.nav__item(
                    exact-active-class="active"
                    v-for="tab in tabs")
                   router-link(
                     :data-text="tab.title"
                     :to="tab.href"
                   ).nav__link
</template>
<script>
export default {
  data(){
    return{
      tabs: [
        {title: "Обо мне", href: "./"},
        {title: "Работы", href: "./work"},
        {title: "Отзывы", href: "./rev"},
      ]
    }
  }
}
</script>
<style lang="postcss" scoped>
.sidebar{
      background-color: #fff;
    }

    .nav__list{
        display: flex;
      }
    .nav__item{
        padding: 15px 30px;
        border-bottom: 2px solid transparent;
    
        &:hover{
          border-bottom: 2px solid #383bcf;
          color: #383bcf
        }
      }
      .active{
        border-bottom: 2px solid #383bcf;
        color: #383bcf
      }
      .nav__link::before{
        content: attr(data-text);
      }
</style>