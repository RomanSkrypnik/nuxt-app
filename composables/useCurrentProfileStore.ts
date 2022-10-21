import { defineStore } from 'pinia';
import { ProfileDto } from '@/types';

export const useCurrentProfileStore = defineStore('profile', () => {
    const profile = ref<null | ProfileDto>(null);
    const loading = ref(false);

    const client = useSupabaseClient();
    const user = useSupabaseUser();

    async function fetchProfile() {
        try {
            setLoading(true);
            const { data } = await client
                .from('profiles')
                .select('username, avatar_url')
                .eq('id', user.value?.id)
                .single();
            profile.value = data;
        } catch (e) {
            throw e;
        } finally {
            setLoading(false);
        }
    }

    function setLoading(value: boolean) {
        loading.value = value;
    }

    return { profile, loading, fetchProfile };
});
