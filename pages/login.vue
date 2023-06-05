<template>
    <div>
        <form @submit.prevent="loginUser()">
        <div class="d-flex flex-column ">
    
            <input class="mx-auto my-2 w-50" v-model="state.email" type="email" placeholder="Email" required/>
            <input class="mx-auto my-2 w-50" v-model="state.password" type="password" placeholder="Password" required/>
            <button class="mx-auto my-2 w-50" type="submit">Login</button>
        </div>
        </form>
    </div>
</template>

<script setup>
 import { reactive, ref } from 'vue';
 import { login } from '../api/auth.js';
 import { useRouter } from 'vue-router';
 import axios from 'axios';
 const router = useRouter();
 const state = reactive({
     email: '',
     password: '',
 });
 async function loginUser(){
     try{
         const loginData = {
             email:state.email,
             password:state.password
         }
         const response = await login(axios, loginData);
         if (response.status !== 200) {
             throw new Error('Credenziali non valide');
         } else {
             const { token, user } = response.data;
             localStorage.setItem('token', token);
             router.push('/');  
         }
     } catch (error) {
        console.log(4);
         console.log(error.message);
         // Gestione degli errori
         if (error.response && error.response.status === 401) {
             console.log('Credenziali non valide');
         } else {
             console.log('Errore nella richiesta di login');
         }
     }
 }

</script>

<style lang="scss" scoped>

</style>