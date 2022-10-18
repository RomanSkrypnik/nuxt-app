<template>
    <div class='h-screen flex content-center justify-center'>
        <Account v-if="user" />
        <Auth v-else />
    </div>
</template>

<script setup>

const user = useSupabaseUser()
</script>
