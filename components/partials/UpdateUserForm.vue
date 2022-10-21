<template>
    <Card>
        <h2 class='font-medium leading-tight text-4xl mt-0 mb-4 text-center'>Let's get started!</h2>
        <form @submit.prevent='handleSubmit' class='flex flex-col items-center'>
            <TextInput class-name='mb-3' v-model='username' placeholder='Username' />
            <TextInput v-model='bio' placeholder='Bio (optional)' />
            <Button type='submit' class-name='mt-3 bg-green-600 self-center'>Confirm</Button>
        </form>
    </Card>
</template>
<script setup>

import Card from '@/components/Card';
import TextInput from '@/components/inputs/TextInput';
import Button from '@/components/ui/Button';
import { useCurrentProfileStore } from '@/composables';

const username = ref('');
const bio = ref('');
const avatarUrl = ref('');

const { updateProfile } = useCurrentProfileStore();

const handleSubmit = async () => {
    const body = { username: username.value, bio: bio.value };
    updateProfile(body);
};
</script>
