<template>
    <Card>
        <h2>Welcome {{ data.username }} !</h2>
        <h2>{{ data.website }}</h2>
    </Card>
</template>

<script setup>
import Card from '../components/Card';

definePageMeta({
    middleware: 'auth',
});

const supabase = useSupabaseClient();

const user = useSupabaseUser();

let { data } = await supabase
    .from('profiles')
    .select(`username, website, avatar_url`)
    .eq('id', user.value.id)
    .single();

async function signOut() {
    try {
        await supabase.auth.signOut();
    } catch (error) {
        alert(error.message);
    }
}
</script>
