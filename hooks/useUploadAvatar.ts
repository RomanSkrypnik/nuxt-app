import { useMutation } from 'vue-query';

interface Params {
    name: string;
    file: File;
}

export function useUploadAvatar() {
    const supabase = useSupabaseClient();

    const uploadAvatar = async ({ name, file }: Params) => {
        return await supabase.storage
            .from('avatars')
            .upload(name, file, { cacheControl: '3600', upsert: false });
    };

    return useMutation(uploadAvatar);
}
