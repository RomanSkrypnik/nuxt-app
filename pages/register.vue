<template>
    <form class='row flex-center flex' @submit.prevent='handleRegister'>
        <div class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
            <div class='mb-4'>
                <label class='block text-grey-darker text-sm font-bold mb-2' for='username'>
                    Username
                </label>
                <input class='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
                       id='username'
                       type='email'
                       placeholder='Your email'
                       v-model='email'
                >
            </div>
            <div class='mb-4'>
                <label class='block text-grey-darker text-sm font-bold mb-2' for='username'>
                    Username
                </label>
                <input class='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
                       id='password'
                       type='email'
                       placeholder='Your email'
                       v-model='password'
                >
            </div>
            <div class='flex items-center justify-between'>
                <button class='bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded'>
                    Sign In
                </button>
            </div>
        </div>
    </form>
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
