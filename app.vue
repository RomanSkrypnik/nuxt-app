<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
import { useQueryProvider } from 'vue-query';
import { useAuthState } from './hooks';

useQueryProvider();
useAuthState();
</script>
