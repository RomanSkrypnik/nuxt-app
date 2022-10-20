import { useQueryClient } from 'vue-query';

export function useGetFetchQuery(name: string) {
    const queryClient = useQueryClient();
    return queryClient.getQueryData(name);
}
