<template>
    <Card>
        <h1 class='font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600'>Profile</h1>
        <div class='flex'>
            <AvatarUpload />
            <h2 class='font-medium leading-tight text-2xl mt-0 mb-2'>Welcome back {{ data.username }} !</h2>
        </div>
    </Card>
</template>

<script setup lang='ts'>
import Card from '@/components/Card.vue';
import AvatarUpload from '@/components/inputs/AvatarUpload.vue';
import ProfileDto from '@/types/profile';
import { useGetFetchQuery } from '@/hooks';
import { ref } from '@vue/reactivity';

let user = ref(null);

const data = useGetFetchQuery('user');

if (data?.data) {
    user = data.data;
}
</script>
