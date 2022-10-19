<template>
    <Card v-if='data?.value'>
        <div class='flex items-center'>
            <!--            <h2 class='font-medium leading-tight text-1xl mt-0 mb-2'>{{ user?.email }}</h2>-->
        </div>
    </Card>
    <Card v-else>
        <UpdateUserForm />
    </Card>
</template>

<script setup lang='ts'>
import Card from '../components/Card';
import UpdateUserForm from '../components/UpdateUserForm';

import { useFetchCurrentUser } from '../hooks';

definePageMeta({ middleware: 'auth', layout: 'authorized' });

// const user = useSupabaseUser();
const { data, isLoading } = useFetchCurrentUser();

onMounted(() => {
    watchEffect(() => {
        console.log(data.value?.username);
    });
});

</script>
