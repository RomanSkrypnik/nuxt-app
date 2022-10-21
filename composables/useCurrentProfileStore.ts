import { defineStore } from 'pinia';
import { ProfileDto } from '@/types';
import { FileHelper } from '@/helpers';

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
                .select('*')
                .eq('id', user.value?.id)
                .single();
            profile.value = data;
        } catch (e) {
            throw e;
        } finally {
            setLoading(false);
        }
    }

    async function updateProfile(payload: Partial<ProfileDto>) {
        try {
            const { data } = await client
                .from('profiles')
                .update({ ...payload, id: user.value?.id })
                .single();
            profile.value = data;
        } catch (e) {
            throw e;
        }
    }

    async function updateAvatar(file: File) {
        try {
            const name = FileHelper.encrypt(file.name, file);
            await client.storage.from('avatars').upload(name, file, { cacheControl: '3600', upsert: false });
            await updateProfile({ avatarUrl: name });
        } catch (e) {
            throw e;
        }
    }

    function setLoading(value: boolean) {
        loading.value = value;
    }

    return { profile, loading, fetchProfile, updateAvatar, updateProfile };
});
