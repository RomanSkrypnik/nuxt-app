<template>
    <Card>
        <div>
            <AvatarUpload :src='src' @change='updateAvatar' />
            <h2 class='font-medium leading-tight text-2xl mt-0 mb-2 ml-2 mb-2'>Welcome back {{ profile.username }}
                !</h2>
            <Button @click='uploadImage' class-name='bg-green-600'>Upload Image</Button>
        </div>
        <div class='flex'>
            <img v-for='img in images' :src='img.src' alt=''>
        </div>
    </Card>
</template>

<script setup lang='ts'>
import Card from '@/components/Card.vue';
import AvatarUpload from '@/components/inputs/AvatarUpload.vue';
import Button from '@/components/ui/Button.vue';
import { useCurrentProfileStore, useGetPublicUrl, useImageStore } from '@/composables';
import { storeToRefs } from 'pinia';

const user = useSupabaseUser();

const currentProfileStore = useCurrentProfileStore();
const { updateAvatar } = currentProfileStore;
const { profile } = storeToRefs(currentProfileStore);

const imageStore = useImageStore();
const { uploadImage } = imageStore;
const { images, image } = storeToRefs(imageStore);

if (user.value) imageStore.fetchImages(user.value?.id);

const src = useGetPublicUrl(profile.value?.avatarUrl);
</script>
