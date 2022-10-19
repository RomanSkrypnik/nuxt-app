<template>
    <Card>
        <div class='flex items-center'>
            <h2 class='font-medium leading-tight text-1xl mt-0 mb-2'>{{ user?.email }}</h2>
        </div>
    </Card>
</template>

<script setup lang='ts'>
import Card from '../components/Card';
import img from '@/assets/images/avatar.png';

definePageMeta({ middleware: 'auth', layout: 'authorized' });

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const { data } = await supabase
    .from('profiles')
    .select('username, avatar_url')
    .eq('id', user.value?.id)
    .single();
</script>
