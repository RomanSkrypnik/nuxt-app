<template>
    <form @submit.prevent='handleSubmit'>
        <TextInput
            v-model='username'
            placeholder='Username'
            class-name='mb-2'
        />
        <FileUpload
            placeholder='Upload avatar'
        />
    </form>
</template>
<script setup>
import TextInput from './inputs/TextInput';
import FileUpload from './inputs/FileUpload';

const username = ref('');
const avatarUrl = ref('');

const handleSubmit = () => {

};
</script>
