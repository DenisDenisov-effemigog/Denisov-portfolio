<template lang="pug">
     table
        tr
            td.jobs_right__pic
        tr   
            td.jobs_right__item(v-for="td in 3" :key="td.id") 
                .jobs_right__text Html
        tr
            td.jobs_right__title Новая работа
        tr 
            td.jobs_right__work_desc Описание этой работы
        tr 
            td.jobs_right__link http://google.com
        tr
            td.right__desc_control
                .control__edit Править
                .control__del Удалить
</template>
<style lang="postcss" scoped>
.jobs_right__pic{
    background: url(../../images/content/1.jpg) center center/cover no-repeat;
    width: 250px;
    height: 150px;
  }
  .jobs_right__text{
    padding: 5px 15px;
    background-color: #fff;
    border-radius: 50px;
    color: #414c63;
  }
  .jobs_right__item{
    padding: 5px;
  }
  .jobs_right__title{
    font-size: 18px;
    font-weight: bold;
    color: #414c63;
  }
  .jobs_right__desc{
    padding: 15px;
  }
  .jobs_right__work_desc{
    font-size: 18px;
    font-weight: bold;
    color:rgba(#414c63, 0.5);
    padding-top: 10px;
  }
  .jobs_right__link{
    font-size: 18px;
    font-weight: bold;
    color:#4a00ed;
    padding-top: 10px;
  }
  .right__desc_control{
    padding-top: 10px;
    display: flex;
    justify-content: space-around;
  }
  .control__edit{
    background: svg-load("pencil.svg", fill="#4a00ed", width="12px", height="12px") right  center no-repeat;
    width: 80px;
  }
  .control__del{
    background: svg-load("remove.svg", fill="red", width="12px", height="12px") right  center no-repeat;
    width: 80px;
  }
</style>