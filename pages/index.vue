<template>
    <div>
        <div v-if='!isLoading'>
            <ProfileCard v-if='data' />
            <UpdateUserForm v-else />
        </div>
    </div>
</template>

<script setup lang='ts'>
import UpdateUserForm from '../components/partials/UpdateUserForm.vue';

import { useFetchCurrentUser } from '../hooks';
import ProfileCard from '../components/partials/ProfileCard.vue';

definePageMeta({ middleware: 'auth', layout: 'authorized' });

const { data, isLoading } = useFetchCurrentUser();
</script>
