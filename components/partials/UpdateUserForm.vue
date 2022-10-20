<template>
    <Card>
        <h2 class='font-medium leading-tight text-4xl mt-0 mb-4 text-center'>Let's get started!</h2>
        <form @submit.prevent='handleSubmit' class='flex flex-col items-center'>
            <TextInput v-model='username' placeholder='Username' />
            <TextInput v-model='bio' placeholder='Bio (optional)' />
            <Button type='submit' class-name='mt-3 bg-green-600 self-center'>Confirm</Button>
        </form>
    </Card>
</template>
<script setup>

import Card from '@/components/Card';
import TextInput from '@/components/inputs/TextInput';
import Button from '@/components/ui/Button';

const username = ref('');
const bio = ref('');
const avatarUrl = ref('');

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const handleSubmit = async () => {
    try {
        const body = {
            id: user.value.id,
            username: username.value,
            bio: bio.value,
        };
        await supabase.from('profiles').upsert(body, { returning: 'minimal' });
    } catch (e) {
        console.log(e.message);
    }
};
</script>
