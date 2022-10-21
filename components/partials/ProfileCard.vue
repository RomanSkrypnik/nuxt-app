<template>
    <Card>
        <h1 class='font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600'>Profile</h1>
        <div class='flex'>
            <AvatarUpload :src='src' @change='handleChange' />
            <h2 class='font-medium leading-tight text-2xl mt-0 mb-2 ml-2'>Username: {{ profile.username }}</h2>
        </div>
    </Card>
</template>

<script setup lang='ts'>
import Card from '@/components/Card.vue';
import AvatarUpload from '@/components/inputs/AvatarUpload.vue';
import { useCurrentProfileStore, useGetPublicUrl } from '@/composables';
import { FileHelper } from '@/helpers';
import { storeToRefs } from 'pinia';

const store = useCurrentProfileStore();
const { profile } = storeToRefs(store);

const src = useGetPublicUrl(profile?.avatar_url);

const supabase = useSupabaseClient();
const currUser = useSupabaseUser();

const uploadAvatar = async (name: string, file: File) => {
    return await supabase.storage
        .from('avatars')
        .upload(name, file, { cacheControl: '3600', upsert: false });
};

const updateAvatar = async (name: string) => {
    return supabase
        .from('profiles')
        .update({ avatar_url: name })
        .eq('id', currUser.value?.id);
};

const handleChange = async (file: File) => {
    const name = FileHelper.encrypt(file.name, file);
    await uploadAvatar(name, file);
    await updateAvatar(name);
};
</script>
