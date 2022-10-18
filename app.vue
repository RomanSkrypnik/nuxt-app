<template>
    <div class='flex justify-center h-screen items-center'>
        <NuxtPage v-if='user' />
        <Auth v-else />
    </div>
</template>
<script setup>
import Auth from './components/Auth';

const user = useSupabaseUser();
</script>
