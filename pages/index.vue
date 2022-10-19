<template>
    <Card>
        <div class='flex flex-col items-center'>
            <h2 class='font-medium leading-tight text-1xl mt-0 mb-2'>Welcome {{ user?.email }} !</h2>
            <Button class-name='mt-2' @click='signOut'>Sign out</Button>
        </div>
    </Card>
</template>

<script setup>
import Card from '../components/Card';
import Button from '../components/Button';

definePageMeta({
    middleware: 'auth',
});

const supabase = useSupabaseClient();
const user = useSupabaseUser();

async function signOut() {
    try {
        await supabase.auth.signOut();
    } catch (error) {
        alert(error.message);
    }
}
</script>
