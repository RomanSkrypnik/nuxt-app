<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup lang='ts'>
import { useAuthState } from '@/composables';
useAuthState();
</script>
