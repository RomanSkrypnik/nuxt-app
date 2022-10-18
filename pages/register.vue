<template>
    <Card>
        <form @submit.prevent='handleRegister'>
            <h2 class='font-medium leading-tight text-4xl mt-0 mb-4 text-center'>Register</h2>
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
                <Button type='submit'>
                    Sign Up
                </Button>
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
