<template>
    <div class='h-screen flex content-center justify-center'>
        <NuxtPage/>
    </div>
</template>

<script setup>

const user = useSupabaseUser();
</script>
