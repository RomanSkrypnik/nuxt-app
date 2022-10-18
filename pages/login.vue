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
                <Button type='submit'>Sign In</Button>
                <NuxtLink to='/register' class='text-blue-700 mt-3'>Click here to register</NuxtLink>
            </div>
        </form>
    </Card>
</template>

<script setup>
import Card from '../components/Card';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const supabase = useSupabaseClient();

const email = ref('');
const password = ref('');

const user = useSupabaseUser();

onMounted(() => {
    watchEffect(() => {
       if (user.value) {
            navigateTo('/');
       }
    });
});

const handleLogin = async () => {
    try {
        await supabase.auth.signInWithPassword({ email: email.value, password: password.value });
    } catch (error) {
        alert(error.error_description || error.message);
    }
};

</script>
