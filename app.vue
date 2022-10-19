<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
import { useQueryProvider } from 'vue-query';
import { useAuthState } from './hooks';

if(process.client) import('tw-elements');


useQueryProvider();
useAuthState();
</script>
