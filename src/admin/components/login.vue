<template lang="pug">
    .bg
        .block__login
            .login
               .login_close__btn x 
               h1.login__title Авторизация
               .form
                    form(@submit.prevent="login").login__form
                        label.login_form__label
                            h3.login_form__title Логин
                            input(v-model="user.name" type="text" ).login_form__input.login_form__input_login
                        label.login_form__label
                            h3.login_form__title Пароль
                            input(v-model="user.password" type="password" ).login_form__input.login_form__input_pass
                        button(type="submit" ).button__form Отправить

</template>
<script>
import $axios from '../requests';

export default {
  data: () => ({
    user: {
      name: "",
      password: ""
    }

  }),
  methods: {
    async login() {
      try {
          const {data: {token}} = await $axios.post('/login', this.user);
          
          localStorage.setItem("token", token);
          $axios.defaults.headers["Authorization"] = 'Bearer ${token}';

          this.$router.replace("/");

      } catch (error) {
                    alert(error.message);
        
      }
    }
  },
}
</script>
<style lang="postcss" scoped>
.bg {
  background: url(../../images/content/MB.jpg) center center/cover no-repeat;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.block__login {
  background-color: rgba(#38495b, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  background-color: #fff;
  width: 45%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login_close__btn {
  align-self: flex-end;
  padding: 15px;
  font-size: 20px;
  cursor: pointer;
}
.login__title {
  color: #38495b;
}
.form {
  padding-top: 40px;
  width: 100%;
}
.login__form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login_form__label {
  width: 80%;
  padding-top: 60px;
  padding-bottom: 30px;

  &:first-child {
    padding-bottom: 0px;
    padding-top: 0;
  }
}
.login_form__input {
  border: none;
  border-bottom: 1px solid #000;
  width: 90%;
  padding: 15px 0 15px 30px;
}
.login_form__title {
  color: rgba(#38495b, 0.6);
}
.login_form__input_pass {
  background: svg-load(
      "key.svg",
      fill= "rgba(#38495b, 0.6)",
      width= "30px",
      height= "30px"
    )
    left center no-repeat;
}
.login_form__input_login {
  background: svg-load(
      "user.svg",
      fill= "rgba(#38495b, 0.6)",
      width= "30px",
      height= "30px"
    )
    left center no-repeat;
}
.button__form {
  width: 300px;
  padding: 20px 0;
  background: #5166bf;
  color: #fff;
  border-radius: 38px 0;
  font-weight: 800;
  text-transform: uppercase;
  outline: none;
}
</style>