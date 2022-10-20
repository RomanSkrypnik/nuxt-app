import { useMutation } from 'vue-query';

interface Params {
    name: string;
}

export function useUpdateAvatar() {
    const supabase = useSupabaseClient();
    const currUser = useSupabaseUser();

    const updateAvatar = async ({ name }: Params) => {
        return await supabase
            .from('profiles')
            .update({ avatar_url: name })
            .eq('id', currUser.value?.id);
    };

    return useMutation(updateAvatar);
}
