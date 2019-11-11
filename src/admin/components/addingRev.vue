<template lang="pug">
    table
        tr
            td
                .user_pic
                    img.user_img
            td
                .user_info
                    .user_info__full_name
                        .user_info__first_name
                        .user_info__last_name
                    .user_info__title
                        .user_profession
        tr
            td  
                p.user_desc
        tr
            td.user__desc_control
                .control__edit Править
                .control__del Удалить 
</template>
<style lang="postcss" scoped>
.user__desc_control{
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