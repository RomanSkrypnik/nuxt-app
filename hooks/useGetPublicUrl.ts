import { computed } from '@vue/reactivity';

export function useGetPublicUrl(name?: string | null) {
    const supabase = useSupabaseClient();
    return computed(() => {
        if (name) {
            const { data } = supabase.storage.from('avatars').getPublicUrl(name);
            return data?.publicURL;
        }
    });
}
