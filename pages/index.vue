<template>
    <div>
        <div v-if='!loading'>
            <ProfileCard v-if='profile.username' />
            <UpdateUserForm v-else />
        </div>
    </div>
</template>

<script setup lang='ts'>
import ProfileCard from '@/components/partials/ProfileCard.vue';
import UpdateUserForm from '@/components/partials/UpdateUserForm.vue';
import { useCurrentProfileStore } from '@/composables';
import { storeToRefs } from 'pinia';

definePageMeta({ middleware: 'auth', layout: 'authorized' });

const store = useCurrentProfileStore();
const { profile, loading } = storeToRefs(store);
store.fetchProfile();

</script>
