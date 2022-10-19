<template>
    <Card>
        <form @submit.prevent='() => (isLogin ? handleLogin() : handleRegister())'>
            <h2 class='font-medium leading-tight text-4xl mt-0 mb-4 text-center'>
                {{ isLogin ? 'Login' : 'Register' }}
            </h2>
            <TextInput
                class-name='mb-4'
                type='email'
                placeholder='Your email'
                v-model='email'
            />
            <TextInput
                class-name='mb-4'
                type='password'
                placeholder='Your password'
                v-model='password'
            />
            <div class='flex items-center flex-col'>
                <Button type='submit'>Sign In</Button>
                <button
                    type='button'
                    @click='toggleIsLogin'
                    class='font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2'>
                    Click here to {{ isLogin ? 'register' : 'login' }}
                </button>
            </div>
        </form>
    </Card>
</template>

<script setup lang='ts'>
import Card from '../components/Card';
import TextInput from '../components/inputs/TextInput.vue';
import Button from '../components/Button';

import { FetchError } from 'ohmyfetch';

definePageMeta({ middleware: 'not-authorized' });

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const email = ref('');
const password = ref('');
const isLogin = ref(true);

const toggleIsLogin = () => {
    isLogin.value = !isLogin.value;
};

const handleLogin = async () => {
    try {
        await supabase.auth.signIn({ email: email.value, password: password.value });
    } catch (error) {
        if (error instanceof FetchError) {
            alert(error.message);
        }
    }
};

const handleRegister = async () => {
    try {
        await supabase.auth.signUp({ email: email.value, password: password.value });
        toggleIsLogin();
        alert('Check your email for the login link!');
    } catch (error) {
        if (error instanceof FetchError) {
            alert(error.message);
        }
    }
};

</script>
