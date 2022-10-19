import { useQuery } from 'vue-query';
import { ProfileDto } from '../types';
import { PostgrestSingleResponse } from '@supabase/postgrest-js';

const select = (data: PostgrestSingleResponse<ProfileDto>) => {
    return data.data;
};

export function useFetchCurrentUser() {
    const supabase = useSupabaseClient();
    const user = useSupabaseUser();

    const fetch = async (): Promise<PostgrestSingleResponse<ProfileDto>> => {
        return await supabase.from('profiles').select('username, avatar_url').eq('id', user.value?.id).single();
    };

    return useQuery(['user'], fetch, { select });
}
