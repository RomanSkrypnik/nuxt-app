import { defineStore } from 'pinia';
import { ImageDto } from '@/types';
import { FileHelper } from '@/helpers';

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

    async function uploadImage(file: File) {
        try {
            const name = FileHelper.encrypt(file.name, file);
            await client.storage.from('images').upload(name, file);
            const payload = { name, profileId: user.value?.id };
            const { data } = await client.from('images').upsert(payload).single();
            images.value = [...images.value, data];
        } catch (e) {
            throw e;
        }
    }

    return { images, image, loading, fetchImages, uploadImage };
});
