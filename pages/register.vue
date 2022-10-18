<template>
    <Card>
        <form @submit.prevent='handleRegister'>
            <h2 class='font-medium leading-tight text-4xl mt-0 mb-4 text-center'>Register</h2>
            <div class='mb-4'>
                <input class='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
                       id='username'
                       type='email'
                       placeholder='Your email'
                       v-model='email'
                >
            </div>
            <div class='mb-4'>
                <input class='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
                       id='password'
                       type='email'
                       placeholder='Your email'
                       v-model='password'
                >
            </div>
            <div class='flex items-center justify-center'>
                <button class='bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded'>
                    Sign Up
                </button>
            </div>
        </form>
    </Card>
</template>

<script setup>
const supabase = useSupabaseClient();

const loading = ref(false);
const email = ref('');
const password = ref('');
const handleRegister = async () => {
    try {
        loading.value = true;
        const { error } = await supabase.auth.signUp({ email: email.value });
        if (error) throw error;
        alert('Check your email for the login link!');
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        loading.value = false;
    }
};
</script>
