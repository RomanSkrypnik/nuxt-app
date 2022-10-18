<template>
    <div class='flex justify-center h-screen items-center'>
        <NuxtPage/>
    </div>
</template>

<script setup>

const user = useSupabaseUser();
</script>
