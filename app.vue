<template>
    <div class='flex justify-center h-screen items-center'>
        <NuxtPage />
    </div>
</template>
<script setup>
import { navigateTo } from 'nuxt/app';

const supabase = useSupabaseClient();

supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_OUT') {
        navigateTo('/login');
    }
});
</script>
