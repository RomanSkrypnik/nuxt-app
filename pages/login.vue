<template>
    <Card>
        <form @submit.prevent='handleLogin'>
            <h2 class='font-medium leading-tight text-4xl mt-0 mb-4 text-center'>Login</h2>
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
                <button class='bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded'>
                    Sign In
                </button>
                <NuxtLink to='/register' class='text-blue-700 mt-3'>Click here to register</NuxtLink>
            </div>
        </form>
    </Card>
</template>

<script setup>
import TextInput from '../components/TextInput';

const supabase = useSupabaseClient();

const loading = ref(false);
const email = ref('');
const password = ref('');

const handleLogin = async () => {
    try {
        loading.value = true;
        const { error } = await supabase.auth.signIn({ email: email.value, password: password.value });
        if (error) throw error;
        alert('Check your email for the login link!');
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        loading.value = false;
    }
};
</script>
