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
            return setTimeout(() => navigateTo('/auth'), 100);
        case 'SIGNED_IN':
            setTimeout(() => navigateTo('/'), 100);
    }
});
</script>
