<template>
    <Card>
        <h1 class='font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600'>Profile</h1>
        <div class='flex'>
            <AvatarUpload :src='user.avatar_url' @change='handleChange' />
            <h2 class='font-medium leading-tight text-2xl mt-0 mb-2 ml-2'>Username: {{ user.username }}</h2>
        </div>
    </Card>
</template>

<script setup lang='ts'>
import Card from '@/components/Card.vue';
import AvatarUpload from '@/components/inputs/AvatarUpload.vue';
import { ProfileDto } from '@/types/profile';
import { useGetFetchQuery } from '@/hooks';
import { ref } from '@vue/reactivity';
import { PostgrestSingleResponse } from '@supabase/postgrest-js';

let user = ref<null | ProfileDto>(null);

const data = useGetFetchQuery('user') as PostgrestSingleResponse<ProfileDto>;
const supabase = useSupabaseClient();

if (data?.data) user.value = data.data;

const handleChange = async (file: File) => {
    const { data, error } = await supabase
        .storage
        .from('avatars')
        .upload(file.name, file, {
            cacheControl: '3600',
            upsert: false,
        });
    console.log(data);
};
</script>
