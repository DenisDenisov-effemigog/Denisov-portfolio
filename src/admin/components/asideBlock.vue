<template lang="pug">
    aside.sidebar
          .container.sidebar__container
              nav.sidebar__nav
               ul.nav__list
                 li.nav__item
                   router-link(
                     to="/"
                     tag="button").nav__link Обо мне
                 li.nav__item
                   router-link(
                     to="/work"
                     tag="button").nav__link Работы
                 li.nav__item
                   router-link(
                     to="/rev"
                     tag="button").nav__link Отзывы    
        
</template>
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
</style>