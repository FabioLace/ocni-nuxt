<template>
    <form @submit.prevent="registerUser()">
        <input v-model="email" type="email" />
        <input v-model="password" type="password" />
        <input v-model="name" type="text" />
        <button type="submit">Register</button>
    </form>
</template>

<script setup>
    import { register } from '../api/auth.js';

    const router = useRouter()

    const state = reactive({
        email: '',
        password: '',
        name: ''
    })

    function registerUser() {
        register(state.email, state.password, state.name)
          .then(({ data }) => {
                router.push({ path: '/' })
            })
          .catch(err => {
                console.log(err)
            })
    }
</script>