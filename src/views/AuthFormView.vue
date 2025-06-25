<template>
    <h2 class="title">
        {{ isSignUp ? 'Регистрация' : 'Вход' }}
    </h2>
    <form class="form" id="form" action="#">
        <div class="input-wrapper">
            <BaseInput
                tag="input"
                v-show="isSignUp"
                class="auth-input"
                tupe="text"
                name="name"
                id="formname"
                placeholder="Имя"
    />
            <BaseInput
                tag="input"
                class="auth-input"
                tupe="text"
                 name="login"
                id="formlogin"
                placeholder="Эл. почта"
    />
            <BaseInput
                tag="input"
                :class="[{ error: errorFields?.password}]"
                class="auth-input"
                tupe="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
    />
        </div>

        <BaseButton type="secondary" :fullWidth="true" class="button-enter">
            {{ isSignUp ? 'Зарегистрироваться': 'Войти' }}
        </BaseButton>
        <div v-show="!isSignUp" class="form-group">
            <p>Нужно зарегистрироваться?</p>
            <RouterLink to="/sign-up">Регистрируйтесь здесь</RouterLink>
        </div>
        <div v-show="isSignUp" class="form-group">
            <p>Уже есть аккаунт?<RouterLink to="/sign-in">Войдите здесь</RouterLink></p>
        </div>

    </form>
    
   
</template>

<script setup>
// import 
const props = defineProps({
    isSignUp: Boolean,
})
</script>
