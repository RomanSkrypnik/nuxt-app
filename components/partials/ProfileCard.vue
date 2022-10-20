<template>
    <Card>
        <h1 class='font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600'>Profile</h1>
        <div class='flex'>
            <AvatarUpload :src='src' @change='handleChange' />
            <h2 class='font-medium leading-tight text-2xl mt-0 mb-2 ml-2'>Username: {{ user.username }}</h2>
        </div>
    </Card>
</template>

<script setup lang='ts'>
import Card from '@/components/Card.vue';
import AvatarUpload from '@/components/inputs/AvatarUpload.vue';
import { ProfileDto } from '@/types/profile';
import { useGetFetchQuery, useUpdateAvatar, useUploadAvatar } from '@/hooks';
import { computed, ref } from '@vue/reactivity';
import { PostgrestSingleResponse } from '@supabase/postgrest-js';
import { FileHelper } from '@/helpers';

const config = useRuntimeConfig();
const supabase = useSupabaseClient();

const src = computed(() => {
    if (user.value) {
        const { data } = supabase
            .storage
            .from('avatars')
            .getPublicUrl(user.value.avatar_url);
        console.log(data);
        return data?.publicURL;
    }
});

const data = useGetFetchQuery('user') as PostgrestSingleResponse<ProfileDto>;

const user = ref<null | ProfileDto>(data?.data);

const { mutate: uploadAvatar } = useUploadAvatar();
const { mutate: updateAvatar } = useUpdateAvatar();

const handleChange = async (file: File) => {
    const name = FileHelper.encrypt(file.name, file);
    uploadAvatar({ name, file });
    updateAvatar({ name });
};
</script>
