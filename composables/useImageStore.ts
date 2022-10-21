import { defineStore } from 'pinia';
import { ImageDto } from '@/types';

export const useImageStore = defineStore('image', () => {
    const images = ref<ImageDto[]>([]);
    const image = ref<ImageDto | null>(null);
    const loading = ref(false);

    const user = useSupabaseUser();
    const client = useSupabaseClient();

    async function fetchImages(id?: string) {
        try {
            loading.value = true;
            const { data } = await client.from('images').select('*').eq('profileId', id);
            images.value = data as ImageDto[];
        } catch (e) {
            throw e;
        } finally {
            loading.value = false;
        }
    }

    async function upload

    return { images, image, loading, fetchImages };
});
