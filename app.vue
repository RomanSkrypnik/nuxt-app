<template>
    <div class='flex justify-center h-screen items-center'>
        <NuxtPage />
    </div>
</template>
<script setup>
const supabase = useSupabaseClient();

supabase.auth.onAuthStateChange((event, session) => {
    switch (event) {
        case 'SIGNED_OUT':
            return navigateTo('/auth');
        case 'SIGNED_IN':
            return navigateTo('/');
    }
});
</script>
