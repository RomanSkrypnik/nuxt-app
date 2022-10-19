<template>
    <h2 class='font-medium leading-tight text-4xl mt-0 mb-4 text-center'>Let's get started!</h2>
    <form @submit.prevent='handleSubmit' class='flex flex-col items-center'>
        <TextInput v-model='username' placeholder='Username' class-name='mb-3' />
        <FileUpload placeholder='Upload avatar' />
        <Button type='submit' class-name='mt-2 bg-green-600 self-center'>Confirm</Button>
    </form>
</template>
<script setup>
import TextInput from './inputs/TextInput';
import FileUpload from './inputs/FileUpload';
import Button from './Button';

const username = ref('');
const avatarUrl = ref('');

const handleSubmit = () => {

};
</script>
