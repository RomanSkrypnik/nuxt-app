<template>
    <form class='form-widget' @submit.prevent='updateProfile'>
        <div>
            <label for='email'>Email</label>
            <input id='email' type='text' :value='user.email' disabled />
        </div>
        <div>
            <label for='username'>Username</label>
            <input id='username' type='text' v-model='username' />
        </div>
        <div>
            <label for='website'>Website</label>
            <input id='website' type='website' v-model='website' />
        </div>

        <div>
            <input
                type='submit'
                class='button primary block'
            />
        </div>

        <div>
            <button class='button block' @click='signOut'>
                Sign Out
            </button>
        </div>
    </form>
</template>

<script setup>
definePageMeta({
    middleware: 'auth',
});

const supabase = useSupabaseClient();

const username = ref('');
const website = ref('');
const avatar_path = ref('');


const user = useSupabaseUser();

let { data } = await supabase
    .from('profiles')
    .select(`username, website, avatar_url`)
    .eq('id', user.value.id)
    .single();
if (data) {
    username.value = data.username;
    website.value = data.website;
    avatar_path.value = data.avatar_url;
}

async function updateProfile() {
    try {
        const user = useSupabaseUser();
        const updates = {
            id: user.value.id,
            username: username.value,
            website: website.value,
            avatar_url: avatar_path.value,
            updated_at: new Date(),
        };
        let { error } = await supabase.from('profiles').upsert(updates, {
            returning: 'minimal', // Don't return the value after inserting
        });
        if (error) throw error;
    } catch (error) {
        alert(error.message);
    }
}

async function signOut() {
    try {
        let { error } = await supabase.auth.signOut();
        if (error) throw error;
    } catch (error) {
        alert(error.message);
    }
}
</script>
