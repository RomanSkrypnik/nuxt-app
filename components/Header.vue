<template>
    <header class='flex items-center justify-between flex-wrap bg-teal p-6 shadow-md'>
        <div class='flex items-center flex-no-shrink mr-6'>
            <Logo />
            <span class='font-semibold text-xl'>Tailwind CSS</span>
        </div>
        <Avatar :items='items' />
    </header>
</template>

<script setup lang='ts'>
import Logo from '@/components/ui/Logo.vue';
import Avatar from '@/components/ui/Avatar.vue';

const supabase = useSupabaseClient();

const items = [
    {
        label: 'Log out',
        click: signOut,
    },
];

async function signOut() {
    try {
        await supabase.auth.signOut();
    } catch (error) {
        throw error;
    }
}
</script>
