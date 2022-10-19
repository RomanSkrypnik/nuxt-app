<template>
    <Card>
        <div class='flex flex-col items-center'>
            <h2 class='font-medium leading-tight text-1xl mt-0 mb-2'>Welcome {{ user?.email }} !</h2>
        </div>
    </Card>
</template>

<script setup lang='ts'>
import Card from '../components/Card';

definePageMeta({ middleware: 'auth', layout: 'authorized' });

const user = useSupabaseUser();
</script>
